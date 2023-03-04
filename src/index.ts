import * as WAWebJS from 'whatsapp-web.js';
import {
  Client,
  GroupNotification,
  LocalAuth,
  MessageMedia,
} from 'whatsapp-web.js';
import qrcode = require('qrcode-terminal');
import { checkMessage, superCmdFilter } from './actions/messageActions';
import { main } from './controllers/main';
import { introduction, sendCommands } from './actions/introduction';
import {
  GREETINGS,
  HEY_EMOJIES,
  RANDOM_WAKEUP_MSG,
  REACT_EMOGIES,
  USER_JOIN_GREETINGS,
} from './utils/reply/replies';
import { random } from './actions/sendMessage';
import express from 'express';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import { COMMANDS_CMDS } from './utils/Commands/instructions';
import { grpLeaveStickers } from './assets/assets';
import { log } from './utils/log';
import { MessageType, WA_Grp } from './types/types';
import { sendAndDeleteMsg } from './actions/sendAndDeleteMsg';
import { pingEveryone } from './actions/pingEveryone';
import { addUser, increaseNumberOfCmd, removeUser } from './services/mongo';
import { connectToDb } from './utils/db/connect';
import { removeMember } from './actions/removeMember';

// @ts-ignore
import {
  GrpJoinNotification,
  GrpLeaveNotification,
  MessageTypeOfWA,
} from './utils/returnTypeOfWA';
import { sendClassNotification } from './actions/sendClassNotification';
dotenv.config();

import logger from "./utils/logger/index";

// Initialized App
const app = express();

// For Development Enviornment
const LOCAL = String(process.env.dev) === 'true';
export const BOT = LOCAL ? 1 : 0;
export const WA_BOT_ID = LOCAL
  ? (process.env.WA_BOT_ID_DEV as string)
  : (process.env.WA_BOT_ID as string);

const DB_URL = LOCAL
  ? (process.env.DEV_DB_URL as string)
  : (process.env.PROD_DB_URL as string);

// Connect To DB
connectToDb(DB_URL);

// Initializing Client
const client = new Client({
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  authStrategy: new LocalAuth({
    dataPath: `${__dirname}/sessions`,
  }),
});

// For QR Code
client.on('qr', (qr: string) => {
  qrcode.generate(qr, { small: true });
  console.log(qr);
  logger.info("QR generated", { label: "INFO" });
});

// Event "READY"
client.on("ready", async () => {
  logger.info("Client Connected", { label: "CONNECTED" });
  client.sendMessage(
    process.env.WA_BOT_ID_DEV as string,
    (process.env.BOT_NAME as string) +
      `: ${RANDOM_WAKEUP_MSG[random(RANDOM_WAKEUP_MSG.length)]}`
  );
});

/**
 * INFO:
 * Event "MESSAGE_CREATE"
 * @returns { MessageTypeOfWA }
 */
client.on('message_create', async (message: WAWebJS.Message) => {
  // Check if message is from Group or Not, if yes, who contains whoean or userID
  const userObj: MessageType = await checkMessage(message);
  // Mention Logic
  const str: string[] = message.mentionedIds;
  const isMention =
    (message.body[0] === '@' && str.includes('919871453667@c.us')) ||
    message.body
      .toLowerCase()
      .split(' ')
      .includes(`@${(process.env.BOT_NAME as String).toLocaleLowerCase()}`);
  if (
    isMention &&
    userObj.role !== 'NONE' &&
    message.body.split(' ').length === 1
  ) {
    introduction(client, userObj, message);
  }
  let allChats = await client.getChats();
  const WA_BOT: WA_Grp = allChats[BOT];

  const cmd = message.body.split(',')[0].toLocaleLowerCase();

  // Command check logic
  if (COMMANDS_CMDS.includes(cmd)) {
    sendCommands(client, message, userObj);
    await increaseNumberOfCmd({ recipitantId: userObj.chatId });
    return;
  }
  if (userObj.role === 'STUDENT' && superCmdFilter(message.body)) {
    WA_BOT.sendMessage(
      'You cannot perform this action, because you are not a BOT ADMIN, you will get ban if you use this frequently :)'
    );
    return;
  }

  if (userObj.role !== 'NONE' && superCmdFilter(message.body)) {
    console.log('entering removing');
    await removeMember(WA_BOT as WAWebJS.GroupChat, userObj, message);
    return;
  }

  // Ping Everyone
  if (userObj.role === 'OWNER' && ['everyone'].includes(message.body)) {
    await pingEveryone(client, message);
    return;
  }

  logger.info(`who ${who}`, { label: messageId });
  // Checks if message's first letter is BOT_PREFIX
  if (
    userObj.role !== 'NONE' &&
    message.body[0] === (process.env.BOT_PREFIX as string)
  ) {
    await main(client, message, userObj);
    return;
  }
  // WARN: ONLY USE ONCE
  if (userObj.role === 'OWNER' && message.body === 'load') {
    WA_BOT.participants?.forEach(async (participant) => {
      let recipitantId = participant.id._serialized;
      await addUser({ recipitantId });
    });
    allChats[1].sendMessage(
      'SUCCESSFULLY ADDED ALL THE STUDENTS IN THE DB, MASTER!'
    );
    return;
  }
});

/**
 * INFO:
 * Event "GROUP_JOIN"
 * @returns { GrpJoinNotification }
 */
client.on('group_join', async (msg: GroupNotification) => {
  if (msg.chatId === WA_BOT_ID) {
    log({
      msg: `${msg.recipientIds[0]} Joined the Group`,
      type: 'GROUP_JOIN',
      error: false,
    });
    const contact = await client.getNumberId(msg.recipientIds[0]);
    const details = await client.getContactById(contact?._serialized || '');
    if (details.name) {
      sendAndDeleteMsg(
        client,
        msg,
        msg.recipientIds[0],
        `${process.env.BOT_NAME as String}: *${
          details.name
        }* Thanks for joining the Group!\n${
          USER_JOIN_GREETINGS.messages[random(USER_JOIN_GREETINGS.messageNum)]
        }\nHey new ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
          HEY_EMOJIES[random(HEY_EMOJIES.length)]
        }!\nCheck out what bot(${
          process.env.BOT_NAME as String
        }) can do by *Mentioning* me!\nor check the Commands of ${
          process.env.BOT_NAME as String
        } by typing\n*${
          process.env.BOT_PREFIX as string
        }AllCmds*\n*IN THE GROUP*\nSimply watch the Video: https://drive.google.com/file/d/1tl33VralV0AXQ2EDJYnjC6r2eaCUHr-l/view?usp=sharing`
      );

      // const sticker = MessageMedia.fromFilePath(
      //   `${__dirname}/assets/images/grpJoinLeaveImgs/${
      //     grpJoinStickers.images[random(grpJoinStickers.numOfImgs)]
      //   }.png`
      // );
      // client.sendMessage(msg.recipientIds[0], sticker, {
      //   sendMediaAsSticker: true,
      // });
    } else {
      sendAndDeleteMsg(
        client,
        msg,
        msg.recipientIds[0],
        `${process.env.BOT_NAME as String}: ${
          GREETINGS.member[random(GREETINGS.memberMsgNumber)]
        }, Thanks for Joining the Group!\n${
          USER_JOIN_GREETINGS.messages[random(USER_JOIN_GREETINGS.messageNum)]
        }\nHey new ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
          HEY_EMOJIES[random(HEY_EMOJIES.length)]
        }!\nCheck out what bot(${
          process.env.BOT_NAME as String
        }) can do by *Mentioning* me!\nor check the Commands of ${
          process.env.BOT_NAME as String
        } by typing\n*${
          process.env.BOT_PREFIX as string
        }AllCmds*\n*IN THE GROUP*\nSimply watch the Video: https://drive.google.com/file/d/1tl33VralV0AXQ2EDJYnjC6r2eaCUHr-l/view?usp=sharing`
      );
      // const sticker = MessageMedia.fromFilePath(
      //   `${__dirname}/assets/images/grpJoinLeaveImgs/${
      //     grpJoinStickers.images[random(grpJoinStickers.numOfImgs)]
      //   }.png`
      // );
      // client.sendMessage(msg.recipientIds[0], sticker, {
      //   sendMediaAsSticker: true,
      // });
    }
    const recipitantId = msg.recipientIds[0];
    await addUser({ recipitantId });
  }
});

/**
 * INFO:
 * Event "GROUP_LEAVE"
 * @returns { GrpLeaveNotification }
 */
client.on('group_leave', async (notification: WAWebJS.GroupNotification) => {
  let grpId = notification.chatId;
  if (grpId === WA_BOT_ID) {
    log({
      msg: `${notification.recipientIds[0]} left the Group`,
      type: 'GROUP_LEFT',
      error: false,
    });
  }
  if (notification.chatId === WA_BOT_ID && notification.type !== 'remove') {
    const sticker = MessageMedia.fromFilePath(
      `${__dirname}/../src/assets/images/grpJoinLeaveImgs/${
        grpLeaveStickers.images[random(grpLeaveStickers.numOfImgs)]
      }.png`
    );
    const allChats = await client.getChats();
    const WA_BOT = allChats[BOT];
    WA_BOT.sendMessage(`${process.env.BOT_NAME as String}: somebody left`);
    WA_BOT.sendMessage(sticker, { sendMediaAsSticker: true });
  }
  const recipitantId = notification.recipientIds[0];
  await removeUser({ recipitantId });
});

// For checking the classes
setInterval(async () => {
  const chats = await client.getChats();
  const WA_BOT: WA_Grp = chats[BOT];
  sendClassNotification(WA_BOT);
  logger.info("Checked", { label: "INFO" });
}, 5 * 60 * 1000); // every 5 minutes

client.initialize();

// Get Bot LIVE
// Continuously ping the server to prevent it from becoming idle
// const intervalId = setInterval(async () => {
//   await axios.get("https://iitm-wa-bot.onrender.com/");
//   console.log("[SERVER] Pinged server");
// }, 14 * 60 * 1000); // every 14 minutes
//
// // To stop the bot at Night
// const etaMs = endOfToday().getTime() - addIndianTime(new Date()).getTime();
// setInterval(() => {
//   clearInterval(intervalId);
// }, etaMs);

const port = Number(process.env.PORT) || 3005;

app.get('/', (_: Request, res: Response) => {
  res.send('BOT');
});
app.listen(port, () =>
  logger.info(`[SERVER] Server is running on port ${port}`, { label: "INFO" })
);

// All other pages should be returned as error pages
app.all('*', (_: Request, res: Response) => {
  res
    .status(404)
    .send(
      "<h1>Sorry, this page does not exist!</h1><br><a href='/'>Back to Home</a>"
    );
});
