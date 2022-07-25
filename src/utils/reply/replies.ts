import { List } from "whatsapp-web.js";
import secretVariables from "../../config/config";
import { CommandButtons, PingReplies } from "../../types/types";
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
  ],
  memberMsgNumber: 6,
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
console.log(getUserCommands(User_AllCommands));
export const USER_COMMANDS = new List(
  "These are the commands of the bot",
  "Commands",
  [
    {
      title: "These are the commands you can perform as a USER",
      rows: getUserCommands(User_AllCommands),
    },
  ]
);
