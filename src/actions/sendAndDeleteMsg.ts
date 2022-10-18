import * as WAWebJS from "whatsapp-web.js";
import { REACT_EMOGIES } from "../utils/reply/replies";
import { random } from "./sendMessage";
import {BOT} from '..'

export const sendAndDeleteMsg = async (
  client: WAWebJS.Client,
  message: WAWebJS.Message,
  userId: string,
  content: WAWebJS.MessageContent
) => {
  if (typeof userId == "boolean") {
    const allChats = await client.getChats();
    const WA_BOT = allChats[BOT];
    WA_BOT.sendMessage(content)
  }
  else {
    const userChat = await client.getChatById(userId);
    const msg = userChat.sendMessage(content);
    (await msg).delete();
    await message.react(REACT_EMOGIES[random(REACT_EMOGIES.length)]);
  }
};
