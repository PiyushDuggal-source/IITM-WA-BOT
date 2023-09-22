// import * as WAWebJS from "whatsapp-web.js";
import * as dotenv from "dotenv";
import app from "./app";
import client from "./service/connectWA";
import { sendGroupJoinInfo, sendMessageObject } from "./service/iitm-bot-wa";
import { Message, MessageObject } from "./types";
import { isCommand } from "./actions/messageActions";
import WAWebJS from "whatsapp-web.js";
dotenv.config();

// For Development Enviornment
const LOCAL = String(process.env.dev) === "true";
export const BOT = LOCAL ? 1 : 0;
const WA_BOT_IDs = LOCAL
  ? (process.env.WA_BOT_IDs_DEV as string)
  : (process.env.WA_BOT_IDs as string);

export const WA_IDs = (WA_BOT_IDs as string)!.split(",");

// const DB_URL = LOCAL
//   ? (process.env.DEV_DB_URL as string)
//   : (process.env.PROD_DB_URL as string);

// Event "READY
client.on("ready", async () => {
  console.log("Client is ready");
});

/**
 * INFO:
 * Event "MESSAGE_CREATE"
 * @returns { MessageTypeOfWA }
 */
client.on("message_create", async (message: Message) => {
  console.log("Successfully  message");
  if (
    (message.fromMe && !WA_IDs.includes(message.to)) ||
    (!WA_IDs.includes(message.from) && !message.fromMe)
  ) {
    return;
  }
  console.log("Successfully received message");
  const isCmd = isCommand(message.body);
  if (!isCmd) {
    console.log("Leaving message_create\n");
    return;
  }

  const messageObject: MessageObject = {
    name: message._data?.notifyName as string,
    cmd: message.body.slice(1).toLowerCase(),
    chatId: message.id.participant as string,
    groupId: message.id.remote,
  };

  const res = await sendMessageObject(messageObject);
  if (res.data.status === "success") {
    message.react(res.data.emoji as string);
  } else if (res.data.status === "No such command") {
    message.react("❌");
  }
});

/**
 * INFO:
 * Event "GROUP_JOIN"
 * @returns { GrpJoinNotification }
 */
client.on(
  "group_join",
  async (msg: WAWebJS.GroupNotification & { id: { participant: string } }) => {
    if (WA_IDs.includes(msg.chatId)) {
      console.log(msg.id.participant);
      const chat = await client.getContactById(msg.id.participant);
      // create a service and send the author field
      await sendGroupJoinInfo({
        chatId: msg.id.participant,
        name: chat.pushname,
      });
    }
  },
);

/**
 * INFO:
 * Event "GROUP_LEAVE"
 * @returns { GrpLeaveNotification }
 */
// client.on("group_leave", async (notification: WAWebJS.GroupNotification) => {});

// Initializing Client
client.initialize();

// App listening
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port 3000");
});

// All other pages should be returned as error pages
