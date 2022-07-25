// Ping Replies
export type PingReplies = {
  admin: string[];
  adminMsgNumber: number;
  members: string[];
  memberMsgNumber: number;
};

export type ADMIN = "ADMIN";
export type USER = "USER";
export type NONE = "NONE";

export type MessageType = ADMIN | USER | NONE;

// Commands btn List

export type CommandButtons = {
  id: string;
  title: string;
  description?: string;
}[];
