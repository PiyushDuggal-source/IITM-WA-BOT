"use strict";var g=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var W=Object.prototype.hasOwnProperty;var w=(t,e)=>{for(var s in e)g(t,s,{get:e[s],enumerable:!0})},O=(t,e,s,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!W.call(t,r)&&r!==s&&g(t,r,{get:()=>e[r],enumerable:!(o=E(e,r))||o.enumerable});return t};var L=t=>O(g({},"__esModule",{value:!0}),t);var A={};w(A,{sendNotes:()=>T,sendNotesByFilter:()=>_});module.exports=L(A);var h=require(".."),c=require("../resources/notes"),N=require("../utils/reply/footers"),n=require("../utils/reply/replies"),p=require("./sendAndDeleteMsg"),a=require("./sendMessage");const d=(t,e)=>(t.forEach(s=>{e+=`

*_NAME_* : *${s.name}*

 -----------*Content*------------`,s.content.forEach(o=>{e+=`

Name of the Notes: _${o.name}_
Link: ${o.link}`})}),e+=`

: ${N.FOOTERS.footers[(0,a.random)(N.FOOTERS.footerMsgLength)]}`,e);let S=`*These are the Notes ${n.GREETINGS.admin[(0,a.random)(n.GREETINGS.adminMsgNumber)]}* ${n.HEY_EMOJIES[(0,a.random)(n.HEY_EMOJIES.length)]}`,u=`*These are the Notes ${n.GREETINGS.member[(0,a.random)(n.GREETINGS.memberMsgNumber)]}* ${n.HEY_EMOJIES[(0,a.random)(n.HEY_EMOJIES.length)]}

*Use filter if you want specific subject's notes*
Eg: *!notes {SubjectName}* _without {}_

Note: _I am not connected, associated, affiliated with any of the Owners of these links to Promote, Encourage any Channel/Group, I found the links on internet only._`;const T=async(t,e,s)=>{let o=s.role==="OWNER"?S:u;o=d(c.NOTES,o),s.role==="OWNER"?(await t.getChats())[h.BOT].sendMessage(o):s.role!=="NONE"&&(0,p.sendAndDeleteMsg)(t,e,s.chatId,o)},$=`Sorry ${n.GREETINGS.member[(0,a.random)(n.GREETINGS.memberMsgNumber)]}
Only one word is allowed after !notes command ${n.HEY_EMOJIES[(0,a.random)(n.HEY_EMOJIES.length)]}`,C=`The filter is invalid, please use your *permutation* and *combination* knowledge to search for your notes, like:
*!notes mad1* -> *!notes mad*
or else, please wait for a while, we will upload the respective notes soon`,_=async(t,e,s,o)=>{const r=e.split(" ");if(o.role!=="NONE"){const f=(await t.getChats())[h.BOT];if(r.length>2)f.sendMessage($);else{const l=c.NOTES.filter(m=>m.name.toLocaleLowerCase().includes(r[1].toLocaleLowerCase()));l.length||c.NOTES.forEach(m=>{m.content.filter(b=>{b.name.toLocaleLowerCase().includes(r[1].toLocaleLowerCase())&&l.push(m)})});let i=u;l.length?o.role==="OWNER"?(i=d(l,i),f.sendMessage(i)):(i=d(l,i),(0,p.sendAndDeleteMsg)(t,s,o.chatId,i)):f.sendMessage(C)}}};0&&(module.exports={sendNotes,sendNotesByFilter});
//# sourceMappingURL=sendNotes.js.map
