export const FOOTERS = {
  footers: [
    "Hope you are having a great day! 🥳",
    "Have a great day fam 🤍",
    "Have a wonderful day 🤘",
    "Do enjoy the rest of your day 👍",
    `Good ${
      new Date().getHours() >= 0 && new Date().getHours() <= 11
        ? "Morning"
        : new Date().getHours() >= 12 && new Date().getHours() <= 16
        ? "Afternoon"
        : "Evening"
    } 🥳`,
    "Don't forget to DO MORE 👍",
    "Keep on, keeping on 👍",
    "Keep on and keep going! 🤘",
    "Glad I could be of help 😁",
    "I hope this was helpful for you 🙂",
    "Happy to help ☺",
    "Crack the thing..",
  ],
  footerMsgLength: 11,
};

export const END_FOOTER =
  "*NOTE*: _This message is *deleted* from *my side*, if you have any query bro/sis, send message to *ELIZA Group* or *ME* ✌_";
