var C=Object.create;var t=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptor,b=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,A=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var m=(e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,i=(e,a)=>{for(var s in a||(a={}))c.call(a,s)&&m(e,s,a[s]);if(f)for(var s of f(a))M.call(a,s)&&m(e,s,a[s]);return e},d=(e,a)=>h(e,b(a)),u=e=>t(e,"__esModule",{value:!0});var S=(e,a)=>{u(e);for(var s in a)t(e,s,{get:a[s],enumerable:!0})},T=(e,a,s)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of g(a))!c.call(e,n)&&n!=="default"&&t(e,n,{get:()=>a[n],enumerable:!(s=y(a,n))||s.enumerable});return e},l=e=>T(u(t(e!=null?C(A(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);S(exports,{sendClassNotification:()=>w});var r=l(require("date-fns")),p=l(require("../resources/calendar"));const W=e=>{let a=[];const s=new Date;return e.forEach(n=>{if((0,r.isToday)(n.date)){const o=(0,r.differenceInMinutes)(n.date,s);o<5&&0<o?a.push(d(i({},n),{numberOfMinutes:5})):o<10&&0<o&&a.push(d(i({},n),{numberOfMinutes:10}))}}),a},w=e=>{const a=W(p.CALENDAR);if(a.length){let s=`\u26A0 Attention Guys!! \u26A0 CLASS!

\u{1F4D8}*Today's Classes*\u{1F4D8}`;a.forEach(n=>s+=`
 -------------------------------- 
\u{1F4D6} *Topic*      : *${n.topic}* 
\u{1F570} *Time*   : _Starting in *${n.numberOfMinutes}* minutes_
\u{1F4C5} *Date*       : *Today!* 
\u{1F3EB} *Course*  : ${n.courseName}
*Calendar Link*: https://calendar.google.com/calendar/u/0/r/day `),e.sendMessage(s)}};0&&(module.exports={sendClassNotification});
//# sourceMappingURL=sendClassNotification.js.map
