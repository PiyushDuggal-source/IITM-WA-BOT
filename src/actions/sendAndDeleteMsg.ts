import * as WAWebJS from "whatsapp-web.js";
import { REACT_EMOGIES } from "../utils/reply/replies";
import { random } from "./sendMessage";
import { END_FOOTER } from "../utils/reply/footers";

export const sendAndDeleteMsg = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message | WAWebJS.GroupNotification,
  userId: string,
  messageToSend: WAWebJS.MessageContent
) => {
  const userChat = await client.getChatById(userId);
  messageToSend += `\n\n${END_FOOTER}`;
  const msg = userChat.sendMessage(messageToSend);
  await (await msg).delete();
  const chatMsgs = await userChat.fetchMessages({});
  if (chatMsgs.length < 2) {
    await userChat.delete();
  }
  if ("react" in messageInstance) {
    await messageInstance.react(REACT_EMOGIES[random(REACT_EMOGIES.length)]);
  }
};
