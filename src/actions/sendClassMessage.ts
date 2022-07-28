import * as WAWebJS from "whatsapp-web.js";
import secretVariables from "../config/config";
import { CALENDAR } from "../resources/calendar";
import { Calendar } from "../types/types";
import { FOOTERS } from "../utils/reply/footers";
import { HOLIDAY_REPLIES } from "../utils/reply/replies";
import { random } from "./sendMessage";

const checkForClass = (calendar: Calendar) => {
  const date = new Date();
  return calendar.filter(
    (event) => event.date.toDateString() === date.toDateString()
  );
};

export const sendClassMessage = (bot: WAWebJS.Chat) => {
  const events = checkForClass(CALENDAR);
  if (!events.length) {
    bot.sendMessage(
      `${process.env.BOT_NAME as String} : ${
        HOLIDAY_REPLIES.members[random(HOLIDAY_REPLIES.memberMsgNumber)]
      } \n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`
    );
  } else {
    let message = "📘*Today's Classes*📘";
    events.forEach(
      (event) =>
        (message += `\n -------------------------------- \n📖 *Topic* : *${event.topic}* \n🕰 *Timing* : _${event.time}_ \n📅 *Date* : *Today!* \n🏫 *Course* : ${event.courseName}\n `)
    );
    bot.sendMessage(message);
  }
};
