"use strict";var g=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var L=(s,e)=>{for(var t in e)g(s,t,{get:e[t],enumerable:!0})},S=(s,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of E(e))!w.call(s,a)&&a!==t&&g(s,a,{get:()=>e[a],enumerable:!(o=y(e,a))||o.enumerable});return s};var A=s=>S(g({},"__esModule",{value:!0}),s);var _={};L(_,{sendNotes:()=>W,sendNotesByFilter:()=>O});module.exports=A(_);var h=require(".."),c=require("../resources/notes"),N=require("../utils/reply/footers"),n=require("../utils/reply/replies"),M=require("./sendAndDeleteMsg"),r=require("./sendMessage");const d=(s,e)=>(s.forEach(t=>{e+=`

*_NAME_* : *${t.name}*

 -----------*Content*------------`,t.content.forEach(o=>{e+=`

Name of the Notes: _${o.name}_
Link: ${o.link}`})}),e+=`

: ${N.FOOTERS.footers[(0,r.random)(N.FOOTERS.footerMsgLength)]}`,e);let T=`*These are the Notes ${n.GREETINGS.admin[(0,r.random)(n.GREETINGS.adminMsgNumber)]}* ${n.HEY_EMOJIES[(0,r.random)(n.HEY_EMOJIES.length)]}`,p=`*These are the Notes ${n.GREETINGS.member[(0,r.random)(n.GREETINGS.memberMsgNumber)]}* ${n.HEY_EMOJIES[(0,r.random)(n.HEY_EMOJIES.length)]}

*Use filter if you want specific subject's notes*
Eg: *!notes {SubjectName}* _without {}_

Note: _I am not connected, associated, affiliated with any of the Owners of these links to Promote, Encourage any Channel/Group, I found the links on internet only._`;const W=async(s,e,t)=>{let o=t==="ADMIN"?T:p;o=d(c.NOTES,o),t==="ADMIN"?(await s.getChats())[h.BOT].sendMessage(o):t!=="NONE"&&(0,M.sendAndDeleteMsg)(s,e,t,o)},$=`Sorry ${n.GREETINGS.member[(0,r.random)(n.GREETINGS.memberMsgNumber)]}
Only one word is allowed after !notes command ${n.HEY_EMOJIES[(0,r.random)(n.HEY_EMOJIES.length)]}`,C=`The filter is invalid, please use your *permutation* and *combination* knowledge to serach for your notes, like:
*!notes mad1* -> *!notes mad*
or else, please wait for a while, we will upload the respective notes soon`,O=async(s,e,t,o)=>{const a=e.split(" ");if(o!=="NONE"){const f=(await s.getChats())[h.BOT];if(a.length>2)f.sendMessage($);else{const l=c.NOTES.filter(m=>m.name.toLocaleLowerCase().includes(a[1].toLocaleLowerCase()));l.length||c.NOTES.forEach(m=>{m.content.filter(b=>{b.name.toLocaleLowerCase().includes(a[1].toLocaleLowerCase())&&l.push(m)})});let i=p;l.length?o==="ADMIN"?(i=d(l,i),f.sendMessage(i)):(i=d(l,i),(0,M.sendAndDeleteMsg)(s,t,o,i)):f.sendMessage(C)}}};0&&(module.exports={sendNotes,sendNotesByFilter});
//# sourceMappingURL=sendNotes.js.map
