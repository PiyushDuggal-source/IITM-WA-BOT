import * as WAWebJS from "whatsapp-web.js";
import { Request, Response } from "express";
import fs from "fs";
import express from "express";
import * as dotenv from "dotenv";
import { connectWA } from "./service/connectWA";
dotenv.config();

// Initialized App
const app = express();

const client = connectWA();
// For Development Enviornment
const LOCAL = String(process.env.dev) === "true";
export const BOT = LOCAL ? 1 : 0;
export const WA_BOT_ID = LOCAL
  ? (process.env.WA_BOT_ID_DEV as string)
  : (process.env.WA_BOT_ID as string);

const DB_URL = LOCAL
  ? (process.env.DEV_DB_URL as string)
  : (process.env.PROD_DB_URL as string);

// Connect To DB

// Initializing Client

// Event "READY"
client.on("ready", async () => {
  console.log("Client is ready");
});

/**
 * INFO:
 * Event "MESSAGE_CREATE"
 * @returns { MessageTypeOfWA }
 */
client.on("message_create", async (message: WAWebJS.Message) => {
  if (message.to === WA_BOT_ID) {
  }
});

/**
 * INFO:
 * Event "GROUP_JOIN"
 * @returns { GrpJoinNotification }
 */
client.on("group_join", async (msg: WAWebJS.GroupNotification) => {});

/**
 * INFO:
 * Event "GROUP_LEAVE"
 * @returns { GrpLeaveNotification }
 */
client.on("group_leave", async (notification: WAWebJS.GroupNotification) => {});

client.initialize();

const port = Number(process.env.PORT) || 3000;

app.get("/", (_: Request, res: Response) => {
  res.send("BOT");
});
app.listen(port, () =>
  console.log(`[SERVER] Server is running on port ${port}`, { label: "INFO" })
);

const sendQr = (res: Response) => {
  fs.readFile("qr.txt", (err, last_qr) => {
    if (!err && last_qr) {
      const page = `
                        <html>
                            <body>
                                <script type="module">
                                </script>
                                <div id="qrcode"></div>
                                <script type="module">
                                    import QrCreator from "https://cdn.jsdelivr.net/npm/qr-creator/dist/qr-creator.es6.min.js";
                                    let container = document.getElementById("qrcode");
                                    QrCreator.render({
                                        text: "${last_qr}",
                                        radius: 0.5, // 0.0 to 0.5
                                        ecLevel: "H", // L, M, Q, H
                                        fill: "#536DFE", // foreground color
                                        background: null, // color or null for transparent
                                        size: 256, // in pixels
                                    }, container);
                                </script>
                            </body>
                        </html>
                    `;
      res.send(page);
    } else {
      console.log("Error reading qr.txt file.", err);
    }
  });
};

app.get("/qr", (_: Request, res: Response) => {
  client
    .getState()
    .then((data) => {
      if (data) {
        res.send("Already Authenticated");
      } else sendQr(res);
    })
    .catch(() => sendQr(res));
});
// All other pages should be returned as error pages
