var f=Object.create;var r=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var c=e=>r(e,"__esModule",{value:!0});var T=(e,s)=>{c(e);for(var n in s)r(e,n,{get:s[n],enumerable:!0})},M=(e,s,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let t of y(s))!C.call(e,t)&&t!=="default"&&r(e,t,{get:()=>s[t],enumerable:!(n=g(s,t))||n.enumerable});return e},m=e=>M(c(r(e!=null?f(u(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);T(exports,{introduction:()=>S,sendCommands:()=>_});var p=m(require("../utils/Commands/allCmds")),o=m(require("../utils/reply/replies")),a=m(require("./sendMessage")),A=m(require("dotenv")),i=m(require("..")),d=m(require("./sendAndDeleteMsg"));A.config();const I=[`
*These are the Calendar Commands! : You can see the IIT-M Google Calendar Events from RIGHT HERE \u270C Just by using these commands!*
`,`
*These are the Class Commands: You can see if there is any class today or not!*
`,`
*And these are the commands which will show you the other commands, LOL "Commands representing Commands" its like commenting the commented code:*
`,`
*These are the commands for getting Notes from RIGHT HERE* _If you have notes and want to share, please Share, I will add them in *${process.env.BOT_NAME}*, then it will be accessible for ALL of us!_

you can also use it individually for all notes or you can use the filter
*E.G: !notes Stats*
`,`
*This is the command for getting the _COURSE PLAYLIST_ link from RIGHT HERE!*
`,`
*Want some Help?? try these commands!!*
`,`
*Want to check my _Source Code_?* Use this command:
`],E=`Hey ${o.HEY_EMOJIES[(0,a.random)(o.HEY_EMOJIES.length)]} ${o.GREETINGS.member[(0,a.random)(o.GREETINGS.memberMsgNumber)]}!
I am WhatsApp Bot!!

My ${o.GREETINGS.admin[(0,a.random)(o.GREETINGS.adminMsgNumber)]} calls me *${process.env.BOT_NAME}* (named after the first ever chatbot ${o.HEY_EMOJIES[(0,a.random)(o.HEY_EMOJIES.length)]})

My Purpose is to help you in your journey to become an *IITian* \u270C fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL

Type this commands to see all the commands!
*!AllCmds*`,b=`Hey ${o.HEY_EMOJIES[(0,a.random)(o.HEY_EMOJIES.length)]} ${o.GREETINGS.admin[(0,a.random)(o.GREETINGS.adminMsgNumber)]}!
I am Your WhatsApp Bot!!
What can I do for you?
My Purpose is to help you in your journey to become an *IITian* \u270C fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL

Type this commands to see all the commands!
*!AllCmds*`,W=e=>{let s="";return e.forEach((n,t)=>{s+=I[t],n.forEach((h,l)=>s+=`${l+1}. ${process.env.BOT_PREFIX}${h}${l!==n.length?`
`:""}`)}),s},S=async(e,s,n)=>{typeof s=="string"?(0,d.sendAndDeleteMsg)(e,n,s,E):e.sendMessage(i.WA_BOT_ID,b)},_=async(e,s,n)=>{const t=`----------These are the Bot Commands!!----------
${W(p.User_AllCommands)}`;n==="ADMIN"?(await e.getChats())[i.BOT].sendMessage(t):n!=="NONE"&&await(0,d.sendAndDeleteMsg)(e,s,n,t)};0&&(module.exports={introduction,sendCommands});
//# sourceMappingURL=introduction.js.map
