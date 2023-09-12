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
  name: string;
};

export const sendGroupJoinInfo = async ({
  chatId,
  name,
}: GroupJoinNotification) => {
  console.log("Group join info sent");
  return await axios.post("/wa-logic-service/api/sendGroupJoinInfo", {
    chatId,
    name,
  });
};
