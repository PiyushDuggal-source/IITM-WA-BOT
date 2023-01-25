import * as WAWebJS from "whatsapp-web.js";
import { AllRoles, MessageType } from "../types/types";
import * as dotenv from "dotenv";
import { WA_BOT_ID } from "..";
import { UserModel } from "../models/models";
import { REACT_EMOGIES } from "../utils/reply/replies";
import { random } from "./sendMessage";
import { OWNER_ADMIN_CMDS } from "../utils/Commands/allCmds";
dotenv.config();

interface Message extends WAWebJS.Message {
  _data?: {
    notifyName?: string;
  };
}

/**
 * INFO:
 * @param { string } message Get the `Message` object
 * @returns { MessageType }
 */
export const checkMessage = async (message: Message): Promise<MessageType> => {
  if (
    (message.fromMe || message.id.fromMe) &&
    String(message.to) === String(WA_BOT_ID)
  ) {
    return {
      name: message._data?.notifyName, role: "ADMIN",
      chatId: message.from,
    };
  } else if (String(message.from) === String(WA_BOT_ID)) {
    const grpAdmins = await UserModel.find({ roles: "ADMIN" });
    const isAdmin = grpAdmins.some(
      (admin) => admin.recipitantId === message.author
    );
    if (!isAdmin) {
      return {
        name: message._data?.notifyName,
        role: "STUDENT",
        chatId: message.author || "",
      };
    } else {
      return {
        name: message._data?.notifyName,
        role: "ADMIN",
        chatId: message.author || "",
      };
    }
  } else {
    return {
      role: "NONE",
      chatId: message.author || "",
    };
  }

  //   } else {
  //     if (isAdmin) {
  //       return {
  //         name: message._data?.notifyName,
  //         role: "ADMIN",
  //         chatId: message.author || "",
  //       };
  //     } else {
  //       return {
  //         role: "NONE",
  //         chatId: message.id.remote,
  //       };
  //     }
  //   }
  // } else {
  //   return {
  //     role: "NONE",
  //     chatId: message.id.remote,
  //   };
  // }
};

/**
 * INFO:
 * @param { WAWebJS.Message } messageInstance takes messageInstance
 * reacts on messages with random emojis
 */
export const react = async (messageInstance: WAWebJS.Message) => {
  await messageInstance.react(REACT_EMOGIES[random(REACT_EMOGIES.length)]);
};

/**
 * INFO:
 * This function filters the cmds.
 * @param { string } messageBody
 * @returns  { Boolean }
 */
export const superCmdFilter = (messageBody: string): Boolean => {
  const cmdByUser = messageBody.split(" ")[0].slice(1);
  return OWNER_ADMIN_CMDS.some((cmds) => cmds.some((cmd) => cmd === cmdByUser));
};
