import * as WAWebJS from "whatsapp-web.js";
import { END_FOOTER } from "../utils/reply/footers";
import { react } from "./messageActions";

export const sendAndDeleteMsg = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message | WAWebJS.GroupNotification,
  userId: string,
  messageContent: WAWebJS.MessageContent
) => {
  const userChat = await client.getChatById(userId);
  messageContent += `\n\n${END_FOOTER}`;
  const msg = userChat.sendMessage(messageContent);
  // await (await msg).delete();
  // const chatMsgs = await userChat.fetchMessages({ limit: 4 });
  // if (chatMsgs.length < 2) {
  //   await userChat.delete();
  // }
  if ("react" in messageInstance) {
    react(messageInstance)
  }
};
