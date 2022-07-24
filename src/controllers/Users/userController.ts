import WAWebJS from "whatsapp-web.js";
import { sendMessage } from "../../actions/sendMessage";
import { userMessages } from "../../utils/Commands/messages";
import { PING_REPLIES } from "../../utils/Commands/replies";
import { random } from "../../utils/common";

export const userControl = (bot: WAWebJS.Chat, message: string) => {
  if (userMessages.includes(message.toLocaleLowerCase())) {
    sendMessage(
      bot,
      PING_REPLIES.members[random(PING_REPLIES.memberMsgNumber)]
    );
    return;
  }
};
