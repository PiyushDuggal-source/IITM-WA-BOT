import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import * as dotenv from "dotenv";
dotenv.config();

export const checkMessage = (message: WAWebJS.Message): MessageType => {
  if (message.fromMe) {
    return String(message.to) === String(process.env.WA_BOT_ID)
      ? "ADMIN"
      : "NONE";
  } else if (String(message.from) === String(process.env.WA_BOT_ID)) {
    return "USER";
  } else {
    return "NONE";
  }
};
