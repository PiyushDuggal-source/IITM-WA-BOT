import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import * as dotenv from "dotenv";
import { WA_BOT_ID } from "..";
dotenv.config();

/**
 *
 * @param { string } message Get the `Message` object
 * @returns  { MessageType } `NONE` | string | boolean
 */
export const checkMessage = (message: WAWebJS.Message): MessageType => {
  if (message.fromMe) {
    return String(message.to) === String(WA_BOT_ID);
  } else if (String(message.from) === String(WA_BOT_ID)) {
    console.log(message);
    return message.author || "";
  } else {
    return "NONE";
  }
};
