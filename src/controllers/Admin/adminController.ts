import * as WAWebJS from "whatsapp-web.js";
import { sendMessage, random } from "../../actions/sendMessage";
import { USER_PING_MESSAGES } from "../../utils/messages/messages";
import { PING_REPLIES, USER_COMMANDS } from "../../utils/reply/replies";
import {
  CALENDAR_COMMANDS,
  CALENDAR_TYPOS,
  CLASS_COMMAND,
  COMMANDS,
  HELP_CMDS,
  NOTES_CMD,
  SOURCE,
} from "../../utils/Commands/instructions";
import { sendCalendar } from "../../actions/sendCalendar";
import { sendClassMessage } from "../../actions/sendClassMessage";
import { sendNotes, sendNotesByFilter } from "../../actions/sendNotes";
import { help } from "../../actions/help";
import { sendSource } from "../../actions/sendSource";

export const adminControl = (bot: WAWebJS.Chat, message: string) => {
  // Ping Replies
  if (USER_PING_MESSAGES.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, PING_REPLIES.admin[random(PING_REPLIES.adminMsgNumber)]);

    // Notes Replies
  } else if (NOTES_CMD.includes(message.split(" ")[0].toLocaleLowerCase())) {
    if (message.split(" ").length > 1) {
      sendNotesByFilter(bot, message);
    } else {
      sendNotes(bot, "ADMIN");
    }

    // Calender Replies WITH Typos
  } else if (
    CALENDAR_COMMANDS.includes(message.toLocaleLowerCase()) ||
    CALENDAR_TYPOS.includes(message.toLocaleLowerCase())
  ) {
    sendCalendar(bot);

    // Commands Replies
  } else if (COMMANDS.includes(message.toLocaleLowerCase())) {
    sendMessage(bot, USER_COMMANDS, true);

    // Class Commands Replies
  } else if (CLASS_COMMAND.includes(message.toLocaleLowerCase())) {
    sendClassMessage(bot);
  }

  // Help Commands Replies
  else if (HELP_CMDS.includes(message.toLocaleLowerCase())) {
    help(bot, "ADMIN");
  }

  // Source Command Reply
  else if (SOURCE.includes(message.toLocaleLowerCase())) {
    sendSource(bot);
  }
};
