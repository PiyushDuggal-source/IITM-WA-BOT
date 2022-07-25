import WAWebJS, { MessageContent } from "whatsapp-web.js";
import { CALENDAR } from "../resources/calendar";
import { Calendar } from "../types/types";

const calendarMessageFormat = (calendar: Calendar): MessageContent => {
  let message: string = "*This is you Calender!!! 🗓*";
  const msg = calendar.map((event) => {
    return message.concat(
      `\n \n📖 *Topic* : *${event.topic}* \n🕰 *Timing* : _${event.time}_ \n📅 *Date* : ${event.date}  \n🏫 *Course* : ${event.courseName}\n `
    );
  });
  return msg.join(" ");
};

export const sendCalendar = (bot: WAWebJS.Chat) => {
  bot.sendMessage(calendarMessageFormat(CALENDAR));
};
