import * as WAWebJS from "whatsapp-web.js";
import secretVariables from "../config/config";
import { MessageType } from "../types/types";

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
