import { MessageContent } from "whatsapp-web.js";
import client from "../service/connectWA";
import { WA_BOT_ID } from "..";

export const sendMessage = async (message: MessageContent, chatId: string) =>
  await client.sendMessage(chatId, message);

export const sendMsgToBot = async (message: MessageContent) => {
  console.log("Entering sendMsgToBot");
  await client.sendMessage(WA_BOT_ID, message);
  console.log("Leaving sendMsgToBot");
};
