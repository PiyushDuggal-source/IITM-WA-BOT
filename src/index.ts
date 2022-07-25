import WAWebJS, { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { checkMessage } from "./actions/messageActions";
import { main } from "./controllers/main";
import secretVariables from "./config/config";

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
  console.log(bool);
  if (
    (bool === "ADMIN" || bool === "USER") &&
    message.body[0] === secretVariables.BOT_PREFIX
  ) {
    console.log("COOOL");
    const allChats = await client.getChats();
    const WA_BOT = allChats[0];
    main(WA_BOT, message, bool);
  }
});

client.initialize();
