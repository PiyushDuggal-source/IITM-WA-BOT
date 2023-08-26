import fs from "fs";
import qrcode = require("qrcode-terminal");
import { Client, RemoteAuth } from "whatsapp-web.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
const { MongoStore } = require("wwebjs-mongo");
dotenv.config();

const connectToDBAndStore = async () => {
  try {
    await mongoose.connect(process.env.PROD_DB_URL as string, {
      
    });
    console.log("DB Connected");
  } catch (error: any) {
    console.log("mongo error")
    console.log(error);
  }
};

export const clientFun = async () => {
  await connectToDBAndStore();
  const store = new MongoStore({ mongoose: mongoose });
  const client = new Client({
    puppeteer: {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
    authStrategy: new RemoteAuth({
      store: store,
      backupSyncIntervalMs: 3000000,
    }),
  });

  client.on("qr", (qr: string) => {
    qrcode.generate(qr, { small: true });
    console.log(qr);
    fs.writeFileSync("qr.txt", qr);
  });
  return client;
};

// For QR Code
