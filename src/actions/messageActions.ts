import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import * as dotenv from "dotenv";
import { WA_BOT_ID } from "..";
dotenv.config();

/**
 *
 * @param { string } message Get the `Message` object
 * @returns  { MessageType } `NONE` | userID | `ADMIN`
 */
export const checkMessage = (message: WAWebJS.Message): MessageType => {
  if ((message.fromMe || message.id.fromMe) && String(message.to) === String(WA_BOT_ID)) {
    return "ADMIN"
  } else if (String(message.from) === String(WA_BOT_ID)) {
    return message.author || '';
  } else {
    return "NONE";
  }
};
