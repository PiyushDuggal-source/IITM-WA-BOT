import * as WAWebJS from "whatsapp-web.js";
import { PLAYLISTS } from "../resources/notes";
import { FOOTERS } from "../utils/reply/footers";
import { HEY_EMOJIES } from "../utils/reply/replies";
import { random } from "./sendMessage";

export const sendPlayList = (bot: WAWebJS.Chat) => {
  let message = `*These are your course PlayLists ${
    HEY_EMOJIES[random(HEY_EMOJIES.length)]
  }*`;
  PLAYLISTS.forEach((playlist) => {
    message += `\n\n${playlist.name}\n${playlist.link}`;
  });

  message += `\n\n:${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
  bot.sendMessage(message);
};
