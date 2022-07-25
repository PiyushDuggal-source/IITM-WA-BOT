import WAWebJS, { Buttons, List } from "whatsapp-web.js";
import { sendMessage, random } from "../../actions/sendMessage";
import { USER_PING_MESSAGES } from "../../utils/messages/messages";
import secretVariables from "../../config/config";
import { PING_REPLIES } from "../../utils/reply/replies";

export const adminControl = (bot: WAWebJS.Chat, message: string) => {
  if (USER_PING_MESSAGES.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, PING_REPLIES.admin[random(PING_REPLIES.adminMsgNumber)]);
    return;
  }
};
