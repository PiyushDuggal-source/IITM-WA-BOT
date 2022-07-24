import WAWebJS from "whatsapp-web.js";
import secretVariables from "../config/config";

export const sendMessage = (bot: WAWebJS.Chat, message: string) => {
  bot.sendMessage(`${secretVariables.BOT_NAME}: ${message}`);
};
