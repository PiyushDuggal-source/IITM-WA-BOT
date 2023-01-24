import * as WAWebJS from "whatsapp-web.js";
import {
  Client,
  GroupNotification,
  LocalAuth,
  MessageMedia,
} from "whatsapp-web.js";
import qrcode = require("qrcode-terminal");
import { checkMessage } from "./actions/messageActions";
import { main } from "./controllers/main";
import { introduction, sendCommands } from "./actions/introduction";
import {
  GREETINGS,
  HEY_EMOJIES,
  USER_JOIN_GREETINGS,
} from "./utils/reply/replies";
import { random } from "./actions/sendMessage";
const express = require("express");
import { Request, Response } from "express";
import { COMMANDS_CMDS } from "./utils/Commands/instructions";
import { sendClassNotification } from "./actions/sendClassNotification";
import { grpLeaveStickers } from "./assets/assets";
import { MessageType, WA_Grp, LogType } from "./types/types";
import { UserModel } from "./services/models";
// import axios from "axios";
// import { endOfToday } from "date-fns";
import { sendAndDeleteMsg } from "./actions/sendAndDeleteMsg";
import { pingEveryone } from "./actions/pingEveryone";
import { connectToDb } from "./utils/db/connect";
import * as dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
dotenv.config();

import logger from "./utils/logger/index";

// Initialized App
const app = express();

// For Development Enviornment
const LOCAL = String(process.env.dev) === "true";
export const BOT = LOCAL ? 1 : 0;
export const WA_BOT_ID = LOCAL
  ? (process.env.WA_BOT_ID_DEV as string)
  : (process.env.WA_BOT_ID as string);

const DB_URL = LOCAL
  ? (process.env.DEV_DB_URL as string)
  : (process.env.PROD_DB_URL as string);

// Connecting to DB
(async () => {
  await connectToDb(DB_URL);
})();

// Initializing Client
const client = new Client({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  authStrategy: new LocalAuth({
    dataPath: `${__dirname}/sessions`,
  }),
});

// For QR Code
client.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
  console.log(qr);
  logger.info("QR generated", { label: "INFO" });
});

// Event "READY"
client.on("ready", async () => {
  logger.info("Client Connected", { label: "CONNECTED" });
  client.sendMessage(
    process.env.WA_BOT_ID_DEV as string,
    `${process.env.BOT_NAME as string}: I am Connected BOSS`
  );
});

// Event "MESSAGE_CREATE"
client.on("message_create", async (message: WAWebJS.Message) => {
  // Check if message is from Group or Not, if yes, who contains whoean or userID
  // #TODO: Detailed logging
  const messageId = uuidv4();
  const botWAId = "919871453667@c.us";

  logger.info(`New message  `, { label: messageId });
logger.info(`WA_CHAT_ID:  ${message.from}`, { label: messageId });

  const who: MessageType = checkMessage(message);
  // Mention Logic
  const str: string[] = message.mentionedIds;
  const isMention =
    (message.body[0] === "@" && str.includes(botWAId)) ||
    message.body
      .toLowerCase()
      .split(" ")
      .includes(`@${(process.env.BOT_NAME as String).toLocaleLowerCase()}`);
  if (isMention && who !== "NONE" && message.body.split(" ").length === 1) {
    logger.info(`Mentioned bot ${botWAId}`, { label: messageId });
    logger.info(`Message content empty, intro-ing`, { label: messageId });
    introduction(client, who, message);
  }

  let allChats = await client.getChats();
  const WA_BOT: WA_Grp = allChats[BOT];

  // Command check logic
  if (
    who !== "NONE" &&
    COMMANDS_CMDS.includes(message.body.split(",")[0].toLocaleLowerCase())
  ) {
    sendCommands(client, message, who);
  }

  // Ping Everyone
  if (who == "ADMIN" && ["everyone"].includes(message.body)) {
    logger.info(`Message by admin; ping everyone`, { label: messageId });
    await pingEveryone(client, message);
  }

  logger.info(`who ${who}`, { label: messageId });
  // Checks if message's first letter is BOT_PREFIX
  if (
    who !== "NONE" &&
    message.body[0] === (process.env.BOT_PREFIX as string)
  ) {
    logger.info(`Bot prefix command ${message.body}`, { label: messageId });
    await main(client, message, who);
  }
  // !@onlyUseOnce ONLY USE ONCE
  if (who === "ADMIN" && message.body === "load") {
    console.log(WA_BOT.participants);
    WA_BOT.participants?.forEach(async (participant) => {
      UserModel.create({
        name: participant.id.user,
        chatId: participant.id._serialized,
      });
    });
    WA_BOT.sendMessage(
      "SUCCESSFULLY ADDED ALL THE STUDENTS IN THE DB, MASTER!"
    );
  }
});

// Event "GROUP_JOIN"
client.on("group_join", async (msg: GroupNotification) => {
  if (msg.chatId === (process.env.WA_BOT_ID as string)) {
    logger.info(`${msg.recipientIds[0]} Joined the Group`, {
      label: "GROUP_JOIN",
    });
  }
  if (msg.chatId === WA_BOT_ID) {
    const contact = await client.getNumberId(msg.recipientIds[0]);
    const details = await client.getContactById(contact?._serialized || "");
    if (details.name) {
      sendAndDeleteMsg(
        client,
        msg,
        msg.recipientIds[0],
        `${process.env.BOT_NAME as String}: *${
          details.name
        }* Thanks for joining the Group!\n${
          USER_JOIN_GREETINGS.messages[random(USER_JOIN_GREETINGS.messageNum)]
        }\nHey new ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
          HEY_EMOJIES[random(HEY_EMOJIES.length)]
        }!\nCheck out what bot(${
          process.env.BOT_NAME as String
        }) can do by *Mentioning* me!\nor check the Commands of ${
          process.env.BOT_NAME as String
        } by typing\n*${
          process.env.BOT_PREFIX as string
        }AllCmds*\n*IN THE GROUP*\nSimply watch the Video: https://drive.google.com/file/d/1tl33VralV0AXQ2EDJYnjC6r2eaCUHr-l/view?usp=sharing`
      );

      // const sticker = MessageMedia.fromFilePath(
      //   `${__dirname}/assets/images/grpJoinLeaveImgs/${
      //     grpJoinStickers.images[random(grpJoinStickers.numOfImgs)]
      //   }.png`
      // );
      // client.sendMessage(msg.recipientIds[0], sticker, {
      //   sendMediaAsSticker: true,
      // });
    } else {
      sendAndDeleteMsg(
        client,
        msg,
        msg.recipientIds[0],
        `${process.env.BOT_NAME as String}: ${
          GREETINGS.member[random(GREETINGS.memberMsgNumber)]
        }, Thanks for Joining the Group!\n${
          USER_JOIN_GREETINGS.messages[random(USER_JOIN_GREETINGS.messageNum)]
        }\nHey new ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
          HEY_EMOJIES[random(HEY_EMOJIES.length)]
        }!\nCheck out what bot(${
          process.env.BOT_NAME as String
        }) can do by *Mentioning* me!\nor check the Commands of ${
          process.env.BOT_NAME as String
        } by typing\n*${
          process.env.BOT_PREFIX as string
        }AllCmds*\n*IN THE GROUP*\nSimply watch the Video: https://drive.google.com/file/d/1tl33VralV0AXQ2EDJYnjC6r2eaCUHr-l/view?usp=sharing`
      );
      // const sticker = MessageMedia.fromFilePath(
      //   `${__dirname}/assets/images/grpJoinLeaveImgs/${
      //     grpJoinStickers.images[random(grpJoinStickers.numOfImgs)]
      //   }.png`
      // );
      // client.sendMessage(msg.recipientIds[0], sticker, {
      //   sendMediaAsSticker: true,
      // });
    }
  }
});

// GroupNotification {
//   id: {
//     fromMe: boolean,
//     remote: '1203630xxxxxxxxx@g.us',
//     id: '26650709261xxxxxxxxxx',
//     participant: '919990xxxxxxxx@c.us',
//     _serialized: 'false_12036xxxxxxxxxxxxx475@g.us_2665xxxxxxxxxxxx72395334_91xxxxxxxxxxxxx656@c.us'
//   },
//   body: '',
//   type: 'invite',
//   timestamp: 1672395334,
//   chatId: '1203630442xxxxxxxxx@g.us',
//   author: undefined,
//   recipientIds: [ '9199902xxxxxxxxx@c.us' ]
// }
client.on("group_leave", async (notification: WAWebJS.GroupNotification) => {
  let grpId = notification.chatId;
  if (grpId === (process.env.WA_BOT_ID as string)) {
    logger.info(`${notification.recipientIds[0]} left the Group`, {
      label: "GROUP_LEFT",
    });
  }
  const sticker = MessageMedia.fromFilePath(
    `${__dirname}/../src/assets/images/grpJoinLeaveImgs/${
      grpLeaveStickers.images[random(grpLeaveStickers.numOfImgs)]
    }.png`
  );
  if (notification.chatId === WA_BOT_ID) {
    const allChats = await client.getChats();
    const WA_BOT = allChats[BOT];
    WA_BOT.sendMessage(`${process.env.BOT_NAME as String}: somebody left`);
    WA_BOT.sendMessage(sticker, { sendMediaAsSticker: true });
  }
  await UserModel.findOneAndDelete({ chatId: notification.chatId });
});

// For checking the classes
setInterval(async () => {
  const chats = await client.getChats();
  const WA_BOT: WA_Grp = chats[BOT];
  sendClassNotification(WA_BOT);
  logger.info("Checked", { label: "INFO" });
}, 5 * 60 * 1000); // every 5 minutes

client.initialize();

// Get Bot LIVE
// Continuously ping the server to prevent it from becoming idle
// const intervalId = setInterval(async () => {
//   await axios.get("https://iitm-wa-bot.onrender.com/");
//   console.log("[SERVER] Pinged server");
// }, 14 * 60 * 1000); // every 14 minutes
//
// // To stop the bot at Night
// const etaMs = endOfToday().getTime() - addIndianTime(new Date()).getTime();
// setInterval(() => {
//   clearInterval(intervalId);
// }, etaMs);

const port = Number(process.env.PORT) || 3005;

app.get("/", (_: Request, res: Response) => {
  res.send("BOT");
});
app.listen(port, () =>
  logger.info(`[SERVER] Server is running on port ${port}`, { label: "INFO" })
);

// All other pages should be returned as error pages
app.all("*", (_: Request, res: Response) => {
  res
    .status(404)
    .send(
      "<h1>Sorry, this page does not exist!</h1><br><a href='/'>Back to Home</a>"
    );
});
