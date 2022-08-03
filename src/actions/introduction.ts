import * as WAWebJS from "whatsapp-web.js";
import { User_AllCommands } from "../utils/Commands/allCmds";
import { GREETINGS, HEY_EMOJIES } from "../utils/reply/replies";
import { random } from "./sendMessage";
import * as dotenv from "dotenv";
import { MessageType } from "../types/types";
dotenv.config();
const CMD_NAMES = [
  "\n*These are the Calendar Commands! : You can see the IIT-M Google Calendar Events from RIGHT HERE ✌ Just by using these commands!*\n",
  "\n*These are the Class Commands: You can see if there is any class today or not!*\n",
  '\n*And these are the commands which will show you the other commands, LOL "Commands representing Commands" its like commenting the commented code:*\n',
  `\n*These are the commands for getting Notes from RIGHT HERE* _If you have notes and want to share, please Share, I will add them in *${process.env.BOT_NAME}*, then it will be accessible for ALL of us!_\nyou can also use it individually for all notes or you can use the filter\n*E.G: !notes Stats*\n`,
  "\n*These are the commands for chatting with me...*\n",
  "\n*Want some Help?? try these commands!!*\n",
  "\n*Want to check my _Source Code_?* Use this command:\n",
];
const getCommands = (allCommands: string[][]): string => {
  let msg = "";
  allCommands.forEach((cmds, index) => {
    msg += CMD_NAMES[index];
    cmds.forEach(
      (cmd, index) =>
        (msg += `${index + 1}. ${process.env.BOT_PREFIX as string}${cmd}${
          index !== cmds.length ? "\n" : ""
        }`)
    );
  });

  return msg;
};

const commands = (cmds: string[]): string => {
  let msg = "";
  cmds.forEach((cmd, index) => {
    msg += `${index + 1}. ${process.env.BOT_PREFIX as string}${cmd}${
      index + 1 !== cmds.length ? "\n" : ""
    }`;
  });
  return msg;
};

export const introduction = (bot: WAWebJS.Chat, user: MessageType) => {
  if (user === "USER") {
    const content = `Hey ${HEY_EMOJIES[random(HEY_EMOJIES.length)]} ${
      GREETINGS.member[random(GREETINGS.memberMsgNumber)]
    }!\nI am WhatsApp Bot!!\n\nMy ${
      GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
    } calls me *${
      process.env.BOT_NAME as String
    }* (named after the first ever chatbot ${
      HEY_EMOJIES[random(HEY_EMOJIES.length)]
    })\n\nMy Purpose is to help you in your journey to become an *IITian* ✌ fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL\n\nType this commands to see all the commands!\n*!AllCmds*`;
    bot.sendMessage(content);
  } else {
    const content = `Hey ${HEY_EMOJIES[random(HEY_EMOJIES.length)]} ${
      GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
    }!\nI am Your WhatsApp Bot!!\nWhat can I do for you?\nMy Purpose is to help you in your journey to become an *IITian* ✌ fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL\n\nType this commands to see all the commands!\n*!AllCmds*`;
    bot.sendMessage(content);
  }
};

export const sendCommands = (bot: WAWebJS.Chat) => {
  bot.sendMessage(
    `----------These are the Bot Commands!!----------\n${getCommands(
      User_AllCommands
    )}`
  );
};
