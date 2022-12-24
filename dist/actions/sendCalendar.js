var f=Object.create;var r=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var g=e=>r(e,"__esModule",{value:!0});var u=(e,s)=>{g(e);for(var a in s)r(e,a,{get:s[a],enumerable:!0})},$=(e,s,a)=>{if(s&&typeof s=="object"||typeof s=="function")for(let t of M(s))!h.call(e,t)&&t!=="default"&&r(e,t,{get:()=>s[t],enumerable:!(a=y(s,t))||a.enumerable});return e},o=e=>$(g(r(e!=null?f(C(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);u(exports,{sendCalendar:()=>A});var d=o(require("../resources/calendar")),n=o(require("date-fns")),m=o(require("../utils/reply/footers")),i=o(require("./sendMessage")),p=o(require("..")),l=o(require("./sendAndDeleteMsg"));const c=e=>{let s="*This is you Calendar!!! \u{1F5D3}*";return e.forEach(a=>s+=`
 -------------------------------- 
\u{1F4D6} *Topic* : *${a.topic}* 
\u{1F570} *Timing* : _${a.time}_ 
\u{1F4C5} *Date* : ${(0,n.format)(a.date,"eeee, LLLL d, yyyy")}  
\u{1F3EB} *Course* : ${a.courseName}
*Calendar Link* : ${(0,n.isToday)(a.date)?"https://calendar.google.com/calendar/u/0/r/day":`https://calendar.google.com/calendar/u/0/r/day/${a.date.getFullYear()}/${a.date.getMonth()+1}/${a.date.getDate()}`}`),s+`

: ${m.FOOTERS.footers[(0,i.random)(m.FOOTERS.footerMsgLength)]}`},A=async(e,s,a)=>{a==="ADMIN"?(await e.getChats())[p.BOT].sendMessage(c(d.CALENDAR)):a!=="NONE"&&(0,l.sendAndDeleteMsg)(e,s,a,c(d.CALENDAR))};0&&(module.exports={sendCalendar});
//# sourceMappingURL=sendCalendar.js.map
