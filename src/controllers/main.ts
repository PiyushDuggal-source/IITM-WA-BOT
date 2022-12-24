import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import { adminControl } from "./Admin/adminController";
import { userControl } from "./Users/userController";

export const main = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  if (who === "ADMIN") {
    await adminControl(client, messageInstance, who);
  } else if (who !== "NONE") {
    await userControl(client, messageInstance, who);
  }
};
