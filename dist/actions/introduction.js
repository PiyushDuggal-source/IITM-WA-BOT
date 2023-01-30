"use strict";var f=Object.create;var r=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var C=(e,n)=>{for(var o in n)r(e,o,{get:n[o],enumerable:!0})},h=(e,n,o,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of p(n))!u.call(e,t)&&t!==o&&r(e,t,{get:()=>n[t],enumerable:!(a=g(n,t))||a.enumerable});return e};var I=(e,n,o)=>(o=e!=null?f(y(e)):{},h(n||!e||!e.__esModule?r(o,"default",{value:e,enumerable:!0}):o,e)),T=e=>h(r({},"__esModule",{value:!0}),e);var _={};C(_,{introduction:()=>N,sendCommands:()=>S});module.exports=T(_);var c=require("../utils/Commands/allCmds"),s=require("../utils/reply/replies"),m=require("./sendMessage"),E=I(require("dotenv")),i=require(".."),d=require("./sendAndDeleteMsg");E.config();const A=[`
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
`],M=`Hey ${s.HEY_EMOJIES[(0,m.random)(s.HEY_EMOJIES.length)]} ${s.GREETINGS.member[(0,m.random)(s.GREETINGS.memberMsgNumber)]}!
I am WhatsApp Bot!!

My ${s.GREETINGS.admin[(0,m.random)(s.GREETINGS.adminMsgNumber)]} calls me *${process.env.BOT_NAME}* (named after the first ever chatbot ${s.HEY_EMOJIES[(0,m.random)(s.HEY_EMOJIES.length)]})

My Purpose is to help you in your journey to become an *IITian* \u270C fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL

Type this commands to see all the commands!
*!AllCmds*`,W=`Hey ${s.HEY_EMOJIES[(0,m.random)(s.HEY_EMOJIES.length)]} ${s.GREETINGS.admin[(0,m.random)(s.GREETINGS.adminMsgNumber)]}!
I am Your WhatsApp Bot!!
What can I do for you?
My Purpose is to help you in your journey to become an *IITian* \u270C fast, so for that I can keep you notified for all the major Things: Classes, Calendars, Notes and ALL

Type this commands to see all the commands!
*!AllCmds*`,b=e=>{let n="";return e.forEach((o,a)=>{n+=A[a],o.forEach((t,l)=>n+=`${l+1}. ${process.env.BOT_PREFIX}${t}${l!==o.length?`
`:""}`)}),n},N=async(e,n,o)=>{n.role.includes("OWNER")||n.role.includes("ADMIN")?e.sendMessage(i.WA_BOT_ID,W):(0,d.sendAndDeleteMsg)(e,o,n.chatId,M)},S=async(e,n,o)=>{const a=`----------These are the Bot Commands!!----------
${b(c.User_AllCommands)}`;o.role==="OWNER"?(console.log("reached send cmds"),(await e.getChats())[i.BOT].sendMessage(a)):o.role!=="NONE"&&await(0,d.sendAndDeleteMsg)(e,n,o.chatId,a)};0&&(module.exports={introduction,sendCommands});
//# sourceMappingURL=introduction.js.map
