import * as WAWebJS from "whatsapp-web.js";
import { CALENDAR } from "../resources/calendar";
import { Calendar } from "../types/types";

const getDifferenceInMins = (date1: Date, date2: Date) => {
  var diff = (date1.getTime() - date2.getTime()) / 60000;
  return Math.abs(Math.round(diff));
};

const checkForClass = (calendar: Calendar): Calendar => {
  let todayCalendar: Calendar = [];
  const date = new Date();
  calendar.forEach((clndr) => {
    const difference = getDifferenceInMins(clndr.date, date);
    if (difference < 5) {
      todayCalendar.push({ ...clndr, numberOfMinutes: 5 });
    } else if (difference < 10) {
      todayCalendar.push({ ...clndr, numberOfMinutes: 10 });
    }
  });
  return todayCalendar;
};

checkForClass(CALENDAR);
export const sendClassNotification = (bot: WAWebJS.Chat) => {
  const classes = checkForClass(CALENDAR);
  if (!!classes.length) {
    let message = "⚠ Attention Guys!! ⚠ CLASS!\n\n📘*Today's Classes*📘";
    classes.forEach(
      (event) =>
        (message += `\n -------------------------------- \n📖 *Topic*      : *${event.topic}* \n🕰 *Time*   : _Starting in *${event.numberOfMinutes}* minutes_\n📅 *Date*       : *Today!* \n🏫 *Course*  : ${event.courseName}\n `)
    );
    bot.sendMessage(message);
  }
};
