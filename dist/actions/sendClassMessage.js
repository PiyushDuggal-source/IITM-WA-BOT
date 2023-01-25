"use strict";var m=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var C=Object.prototype.hasOwnProperty;var u=(s,e)=>{for(var o in e)m(s,o,{get:e[o],enumerable:!0})},A=(s,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of M(e))!C.call(s,t)&&t!==o&&m(s,t,{get:()=>e[t],enumerable:!(a=T(e,t))||a.enumerable});return s};var E=s=>A(m({},"__esModule",{value:!0}),s);var $={};u($,{sendClassMessage:()=>S});module.exports=E($);var f=require(".."),p=require("../resources/calendar"),g=require("../utils/reply/footers"),c=require("../utils/reply/replies"),n=require("./sendMessage");const O=s=>{const e=new Date;return s.filter(o=>o.date.toDateString()===e.toDateString())},d=`${process.env.BOT_NAME} : ${c.HOLIDAY_REPLIES.members[(0,n.random)(c.HOLIDAY_REPLIES.members.length)]} 
: ${g.FOOTERS.footers[(0,n.random)(g.FOOTERS.footerMsgLength)]}`,S=async(s,e,o)=>{const a=O(p.CALENDAR);if(o.role==="OWNER"){const r=(await s.getChats())[f.BOT];if(!a.length)r.sendMessage(d);else{let l="\u{1F4D8}*Today's Classes*\u{1F4D8}";a.forEach(i=>l+=`
 -------------------------------- 
\u{1F4D6} *Topic* : *${i.topic}* 
\u{1F570} *Timing* : _${i.time}_ 
\u{1F4C5} *Date* : *Today!* 
\u{1F3EB} *Course* : ${i.courseName}
 `),r.sendMessage(l)}}else if(o.role!=="NONE")if(console.log("reached send msg"),!a.length)(0,n.sendMessage)(s,d,e,o,void 0,{classMsg:!0});else{let t="\u{1F4D8}*Today's Classes*\u{1F4D8}";a.forEach(r=>t+=`
 -------------------------------- 
\u{1F4D6} *Topic* : *${r.topic}* 
\u{1F570} *Timing* : _${r.time}_ 
\u{1F4C5} *Date* : *Today!* 
\u{1F3EB} *Course* : ${r.courseName}
 `),(0,n.sendMessage)(s,t,e,o,void 0,{classMsg:!0})}};0&&(module.exports={sendClassMessage});
//# sourceMappingURL=sendClassMessage.js.map
