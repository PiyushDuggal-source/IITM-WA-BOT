var u=Object.create;var i=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var d=e=>i(e,"__esModule",{value:!0});var S=(e,s)=>{d(e);for(var t in s)i(e,t,{get:s[t],enumerable:!0})},$=(e,s,t)=>{if(s&&typeof s=="object"||typeof s=="function")for(let a of C(s))!D.call(e,a)&&a!=="default"&&i(e,a,{get:()=>s[a],enumerable:!(t=y(s,a))||t.enumerable});return e},n=e=>$(d(i(e!=null?u(A(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);S(exports,{sendClassMessage:()=>E});var f=n(require("..")),M=n(require("../resources/calendar")),g=n(require("../utils/reply/footers")),l=n(require("../utils/reply/replies")),r=n(require("./sendMessage"));const h=e=>{const s=new Date;return e.filter(t=>t.date.toDateString()===s.toDateString())},T=`${process.env.BOT_NAME} : ${l.HOLIDAY_REPLIES.members[(0,r.random)(l.HOLIDAY_REPLIES.members.length)]} 
: ${g.FOOTERS.footers[(0,r.random)(g.FOOTERS.footerMsgLength)]}`,E=async(e,s,t)=>{const a=h(M.CALENDAR);if(t==="ADMIN"){const o=(await e.getChats())[f.BOT];if(!a.length)o.sendMessage(T);else{let p="\u{1F4D8}*Today's Classes*\u{1F4D8}";a.forEach(c=>p+=`
 -------------------------------- 
\u{1F4D6} *Topic* : *${c.topic}* 
\u{1F570} *Timing* : _${c.time}_ 
\u{1F4C5} *Date* : *Today!* 
\u{1F3EB} *Course* : ${c.courseName}
 `),o.sendMessage(p)}}else if(t!=="NONE")if(!a.length)(0,r.sendMessage)(e,T,s,t,void 0,{classMsg:!0});else{let m="\u{1F4D8}*Today's Classes*\u{1F4D8}";a.forEach(o=>m+=`
 -------------------------------- 
\u{1F4D6} *Topic* : *${o.topic}* 
\u{1F570} *Timing* : _${o.time}_ 
\u{1F4C5} *Date* : *Today!* 
\u{1F3EB} *Course* : ${o.courseName}
 `),(0,r.sendMessage)(e,m,s,t,void 0,{classMsg:!0})}};0&&(module.exports={sendClassMessage});
//# sourceMappingURL=sendClassMessage.js.map
