"use strict";var i=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var g=(n,m)=>{for(var s in m)i(n,s,{get:m[s],enumerable:!0})},b=(n,m,s,r)=>{if(m&&typeof m=="object"||typeof m=="function")for(let o of l(m))!M.call(n,o)&&o!==s&&i(n,o,{get:()=>m[o],enumerable:!(r=p(m,o))||r.enumerable});return n};var N=n=>b(i({},"__esModule",{value:!0}),n);var y={};g(y,{help:()=>h});module.exports=N(y);var a=require(".."),e=require("../utils/reply/replies"),d=require("./sendAndDeleteMsg"),t=require("./sendMessage");let f=`Hey ${e.GREETINGS.admin[(0,t.random)(e.GREETINGS.adminMsgNumber)]} ${e.HEY_EMOJIES[(0,t.random)(e.HEY_EMOJIES.length)]}, Need my help!!

Just do one of these simple things ${e.GREETINGS.admin[(0,t.random)(e.GREETINGS.adminMsgNumber)]}:
1. *Mention me*
2. Type: !allCmds
3. !cmd`,c=`Hey ${e.GREETINGS.member[(0,t.random)(e.GREETINGS.memberMsgNumber)]} ${e.HEY_EMOJIES[(0,t.random)(e.HEY_EMOJIES.length)]}, Need my help!!

Just do one of these simple things ${e.GREETINGS.member[(0,t.random)(e.GREETINGS.memberMsgNumber)]}:
1. *Mention me*
2. Type: !allCmds
3. !cmd`;const h=async(n,m,s)=>{const r=s==="ADMIN"?f:c;s==="ADMIN"?(await n.getChats())[a.BOT].sendMessage(r):s!=="NONE"&&(0,d.sendAndDeleteMsg)(n,m,s,r)};0&&(module.exports={help});
//# sourceMappingURL=help.js.map
