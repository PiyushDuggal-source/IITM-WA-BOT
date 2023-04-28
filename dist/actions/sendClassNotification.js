"use strict";var d=Object.create;var o=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var p=(e,n)=>{for(var s in n)o(e,s,{get:n[s],enumerable:!0})},r=(e,n,s,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of l(n))!C.call(e,a)&&a!==s&&o(e,a,{get:()=>n[a],enumerable:!(t=c(n,a))||t.enumerable});return e};var g=(e,n,s)=>(s=e!=null?d(u(e)):{},r(n||!e||!e.__esModule?o(s,"default",{value:e,enumerable:!0}):s,e)),h=e=>r(o({},"__esModule",{value:!0}),e);var b={};p(b,{sendClassNotification:()=>A});module.exports=h(b);var i=g(require("date-fns/isToday")),f=require("date-fns"),m=require("../resources/calendar");const y=e=>{let n=[];const s=new Date;return e.forEach(t=>{if((0,i.default)(t.date)){const a=(0,f.differenceInMinutes)(t.date,s);a<5&&0<a?n.push({...t,numberOfMinutes:5}):a<10&&0<a&&n.push({...t,numberOfMinutes:10})}}),n},A=(e,n)=>{const s=y(m.CALENDAR);if(s.length){let t=`\u26A0 Attention Guys!! \u26A0 CLASS!

\u{1F4D8}*Today's Classes*\u{1F4D8}`;s.forEach(a=>t+=`
 -------------------------------- 
\u{1F4D6} *Topic*      : *${a.topic}* 
\u{1F570} *Time*   : _Starting in *${a.numberOfMinutes}* minutes_
\u{1F4C5} *Date*       : *Today!* 
\u{1F3EB} *Course*  : ${a.courseName}
*Calendar Link*: https://calendar.google.com/calendar/u/0/r/day `),e.sendMessage(n,t)}};0&&(module.exports={sendClassNotification});
//# sourceMappingURL=sendClassNotification.js.map
