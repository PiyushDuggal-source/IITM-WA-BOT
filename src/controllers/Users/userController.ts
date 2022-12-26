import * as WAWebJS from "whatsapp-web.js";
import { help } from "../../actions/help";
import { sendCalendar } from "../../actions/sendCalendar";
import { sendClassMessage } from "../../actions/sendClassMessage";
import { sendEligibility, sendImpDates } from "../../actions/courseInfo";
import { random } from "../../actions/sendMessage";
import { sendNotes, sendNotesByFilter } from "../../actions/sendNotes";
import { sendSource } from "../../actions/sendSource";
import {
  CALENDAR_COMMANDS,
  CALENDAR_TYPOS,
  CLASS_COMMAND,
  ELIGIBILITY,
  HELP_CMDS,
  IMP_DATES,
  NOTES_CMD,
  PLALIST_CMD_ALISA,
  SOURCE,
} from "../../utils/Commands/instructions";
import { sendPlayList } from "../../actions/sendPlaylist";
import { MessageType } from "../../types/types";
import { BOT_CHECK_MESSAGES } from "../../utils/messages/messages";
import { PING_REPLIES } from "../../utils/reply/replies";
import { BOT } from "../..";
export const userControl = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  const messageBody = messageInstance.body.slice(1);
  // Ping Message Reply
  if (BOT_CHECK_MESSAGES.includes(messageBody.toLocaleLowerCase())) {
    const chats = await client.getChats();
    const WA_BOT = chats[BOT];
    await WA_BOT.sendMessage(
      `${process.env.BOT_NAME}: ${
        PING_REPLIES.members[random(PING_REPLIES.memberMsgNumber)]
      }`
    );
    // Commands Message Reply
    // } else
    // if (COMMANDS.includes(messageBody.toLocaleLowerCase())) {
    //   sendMessage(client, USER_COMMANDS, messageInstance, who, true);
    //   return;

    // Notes Replies
  } else if (
    NOTES_CMD.includes(messageBody.split(" ")[0].toLocaleLowerCase())
  ) {
    if (messageBody.split(" ").length > 1) {
      sendNotesByFilter(client, messageBody, messageInstance, who);
    } else {
      sendNotes(client, messageInstance, who);
    }

    // Calender Replies WITH Typos
  } else if (
    CALENDAR_COMMANDS.includes(messageBody.toLocaleLowerCase()) ||
    CALENDAR_TYPOS.includes(messageBody.toLocaleLowerCase())
  ) {
    sendCalendar(client, messageInstance, who);
    // Class Commands Replies
  } else if (CLASS_COMMAND.includes(messageBody.toLocaleLowerCase())) {
    sendClassMessage(client, messageInstance, who);
  }

  // Help Commands Replies
  else if (HELP_CMDS.includes(messageBody.toLocaleLowerCase())) {
    help(client, messageInstance, who);
  }

  // Source Command Reply
  else if (SOURCE.includes(messageBody.toLocaleLowerCase())) {
    sendSource(client, who);
  }

  // For sending Important Dates
  else if (IMP_DATES.includes(messageBody.toLocaleLowerCase())) {
    sendImpDates(client, messageInstance, who);
  }

  // For sending Eligibility
  else if (ELIGIBILITY.includes(messageBody.toLocaleLowerCase())) {
    sendEligibility(client, messageInstance, who);
  }

  // For sending Playlists
  else if (PLALIST_CMD_ALISA.includes(messageBody.toLocaleLowerCase())) {
    sendPlayList(client, messageInstance, who);
  }
};
