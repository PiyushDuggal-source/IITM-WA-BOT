import axios from "../axios";
import { MessageObject } from "../types";

export const sendMessageObject = async (messageObject: MessageObject) => {
  console.log(messageObject);
  
  await axios.post("/sendMessage", messageObject);
  console.log("sending message");
};
