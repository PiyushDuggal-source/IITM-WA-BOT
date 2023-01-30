"use strict";var n=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var C=(o,a)=>{for(var e in a)n(o,e,{get:a[e],enumerable:!0})},M=(o,a,e,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of f(a))!y.call(o,r)&&r!==e&&n(o,r,{get:()=>a[r],enumerable:!(s=p(a,r))||s.enumerable});return o};var $=o=>M(n({},"__esModule",{value:!0}),o);var T={};C(T,{sendCalendar:()=>h});module.exports=$(T);var m=require("../resources/calendar"),t=require("date-fns"),d=require("../utils/reply/footers"),g=require("./sendMessage"),l=require(".."),c=require("./sendAndDeleteMsg");const i=o=>{let a="*This is you Calendar!!! \u{1F5D3}*";return o.forEach(e=>a+=`
 -------------------------------- 
\u{1F4D6} *Topic* : *${e.topic}* 
\u{1F570} *Timing* : _${e.time}_ 
\u{1F4C5} *Date* : ${(0,t.format)(e.date,"eeee, LLLL d, yyyy")}  
\u{1F3EB} *Course* : ${e.courseName}
*Calendar Link* : ${(0,t.isToday)(e.date)?"https://calendar.google.com/calendar/u/0/r/day":`https://calendar.google.com/calendar/u/0/r/day/${e.date.getFullYear()}/${e.date.getMonth()+1}/${e.date.getDate()}`}`),a+`

: ${d.FOOTERS.footers[(0,g.random)(d.FOOTERS.footerMsgLength)]}`},h=async(o,a,e)=>{e.role==="OWNER"?(await o.getChats())[l.BOT].sendMessage(i(m.CALENDAR)):e.role!=="NONE"&&(0,c.sendAndDeleteMsg)(o,a,e.chatId,i(m.CALENDAR))};0&&(module.exports={sendCalendar});
//# sourceMappingURL=sendCalendar.js.map
