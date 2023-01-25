import {
  BOT_CHECK_MESSAGES,
  USER_ADD_CMD,
  USER_REMOVE_CMD,
} from "../Commands/instructions";
import {
  CALENDAR_COMMANDS,
  CLASS_COMMAND,
  COMMANDS,
  HELP_CMDS,
  NOTES_CMD,
  PLAYLIST_CMD,
  SOURCE,
} from "./instructions";
export const User_AllCommands: string[][] = [
  CALENDAR_COMMANDS,
  CLASS_COMMAND,
  COMMANDS,
  NOTES_CMD,
  PLAYLIST_CMD,
  HELP_CMDS,
  BOT_CHECK_MESSAGES,
  SOURCE,
];

export const OWNER_ADMIN_CMDS: string[][] = [USER_REMOVE_CMD, USER_ADD_CMD];
