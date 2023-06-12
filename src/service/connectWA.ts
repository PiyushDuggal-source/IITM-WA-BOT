import fs from "fs";
import qrcode = require("qrcode-terminal");
import { Client, LocalAuth } from "whatsapp-web.js";

export const connectWA = () => {
  const client = new Client({
    puppeteer: {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
    authStrategy: new LocalAuth({
      dataPath: `${__dirname}/sessions`,
    }),
  });

  // For QR Code
  client.on("qr", (qr: string) => {
    qrcode.generate(qr, { small: true });
    console.log(qr);
    fs.writeFileSync("qr.txt", qr);
  });

  return client;
};
