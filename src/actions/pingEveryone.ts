import { Client, Message } from "whatsapp-web.js";
import { BOT } from "..";
import { WA_Grp } from "../types/types";

export const pingEveryone = async (
  client: Client,
  message: Message
) => {
  const allChats = await client.getChats();
  const WA_BOT = allChats[BOT];
  const mentions = [];
  let text = "";
  for (const participants of ( WA_BOT as WA_Grp )?.participants || []) {
    text += `@${participants.id.user} `;
    const contact = await client.getContactById(participants.id._serialized);
    mentions.push(contact);
  }
  message.reply(text, "", { mentions });
};
