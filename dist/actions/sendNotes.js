"use strict";var g=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var L=(t,e)=>{for(var s in e)g(t,s,{get:e[s],enumerable:!0})},S=(t,e,s,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of E(e))!w.call(t,r)&&r!==s&&g(t,r,{get:()=>e[r],enumerable:!(o=y(e,r))||o.enumerable});return t};var A=t=>S(g({},"__esModule",{value:!0}),t);var O={};L(O,{sendNotes:()=>W,sendNotesByFilter:()=>I});module.exports=A(O);var h=require(".."),c=require("../resources/notes"),N=require("../utils/reply/footers"),n=require("../utils/reply/replies"),M=require("./sendAndDeleteMsg"),a=require("./sendMessage");const d=(t,e)=>(t.forEach(s=>{e+=`

*_NAME_* : *${s.name}*

 -----------*Content*------------`,s.content.forEach(o=>{e+=`

Name of the Notes: _${o.name}_
Link: ${o.link}`})}),e+=`

: ${N.FOOTERS.footers[(0,a.random)(N.FOOTERS.footerMsgLength)]}`,e);let T=`*These are the Notes ${n.GREETINGS.admin[(0,a.random)(n.GREETINGS.adminMsgNumber)]}* ${n.HEY_EMOJIES[(0,a.random)(n.HEY_EMOJIES.length)]}`,p=`*These are the Notes ${n.GREETINGS.member[(0,a.random)(n.GREETINGS.memberMsgNumber)]}* ${n.HEY_EMOJIES[(0,a.random)(n.HEY_EMOJIES.length)]}

*Use filter if you want specific subject's notes*
Eg: *!notes {SubjectName}* _without {}_

Note: _I am not connected, associated, affiliated with any of the Owners of these links to Promote, Encourage any Channel/Group, I found the links on internet only._`;const W=async(t,e,s)=>{let o=s.role==="ADMIN"?T:p;o=d(c.NOTES,o),s.role==="ADMIN"?(await t.getChats())[h.BOT].sendMessage(o):s.role!=="NONE"&&(0,M.sendAndDeleteMsg)(t,e,s.chatId,o)},$=`Sorry ${n.GREETINGS.member[(0,a.random)(n.GREETINGS.memberMsgNumber)]}
Only one word is allowed after !notes command ${n.HEY_EMOJIES[(0,a.random)(n.HEY_EMOJIES.length)]}`,C=`The filter is invalid, please use your *permutation* and *combination* knowledge to search for your notes, like:
*!notes mad1* -> *!notes mad*
or else, please wait for a while, we will upload the respective notes soon`,I=async(t,e,s,o)=>{const r=e.split(" ");if(o.role!=="NONE"){const f=(await t.getChats())[h.BOT];if(r.length>2)f.sendMessage($);else{const l=c.NOTES.filter(m=>m.name.toLocaleLowerCase().includes(r[1].toLocaleLowerCase()));l.length||c.NOTES.forEach(m=>{m.content.filter(b=>{b.name.toLocaleLowerCase().includes(r[1].toLocaleLowerCase())&&l.push(m)})});let i=p;l.length?o.role==="ADMIN"?(i=d(l,i),f.sendMessage(i)):(i=d(l,i),(0,M.sendAndDeleteMsg)(t,s,o.chatId,i)):f.sendMessage(C)}}};0&&(module.exports={sendNotes,sendNotesByFilter});
//# sourceMappingURL=sendNotes.js.map
