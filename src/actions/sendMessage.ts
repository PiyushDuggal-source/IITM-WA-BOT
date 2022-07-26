import WAWebJS, { MessageContent } from "whatsapp-web.js";
import secretVariables from "../config/config";
import { FOOTERS } from "../utils/reply/footers";

export const sendMessage = (
  bot: WAWebJS.Chat,
  message: MessageContent,
  cmds?: boolean,
  help?: boolean
) => {
  if (cmds) {
    bot.sendMessage(message);
  } else if (help) {
    bot.sendMessage(
      `${secretVariables.BOT_NAME}: ${message} \n:${
        FOOTERS.footers[random(FOOTERS.footerMsgLength)]
      }`
    );
  } else {
    bot.sendMessage(`${secretVariables.BOT_NAME}: ${message}`);
  }
};

export const random = (max: number): number => Math.floor(Math.random() * max);
