# IITM-WA-BOT

## About

### This bot is for helping IITM Students to make their life easy and fast by providing the following helps:

- Reminds about upcoming classes/events
- Provides upcoming calendar events 📅 in the WhatsApp itself
- Provides today's lectures
- Provides notes just by typing a single command
  - you can also use it individually for getting all notes or you can use the filter
    E.G: **!notes** Stats
- Provides course playlist
  - you can also use it individually for getting all playlist or you can use the filter
    E.G: **!playlist** Stats

## 🗣 Commands

| Command               | Description                                       |
| --------------------- | ------------------------------------------------- |
| `!class`              | ✅ Get the classes for the day                    |
| `!calendar`           | ✅ Get the clalendar events/ upcoming Classes     |
| `everyone`⭐          | ✅ Ping everyone in a group                       |
| `!help`               | ✅ Get more info                                  |
| `!allcmd`             | ✅ Get all commands                               |
| `!notes`              | ✅ Get all available notes (pdf, links etc.)      |
| `!notes <subName>`    | ✅ Get specific subject's notes (pdf, links etc.) |
| `!playlist`           | ✅ Get all course's playlists (links)             |
| `!playlist <subName>` | ✅ Get specific subject's playlist (links)        |
| `!source`             | ✅ Get the bot's source code                      |
| `!grouplink`          | Get the current group's invite link               |
| `!promote`⭐          | Promote a user to be a bot admin                  |

⭐ = Commands that can only be used when you are a **bot Admin**.

## Code Structure

`src/index.ts`: 1st entry point<br>
`src/controllers/main.js`: 2nd entry point<br>
`src/controllers/Admin`: Admin Controller<br>
`src/controllers/Users`: Users Controller<br>
`src/assets`: all main functions<br>
`src/resources`: Resources<br>
`src/services`: Models<br>
`src/types`: All the typescript types<br>
`src/assets`: common assets<br>
