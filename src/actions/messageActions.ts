import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import * as dotenv from "dotenv";
import { WA_BOT_ID } from "..";
import { UserModel } from "../modals/modals";
dotenv.config();

/**
 *
 * @param { string } message Get the `Message` object
 * @returns  { MessageType } `NONE` | userID | `ADMIN`
 */
export const checkMessage = async (
  message: WAWebJS.Message
): Promise<MessageType> => {
  if (
    (message.fromMe || message.id.fromMe) &&
    String(message.to) === String(WA_BOT_ID)
  ) {
    return "OWNER";
  } else if (String(message.from) === String(WA_BOT_ID)) {
    const grpAdmins = await UserModel.find({ roles: "ADMIN" });
    if (!grpAdmins.length) {
      return message.author || "";
    } else {
      return "ADMIN";
    }
  } else {
    return "NONE";
  }
};
