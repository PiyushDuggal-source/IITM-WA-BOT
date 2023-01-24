import * as WAWebJS from "whatsapp-web.js";
import { BOT } from "..";
import { MessageType } from "../types/types";
import { GREETINGS, HEY_EMOJIES } from "../utils/reply/replies";
import { sendAndDeleteMsg } from "./sendAndDeleteMsg";
import { random } from "./sendMessage";

let ADMIN_HELP = `Hey ${GREETINGS.admin[random(GREETINGS.adminMsgNumber)]} ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}, Need my help!!\n\nJust do one of these simple things ${
  GREETINGS.admin[random(GREETINGS.adminMsgNumber)]
}:\n1. *Mention me*\n2. Type: !allCmds\n3. !cmd`;

let USER_HELP = `Hey ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}, Need my help!!\n\nJust do one of these simple things ${
  GREETINGS.member[random(GREETINGS.memberMsgNumber)]
}:\n1. *Mention me*\n2. Type: !allCmds\n3. !cmd`;

export const help = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  const content = who.role === "OWNER" ? ADMIN_HELP : USER_HELP;
  if (who.role === "OWNER") {
    const chats = await client.getChats();
    const bot = chats[BOT];
    bot.sendMessage(content);
  } else if (who.role !== "NONE") {
    sendAndDeleteMsg(client, messageInstance, who.chatId, content);
  }
};
