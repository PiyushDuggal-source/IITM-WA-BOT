var w=Object.create;var f=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var u=e=>f(e,"__esModule",{value:!0});var W=(e,s)=>{u(e);for(var o in s)f(e,o,{get:s[o],enumerable:!0})},$=(e,s,o)=>{if(s&&typeof s=="object"||typeof s=="function")for(let t of L(s))!T.call(e,t)&&t!=="default"&&f(e,t,{get:()=>s[t],enumerable:!(o=A(s,t))||o.enumerable});return e},i=e=>$(u(f(e!=null?w(S(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);W(exports,{sendNotes:()=>O,sendNotesByFilter:()=>J});var h=i(require("..")),g=i(require("../resources/notes")),p=i(require("../utils/reply/footers")),n=i(require("../utils/reply/replies")),M=i(require("./sendAndDeleteMsg")),r=i(require("./sendMessage"));const N=(e,s)=>(e.forEach(o=>{s+=`

*_NAME_* : *${o.name}*

 -----------*Content*------------`,o.content.forEach(t=>{s+=`

Name of the Notes: _${t.name}_
Link: ${t.link}`})}),s+=`

: ${p.FOOTERS.footers[(0,r.random)(p.FOOTERS.footerMsgLength)]}`,s);let C=`*These are the Notes ${n.GREETINGS.admin[(0,r.random)(n.GREETINGS.adminMsgNumber)]}* ${n.HEY_EMOJIES[(0,r.random)(n.HEY_EMOJIES.length)]}`,b=`*These are the Notes ${n.GREETINGS.member[(0,r.random)(n.GREETINGS.memberMsgNumber)]}* ${n.HEY_EMOJIES[(0,r.random)(n.HEY_EMOJIES.length)]}

*Use filter if you want specific subject's notes*
Eg: *!notes {SubjectName}* _without {}_

Note: _I am not connected, associated, affiliated with any of the Owners of these links to Promote, Encourage any Channel/Group, I found the links on internet only._`;const O=async(e,s,o)=>{let t=o==="ADMIN"?C:b;t=N(g.NOTES,t),o==="ADMIN"?(await e.getChats())[h.BOT].sendMessage(t):o!=="NONE"&&(0,M.sendAndDeleteMsg)(e,s,o,t)},_=`Sorry ${n.GREETINGS.member[(0,r.random)(n.GREETINGS.memberMsgNumber)]}
Only one word is allowed after !notes command ${n.HEY_EMOJIES[(0,r.random)(n.HEY_EMOJIES.length)]}`,I="The filter is invalid or notes are not updated with the respective subject, please wait for a while we will upload the respective notes soon",J=async(e,s,o,t)=>{const m=s.split(" ");if(t!=="NONE"){const d=(await e.getChats())[h.BOT];if(m.length>2)d.sendMessage(_);else{const l=g.NOTES.filter(c=>c.name.toLocaleLowerCase().includes(m[1].toLocaleLowerCase()));l.length||g.NOTES.forEach(c=>{c.content.filter(E=>{E.name.toLocaleLowerCase().includes(m[1].toLocaleLowerCase())&&l.push(c)})});let a=b;l.length?t==="ADMIN"?(a=N(l,a),d.sendMessage(a)):(a=N(l,a),(0,M.sendAndDeleteMsg)(e,o,t,a)):d.sendMessage(I)}}};0&&(module.exports={sendNotes,sendNotesByFilter});
//# sourceMappingURL=sendNotes.js.map
