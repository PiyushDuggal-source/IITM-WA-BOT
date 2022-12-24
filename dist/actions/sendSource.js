var h=Object.create;var r=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var a=e=>r(e,"__esModule",{value:!0});var f=(e,t)=>{a(e);for(var o in t)r(e,o,{get:t[o],enumerable:!0})},T=(e,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of u(t))!y.call(e,s)&&s!=="default"&&r(e,s,{get:()=>t[s],enumerable:!(o=m(t,s))||o.enumerable});return e},n=e=>T(a(r(e!=null?h(g(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);f(exports,{sendSource:()=>l});var M=n(require("dotenv")),i=n(require("../utils/reply/replies")),c=n(require("./sendMessage")),p=n(require(".."));M.config();const d=`Hey, Checkout how I *${process.env.BOT_NAME}* created!!${i.HEY_EMOJIES[(0,c.random)(i.HEY_EMOJIES.length)]}
Check the Source Code from here:
https://github.com/PiyushDuggal-source/IITM-WA-BOT

*Give it a star, if you like it!*

*Got any _Suggestion/Issue_?* Report here:
https://github.com/PiyushDuggal-source/IITM-WA-BOT/issues

*Want to contribute?\u{1F60E} _Direct Messege me!_*`,l=async(e,t)=>{const s=(await e.getChats())[p.BOT];t!=="NONE"&&s.sendMessage(d)};0&&(module.exports={sendSource});
//# sourceMappingURL=sendSource.js.map
