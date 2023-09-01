import axios from "../axios";
import { MessageObject } from "../types";

export const sendMessageObject = async (messageObject: MessageObject) => {
  console.log(messageObject);
  return await axios.post<{ status: string; emoji?: string }>(
    "/wa-logic-service/api/sendMessage",
    messageObject,
  );
};

type GroupJoinNotification = {
  chatId: string;
};

export const sendGroupJoinInfo = async ({ chatId }: GroupJoinNotification) => {
  return await axios.post("/wa-logic-service/api/sendGroupJoinInfo", {
    chatId,
  });
};
