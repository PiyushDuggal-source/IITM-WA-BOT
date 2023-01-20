import * as WAWebJS from "whatsapp-web.js";
import { MessageContent } from "whatsapp-web.js";
import { FOOTERS } from "../utils/reply/footers";
import * as dotenv from "dotenv";
import { sendAndDeleteMsg } from "./sendAndDeleteMsg";
import { MessageType } from "../types/types";
import { BOT } from "..";
dotenv.config();

export const sendMessage = async (
  client: WAWebJS.Client,
  messageToSend: MessageContent,
  messageInstance: WAWebJS.Message,
  who: MessageType,
  cmds?: boolean,
  classMsg?: {
    classMsg: boolean
  },
  help?: boolean
) => {
  if (who === "OWNER") {
    const chats = await client.getChats();
    const WA_BOT = chats[BOT];
    if (cmds) {
      WA_BOT.sendMessage(messageToSend);
    } else if (help) {
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend} \n:${FOOTERS.footers[random(FOOTERS.footerMsgLength)]
        }`;
      WA_BOT.sendMessage(msg);
    } else {
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
      WA_BOT.sendMessage(msg);
    }
  } else if (who !== "NONE") {
    const userId = messageInstance.author;
    if(classMsg?.classMsg){
    const chats = await client.getChats();
    const WA_BOT = chats[BOT];
  WA_BOT.sendMessage(messageToSend);
    }
    if (cmds) {
      sendAndDeleteMsg(
        client,
        messageInstance,
        messageToSend
      );
    } else if (help) {
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend} \n:${FOOTERS.footers[random(FOOTERS.footerMsgLength)]
        }`;
      sendAndDeleteMsg(client, messageInstance, msg);
    } else {
      const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`;
      sendAndDeleteMsg(client, messageInstance, msg);
    }
  }
};

export const random = (max: number): number => Math.floor(Math.random() * max);
