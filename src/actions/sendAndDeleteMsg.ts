import * as WAWebJS from "whatsapp-web.js";
import { REACT_EMOGIES } from "../utils/reply/replies";
import { random } from "./sendMessage";
import { BOT } from "..";
import { END_FOOTER } from "../utils/reply/footers";

export const sendAndDeleteMsg = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message | WAWebJS.GroupNotification,
  userId: string,
  messageToSend: WAWebJS.MessageContent
) => {
  if (typeof userId == "boolean") {
    const allChats = await client.getChats();
    const WA_BOT = allChats[BOT];
    WA_BOT.sendMessage(messageToSend);
  } else {
    const userChat = await client.getChatById(userId);
    messageToSend += `\n\n${END_FOOTER}`;
    const msg = userChat.sendMessage(messageToSend);
    await (await msg).delete();
    if("react" in messageInstance){
    await messageInstance.react(REACT_EMOGIES[random(REACT_EMOGIES.length)]);
    }
  }
};
