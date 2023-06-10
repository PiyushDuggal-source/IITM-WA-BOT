import * as WAWebJS from "whatsapp-web.js";
import { adminContent } from "../actions/introduction";
import { isMention } from "../actions/isMention";
import { WhatsAppBot } from "./waBot";

export const main = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message
) => {
  const whatsAppBot = new WhatsAppBot({
    client,
    messageInstance,
  });
  const mention = isMention(messageInstance);
  if (mention) return whatsAppBot.sendMessage(adminContent);
};
