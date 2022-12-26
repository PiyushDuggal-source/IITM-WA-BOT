import * as WAWebJS from "whatsapp-web.js";
import { BOT } from "..";
import { NOTES } from "../resources/notes";
import { MessageType, Notes } from "../types/types";
import { FOOTERS } from "../utils/reply/footers";
import { GREETINGS, HEY_EMOJIES } from "../utils/reply/replies";
import { sendAndDeleteMsg } from "./sendAndDeleteMsg";
import { random } from "./sendMessage";

// Helper functions
const notesFormatter = (notes: Notes, content: string) => {
  notes.forEach((note) => {
    content += `\n\n*_NAME_* : *${note.name}*\n\n -----------*Content*------------`;
    note.content.forEach((noteContent) => {
      content += `\n\nName of the Notes: _${noteContent.name}_\nLink: ${noteContent.link}`;
    });
  });
  content += `\n\n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
  return content;
};

let adminMsg = `*These are the Notes ${
  GREETINGS.admin[random(GREETINGS.adminMsgNumber)]
}* ${HEY_EMOJIES[random(HEY_EMOJIES.length)]}`;

let userMsg = `*These are the Notes ${
  GREETINGS.member[random(GREETINGS.memberMsgNumber)]
}* ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}\n\n*Use filter if you want specific subject's notes*\nEg: *!notes {SubjectName}* _without {}_\n\nNote: _I am not connected, associated, affiliated with any of the Owners of these links to Promote, Encourage any Channel/Group, I found the links on internet only._`;
// }\n\n`;

export const sendNotes = async (
  client: WAWebJS.Client,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  let content = who === "ADMIN" ? adminMsg : userMsg;
  content = notesFormatter(NOTES, content)
  if (who === "ADMIN") {
    const chats = await client.getChats();
    const bot = chats[BOT];
    bot.sendMessage(content);
  } else if (who !== "NONE") {
    sendAndDeleteMsg(client, messageInstance, who, content);
  }
};

const sorryMsg = `Sorry ${
  GREETINGS.member[random(GREETINGS.memberMsgNumber)]
}\nOnly one word is allowed after !notes command ${
  HEY_EMOJIES[random(HEY_EMOJIES.length)]
}`;

const invalidMsg =
  "The filter is invalid or notes are not updated with the respective subject, please wait for a while we will upload the respective notes soon";

export const sendNotesByFilter = async (
  client: WAWebJS.Client,
  messageBody: string,
  messageInstance: WAWebJS.Message,
  who: MessageType
) => {
  const msgList = messageBody.split(" ");
  if (who !== "NONE") {
    const chats = await client.getChats();
    const bot = chats[BOT];
    if (msgList.length > 2) {
      bot.sendMessage(sorryMsg);
    } else {
      // First check in the Names
      const filteredNotes = NOTES.filter((note) => {
        return note.name
          .toLocaleLowerCase()
          .includes(msgList[1].toLocaleLowerCase());
      });

      // If not in the Upper Names, check inside
      if (!filteredNotes.length) {
        NOTES.forEach((note) => {
          note.content.filter((contNote) => {
            if (
              contNote.name
                .toLocaleLowerCase()
                .includes(msgList[1].toLocaleLowerCase())
            ) {
              filteredNotes.push(note);
            }
          });
        });
      }
      let content = userMsg;
      if (!filteredNotes.length) {
        bot.sendMessage(invalidMsg);
      } else if (who === "ADMIN") {
        content = notesFormatter(filteredNotes, content);
        bot.sendMessage(content);
      } else {
        content = notesFormatter(filteredNotes, content);
        sendAndDeleteMsg(client, messageInstance, who, content);
      }

      //     if (who === "ADMIN") {
      //     } else {
      //       let content = userMsg;
      //       filteredNotes.forEach((note) => {
      //         note.content.forEach((not) => {
      //           content += `\n\nName of the Content: _${not.name}_\nLink: ${not.link}`;
      //         });
      //       });
      //       content += `\n\n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
      //       bot.sendMessage(content);
      //     }
      //   }
      // } else if (who !== "NONE") {
      //   if (msgList.length > 2) {
      //     sendAndDeleteMsg(client, messageInstance, who, sorryMsg);
      //   } else {
      //     // First check in the Contents
      //     const filteredNotes = NOTES.map((note) =>
      //       note.content.filter((not) =>
      //         not.name.toLocaleLowerCase().includes(msgList[1].toLocaleLowerCase())
      //       )
      //     );
      //
      //     // If not in the content, check in the upper names
      //     if (!filteredNotes.flat().length) {
      //       const filteredNotes = NOTES.filter((note) =>
      //         note.name.toLocaleLowerCase().includes(msgList[1].toLocaleLowerCase())
      //       );
      //       let content = userMsg;
      //       filteredNotes.forEach((note) => {
      //         content += `\n\n*_NAME_* : *${note.name}*\n\n -----------*Content*------------`;
      //         note.content.forEach((noteContent) => {
      //           content += `\n\nName of the Content: _${noteContent.name}_\nLink: ${noteContent.link}`;
      //         });
      //       });
      //
      //       if (!filteredNotes.length) {
      //         sendAndDeleteMsg(client, messageInstance, who, invalidMsg);
      //       } else {
      //         content += `\n\n: ${
      //           FOOTERS.footers[random(FOOTERS.footerMsgLength)]
      //         }`;
      //         sendAndDeleteMsg(client, messageInstance, who, content);
      //       }
      //     } else {
      //       let content = userMsg;
      //       filteredNotes.forEach((note) => {
      //         note.forEach((not) => {
      //           content += `\n\nName of the Content: _${not.name}_\nLink: ${not.link}`;
      //         });
      //       });
      //       content += `\n\n: ${FOOTERS.footers[random(FOOTERS.footerMsgLength)]}`;
      //       sendAndDeleteMsg(client, messageInstance, who, content);
      //     }
    }
  }
};
