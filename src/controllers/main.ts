import WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import { adminControl } from "./Admin/adminController";
import { userControl } from "./Users/userController";

export const main = (
  bot: WAWebJS.Chat,
  message: WAWebJS.Message,
  role: MessageType
) => {
  if (role === "ADMIN") {
    adminControl(bot, message.body.slice(1));
  } else if (role === "USER") {
    userControl(bot, message.body.slice(1));
  }
};
