import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import { adminControl } from "./Admin/adminController";
import { userControl } from "./Users/userController";

export const main = (
  client: WAWebJS.Client,
  message: WAWebJS.Message,
  role: MessageType
) => {
  // if (role) {
  //   adminControl(client, message));
  // } else if (role === "USER") {
  //   userControl(client, message));
  // }
};
