import WAWebJS from "whatsapp-web.js";
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
      `${secretVariables.BOT_NAME} : ${
        HOLIDAY_REPLIES.members[random(HOLIDAY_REPLIES.memberMsgNumber)]
      } \n:${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`
    );
  }
};
