import WAWebJS, { MessageContent } from "whatsapp-web.js";
import { CALENDAR } from "../resources/calendar";
import { Calendar } from "../types/types";
import { format } from "date-fns";
import { FOOTERS } from "../utils/reply/footers";
import { random } from "./sendMessage";

const calendarMessageFormat = (calendar: Calendar): MessageContent => {
  let message: string = "*This is you Calender!!! 🗓*";
  calendar.forEach(
    (event) =>
      (message += `\n -------------------------------- \n📖 *Topic* : *${
        event.topic
      }* \n🕰 *Timing* : _${event.time}_ \n📅 *Date* : ${format(
        event.date,
        "eeee, LLLL Lo, yyyy"
      )}  \n🏫 *Course* : ${event.courseName}\n `)
  );
  return message + `\n\n:${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
};

export const sendCalendar = (bot: WAWebJS.Chat) => {
  bot.sendMessage(calendarMessageFormat(CALENDAR));
};
