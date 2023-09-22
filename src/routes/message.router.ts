import e, { Request, Response } from "express";
import { MessageBody } from "../types";
import { sendMessage, sendMsgToBot } from "../actions/messageActions";

const router = e.Router();

router.post("/sendMessage", async (req: Request<{}, {}, MessageBody>, res) => {
  console.log("Entering sendMessage route");
  try {
    await sendMessage(req.body);
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error);
  }
  res.sendStatus(200);
  console.log("Leaving sendMessage route");
});

router.post(
  "/sendMsgToBot",
  async (req: Request<{}, {}, { message: string , groupId: string}>, res: Response) => {
    console.log("Entering sendMsgToBot route");
    const { message, groupId } = req.body;
    try {
      await sendMsgToBot(groupId, message);
    } catch (error: any) {
      res.status(500).send(error);
    }
    res.sendStatus(200);
    console.log("Leaving sendMsgToBot route");
  }
);

export default router;
