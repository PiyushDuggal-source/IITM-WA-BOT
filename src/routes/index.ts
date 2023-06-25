import express from "express";
import { Request, Response } from "express";
import msgRouter from "./message.router";
import client from "../service/connectWA";
import { sendQr } from "../actions/wa-actions";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  res.send("BOT");
});

router.get("/qr", (_: Request, res: Response) => {
  client
    .getState()
    .then((data) => {
      if (data) {
        res.send("Already Authenticated");
      } else sendQr(res);
    })
    .catch(() => sendQr(res));
});
router.use("/wa-service/api/", msgRouter);

export default router;
