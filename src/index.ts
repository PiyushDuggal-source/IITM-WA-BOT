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
import secretVariables from "./config/config";
import { introduction } from "./actions/introduction";
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
dotenv.config({ path: __dirname + "/.env" });

const app = express();
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
});

client.on("message_create", async (message: WAWebJS.Message) => {
  const bool = checkMessage(message);
  const str: string[] = message.mentionedIds;
  const isMention =
    (message.body[0] === "@" && str.includes("919871453667@c.us")) ||
    message.body
      .toLowerCase()
      .split(" ")
      .includes(`@${(process.env.BOT_NAME as String).toLocaleLowerCase()}`);
  if (isMention) {
    const allChats = await client.getChats();
    const WA_BOT = allChats[0];
    if (bool === "ADMIN") {
      introduction(WA_BOT, true);
    } else if (bool === "USER") {
      introduction(WA_BOT, false);
    }
  }
  if (
    (bool === "ADMIN" || bool === "USER") &&
    message.body[0] === (process.env.BOT_PREFIX as string)
  ) {
    const allChats = await client.getChats();
    const WA_BOT = allChats[0];
    main(WA_BOT, message, bool);
  }
});

client.on("group_join", async (msg: GroupNotification) => {
  const contact = await client.getNumberId(msg.recipientIds[0]);
  const details = await client.getContactById(contact?._serialized || "");
  if (details.name) {
    client.sendMessage(
      process.env.WA_BOT_ID as string,
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
      } by typing "!cmd" (without quotes)`
    );
  }
});

client.on("group_leave", async () => {
  const allChats = await client.getChats();
  const WA_BOT = allChats[0];
  const sticker = MessageMedia.fromFilePath(`${__dirname}/leave.png`);
  WA_BOT.sendMessage(`${process.env.BOT_NAME as String}:`);
  WA_BOT.sendMessage(sticker, { sendMediaAsSticker: true });
});

client.initialize();

// Get Bot LIVE

// Continuously ping the server to prevent it from becoming idle
setInterval(async () => {
  await axios.get("https://iitm-wa-bot.herokuapp.com/");
  console.log("[SERVER] Pinged server");
}, 15 * 60 * 1000); // every 15 minutes

const port = Number(process.env.PORT) || 3000;

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
