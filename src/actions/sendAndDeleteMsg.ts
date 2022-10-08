import * as WAWebJS from "whatsapp-web.js";
import { REACT_EMOGIES } from "../utils/reply/replies";
import { random } from "./sendMessage";

export const sendAndDeleteMsg = async (
  client: WAWebJS.Client,
  message: WAWebJS.Message,
  userId: string,
  content: WAWebJS.MessageContent
) => {
  const userChat = await client.getChatById(userId);
  const msg = userChat.sendMessage(content);
  (await msg).delete();
  await message.react(REACT_EMOGIES[random(REACT_EMOGIES.length)]);
};
