import WAWebJS from "whatsapp-web.js";
import { sendMessage } from "../../actions/sendMessage";
import secretVariables from "../../config/config";
import { userMessages } from "../../utils/Commands/messages";
import { PING_REPLIES } from "../../utils/Commands/replies";
import { random } from "../../utils/common";

export const userControl = (bot: WAWebJS.Chat, message: string) => {
  if (
    message[0] === secretVariables.BOT_PREFIX &&
    userMessages.includes(message.slice(1).toLocaleLowerCase())
  ) {
    sendMessage(
      bot,
      PING_REPLIES.members[random(PING_REPLIES.memberMsgNumber)]
    );
    return;
  }
};
