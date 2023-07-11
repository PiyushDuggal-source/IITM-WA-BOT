import * as WAWebJS from "whatsapp-web.js";
import { MessageContent } from "whatsapp-web.js";

export type ReturnType =
  | "SUCCESS" // happy path
  | "INVALID_CMD" // invalid command
  | "NOTES_NOT_FOUND" // when the respective notes don't exist
  | "PLAYLIST_NOT_FOUND" // when the playlist doesn't exist
  | "BAN" // when the user is using higher level command
  | "NO_CLASS" // when the class doesn't exist
  | "NO_CALENDAR"; // when the calendar doesn't exist
export type MessageBody = {
  message: MessageContent;
  type: ReturnType;
  chatId: string;
  emoji: any;
};

export type ResType = {
  statusCode: number;
  error?: any;
};

export type MessageObject = {
  name?: string;
  messageBody: string;
  chatId: string;
};

export interface Message extends WAWebJS.Message {
  _data?: {
    notifyName?: string;
    from?: string;
  };
}
