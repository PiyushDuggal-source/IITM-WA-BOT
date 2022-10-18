import * as WAWebJS from "whatsapp-web.js"
import { sendMessage, random } from "../../actions/sendMessage"
import { USER_PING_MESSAGES } from "../../utils/messages/messages"
import { PING_REPLIES, USER_COMMANDS } from "../../utils/reply/replies"
import {
  // CALENDAR_COMMANDS,
  // CALENDAR_TYPOS,
  // CLASS_COMMAND,
  // COMMANDS,
  // ELIGIBILITY,
  // HELP_CMDS,
  // IMP_DATES,
  NOTES_CMD,
  // PLALIST_CMD_ALISA,
  // SOURCE,
} from "../../utils/Commands/instructions"
// import { sendCalendar } from "../../actions/sendCalendar"
// import { sendClassMessage } from "../../actions/sendClassMessage"
// import { sendNotes, sendNotesByFilter } from "../../actions/sendNotes"
// import { help } from "../../actions/help"
// import { sendSource } from "../../actions/sendSource"
// import { sendEligibility, sendImpDates } from "../../actions/courseInfo"
// import { sendPlayList } from "../../actions/sendPlaylist"

export const adminControl = (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
) => {
  const messageBody = messageInstance.body.slice(1)
  console.log(messageBody)
  // Ping Replies
  if (USER_PING_MESSAGES.includes(messageBody.toLocaleLowerCase())) {
    sendMessage(
      client,
      PING_REPLIES.admin[random(PING_REPLIES.adminMsgNumber)],
      messageInstance
    )

    // Notes Replies
  } else if (
    NOTES_CMD.includes(messageBody.split(" ")[0].toLocaleLowerCase())
  ) {
    if (messageBody.split(" ").length > 1) {
      // sendNotesByFilter(bot, message)
    } else {
      // sendNotes(bot, "ADMIN")
    }
    }

    // Calender Replies WITH Typos
  // } else if (
  //   CALENDAR_COMMANDS.includes(message.toLocaleLowerCase()) ||
  //   CALENDAR_TYPOS.includes(message.toLocaleLowerCase())
  // ) {
  //   sendCalendar(bot)
  //
  //   // Commands Replies
  // } else if (COMMANDS.includes(message.toLocaleLowerCase())) {
  //   sendMessage(bot, USER_COMMANDS, true)
  //
  //   // Class Commands Replies
  // } else if (CLASS_COMMAND.includes(message.toLocaleLowerCase())) {
  //   sendClassMessage(bot)
  // }
  //
  // // Help Commands Replies
  // else if (HELP_CMDS.includes(message.toLocaleLowerCase())) {
  //   help(bot, "ADMIN")
  // }
  //
  // // Source Command Reply
  // else if (SOURCE.includes(message.toLocaleLowerCase())) {
  //   sendSource(bot)
  // }
  //
  // // For sending Important Dates
  // else if (IMP_DATES.includes(message.toLocaleLowerCase())) {
  //   sendImpDates(bot)
  // }
  //
  // // For sending Eligibility
  // else if (ELIGIBILITY.includes(message.toLocaleLowerCase())) {
  //   sendEligibility(bot)
  // }
  //
  // // For sending Playlists
  // else if (PLALIST_CMD_ALISA.includes(message.toLocaleLowerCase())) {
  //   sendPlayList(bot)
  // }
}
