"use strict";var h=Object.create;var r=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var M=(e,t)=>{for(var o in t)r(e,o,{get:t[o],enumerable:!0})},a=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of p(t))!T.call(e,s)&&s!==o&&r(e,s,{get:()=>t[s],enumerable:!(n=u(t,s))||n.enumerable});return e};var W=(e,t,o)=>(o=e!=null?h(f(e)):{},a(t||!e||!e.__esModule?r(o,"default",{value:e,enumerable:!0}):o,e)),y=e=>a(r({},"__esModule",{value:!0}),e);var S={};M(S,{sendSource:()=>O});module.exports=y(S);var b=W(require("dotenv")),i=require("../utils/reply/replies"),c=require("./sendMessage"),m=require(".."),g=require("./messageActions");b.config();const I=`Hey, Checkout how I *${process.env.BOT_NAME}* created!!${i.HEY_EMOJIES[(0,c.random)(i.HEY_EMOJIES.length)]}
Check the Source Code from here:
https://github.com/PiyushDuggal-source/IITM-WA-BOT

*Give it a star, if you like it!*

*Got any _Suggestion/Issue_?* Report here:
https://github.com/PiyushDuggal-source/IITM-WA-BOT/issues

*Want to contribute?\u{1F60E} _Direct Messege me!_*`,O=async(e,t,o)=>{const s=(await e.getChats())[m.BOT];o.role!=="NONE"&&(s.sendMessage(I),(0,g.react)(t))};0&&(module.exports={sendSource});
//# sourceMappingURL=sendSource.js.map
