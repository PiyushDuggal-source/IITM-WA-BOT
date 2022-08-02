import * as WAWebJS from "whatsapp-web.js";
import { NOTES } from "../resources/notes";
import { MessageType } from "../types/types";
import { GREETINGS, HEY_EMOJIES } from "../utils/reply/replies";
import { random } from "./sendMessage";

export const sendNotes = (bot: WAWebJS.Chat, who: MessageType) => {
  let adminMsg = `*These are the Notes my ${
    GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
  }* ${HEY_EMOJIES[random(HEY_EMOJIES.length)]}\n\n`;

  let userMsg = `*These are the Notes my ${
    GREETINGS.member[random(GREETINGS.memberMsgNumber)]
  }* ${
    HEY_EMOJIES[random(HEY_EMOJIES.length)]
  }\nNote: _I am not connected, associated, affiliated with any of the Owners of these links to Promote, Encourage any Channel/Group, I found the links on internet only._`;
  // }\n\n`;
  let content = who === "ADMIN" ? adminMsg : userMsg;
  NOTES.forEach((note) => {
    content += `\n\nName : *${note.name}*\n\n -----------*Content*------------`;
    note.content.forEach((noteContent) => {
      content += `\n\nName of the Content: _${noteContent.name}_\nLink: ${noteContent.link}`;
    });
  });

  bot.sendMessage(content);
};
