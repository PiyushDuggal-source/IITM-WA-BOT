import WAWebJS, { Buttons, List } from "whatsapp-web.js";
import { sendMessage } from "../../actions/sendMessage";
import { userMessages } from "../../utils/Commands/messages";
import { PING_REPLIES } from "../../utils/Commands/replies";
import { random } from "../../utils/common";

export const adminControl = (bot: WAWebJS.Chat, message: string) => {
  if (userMessages.includes(message.toLocaleLowerCase())) {
    const button = new Buttons("These are the btns", [
      {
        body: "hello",
      },
    ]);
    const list = new List(
      "\nThis is a list of commands the bot can execute",
      "See commands",
      [
        {
          title: `Commands available to (isGrandmaster ? 'Grandmaster' : 'bot admins') : 'everyone'}`,
          rows: [
            {
              id: "hi",
              title: "piyush1",
              description: "Cool description",
            },
            {
              id: "hi",
              title: "piyush1",
              description: "Cool description",
            },
            {
              id: "hi",
              title: "piyush1",
            },
          ],
        },
      ],
      "home",
      "jelfekfe"
    );
    // sendMessage(bot, PING_REPLIES.admin[random(PING_REPLIES.adminMsgNumber)]);
    bot.sendMessage(button);
    return;
  }
};
