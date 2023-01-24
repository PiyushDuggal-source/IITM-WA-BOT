import * as WAWebJS from "whatsapp-web.js";
import { MessageType } from "../types/types";
import * as dotenv from "dotenv";
import { WA_BOT_ID } from "..";
import { UserModel } from "../models/models";
import { REACT_EMOGIES } from "../utils/reply/replies";
import { random } from "./sendMessage";
dotenv.config();

interface Message extends WAWebJS.Message {
  _data?: {
  notifyName?: string
  }
}

/**
 * INFO:
 * @param { string } message Get the `Message` object
 * @returns { MessageType }
 */
export const checkMessage = async (
  message: Message
): Promise<MessageType> => {
  if (
    (message.fromMe || message.id.fromMe) &&
    String(message.to) === String(WA_BOT_ID)
  ) {
    return {
      name: message._data?.notifyName,
      role: "OWNER",
      chatId: message.from,
    };
  } else if (String(message.from) === String(WA_BOT_ID)) {
    const grpAdmins = await UserModel.find({ roles: "ADMIN" });
    if (grpAdmins.length === 0) {
      return {
        name: message._data?.notifyName,
        role: "STUDENT",
        chatId: message.author || "",
      };
    } else {
      const isAdmin = grpAdmins.some(
        (admin) => admin.recipitantId === message.from
      );
      if (isAdmin) {
        return {
          name: message._data?.notifyName,
          role: "ADMIN",
          chatId: message.author || "",
        };
      } else {
        return {
          role: "NONE",
          chatId: message.id.remote,
        };
      }
    }
  } else {
    return {
      role: "NONE",
      chatId: message.id.remote,
    };
  }
};

/**
 * INFO:
 * @param { WAWebJS.Message } messageInstance takes messageInstance
 * reacts on messages with random emojis
 */
export const react = async (messageInstance: WAWebJS.Message) => {
  await messageInstance.react(REACT_EMOGIES[random(REACT_EMOGIES.length)]);
};
