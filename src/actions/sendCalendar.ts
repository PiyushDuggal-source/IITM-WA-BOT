import * as WAWebJS from "whatsapp-web.js";
import { MessageContent } from "whatsapp-web.js";
import { CALENDAR } from "../resources/calendar";
import { Calendar } from "../types/types";
import { format, isToday } from "date-fns";
import { FOOTERS } from "../utils/reply/footers";
import { random } from "./sendMessage";

const calendarMessageFormat = (calendar: Calendar): MessageContent => {
  let message: string = "*This is you Calendar!!! 🗓*";
  calendar.forEach(
    (event) =>
      (message += `\n -------------------------------- \n📖 *Topic* : *${
        event.topic
      }* \n🕰 *Timing* : _${event.time}_ \n📅 *Date* : ${format(
        event.date,
        "eeee, LLLL d, yyyy"
      )}  \n🏫 *Course* : ${event.courseName}\n*Calendar Link* : ${
        isToday(event.date)
          ? "https://calendar.google.com/calendar/u/0/r/day"
          : `https://calendar.google.com/calendar/u/0/r/day/${event.date.getFullYear()}/${
              event.date.getMonth() + 1
            }/${event.date.getDate()}`
      }`)
  );
  return message + `\n\n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
};

export const sendCalendar = (bot: WAWebJS.Chat) => {
  bot.sendMessage(calendarMessageFormat(CALENDAR));
};
