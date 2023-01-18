"use strict";var f=Object.create;var r=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var C=(e,n)=>{for(var s in n)r(e,s,{get:n[s],enumerable:!0})},l=(e,n,s,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of p(n))!u.call(e,t)&&t!==s&&r(e,t,{get:()=>n[t],enumerable:!(a=g(n,t))||a.enumerable});return e};var T=(e,n,s)=>(s=e!=null?f(y(e)):{},l(n||!e||!e.__esModule?r(s,"default",{value:e,enumerable:!0}):s,e)),A=e=>l(r({},"__esModule",{value:!0}),e);var N={};C(N,{introduction:()=>S,sendCommands:()=>_});module.exports=A(N);var c=require("../utils/Commands/allCmds"),o=require("../utils/reply/replies"),m=require("./sendMessage"),I=T(require("dotenv")),i=require(".."),d=require("./sendAndDeleteMsg");I.config();const E=[`
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
*These are the commands for checking the ELIZA is Online or Offline*
Please ping *Admin* if *ELIZA* does not respond
`,`
*Want to check my _Source Code_?* Use this command:
`],M=`Hey ${o.HEY_EMOJIES[(0,m.random)(o.HEY_EMOJIES.length)]} ${o.GREETINGS.member[(0,m.random)(o.GREETINGS.memberMsgNumber)]}!
I am WhatsApp Bot!!

My ${o.GREETINGS.admin[(0,m.random)(o.GREETINGS.adminMsgNumber)]} calls me *${process.env.BOT_NAME}* (named after the first ever chatbot ${o.HEY_EMOJIES[(0,m.random)(o.HEY_EMOJIES.length)]})

My Purpose is to help you in your journey to become an *IITian* \u270C fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL

Type this commands to see all the commands!
*!AllCmds*`,b=`Hey ${o.HEY_EMOJIES[(0,m.random)(o.HEY_EMOJIES.length)]} ${o.GREETINGS.admin[(0,m.random)(o.GREETINGS.adminMsgNumber)]}!
I am Your WhatsApp Bot!!
What can I do for you?
My Purpose is to help you in your journey to become an *IITian* \u270C fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL

Type this commands to see all the commands!
*!AllCmds*`,W=e=>{let n="";return e.forEach((s,a)=>{n+=E[a],s.forEach((t,h)=>n+=`${h+1}. ${process.env.BOT_PREFIX}${t}${h!==s.length?`
`:""}`)}),n},S=async(e,n,s)=>{typeof n=="string"?(0,d.sendAndDeleteMsg)(e,s,n,M):e.sendMessage(i.WA_BOT_ID,b)},_=async(e,n,s)=>{const a=`----------These are the Bot Commands!!----------
${W(c.User_AllCommands)}`;s==="ADMIN"?(await e.getChats())[i.BOT].sendMessage(a):s!=="NONE"&&await(0,d.sendAndDeleteMsg)(e,n,s,a)};0&&(module.exports={introduction,sendCommands});
//# sourceMappingURL=introduction.js.map
