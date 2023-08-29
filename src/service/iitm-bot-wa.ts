import axios from "../axios";
import { MessageObject } from "../types";

export const sendMessageObject = async (messageObject: MessageObject) => {
  console.log(messageObject);
  return await axios.post<{status: string, emoji?: string}>("/wa-logic-service/api/sendMessage", messageObject);
};
