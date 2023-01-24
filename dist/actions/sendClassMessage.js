"use strict";var m=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var C=Object.prototype.hasOwnProperty;var A=(s,e)=>{for(var t in e)m(s,t,{get:e[t],enumerable:!0})},u=(s,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of M(e))!C.call(s,o)&&o!==t&&m(s,o,{get:()=>e[o],enumerable:!(a=T(e,o))||a.enumerable});return s};var D=s=>u(m({},"__esModule",{value:!0}),s);var E={};A(E,{sendClassMessage:()=>$});module.exports=D(E);var l=require(".."),p=require("../resources/calendar"),g=require("../utils/reply/footers"),c=require("../utils/reply/replies"),r=require("./sendMessage");const S=s=>{const e=new Date;return s.filter(t=>t.date.toDateString()===e.toDateString())},d=`${process.env.BOT_NAME} : ${c.HOLIDAY_REPLIES.members[(0,r.random)(c.HOLIDAY_REPLIES.members.length)]} 
: ${g.FOOTERS.footers[(0,r.random)(g.FOOTERS.footerMsgLength)]}`,$=async(s,e,t)=>{const a=S(p.CALENDAR);if(t==="ADMIN"){const n=(await s.getChats())[l.BOT];if(!a.length)n.sendMessage(d);else{let f="\u{1F4D8}*Today's Classes*\u{1F4D8}";a.forEach(i=>f+=`
 -------------------------------- 
\u{1F4D6} *Topic* : *${i.topic}* 
\u{1F570} *Timing* : _${i.time}_ 
\u{1F4C5} *Date* : *Today!* 
\u{1F3EB} *Course* : ${i.courseName}
 `),n.sendMessage(f)}}else if(t!=="NONE")if(!a.length)(0,r.sendMessage)(s,d,e,t,void 0,{classMsg:!0});else{let o="\u{1F4D8}*Today's Classes*\u{1F4D8}";a.forEach(n=>o+=`
 -------------------------------- 
\u{1F4D6} *Topic* : *${n.topic}* 
\u{1F570} *Timing* : _${n.time}_ 
\u{1F4C5} *Date* : *Today!* 
\u{1F3EB} *Course* : ${n.courseName}
 `),(0,r.sendMessage)(s,o,e,t,void 0,{classMsg:!0})}};0&&(module.exports={sendClassMessage});
//# sourceMappingURL=sendClassMessage.js.map
