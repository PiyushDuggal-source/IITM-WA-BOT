import * as WAWebJS from "whatsapp-web.js";
import { MessageMedia } from "whatsapp-web.js";
import { BOT } from "..";
import { MessageType } from "../types/types";
import { sendAndDeleteMsg } from "./sendAndDeleteMsg";

export const sendImpDates = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  const impDatesImg = MessageMedia.fromFilePath(
    `${__dirname}/../assets/images/impDates/impDates.png`
  );
  if (who === "ADMIN") {
    const chats = await client.getChats();
    const bot = chats[BOT];
    bot.sendMessage(impDatesImg, {
      caption: "<------*Important Dates*------>",
    });
  } else if (who !== "NONE") {
    sendAndDeleteMsg(client, messageInstance, who, impDatesImg);
  }
};

export const sendEligibility = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  const eligibilityImg = MessageMedia.fromFilePath(
    `${__dirname}/../assets/images/eligibility/eligibility.png`
  );
  if (who === "ADMIN") {
    const chats = await client.getChats();
    const bot = chats[BOT];
    bot.sendMessage(eligibilityImg, {
      caption: "*Eligibility to appear for the qualifier exam (regular entry)*",
    });
  } else if (who !== "NONE") {
    sendAndDeleteMsg(client, messageInstance, who, eligibilityImg);
  }
};
