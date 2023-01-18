import * as WAWebJS from "whatsapp-web.js";

// Ping Replies
export type PingReplies = {
  admin: string[];
  adminMsgNumber: number;
  members: string[];
  memberMsgNumber: number;
};

export type ADMIN = "ADMIN";
export type OWNER = "OWNER";
export type USER = "USER";
export type NONE = "NONE";

/**
 * Returns "OWNER", "ADMIN", "USER_ID" or NONE 
 * `OWNER`
 */
export type MessageType = string | NONE | ADMIN | OWNER;

// Commands btn List
export type CommandButtons = {
  id: string;
  title: string;
  description?: string;
}[];

// Calendar Types
export type Calendar = {
  topic: string;
  time: string;
  date: Date;
  courseName: string;
  description?: string;
  //Number of Minutes before class starts of for class notifications
  numberOfMinutes?: number;
}[];

// Introduction Type
export type Greetings = {
  member: string[];
  memberMsgNumber: number;
  admin: string[];
  adminMsgNumber: number;
};

// User Join Greetings Type
export type UserJoinGreetings = {
  messages: string[];
  messageNum: number;
};

// Notes Types
export type Notes = {
  name: string;
  content: {
    name: string;
    link: string;
  }[];
}[];

// Group Leave/Join Image Type
export type GroupLeaveORJoinImg = {
  images: string[];
  numOfImgs: number;
};

// YT Playlist Types
export type YT_Playlist = {
  name: string;
  link: string;
}[];

export interface WA_Grp extends WAWebJS.Chat {
  participants?: {
    id: {
      user: string;
      _serialized: string;
    };
    isAdmin: boolean;
    isSuperAdmin: boolean;
  }[];
}
