import * as WAWebJS from "whatsapp-web.js";
import { BOT } from "..";
import { PLAYLISTS } from "../resources/notes";
import { MessageType, YT_Playlist } from "../types/types";
import { FOOTERS } from "../utils/reply/footers";
import { GREETINGS, HEY_EMOJIES } from "../utils/reply/replies";
import { sendAndDeleteMsg } from "./sendAndDeleteMsg";
import { random } from "./sendMessage";

// Helper Functions
const playlistFormatter = (playlist: YT_Playlist, content: string) => {
  playlist.forEach((playlist) => {
    content += `\n\n${playlist.name}\n${playlist.link}`;
  });
  content += `\n\n:${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
  return content;
};
let userMsg = `*These are your course PlayLists ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}*\n\n*Use filters if you want specific subject's Playlist(s)\nEg: *!Playlist {SubjectName}* _without {}_`;

let adminMsg = `*These are your course PlayLists ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}*`;

const sorryMsg = `Sorry ${
  GREETINGS.member[random(GREETINGS.memberMsgNumber)]
}\nOnly one word is allowed after !playlist command ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}`;

const invalidMsg =
  "The filter is invalid or notes are not updated with the respective subject, please wait for a while we will upload the respective notes soon";

export const sendPlayList = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  let content = who === "ADMIN" ? adminMsg : userMsg;
  content = playlistFormatter(PLAYLISTS, content);
  if (who === "ADMIN") {
    const chats = await client.getChats();
    const bot = chats[BOT];
    bot.sendMessage(content);
  } else if (who !== "NONE") {
    sendAndDeleteMsg(client, messageInstance, content);
  }
};

export const sendPlayListByFilter = async (
  client: WAWebJS.Client,
  messageBody: string,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  if (who !== "NONE") {
    const msgList = messageBody.split(" ");
    const chats = await client.getChats();
    const bot = chats[BOT];
    if (msgList.length > 2) {
      bot.sendMessage(sorryMsg);
    } else {
      const filteredPlaylist = PLAYLISTS.filter((playlist) => {
        return playlist.name
          .toLocaleLowerCase()
          .includes(msgList[1].toLocaleLowerCase());
      });
      if (!filteredPlaylist.length) {
        bot.sendMessage(invalidMsg);
      } else if (who === "ADMIN") {
        let content = adminMsg;
        content = playlistFormatter(filteredPlaylist, content);
        bot.sendMessage(content);
      } else {
        let content = userMsg;
        content = playlistFormatter(filteredPlaylist, content);
        sendAndDeleteMsg(client, messageInstance, content);
      }
    }
  }
};
