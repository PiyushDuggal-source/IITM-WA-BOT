import WAWebJS, { MessageContent } from "whatsapp-web.js";
import secretVariables from "../config/config";

export const sendMessage = (
  bot: WAWebJS.Chat,
  message: MessageContent,
  cmds?: boolean
) => {
  if (cmds) {
    bot.sendMessage(message);
  } else {
    bot.sendMessage(`${secretVariables.BOT_NAME}: ${message}`);
  }
};

export const random = (max: number): number => Math.floor(Math.random() * max);
