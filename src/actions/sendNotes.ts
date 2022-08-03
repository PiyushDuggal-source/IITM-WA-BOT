import * as WAWebJS from "whatsapp-web.js";
import { NOTES } from "../resources/notes";
import { MessageType } from "../types/types";
import { FOOTERS } from "../utils/reply/footers";
import { GREETINGS, HEY_EMOJIES } from "../utils/reply/replies";
import { random } from "./sendMessage";

let adminMsg = `*These are the Notes ${
  GREETINGS.admin[random(GREETINGS.adminMsgNumer)]
}* ${HEY_EMOJIES[random(HEY_EMOJIES.length)]}`;

let userMsg = `*These are the Notes ${
  GREETINGS.member[random(GREETINGS.memberMsgNumber)]
}* ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}\nNote: _I am not connected, associated, affiliated with any of the Owners of these links to Promote, Encourage any Channel/Group, I found the links on internet only._`;
// }\n\n`;

export const sendNotes = (bot: WAWebJS.Chat, who: MessageType) => {
  let content = who === "ADMIN" ? adminMsg : userMsg;
  NOTES.forEach((note) => {
    content += `\n\n*_NAME_* : *${note.name}*\n\n -----------*Content*------------`;
    note.content.forEach((noteContent) => {
      content += `\n\nName of the Content: _${noteContent.name}_\nLink: ${noteContent.link}`;
    });
  });

  content += `\n\n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
  bot.sendMessage(content);
};

export const sendNotesByFilter = (bot: WAWebJS.Chat, message: string) => {
  const msgList = message.split(" ");
  if (msgList.length > 2) {
    bot.sendMessage(
      `Sorry ${
        GREETINGS.member[random(GREETINGS.memberMsgNumber)]
      }\nOnly one word is allowed after !notes command ${
        HEY_EMOJIES[random(HEY_EMOJIES.length)]
      }`
    );
  } else {
    // First check in the Contents
    const filteredNotes = NOTES.map((note) =>
      note.content.filter((not) =>
        not.name.toLocaleLowerCase().includes(msgList[1].toLocaleLowerCase())
      )
    );

    // If not in the content, check in the upper names
    if (!filteredNotes.flat().length) {
      const filteredNotes = NOTES.filter((note) =>
        note.name.toLocaleLowerCase().includes(msgList[1].toLocaleLowerCase())
      );
      let content = userMsg;
      filteredNotes.forEach((note) => {
        content += `\n\n*_NAME_* : *${note.name}*\n\n -----------*Content*------------`;
        note.content.forEach((noteContent) => {
          content += `\n\nName of the Content: _${noteContent.name}_\nLink: ${noteContent.link}`;
        });
      });

      if (!filteredNotes.length) {
        bot.sendMessage(
          "The filter is invalid or notes are not updated with the respective subject, please wait for a while we will upload the respective notes soon"
        );
      } else {
        content += `\n\n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
        bot.sendMessage(content);
      }
    } else {
      let content = userMsg;
      filteredNotes.forEach((note) => {
        note.forEach((not) => {
          content += `\n\nName of the Content: _${not.name}_\nLink: ${not.link}`;
        });
      });
      content += `\n\n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
      bot.sendMessage(content);
    }
  }
};
