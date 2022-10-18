import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import { adminControl } from "./Admin/adminController";
import { userControl } from "./Users/userController";

export const main = (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  role: MessageType
) => {
  if (role) {
    adminControl(client,messageInstance);
  } else if (role === "USER") {
    // userControl(client, message));
  }
};
