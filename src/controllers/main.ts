import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import { adminControl } from "./Admin/adminController";
import { userControl } from "./Users/userController";

export const main = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  userObj: MessageType
) => {
  if (userObj.role === "OWNER") {
    await adminControl(client, messageInstance, userObj);
  } else if (userObj.role !== "NONE") {
    await userControl(client, messageInstance, userObj);
  }
};
