import dotenv from 'dotenv'
dotenv.config()
export const COMMANDS = ["allcmd"];
export const CALENDAR_COMMANDS = ["classes", "calendar", "clss"];
export const CALENDAR_TYPOS = [
  "calender",
  "calandars",
  "celandars",
  "celandar",
  "calandar",
];
export const CLASS_COMMAND = ["class", "today", "subject"];
export const BOT_NAME_S = [`${process.env.BOT_NAME as String}`];
export const NOTES_CMD = ["notes", "cheats", "note", "cheat"];
export const NOTES_CMD_Show = [
  "notes <filter>",
  "cheats <filter>",
  "note <filter>",
  "cheat <filter>",
];
export const COMMANDS_CMDS = [
  `${process.env.BOT_PREFIX}allcmds`,
  `${process.env.BOT_PREFIX}allcmd`,
];
export const HELP_CMDS = ["help", "hlp"];
export const SOURCE = ["source"];
export const IMP_DATES = ["impdates", "importantdates", "dates"];
export const ELIGIBILITY = ["eligibility", "eligible"];
export const PLAYLIST_CMD = ["playlist"];
export const PLAYLIST_CMD_ALIAS = ["playlist", "plst"];
export const BOT_CHECK_MESSAGES = ["check", "up", "bot", "online"];
export const USER_REMOVE_CMD = ['remove', 'kick'];
export const USER_ADD_CMD = ['add', 'invite'];
