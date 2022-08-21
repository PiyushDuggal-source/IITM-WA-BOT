import * as WAWebJS from "whatsapp-web.js";
import { help } from "../../actions/help";
import { sendCalendar } from "../../actions/sendCalendar";
import { sendClassMessage } from "../../actions/sendClassMessage";
import { sendEligibility, sendImpDates } from "../../actions/courseInfo";
import { sendMessage, random } from "../../actions/sendMessage";
import { sendNotes, sendNotesByFilter } from "../../actions/sendNotes";
import { sendSource } from "../../actions/sendSource";
import {
  CALENDAR_COMMANDS,
  CALENDAR_TYPOS,
  CLASS_COMMAND,
  COMMANDS,
  ELIGIBILITY,
  HELP_CMDS,
  IMP_DATES,
  NOTES_CMD,
  PLALIST_CMD_ALISA,
  SOURCE,
} from "../../utils/Commands/instructions";
import { USER_PING_MESSAGES } from "../../utils/messages/messages";
import { PING_REPLIES, USER_COMMANDS } from "../../utils/reply/replies";
import { sendPlayList } from "../../actions/sendPlaylist";
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

    // Notes Replies
  } else if (NOTES_CMD.includes(message.split(" ")[0].toLocaleLowerCase())) {
    if (message.split(" ").length > 1) {
      sendNotesByFilter(bot, message);
    } else {
      sendNotes(bot, "USER");
    }

    // Calender Replies
  } else if (CALENDAR_TYPOS.includes(message.toLocaleLowerCase())) {
    sendCalendar(bot);

    // Class Commands Replies
  } else if (CLASS_COMMAND.includes(message.toLocaleLowerCase())) {
    sendClassMessage(bot);
  }

  // Help Commands Replies
  else if (HELP_CMDS.includes(message.toLocaleLowerCase())) {
    help(bot, "USER");
  }

  // Source Command Reply
  else if (SOURCE.includes(message.toLocaleLowerCase())) {
    sendSource(bot);
  }

  // For sending Important Dates
  else if (IMP_DATES.includes(message.toLocaleLowerCase())) {
    sendImpDates(bot);
  }

  // For sending Eligibility
  else if (ELIGIBILITY.includes(message.toLocaleLowerCase())) {
    sendEligibility(bot);
  }

  // For sending Playlists
  else if (PLALIST_CMD_ALISA.includes(message.toLocaleLowerCase())) {
    sendPlayList(bot);
  }
};
