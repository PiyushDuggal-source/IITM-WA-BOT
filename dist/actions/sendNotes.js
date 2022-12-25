var $=Object.create;var h=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var u=e=>h(e,"__esModule",{value:!0});var C=(e,s)=>{u(e);for(var n in s)h(e,n,{get:s[n],enumerable:!0})},S=(e,s,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let t of L(s))!A.call(e,t)&&t!=="default"&&h(e,t,{get:()=>s[t],enumerable:!(n=w(s,t))||n.enumerable});return e},m=e=>S(u(h(e!=null?$(_(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);C(exports,{sendNotes:()=>W,sendNotesByFilter:()=>k});var M=m(require("..")),d=m(require("../resources/notes")),l=m(require("../utils/reply/footers")),o=m(require("../utils/reply/replies")),N=m(require("./sendAndDeleteMsg")),r=m(require("./sendMessage"));let T=`*These are the Notes ${o.GREETINGS.admin[(0,r.random)(o.GREETINGS.adminMsgNumber)]}* ${o.HEY_EMOJIES[(0,r.random)(o.HEY_EMOJIES.length)]}`,b=`*These are the Notes ${o.GREETINGS.member[(0,r.random)(o.GREETINGS.memberMsgNumber)]}* ${o.HEY_EMOJIES[(0,r.random)(o.HEY_EMOJIES.length)]}

*Use filter if you want specific subject's notes*
Eg: *!notes {SubjectName}* _without {}_

Note: _I am not connected, associated, affiliated with any of the Owners of these links to Promote, Encourage any Channel/Group, I found the links on internet only._`;const W=async(e,s,n)=>{let t=n==="ADMIN"?T:b;t+=`

: ${l.FOOTERS.footers[(0,r.random)(l.FOOTERS.footerMsgLength)]}`,d.NOTES.forEach(i=>{t+=`

*_NAME_* : *${i.name}*

 -----------*Content*------------`,i.content.forEach(c=>{t+=`

Name of the Content: _${c.name}_
Link: ${c.link}`})}),n==="ADMIN"?(await e.getChats())[M.BOT].sendMessage(t):n!=="NONE"&&(0,N.sendAndDeleteMsg)(e,s,n,t)},O=`Sorry ${o.GREETINGS.member[(0,r.random)(o.GREETINGS.memberMsgNumber)]}
Only one word is allowed after !notes command ${o.HEY_EMOJIES[(0,r.random)(o.HEY_EMOJIES.length)]}`,I="The filter is invalid or notes are not updated with the respective subject, please wait for a while we will upload the respective notes soon",E=(e,s)=>(e.forEach(n=>{s+=`

*_NAME_* : *${n.name}*

 -----------*Content*------------`,n.content.forEach(t=>{s+=`

Name of the Content: _${t.name}_
Link: ${t.link}`})}),s),k=async(e,s,n,t)=>{const i=s.split(" ");if(t!=="NONE"){const p=(await e.getChats())[M.BOT];if(i.length>2)p.sendMessage(O);else{const f=d.NOTES.filter(g=>g.name.toLocaleLowerCase().includes(i[1].toLocaleLowerCase()));f.length||d.NOTES.forEach(g=>{g.content.filter(y=>{y.name.toLocaleLowerCase().includes(i[1].toLocaleLowerCase())&&f.push(g)})});let a=b;f.length?t==="ADMIN"?(a=E(f,a),a+=`

: ${l.FOOTERS.footers[(0,r.random)(l.FOOTERS.footerMsgLength)]}`,p.sendMessage(a)):(a=E(f,a),a+=`

: ${l.FOOTERS.footers[(0,r.random)(l.FOOTERS.footerMsgLength)]}`,(0,N.sendAndDeleteMsg)(e,n,t,a)):p.sendMessage(I)}}};0&&(module.exports={sendNotes,sendNotesByFilter});
//# sourceMappingURL=sendNotes.js.map
