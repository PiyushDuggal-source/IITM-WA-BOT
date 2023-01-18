"use strict";var h=Object.create;var n=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty;var T=(e,t)=>{for(var o in t)n(e,o,{get:t[o],enumerable:!0})},c=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of g(t))!f.call(e,s)&&s!==o&&n(e,s,{get:()=>t[s],enumerable:!(r=u(t,s))||r.enumerable});return e};var y=(e,t,o)=>(o=e!=null?h(p(e)):{},c(t||!e||!e.__esModule?n(o,"default",{value:e,enumerable:!0}):o,e)),M=e=>c(n({},"__esModule",{value:!0}),e);var b={};T(b,{sendSource:()=>W});module.exports=M(b);var I=y(require("dotenv")),i=require("../utils/reply/replies"),a=require("./sendMessage"),m=require("..");I.config();const O=`Hey, Checkout how I *${process.env.BOT_NAME}* created!!${i.HEY_EMOJIES[(0,a.random)(i.HEY_EMOJIES.length)]}
Check the Source Code from here:
https://github.com/PiyushDuggal-source/IITM-WA-BOT

*Give it a star, if you like it!*

*Got any _Suggestion/Issue_?* Report here:
https://github.com/PiyushDuggal-source/IITM-WA-BOT/issues

*Want to contribute?\u{1F60E} _Direct Messege me!_*`,W=async(e,t)=>{const r=(await e.getChats())[m.BOT];t!=="NONE"&&r.sendMessage(O)};0&&(module.exports={sendSource});
//# sourceMappingURL=sendSource.js.map
