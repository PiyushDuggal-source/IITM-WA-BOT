import * as WAWebJS from "whatsapp-web.js";
import { BOT } from "..";
import { CALENDAR } from "../resources/calendar";
import { Calendar, MessageType } from "../types/types";
import { FOOTERS } from "../utils/reply/footers";
import { HOLIDAY_REPLIES } from "../utils/reply/replies";
import { random, sendMessage } from "./sendMessage";

const checkForClass = (calendar: Calendar) => {
  const date = new Date();
  return calendar.filter(
    (event) => event.date.toDateString() === date.toDateString()
  );
};

const HOLYDAY_MSG = `${process.env.BOT_NAME as String} : ${
  HOLIDAY_REPLIES.members[random(HOLIDAY_REPLIES.members.length)]
} \n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;

export const sendClassMessage = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  const events = checkForClass(CALENDAR);
  if (who === "ADMIN") {
    const chats = await client.getChats();
    const WA_BOT = chats[BOT];
    if (!events.length) {
      WA_BOT.sendMessage(HOLYDAY_MSG);
    } else {
      let message = "📘*Today's Classes*📘";
      events.forEach(
        (event) =>
          (message += `\n -------------------------------- \n📖 *Topic* : *${event.topic}* \n🕰 *Timing* : _${event.time}_ \n📅 *Date* : *Today!* \n🏫 *Course* : ${event.courseName}\n `)
      );
      WA_BOT.sendMessage(message);
    }
  } else if (who !== "NONE") {
    if (!events.length) {
      sendMessage(client, HOLYDAY_MSG, messageInstance, who, undefined, {
        classMsg: true,
      });
    } else {
      let message = "📘*Today's Classes*📘";
      events.forEach(
        (event) =>
          (message += `\n -------------------------------- \n📖 *Topic* : *${event.topic}* \n🕰 *Timing* : _${event.time}_ \n📅 *Date* : *Today!* \n🏫 *Course* : ${event.courseName}\n `)
      );
      sendMessage(client, message, messageInstance, who, undefined, {
        classMsg: true,
      });
    }
  }
};
