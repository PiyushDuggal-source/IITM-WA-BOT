import e, { Request } from "express";
import { MessageBody } from "../types";
import { sendMessage, sendMsgToBot } from "../actions/messageActions";

const router = e.Router();

router.post("/sendMessage", async (req: Request<{}, {}, MessageBody>, res) => {
  console.log("Entering sendMessage route");
  const { message, chatId } = req.body;
  try {
    await sendMessage(message, chatId);
  } catch (error: any) {
    res.status(500).send(error);
  }
  res.sendStatus(200);
  console.log("Leaving sendMessage route");
});

router.post(
  "/sendMsgToBot",
  async (req: Request<{}, {}, { message: string }>, res) => {
    console.log("Entering sendMsgToBot route");
    const { message } = req.body;
    try {
      await sendMsgToBot(message);
    } catch (error: any) {
      res.status(500).send(error);
    }
    res.sendStatus(200);
    console.log("Leaving sendMsgToBot route");
  }
);

export default router;
