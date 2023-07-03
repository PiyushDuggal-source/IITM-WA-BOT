import { MessageContent } from "whatsapp-web.js"

export type MessageBody = {
  message: MessageContent,
  chatId: string,
}

export type ResType = {
  statusCode: number,
  error?: any,
}

export type MessageObject = {
  messageBody: string,
  chatId: string,
}
