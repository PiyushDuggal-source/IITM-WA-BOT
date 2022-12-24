import { Client, Contact, Message } from "whatsapp-web.js";
import { BOT } from "..";
import { WA_Grp } from "../types/types";

export const pingEveryone = async (
  client: Client,
  message: Message
  // who?: MessageType
) => {
  const allChats = await client.getChats();
  const WA_BOT = allChats[BOT];
  const mentions: Contact[] = [];
  let text = "";
  for (const participants of ( WA_BOT as WA_Grp )?.participants || []) {
    console.log(participants);
    text += `@${participants.id.user} `;
    const cont = await client.getContactById(participants.id._serialized);
    mentions.push(cont);
  }
  message.reply(text, "", { mentions });
};
