import * as WAWebJS from "whatsapp-web.js";
import { MessageMedia } from "whatsapp-web.js";

export const sendImpDates = (bot: WAWebJS.Chat) => {
  const impDatesImg = MessageMedia.fromFilePath(
    `${__dirname}/../assets/images/impDates/impDates.png`
  );
  bot.sendMessage(impDatesImg, { caption: "<------*Important Dates*------>" });
};

export const sendEligibility = (bot: WAWebJS.Chat) => {
  const eligibilityImg = MessageMedia.fromFilePath(
    `${__dirname}/../assets/images/eligibility/eligibility.png`
  );
  bot.sendMessage(eligibilityImg, {
    caption: "*Eligibility to appear for the qualifier exam (regular entry)*",
  });
};
