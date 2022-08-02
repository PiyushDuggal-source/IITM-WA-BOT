import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import { GREETINGS, HEY_EMOJIES } from "../utils/reply/replies";
import { random } from "./sendMessage";

let ADMIN_HELP = `Hey ${GREETINGS.admin[random(GREETINGS.adminMsgNumer)]} ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}, Need my help!!\n\nJust do one of these simple things ${
  GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
}:\n1. *Mention me*\n2. Type: !allCmds\n3. !cmd`;

let USER_HELP = `Hey ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}, Need my help!!\n\nJust do one of these simple things ${
  GREETINGS.member[random(GREETINGS.memberMsgNumber)]
}:\n1. *Mention me*\n2. Type: !allCmds\n3. !cmd`;

export const help = (bot: WAWebJS.Chat, who: MessageType) => {
  const content = who === "ADMIN" ? ADMIN_HELP : USER_HELP;
  bot.sendMessage(content);
};
