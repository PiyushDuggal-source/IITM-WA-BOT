import * as WAWebJS from "whatsapp-web.js";
import { MessageContent } from "whatsapp-web.js";
import { FOOTERS } from "../utils/reply/footers";
import * as dotenv from "dotenv";
import { sendAndDeleteMsg } from "./sendAndDeleteMsg";
import { MessageType } from "../types/types";
import { BOT } from "..";
import { REACT_EMOGIES } from "../utils/reply/replies";
import { react } from "./messageActions";
dotenv.config();

export const sendMessage = async (
  client: WAWebJS.Client,
  messageToSend: MessageContent,
  messageInstance: WAWebJS.Message,
  who: MessageType,
  cmds?: boolean,
  classMsg?: {
    classMsg: boolean;
  },
  help?: boolean
) => {
  if (who.role === "OWNER") {
    const chats = await client.getChats();
    const WA_BOT = chats[BOT];
    if (cmds) {
      WA_BOT.sendMessage(messageToSend);
    react(messageInstance)
    } else if (help) {
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend} \n:${
        FOOTERS.footers[random(FOOTERS.footerMsgLength)]
      }`;
      WA_BOT.sendMessage(msg);
    react(messageInstance)
    } else {
      console.log("reaching here");
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
      WA_BOT.sendMessage(msg);
    react(messageInstance)
    }
  } else if (who.role !== "NONE") {
    console.log("reached");
    if (classMsg?.classMsg) {
      const chats = await client.getChats();
      const WA_BOT = chats[BOT];
      WA_BOT.sendMessage(messageToSend);
      react(messageInstance)

    } else if (cmds) {
      sendAndDeleteMsg(client, messageInstance, who.chatId, messageToSend);
    } else if (help) {
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend} \n:${
        FOOTERS.footers[random(FOOTERS.footerMsgLength)]
      }`;
      sendAndDeleteMsg(client, messageInstance, who.chatId, msg);
    } else {
      console.log("endly reaching here");
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
      sendAndDeleteMsg(client, messageInstance, who.chatId, msg);
    }
  }
};

export const random = (max: number): number => Math.floor(Math.random() * max);
