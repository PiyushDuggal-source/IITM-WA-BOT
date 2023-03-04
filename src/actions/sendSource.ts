import * as WAWebJS from 'whatsapp-web.js';
import * as dotenv from 'dotenv';
import { HEY_EMOJIES } from '../utils/reply/replies';
import { random } from './sendMessage';
import { MessageType } from '../types/types';
import { BOT } from '..';
import { react } from './messageActions';
dotenv.config();

const CONTENT = `Hey, Checkout how I *${process.env.BOT_NAME}* created!!${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}\nCheck the Source Code from here:\nhttps://github.com/PiyushDuggal-source/IITM-WA-BOT\n\n*Give it a star, if you like it!*\n\n*Got any _Suggestion/Issue_?* Report here:\nhttps://github.com/PiyushDuggal-source/IITM-WA-BOT/issues\n\n*Want to contribute?😎 _Direct Messege me!_*`;

export const sendSource = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  const chats = await client.getChats();
  const bot = chats[BOT];
  if (who.role !== 'NONE') {
    bot.sendMessage(CONTENT);
    react(messageInstance);
  }
};
