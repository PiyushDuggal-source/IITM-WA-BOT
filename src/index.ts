import WAWebJS, {
  Client,
  GroupNotification,
  LocalAuth,
  MessageMedia,
} from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { checkMessage } from "./actions/messageActions";
import { main } from "./controllers/main";
import secretVariables from "./config/config";
import { introduction } from "./actions/introduction";
import {
  GREETINGS,
  HEY_EMOJIES,
  USER_JOIN_GREETINGS,
} from "./utils/reply/replies";
import { random } from "./actions/sendMessage";

const client = new Client({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  authStrategy: new LocalAuth({
    dataPath: `${__dirname}/sessions`,
  }),
});

client.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
  console.log(qr);
});

client.on("ready", async () => {
  console.log("Connected");
});

client.on("message_create", async (message: WAWebJS.Message) => {
  const bool = checkMessage(message);
  const str: string[] = message.mentionedIds;
  const isMention =
    (message.body[0] === "@" && str.includes("919871453667@c.us")) ||
    message.body
      .toLowerCase()
      .split(" ")
      .includes(`@${secretVariables.BOT_NAME.toLocaleLowerCase()}`);
  if (isMention) {
    const allChats = await client.getChats();
    const WA_BOT = allChats[0];
    if (bool === "ADMIN") {
      introduction(WA_BOT, true);
    } else if (bool === "USER") {
      introduction(WA_BOT, false);
    }
  }
  if (
    (bool === "ADMIN" || bool === "USER") &&
    message.body[0] === secretVariables.BOT_PREFIX
  ) {
    const allChats = await client.getChats();
    const WA_BOT = allChats[0];
    main(WA_BOT, message, bool);
  }
});

client.on("group_join", async (msg: GroupNotification) => {
  const contact = await client.getNumberId(msg.recipientIds[0]);
  const details = await client.getContactById(contact?._serialized || "");
  if (details.name) {
    client.sendMessage(
      secretVariables.WA_BOT_ID,
      `${secretVariables.BOT_NAME}: *${details.name}* Joined the Group!\n${
        USER_JOIN_GREETINGS.messages[random(USER_JOIN_GREETINGS.messageNum)]
      }\nHey new ${GREETINGS.member[random(GREETINGS.memberMsgNumber)]} ${
        HEY_EMOJIES[random(HEY_EMOJIES.length)]
      }!\nCheck out what bot(${
        secretVariables.BOT_NAME
      }) can do by *Mentioning* me!\nor check the Commands of ${
        secretVariables.BOT_NAME
      } by typing "!cmd" (without quotes)`
    );
  }
});

client.on("group_leave", async () => {
  const allChats = await client.getChats();
  const WA_BOT = allChats[0];
  const sticker = MessageMedia.fromFilePath(`${__dirname}/leave.png`);
  WA_BOT.sendMessage(`${secretVariables.BOT_NAME}:`);
  WA_BOT.sendMessage(sticker, { sendMediaAsSticker: true });
});

client.initialize();
