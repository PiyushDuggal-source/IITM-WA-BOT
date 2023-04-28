import isToday from "date-fns/isToday"
import { differenceInMinutes } from "date-fns";
import * as WAWebJS from "whatsapp-web.js";
import { CALENDAR } from "../resources/calendar";
import { Calendar } from "../types/types";

// const getDifferenceInMins = (date1: Date, date2: Date) => {
//   var diff = (date1.getTime() - date2.getTime()) / 60000;
//   return Math.abs(Math.round(diff));
// };

// Add Indian Time - `Classic Function`
// export function addIndianTime(date: Date): Date {
//   let numberOfMilliseconds = date.getTime();
//   let t0530inMilliseconds = 19800000;
//   date = new Date(numberOfMilliseconds + t0530inMilliseconds);
//   return date;
// }

const checkForClass = (calendar: Calendar): Calendar | [] => {
  let todayCalendar: Calendar = [];
  const date = new Date();
  calendar.forEach((clndr) => {
    if (isToday(clndr.date)) {
      const difference = differenceInMinutes(clndr.date, date);
      if (difference < 5 && 0 < difference) {
        todayCalendar.push({ ...clndr, numberOfMinutes: 5 });
      } else if (difference < 10 && 0 < difference) {
        todayCalendar.push({ ...clndr, numberOfMinutes: 10 });
      }
    }
  });
  return todayCalendar;
};

export const sendClassNotification = (client: WAWebJS.Client, chatId: string) => {
  const classes = checkForClass(CALENDAR);
  if (!!classes.length) {
    let message = "⚠ Attention Guys!! ⚠ CLASS!\n\n📘*Today's Classes*📘";
    classes.forEach(
      (event) =>
        (message += `\n -------------------------------- \n📖 *Topic*      : *${event.topic}* \n🕰 *Time*   : _Starting in *${event.numberOfMinutes}* minutes_\n📅 *Date*       : *Today!* \n🏫 *Course*  : ${event.courseName}\n*Calendar Link*: https://calendar.google.com/calendar/u/0/r/day `)
    );
    client.sendMessage(chatId, message);
  }
};
