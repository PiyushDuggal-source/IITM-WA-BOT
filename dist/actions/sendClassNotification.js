"use strict";var d=Object.create;var o=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var l=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var p=(e,a)=>{for(var n in a)o(e,n,{get:a[n],enumerable:!0})},r=(e,a,n,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of u(a))!C.call(e,t)&&t!==n&&o(e,t,{get:()=>a[t],enumerable:!(s=c(a,t))||s.enumerable});return e};var h=(e,a,n)=>(n=e!=null?d(l(e)):{},r(a||!e||!e.__esModule?o(n,"default",{value:e,enumerable:!0}):n,e)),g=e=>r(o({},"__esModule",{value:!0}),e);var b={};p(b,{sendClassNotification:()=>A});module.exports=g(b);var i=h(require("date-fns/isToday")),f=require("date-fns"),m=require("../resources/calendar");const y=e=>{let a=[];const n=new Date;return e.forEach(s=>{if((0,i.default)(s.date)){const t=(0,f.differenceInMinutes)(s.date,n);t<5&&0<t?a.push({...s,numberOfMinutes:5}):t<10&&0<t&&a.push({...s,numberOfMinutes:10})}}),a},A=e=>{const a=y(m.CALENDAR);if(a.length){let n=`\u26A0 Attention Guys!! \u26A0 CLASS!

\u{1F4D8}*Today's Classes*\u{1F4D8}`;a.forEach(s=>n+=`
 -------------------------------- 
\u{1F4D6} *Topic*      : *${s.topic}* 
\u{1F570} *Time*   : _Starting in *${s.numberOfMinutes}* minutes_
\u{1F4C5} *Date*       : *Today!* 
\u{1F3EB} *Course*  : ${s.courseName}
*Calendar Link*: https://calendar.google.com/calendar/u/0/r/day `),e.sendMessage(n)}};0&&(module.exports={sendClassNotification});
//# sourceMappingURL=sendClassNotification.js.map
