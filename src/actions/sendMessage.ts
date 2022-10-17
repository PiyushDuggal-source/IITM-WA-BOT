import * as WAWebJS from "whatsapp-web.js";
import { MessageContent } from "whatsapp-web.js";
import { FOOTERS } from "../utils/reply/footers";
import * as dotenv from "dotenv";
import { sendAndDeleteMsg } from "./sendAndDeleteMsg";
import { MessageType } from "../types/types";
dotenv.config();

export const sendMessage = (
  client: WAWebJS.Client,
  messageToSend: MessageContent,
  message: WAWebJS.Message,
  userId: MessageType,
  cmds?: boolean,
  help?: boolean
) => {
  if (cmds && typeof userId === 'string') {
    sendAndDeleteMsg(client, message,userId as string, messageToSend )
    // bot.sendMessage(message);
  } else if (help) {
    const msg = 
      `${process.env.BOT_NAME as String}: ${messageToSend} \n:${
        FOOTERS.footers[random(FOOTERS.footerMsgLength)]
      }`
    sendAndDeleteMsg(client, message,userId, msg )
  } else {
    const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`
    sendAndDeleteMsg(client, message,userId, msg )
  }
};

export const random = (max: number): number => Math.floor(Math.random() * max);
