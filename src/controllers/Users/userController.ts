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
  PLAYLIST_CMD_ALIAS,
  SOURCE,
} from "../../utils/Commands/instructions";
import { sendPlayList, sendPlayListByFilter } from "../../actions/sendPlaylist";
import { MessageType } from "../../types/types";
import { BOT_CHECK_MESSAGES } from "../../utils/Commands/instructions";
import { PING_REPLIES } from "../../utils/reply/replies";
import { BOT } from "../..";
import { increaseNumberOfCmd } from "../../services/mongo";
export const userControl = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  userObj: MessageType
) => {
  let messageBody: string;
  if (messageInstance.body.at(1) === ' ') {
    messageBody = messageInstance.body.slice(2);
  } else {
    messageBody = messageInstance.body.slice(1);
  }
  console.log("reached User Controller")
  // Ping Message Reply
  if (BOT_CHECK_MESSAGES.includes(messageBody.toLocaleLowerCase())) {
    const chats = await client.getChats();
    const WA_BOT = chats[BOT];
    await WA_BOT.sendMessage(
      `${process.env.BOT_NAME}: ${
        PING_REPLIES.members[random(PING_REPLIES.memLen)]
      }`
    );
    // Commands Message Reply
    // } else
    // if (COMMANDS.includes(messageBody.toLocaleLowerCase())) {
    //   sendMessage(client, USER_COMMANDS, messageInstance, who, true);
    //   return;
    // Notes Replies
    increaseNumberOfCmd({ recipitantId: userObj.chatId });
  } else if (
    NOTES_CMD.includes(messageBody.split(" ")[0].toLocaleLowerCase())
  ) {
    if (messageBody.split(" ").length > 1) {
      sendNotesByFilter(client, messageBody, messageInstance, userObj);
    } else {
      sendNotes(client, messageInstance, userObj);
    }
    increaseNumberOfCmd({ recipitantId: userObj.chatId });
    // Calender Replies WITH Typos
  } else if (
    CALENDAR_COMMANDS.includes(messageBody.toLocaleLowerCase()) ||
    CALENDAR_TYPOS.includes(messageBody.toLocaleLowerCase())
  ) {
    sendCalendar(client, messageInstance, userObj);
    // Class Commands Replies
    increaseNumberOfCmd({ recipitantId: userObj.chatId });
  } else if (CLASS_COMMAND.includes(messageBody.toLocaleLowerCase())) {
    sendClassMessage(client, messageInstance, userObj);
    increaseNumberOfCmd({ recipitantId: userObj.chatId });
  }

  // Help Commands Replies
  else if (HELP_CMDS.includes(messageBody.toLocaleLowerCase())) {
    help(client, messageInstance, userObj);
    increaseNumberOfCmd({ recipitantId: userObj.chatId });
  }

  // Source Command Reply
  else if (SOURCE.includes(messageBody.toLocaleLowerCase())) {
    sendSource(client,messageInstance, userObj);
    increaseNumberOfCmd({ recipitantId: userObj.chatId });
  }

  // For sending Important Dates
  else if (IMP_DATES.includes(messageBody.toLocaleLowerCase())) {
    sendImpDates(client, messageInstance, userObj);
    increaseNumberOfCmd({ recipitantId: userObj.chatId });
  }

  // For sending Eligibility
  else if (ELIGIBILITY.includes(messageBody.toLocaleLowerCase())) {
    sendEligibility(client, messageInstance, userObj);
    increaseNumberOfCmd({ recipitantId: userObj.chatId });
  }

  // For sending Playlists
  else if (
    PLAYLIST_CMD_ALIAS.includes(messageBody.split(" ")[0].toLocaleLowerCase())
  ) {
    if (messageBody.split(" ").length > 1) {
      sendPlayListByFilter(client, messageBody, messageInstance, userObj);
    } else {
      sendPlayList(client, messageInstance, userObj);
    }
    increaseNumberOfCmd({ recipitantId: userObj.chatId });
  }
};
