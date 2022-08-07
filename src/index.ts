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
import axios from "axios";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { COMMANDS_CMDS } from "./utils/Commands/instructions";
import { sendClassNotification } from "./actions/sendClassNotification";
import { grpJoinStickers, grpLeaveStickers } from "./assets/assets";
// import mongoose from "mongoose";
// import { MongoStore } from "wwebjs-mongo";
dotenv.config();

const app = express();

const LOCAL = String(process.env.dev) === "true";
const BOT = LOCAL ? 1 : 0;
export const WA_BOT_ID = LOCAL
  ? (process.env.WA_BOT_ID_DEV as string)
  : (process.env.WA_BOT_ID as string);

const client = new Client({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  authStrategy: new LocalAuth({
    dataPath: `${__dirname}/sessions`,
  }),
});

client.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
  console.log(qr);
});

client.on("ready", async () => {
  console.log("Connected");
  client.sendMessage(
    WA_BOT_ID,
    `${process.env.BOT_NAME as string}: I am Connected BOSS`
  );
});

client.on("message_create", async (message: WAWebJS.Message) => {
  const bool = checkMessage(message);

  // Mention Logic
  const str: string[] = message.mentionedIds;
  const isMention =
    (message.body[0] === "@" && str.includes("919871453667@c.us")) ||
    message.body
      .toLowerCase()
      .split(" ")
      .includes(`@${(process.env.BOT_NAME as String).toLocaleLowerCase()}`);

  if (isMention && bool !== "NONE") {
    const allChats = await client.getChats();
    const WA_BOT = allChats[BOT];
    introduction(WA_BOT, bool);
  }

  // Command check logic
  if (
    bool !== "NONE" &&
    COMMANDS_CMDS.includes(message.body.split(",")[0].toLocaleLowerCase())
  ) {
    const allChats = await client.getChats();
    const WA_BOT = allChats[BOT];
    sendCommands(WA_BOT);
  }
  if (
    (bool === "ADMIN" || bool === "USER") &&
    message.body[0] === (process.env.BOT_PREFIX as string)
  ) {
    const allChats = await client.getChats();
    const WA_BOT = allChats[BOT];
    main(WA_BOT, message, bool);
  }
});

client.on("group_join", async (msg: GroupNotification) => {
  if (msg.chatId === WA_BOT_ID) {
    const contact = await client.getNumberId(msg.recipientIds[0]);
    const details = await client.getContactById(contact?._serialized || "");
    if (details.name) {
      client.sendMessage(
        WA_BOT_ID,
        `${process.env.BOT_NAME as String}: *${
          details.name
        }* Joined the Group!\n${
          USER_JOIN_GREETINGS.messages[random(USER_JOIN_GREETINGS.messageNum)]
        }\nHey new ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
          HEY_EMOJIES[random(HEY_EMOJIES.length)]
        }!\nCheck out what bot(${
          process.env.BOT_NAME as String
        }) can do by *Mentioning* me!\nor check the Commands of ${
          process.env.BOT_NAME as String
        } by typing\n*${process.env.BOT_PREFIX as string}AllCmds*`
      );

      const sticker = MessageMedia.fromFilePath(
        `${__dirname}/assets/images/${
          grpJoinStickers.images[random(grpJoinStickers.numOfImgs)]
        }.png`
      );
      client.sendMessage(WA_BOT_ID, sticker, { sendMediaAsSticker: true });
    } else {
      client.sendMessage(
        process.env.WA_BOT_ID as string,
        `${process.env.BOT_NAME as String}: ${
          GREETINGS.member[random(GREETINGS.memberMsgNumber)]
        } Joined the Group!\n${
          USER_JOIN_GREETINGS.messages[random(USER_JOIN_GREETINGS.messageNum)]
        }\nHey new ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
          HEY_EMOJIES[random(HEY_EMOJIES.length)]
        }!\nCheck out what bot(${
          process.env.BOT_NAME as String
        }) can do by *Mentioning* me!\nor check the Commands of ${
          process.env.BOT_NAME as String
        } by typing\n*${process.env.BOT_PREFIX as string}AllCmds*`
      );
      const sticker = MessageMedia.fromFilePath(
        `${__dirname}/assets/images/${
          grpJoinStickers.images[random(grpJoinStickers.numOfImgs)]
        }.png`
      );
      client.sendMessage(WA_BOT_ID, sticker, { sendMediaAsSticker: true });
    }
  }
});
client.on("group_leave", async (notification: WAWebJS.GroupNotification) => {
  console.log(notification);
  const sticker = MessageMedia.fromFilePath(
    `${__dirname}/assets/images/${
      grpLeaveStickers.images[random(grpLeaveStickers.numOfImgs)]
    }.png`
  );
  if (notification.chatId === WA_BOT_ID) {
    const allChats = await client.getChats();
    const WA_BOT = allChats[BOT];
    WA_BOT.sendMessage(`${process.env.BOT_NAME as String}:`);
    WA_BOT.sendMessage(sticker, { sendMediaAsSticker: true });
  }
});

export const sendInvalidFiltersToDevEnv = (msg: string) => {
  client.sendMessage(process.env.INVALID_FILTER_CHAT_ID as string, msg);
};

client.on("disconnected", () => {
  client.sendMessage(
    WA_BOT_ID,
    `Stepping out for sometimes folks, My ${
      GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
    } is updating something.`
  );
});

client.initialize();

// Get Bot LIVE

// Continuously ping the server to prevent it from becoming idle
setInterval(async () => {
  await axios.get("https://iitm-wa-bot.herokuapp.com/");
  console.log("[SERVER] Pinged server");
}, 15 * 60 * 1000); // every 15 minutes

// // For checking the classes
setInterval(async () => {
  const chats = await client.getChats();
  const WA_BOT = chats[BOT];
  sendClassNotification(WA_BOT);
  console.log("checked");
}, 5 * 30 * 1000); // every 5 minutes

const port = Number(process.env.PORT) || 3005;

app.get("/", (req: Request, res: Response) => {
  res.send("BOT");
});

app.listen(port, () =>
  console.log(`[SERVER] Server is running on port ${port}`)
);

// All other pages should be returned as error pages
app.all("*", (req: Request, res: Response) => {
  res
    .status(404)
    .send(
      "<h1>Sorry, this page does not exist!</h1><br><a href='/'>Back to Home</a>"
    );
});
