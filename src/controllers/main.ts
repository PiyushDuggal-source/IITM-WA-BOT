import * as WAWebJS from 'whatsapp-web.js';
import { adminContent } from '../actions/introduction';
import { WhatsAppBot } from './waBot';
import { isMention } from '../helper';

export const main = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message
) => {
  const whatsAppBot = new WhatsAppBot({
    client,
    messageInstance,
  });

  // If mention
  const mention = isMention(messageInstance);
  if (mention) return whatsAppBot.sendMessage(adminContent);

};
