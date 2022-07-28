import * as WAWebJS from "whatsapp-web.js";
import { sendCalendar } from "../../actions/sendCalendar";
import { sendClassMessage } from "../../actions/sendClassMessage";
import { sendMessage, random } from "../../actions/sendMessage";
import {
  CALENDAR_COMMANDS,
  CLASS_COMMAND,
  COMMANDS,
} from "../../utils/Commands/instructions";
import { USER_PING_MESSAGES } from "../../utils/messages/messages";
import { PING_REPLIES, USER_COMMANDS } from "../../utils/reply/replies";
export const userControl = (bot: WAWebJS.Chat, message: string) => {
  // Ping Message Reply
  if (USER_PING_MESSAGES.includes(message.toLocaleLowerCase())) {
    sendMessage(
      bot,
      PING_REPLIES.members[random(PING_REPLIES.memberMsgNumber)]
    );
    return;
    // Commands Message Reply
  } else if (COMMANDS.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, USER_COMMANDS, true);
    return;
  } else if (CALENDAR_COMMANDS.includes(message.toLocaleLowerCase())) {
    sendCalendar(bot);
  } else if (CLASS_COMMAND.includes(message.toLocaleLowerCase())) {
    sendClassMessage(bot);
  }
};
