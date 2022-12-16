import * as WAWebJS from "whatsapp-web.js";
import { BOT } from "..";
import { PLAYLISTS } from "../resources/notes";
import { MessageType } from "../types/types";
import { FOOTERS } from "../utils/reply/footers";
import { HEY_EMOJIES } from "../utils/reply/replies";
import { sendAndDeleteMsg } from "./sendAndDeleteMsg";
import { random } from "./sendMessage";

export const sendPlayList = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  let message = `*These are your course PlayLists ${
    HEY_EMOJIES[random(HEY_EMOJIES.length)]
  }*`;
  PLAYLISTS.forEach((playlist) => {
    message += `\n\n${playlist.name}\n${playlist.link}`;
  });

  message += `\n\n:${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
  if (who === "ADMIN") {
    const chats = await client.getChats();
    const bot = chats[BOT];
    bot.sendMessage(message);
  } else if (who !== "NONE") {
    sendAndDeleteMsg(client, messageInstance, who, message);
  }
};
