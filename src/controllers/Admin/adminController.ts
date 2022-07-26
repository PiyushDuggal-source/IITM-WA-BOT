import WAWebJS, { Buttons, List } from "whatsapp-web.js";
import { sendMessage, random } from "../../actions/sendMessage";
import { USER_PING_MESSAGES } from "../../utils/messages/messages";
import { PING_REPLIES, USER_COMMANDS } from "../../utils/reply/replies";
import {
  CALENDAR_COMMANDS,
  CLASS_COMMAND,
  COMMANDS,
} from "../../utils/Commands/instructions";
import { sendCalendar } from "../../actions/sendCalendar";
import { sendClassMessage } from "../../actions/sendClassMessage";

export const adminControl = (bot: WAWebJS.Chat, message: string) => {
  if (USER_PING_MESSAGES.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, PING_REPLIES.admin[random(PING_REPLIES.adminMsgNumber)]);
  } else if (CALENDAR_COMMANDS.includes(message.toLocaleLowerCase())) {
    sendCalendar(bot);
  } else if (COMMANDS.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, USER_COMMANDS, true);
    return;
  } else if (CLASS_COMMAND.includes(message.toLocaleLowerCase())) {
    sendClassMessage(bot);
  }
};
