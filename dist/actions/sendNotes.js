var C=Object.create;var L=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var u=e=>L(e,"__esModule",{value:!0});var S=(e,a)=>{u(e);for(var o in a)L(e,o,{get:a[o],enumerable:!0})},T=(e,a,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of w(a))!k.call(e,t)&&t!=="default"&&L(e,t,{get:()=>a[t],enumerable:!(o=y(a,t))||o.enumerable});return e},d=e=>T(u(L(e!=null?C(A(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);S(exports,{sendNotes:()=>O,sendNotesByFilter:()=>J});var E=d(require("..")),M=d(require("../resources/notes")),c=d(require("../utils/reply/footers")),s=d(require("../utils/reply/replies")),p=d(require("./sendAndDeleteMsg")),l=d(require("./sendMessage"));let W=`*These are the Notes ${s.GREETINGS.admin[(0,l.random)(s.GREETINGS.adminMsgNumber)]}* ${s.HEY_EMOJIES[(0,l.random)(s.HEY_EMOJIES.length)]}`,N=`*These are the Notes ${s.GREETINGS.member[(0,l.random)(s.GREETINGS.memberMsgNumber)]}* ${s.HEY_EMOJIES[(0,l.random)(s.HEY_EMOJIES.length)]}

*Use filter if you want specific subject's notes*
Eg: *!notes {SubjectName}*

Note: _I am not connected, associated, affiliated with any of the Owners of these links to Promote, Encourage any Channel/Group, I found the links on internet only._`;const O=async(e,a,o)=>{let t=o==="ADMIN"?W:N;t+=`

: ${c.FOOTERS.footers[(0,l.random)(c.FOOTERS.footerMsgLength)]}`,M.NOTES.forEach(m=>{t+=`

*_NAME_* : *${m.name}*

 -----------*Content*------------`,m.content.forEach(g=>{t+=`

Name of the Content: _${g.name}_
Link: ${g.link}`})}),o==="ADMIN"?(await e.getChats())[E.BOT].sendMessage(t):o!=="NONE"&&(0,p.sendAndDeleteMsg)(e,a,o,t)},b=`Sorry ${s.GREETINGS.member[(0,l.random)(s.GREETINGS.memberMsgNumber)]}
Only one word is allowed after !notes command ${s.HEY_EMOJIES[(0,l.random)(s.HEY_EMOJIES.length)]}`,_="The filter is invalid or notes are not updated with the respective subject, please wait for a while we will upload the respective notes soon",J=async(e,a,o,t)=>{const m=a.split(" ");if(t==="ADMIN"){const r=(await e.getChats())[E.BOT];if(m.length>2)r.sendMessage(b);else{const i=M.NOTES.map(n=>n.content.filter(f=>f.name.toLocaleLowerCase().includes(m[1].toLocaleLowerCase())));if(i.flat().length){let n=N;i.forEach(f=>{f.forEach(h=>{n+=`

Name of the Content: _${h.name}_
Link: ${h.link}`})}),n+=`

: ${c.FOOTERS.footers[(0,l.random)(c.FOOTERS.footerMsgLength)]}`,r.sendMessage(n)}else{const n=M.NOTES.filter(h=>h.name.toLocaleLowerCase().includes(m[1].toLocaleLowerCase()));let f=N;n.forEach(h=>{f+=`

*_NAME_* : *${h.name}*

 -----------*Content*------------`,h.content.forEach($=>{f+=`

Name of the Content: _${$.name}_
Link: ${$.link}`})}),n.length?(f+=`

: ${c.FOOTERS.footers[(0,l.random)(c.FOOTERS.footerMsgLength)]}`,r.sendMessage(f)):r.sendMessage(_)}}}else if(t!=="NONE")if(m.length>2)(0,p.sendAndDeleteMsg)(e,o,t,b);else{const g=M.NOTES.map(r=>r.content.filter(i=>i.name.toLocaleLowerCase().includes(m[1].toLocaleLowerCase())));if(g.flat().length){let r=N;g.forEach(i=>{i.forEach(n=>{r+=`

Name of the Content: _${n.name}_
Link: ${n.link}`})}),r+=`

: ${c.FOOTERS.footers[(0,l.random)(c.FOOTERS.footerMsgLength)]}`,(0,p.sendAndDeleteMsg)(e,o,t,r)}else{const r=M.NOTES.filter(n=>n.name.toLocaleLowerCase().includes(m[1].toLocaleLowerCase()));let i=N;r.forEach(n=>{i+=`

*_NAME_* : *${n.name}*

 -----------*Content*------------`,n.content.forEach(f=>{i+=`

Name of the Content: _${f.name}_
Link: ${f.link}`})}),r.length?(i+=`

: ${c.FOOTERS.footers[(0,l.random)(c.FOOTERS.footerMsgLength)]}`,(0,p.sendAndDeleteMsg)(e,o,t,i)):(0,p.sendAndDeleteMsg)(e,o,t,_)}}};0&&(module.exports={sendNotes,sendNotesByFilter});
//# sourceMappingURL=sendNotes.js.map
