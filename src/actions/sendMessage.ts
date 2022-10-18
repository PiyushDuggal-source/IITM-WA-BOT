import * as WAWebJS from "whatsapp-web.js"
import { MessageContent } from "whatsapp-web.js"
import { FOOTERS } from "../utils/reply/footers"
import * as dotenv from "dotenv"
import { sendAndDeleteMsg } from "./sendAndDeleteMsg"
dotenv.config()

export const sendMessage = (
  client: WAWebJS.Client,
  messageToSend: MessageContent,
  messageInstance: WAWebJS.Message,
  cmds?: boolean,
  help?: boolean
) => {
  const userId = messageInstance.author
  if (cmds && typeof userId === "string") {
    sendAndDeleteMsg(client, messageInstance, userId as string, messageToSend)
  } else if (help) {
    const msg = `${process.env.BOT_NAME as String}: ${messageToSend} \n:${
      FOOTERS.footers[random(FOOTERS.footerMsgLength)]
    }`
    sendAndDeleteMsg(client, messageInstance, userId as string, msg)
  } else {
    const msg = `${process.env.BOT_NAME as String}: ${messageToSend}`
    sendAndDeleteMsg(client, messageInstance, userId as string, msg)
  }
}

export const random = (max: number): number => Math.floor(Math.random() * max)
