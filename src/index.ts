import * as WAWebJS from "whatsapp-web.js";
import {
  Client,
  GroupNotification,
  LocalAuth,
  MessageMedia,
  RemoteAuth,
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
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { COMMANDS_CMDS } from "./utils/Commands/instructions";
import { sendClassNotification } from "./actions/sendClassNotification";
import { grpJoinStickers, grpLeaveStickers } from "./assets/assets";
import { log } from "./utils/log";
import { MessageType, WA_Grp } from "./types/types";
import { UserModel } from "./services/modals";
import mongoose from "mongoose";
const { MongoStore } = require("wwebjs-mongo");
dotenv.config();

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

// Initializing Client
mongoose
  .connect(DB_URL)
  .then(() => {
    const store = new MongoStore({ mongoose: mongoose });
    let client: Client;
    if (LOCAL) {
      client = new Client({
        puppeteer: {
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
        authStrategy: new LocalAuth({
          dataPath: `${__dirname}/sessions`,
        }),
      });
    } else {
      client = new Client({
        puppeteer: {
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
        authStrategy: new RemoteAuth({
          store: store,
          backupSyncIntervalMs: 300000,
        }),
      });
    }
    // Event "REMOTE SESSION SAVED"
    client.on("remote_session_saved", () => {
      log("Remote auth session saved");
    });

    // Event "DISCONNECTED"
    client.on("disconnected", () => {
      log("Client got disconnected!");
    });

    // For QR Code
    client.on("qr", (qr: string) => {
      qrcode.generate(qr, { small: true });
      console.log(qr);
    });

    // Event "READY"
    client.on("ready", async () => {
      log("Connected");
      client.sendMessage(
        process.env.WA_BOT_ID_DEV as string,
        `${process.env.BOT_NAME as string}: I am Connected BOSS`
      );
    });

    // Event "MESSAGE_CREATE"
    client.on("message_create", async (message: WAWebJS.Message) => {
      // Check if message is from Group or Not, if yes, who contains whoean or userID
      const who: MessageType = checkMessage(message);
      // Mention Logic
      const str: string[] = message.mentionedIds;
      const isMention =
        (message.body[0] === "@" && str.includes("919871453667@c.us")) ||
        message.body
          .toLowerCase()
          .split(" ")
          .includes(`@${(process.env.BOT_NAME as String).toLocaleLowerCase()}`);

      if (isMention && who !== "NONE") {
        introduction(client, who, message);
      }

      const allChats = await client.getChats();
      const WA_BOT: WA_Grp = allChats[BOT];
      // Command check logic
      if (
        who !== "NONE" &&
        COMMANDS_CMDS.includes(message.body.split(",")[0].toLocaleLowerCase())
      ) {
        sendCommands(client, message, who);
      }
      if (
        (who || who !== "NONE") &&
        message.body[0] === (process.env.BOT_PREFIX as string)
      ) {
        await main(client, message, who);
      }
      if (who === "ADMIN" && message.body === "load") {
        WA_BOT.participants?.forEach(async (participant) => {
          await UserModel.create({
            name: participant.id.user,
            chatId: participant.id._serialized,
          });
        });
        WA_BOT.sendMessage(
          "ADDED ALL THE STUDENTS TO THE DB SUCCESSFULLY MASTER!"
        );
      }
    });

    // Event "GROUP_JOIN"
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
              USER_JOIN_GREETINGS.messages[
                random(USER_JOIN_GREETINGS.messageNum)
              ]
            }\nHey new ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
              HEY_EMOJIES[random(HEY_EMOJIES.length)]
            }!\nCheck out what bot(${
              process.env.BOT_NAME as String
            }) can do by *Mentioning* me!\nor check the Commands of ${
              process.env.BOT_NAME as String
            } by typing\n*${process.env.BOT_PREFIX as string}AllCmds*`
          );

          const sticker = MessageMedia.fromFilePath(
            `${__dirname}/assets/images/grpJoinLeaveImgs/${
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
              USER_JOIN_GREETINGS.messages[
                random(USER_JOIN_GREETINGS.messageNum)
              ]
            }\nHey new ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
              HEY_EMOJIES[random(HEY_EMOJIES.length)]
            }!\nCheck out what bot(${
              process.env.BOT_NAME as String
            }) can do by *Mentioning* me!\nor check the Commands of ${
              process.env.BOT_NAME as String
            } by typing\n*${process.env.BOT_PREFIX as string}AllCmds*`
          );
          const sticker = MessageMedia.fromFilePath(
            `${__dirname}/assets/images/grpJoinLeaveImgs/${
              grpJoinStickers.images[random(grpJoinStickers.numOfImgs)]
            }.png`
          );
          client.sendMessage(WA_BOT_ID, sticker, { sendMediaAsSticker: true });
        }
      }
    });
    client.on(
      "group_leave",
      async (notification: WAWebJS.GroupNotification) => {
        console.log(notification);
        const sticker = MessageMedia.fromFilePath(
          `${__dirname}/assets/images/grpJoinLeaveImgs/${
            grpLeaveStickers.images[random(grpLeaveStickers.numOfImgs)]
          }.png`
        );
        if (notification.chatId === WA_BOT_ID) {
          const allChats = await client.getChats();
          const WA_BOT = allChats[BOT];
          WA_BOT.sendMessage(`${process.env.BOT_NAME as String}:`);
          WA_BOT.sendMessage(sticker, { sendMediaAsSticker: true });
        }
      }
    );

    // For checking the classes
    setInterval(async () => {
      const chats = await client.getChats();
      const WA_BOT: WA_Grp = chats[BOT];
      sendClassNotification(WA_BOT);
      log("Checked");
    }, 5 * 60 * 1000); // every 5 minutes

    client.initialize();
  })
  .catch((err: any) => {
    log(err, true);
  });
// Get Bot LIVE
// Continuously ping the server to prevent it from becoming idle
// const intervalId = setInterval(async () => {
//   await axios.get("https://iitm-wa-bot.herokuapp.com/");
//   console.log("[SERVER] Pinged server");
// }, 28 * 60 * 1000); // every 28 minutes

// To stop the bot at Night
// const etaMs = endOfToday().getTime() - addIndianTime(new Date()).getTime();
// setInterval(() => {
//   clearInterval(intervalId);
// }, etaMs);

const port = Number(process.env.PORT) || 3005;

app.get("/", (_: Request, res: Response) => {
  res.send("BOT");
});

app.listen(port, () => log(`[SERVER] Server is running on port ${port}`));

// All other pages should be returned as error pages
app.all("*", (_: Request, res: Response) => {
  res
    .status(404)
    .send(
      "<h1>Sorry, this page does not exist!</h1><br><a href='/'>Back to Home</a>"
    );
});
