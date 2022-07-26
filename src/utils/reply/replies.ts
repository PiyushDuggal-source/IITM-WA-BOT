import { List } from "whatsapp-web.js";
import { random } from "../../actions/sendMessage";
import secretVariables from "../../config/config";
import { CommandButtons, Greetings, PingReplies } from "../../types/types";
import { User_AllCommands } from "../Commands/allCmds";
export const PING_REPLIES: PingReplies = {
  admin: [
    "Hello Sir 🙏",
    "Need any help Sir?🙇‍♂️",
    "Aye aye Capn'",
    "Yes Capn'",
    "I am here Capn'",
  ],
  adminMsgNumber: 5,
  members: [
    "Hey-Yo!",
    "Hola",
    "Yo ✌",
    "🤘 hey",
    "What iz up?",
    "👀 you called me?",
    "Yes please!",
    "Yes? ",
  ],
  memberMsgNumber: 8,
};

const getUserCommands = (userCmdList: string[][]): CommandButtons => {
  const commands: CommandButtons = [];
  userCmdList.forEach((cmdList) => {
    cmdList?.forEach((cmd, index) => {
      if (index < 3) {
        commands.push({
          id: `${index}`,
          title: `${secretVariables.BOT_PREFIX}${cmd}`,
        });
      }
    });
  });
  return commands;
};
export const USER_COMMANDS = new List(
  `Hey.. Wanna checkout what ${secretVariables.BOT_NAME} can do?\nCheckout these commands!! 😉`,
  "Commands",
  [
    {
      title: "These are the commands you can perform as a USER",
      rows: getUserCommands(User_AllCommands),
    },
  ]
);

export const GREETINGS: Greetings = {
  admin: ["Sir", "Master", "Monsieur"],
  adminMsgNumer: 3,
  member: [
    "Fellow",
    "Person",
    "Dude",
    "Gentle-men/women",
    "Brother/Sister",
    "My Friend!",
  ],
  memberMsgNumber: 6,
};

export const HOLIDAY_REPLIES = {
  members: [
    // `FINALLY *IITian* you are *free*... but wait.. not so fast... THIS IS ONLY FOR THIS DAY... from next day... you will suffer again..... 😈

    // ERROR 🚫 ERROR 🚫 ERROR 🚫 ERROR
    // ERROR 🚫 ERROR 🚫 ERROR 🚫 ERROR
    // ERROR 🚫 ERROR 🚫 ERROR 🚫 ERROR
    // ERROR 🚫 ERROR 🚫 ERROR 🚫 ERROR

    // Process loading: 0%
    // Process loading: 50%
    // Process loading: 100%

    // back online::
    // ${secretVariables.BOT_NAME} : Sorry fellas, an Evil took my place, now everything is fine!!! and yea... *There is no class today!* 😅

    // `,
    `*There is no Class Today!!* \nGive some of your precious time and think about me and help me be a better BOT!!\nor Go take some rest and work on *something special* to you, utilize your *free* time!\n*Never stop learning!*
     `,
    `Cool, there is *no* class today ${
      GREETINGS.member[random(GREETINGS.adminMsgNumer)]
    }!`,
    `Q1: There are N number of classes today and N = 0 then guess how many classes are there? *1 Point*\nA: NO Class\nB: C\nC: A`,

    "no class today",
  ],
  memberMsgNumber: 3,
};

export const HEY_EMOJIES = ["✌", "👋", "🤘", "👐", "🤓", "🤗"];
