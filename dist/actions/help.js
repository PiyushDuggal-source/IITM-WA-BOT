"use strict";var a=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var b=(n,m)=>{for(var s in m)a(n,s,{get:m[s],enumerable:!0})},M=(n,m,s,r)=>{if(m&&typeof m=="object"||typeof m=="function")for(let o of p(m))!g.call(n,o)&&o!==s&&a(n,o,{get:()=>m[o],enumerable:!(r=d(m,o))||r.enumerable});return n};var N=n=>M(a({},"__esModule",{value:!0}),n);var h={};b(h,{help:()=>f});module.exports=N(h);var i=require(".."),e=require("../utils/reply/replies"),l=require("./sendAndDeleteMsg"),t=require("./sendMessage");let E=`Hey ${e.GREETINGS.admin[(0,t.random)(e.GREETINGS.adminMsgNumber)]} ${e.HEY_EMOJIES[(0,t.random)(e.HEY_EMOJIES.length)]}, Need my help!!

Just do one of these simple things ${e.GREETINGS.admin[(0,t.random)(e.GREETINGS.adminMsgNumber)]}:
1. *Mention me*
2. Type: !allCmds
3. !cmd`,c=`Hey ${e.GREETINGS.member[(0,t.random)(e.GREETINGS.memberMsgNumber)]} ${e.HEY_EMOJIES[(0,t.random)(e.HEY_EMOJIES.length)]}, Need my help!!

Just do one of these simple things ${e.GREETINGS.member[(0,t.random)(e.GREETINGS.memberMsgNumber)]}:
1. *Mention me*
2. Type: !allCmds
3. !cmd`;const f=async(n,m,s)=>{const r=s.role==="OWNER"?E:c;s.role==="OWNER"?(await n.getChats())[i.BOT].sendMessage(r):s.role!=="NONE"&&(0,l.sendAndDeleteMsg)(n,m,s.chatId,r)};0&&(module.exports={help});
//# sourceMappingURL=help.js.map
