import * as WAWebJS from "whatsapp-web.js";
import * as dotenv from "dotenv";
import { HEY_EMOJIES } from "../utils/reply/replies";
import { random } from "./sendMessage";
dotenv.config();

const CONTENT = `Hey, Checkout how I *${process.env.BOT_NAME}* created!!${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}\nCheck the Source Code from here:\nhttps://github.com/PiyushDuggal-source/IITM-WA-BOT\n\n*Got any _Suggestion/Issue_?* Report here:\nhttps://github.com/PiyushDuggal-source/IITM-WA-BOT/issues\n\n*Want to contribute?😎 _Direct Messege me!_*`;

export const sendSource = (bot: WAWebJS.Chat) => {
  bot.sendMessage(CONTENT);
};
