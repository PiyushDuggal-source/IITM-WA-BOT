import WAWebJS from "whatsapp-web.js";
import secretVariables from "../config/config";
import { User_AllCommands } from "../utils/Commands/allCmds";
import { GREETINGS, HEY_EMOJIES } from "../utils/reply/replies";
import { random } from "./sendMessage";
const CMD_NAMES = [
  "\n*These are the Calendar Commands! : You can see the IIT-M Google Calendar Events from RIGHT HERE 🤩 Just by using these commands!*\n",
  "\n*These are the Class Commands: You can see if there is any class today or not!*\n",
  '\n*And these are the commands which will show you the other commands, LOL "Commands representing Commands" its like commenting the commented code:*\n',
  "\n*These are the commands for chatting with me...*\n",
];
const getCommands = (allCommands: string[][]): string => {
  let msg = "";
  allCommands.forEach((cmds, index) => {
    msg += CMD_NAMES[index];
    cmds.forEach(
      (cmd, index) =>
        (msg += `${index + 1}. ${secretVariables.BOT_PREFIX}${cmd}\n`)
    );
  });

  return msg;
};

export const introduction = (bot: WAWebJS.Chat, admin: boolean) => {
  if (!admin) {
    const content = `Hey ${HEY_EMOJIES[random(HEY_EMOJIES.length)]} ${
      GREETINGS.member[random(GREETINGS.memberMsgNumber)]
    }!\n\nI am WhatsApp Bot!!\n\nMy ${
      GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
    } calls me *${
      secretVariables.BOT_NAME
    }* (named after the first ever chatbot ${
      HEY_EMOJIES[random(HEY_EMOJIES.length)]
    })\n\nMy Purpose is to help you in your journey to become an *IITian* 🤩 fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL\nThese are the Bot Commands!!${getCommands(
      User_AllCommands
    )}`;
    bot.sendMessage(content);
  } else {
    const content = `Hey ${HEY_EMOJIES[random(HEY_EMOJIES.length)]} ${
      GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
    }!\nI am Your WhatsApp Bot!!\nWhat can I do for you?\nMy Purpose is to help you in your journey to become an *IITian* 🤩 fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL!\n\n-----------These are the Bot Commands!!-----------\n${getCommands(
      User_AllCommands
    )}`;
    bot.sendMessage(content);
  }
};
