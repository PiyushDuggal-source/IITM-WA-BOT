import WAWebJS from "whatsapp-web.js";
import secretVariables from "../config/config";
import { GREETINGS, HEY_EMOJIES } from "../utils/reply/replies";
import { random } from "./sendMessage";

export const introduction = (bot: WAWebJS.Chat, admin: boolean) => {
  if (admin) {
    const content = `Hey ${HEY_EMOJIES[random(HEY_EMOJIES.length)]} ${
      GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
    }\nI am WhatsApp Bot!!\n My ${
      GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
    } calls me ${
      secretVariables.BOT_NAME
    } (named after the first ever chatbot ${
      HEY_EMOJIES[random(HEY_EMOJIES.length)]
    })\nMy Purpose is to help you in your journey to become an *IITian* 🤩 fast `;
  }
};
