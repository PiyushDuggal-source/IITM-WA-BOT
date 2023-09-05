import * as WAWebJS from "whatsapp-web.js";
import { MessageContent } from "whatsapp-web.js";
import { clientFun } from "../service/connectWA";
import { WA_BOT_ID } from "..";
import { MessageBody } from "../types";

export const react = async (
  messageInstance: WAWebJS.Message,
  emoji: string,
) => {
  await messageInstance.react(emoji);
};

export const sendMessage = async (messageObj: MessageBody) => {
  console.log("\nEntering sendMessage");
  const client = await clientFun();
  const userChat = await client.getChatById(messageObj.chatId);
  const msg = await userChat.sendMessage(messageObj.message);
  await msg.delete();
  const chatMsgs = await userChat.fetchMessages({ limit: 3 });
  if (chatMsgs.length < 2) {
    await userChat.delete();
  }
  console.log("Leaving sendMessage\n");
};

export const sendMsgToBot = async (message: MessageContent) => {
  console.log("\nEntering sendMsgToBot");
  const client = await clientFun();
  await client.sendMessage(WA_BOT_ID, message);
  console.log("Leaving sendMsgToBot\n");
};

export const isCommand = (msg: string): boolean => {
  console.log("\nEntering isCommand");

  // if msg contains at most 2 words and starts with "!" then it is a command
  if (
    msg.split(" ").length <= 2 &&
    msg[0] === (process.env.BOT_PREFIX as string)
  ) {
    console.log("Leaving isCommand\n");
    return true;
  }
  console.log("Leaving isCommand\n");
  return false;
};
