import { List } from 'whatsapp-web.js';
import {
  CommandButtons,
  Greetings,
  PingReplies,
  UserJoinGreetings,
} from '../../types/types';
import { User_AllCommands } from '../Commands/allCmds';
import * as dotenv from 'dotenv';
dotenv.config();
export const PING_REPLIES: PingReplies = {
  admin: [
    'Hello Sir 🙏',
    'Need any help Sir?🙇♂️',
    "Aye aye Capn'",
    "Yes Capn'",
    "I am here Capn'",
  ],
  members: [
    'Hey-Yo!',
    'Hola',
    'Yo ✌',
    '🤘 hey',
    'Here I am!',
    '👀 you called me? I am up!',
    'Yes, my friend!',
    'I am HERE!',
    'I am Online!',
  ],
};

const getUserCommands = (userCmdList: string[][]): CommandButtons => {
  const commands: CommandButtons = [];
  userCmdList.forEach((cmdList) => {
    cmdList?.forEach((cmd, index) => {
      if (index < 3) {
        commands.push({
          id: `${index}`,
          title: `${process.env.BOT_PREFIX as string}${cmd}`,
        });
      }
    });
  });
  return commands;
};
export const USER_COMMANDS = new List(
  `Hey.. Wanna checkout what ${
    process.env.BOT_NAME as String
  } can do?\nCheckout these commands!! 😉`,
  'Commands',
  [
    {
      title: 'These are the commands you can perform as a USER',
      rows: getUserCommands(User_AllCommands),
    },
  ]
);

export const GREETINGS: Greetings = {
  admin: ['Sir', 'Master', 'Monsieur'],
  adminMsgNumber: 3,
  member: ['Fellow', 'Good Person', 'Dude', 'My Friend!', 'Good Guy', 'IITian'],
  memberMsgNumber: 6,
};

export const HOLIDAY_REPLIES = {
  members: [
    `FINALLY *IITian* you are *free*... but wait.. not so fast... THIS IS ONLY FOR THIS DAY... from next day... you will suffer again..... 😈

    ERROR 🚫 ERROR 🚫 ERROR 🚫 ERROR
    ERROR 🚫 ERROR 🚫 ERROR 🚫 ERROR
    ERROR 🚫 ERROR 🚫 ERROR 🚫 ERROR
    ERROR 🚫 ERROR 🚫 ERROR 🚫 ERROR

    Process loading: 0%
    Process loading: 50%
    Process loading: 100%

    back online::
    ${
      process.env.BOT_NAME as String
    } : Sorry fellas, an Evil took my place, now everything is fine!!! and yea... *There is no class today!* 😅

    `,

    `*There is no Class Today!!* \nGive some of your precious time and think about me and help me be a better BOT!!\nor Go take some rest and work on *something special* to you, utilize your *free* time!\n*Never stop learning!*
     `,

    // `Cool, there is *no* class today ${
    //   // GREETINGS.member[random(GREETINGS.adminMsgNumber)]
    // }!`,

    `Q1: There are N number of classes today and N = 0 then guess how many classes are there? *1 Point*\nA: NO Class\nB: C\nC: A`,

    'no class today',
  ],
  memberMsgNumber: 3,
};

export const HEY_EMOJIES = ['✌', '👋', '🤘', '👐', '🤗'];

export const USER_JOIN_GREETINGS: UserJoinGreetings = {
  messages: [
    `Hey everyone, someone joined... say Helloo to our new friend!!`,
    'Hey All, Someone joined, say Hi!!',
    'We got a new Member, Greetings, we are glad you joined our Group!',
  ],
  messageNum: 3,
};

export const REACT_EMOGIES = [
  '😌',
  '✌',
  '🤟',
  '🤝',
  '👌',
  '🫂',
  '🌚',
  '🌝',
  '⚡',
  '🥳',
  '😎',
  '🗿',
];

export const RANDOM_WAKEUP_MSG = [
  "🤖 I'm all hooked up, BOSS  🌞",
  '💻 All systems up, BOSS 🌅',
  "📡 I've got a strong signal, BOSS 🚀",
  "🌐 I'm fully online, BOSS 🚀",
  "🤝 I'm connected, BOSS 🤖",
  "🤝 I'm synced up, BOSS 🌝",
  "💡 I'm lit up, BOSS 🤖",
  "🔌 I'm plugged in, BOSS 🌝",
  "📶 I'm receiving some signal, BOSS 🌝",
  "🚀 I'm ready for liftoff, BOSS 🚀",
  "🛰️ I'm in orbit, BOSS 🌅",
  "🌍 I'm globally connected, BOSS 🌞",
  "🤖👋 Greetings, BOSS! I'm connected 🌝",
  "📈 I'm fully operational, BOSS 🤖",
  "🚪 I've entered the network, BOSS 🚀",
  "💬 I'm in communication, BOSS  🌞",
  "🤖💬 I'm online and at your service, BOSS 🌅",
  '🤖💬 I can listen to you BOSS 🌝',
];
