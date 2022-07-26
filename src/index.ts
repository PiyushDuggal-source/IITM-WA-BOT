import WAWebJS, { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { checkMessage } from "./actions/messageActions";
import { main } from "./controllers/main";
import secretVariables from "./config/config";
import { introduction } from "./actions/introduction";

const client = new Client({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  authStrategy: new LocalAuth(),
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

client.initialize();
