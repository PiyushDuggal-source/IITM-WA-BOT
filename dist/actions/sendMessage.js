var b=Object.create;var f=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var l=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var O=s=>f(s,"__esModule",{value:!0});var d=(s,t)=>{O(s);for(var e in t)f(s,e,{get:t[e],enumerable:!0})},N=(s,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of W(t))!B.call(s,o)&&o!=="default"&&f(s,o,{get:()=>t[o],enumerable:!(e=$(t,o))||e.enumerable});return s},p=s=>N(O(f(s!=null?b(l(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);d(exports,{random:()=>m,sendMessage:()=>v});var n=p(require("../utils/reply/footers")),_=p(require("dotenv")),g=p(require("./sendAndDeleteMsg")),A=p(require(".."));_.config();const v=async(s,t,e,o,c,M,h)=>{if(o==="ADMIN"){const r=(await s.getChats())[A.BOT];if(c)r.sendMessage(t);else if(h){const i=`${process.env.BOT_NAME}: ${t} 
:${n.FOOTERS.footers[m(n.FOOTERS.footerMsgLength)]}`;r.sendMessage(i)}else{const i=`${process.env.BOT_NAME}: ${t}`;r.sendMessage(i)}}else if(o!=="NONE"){const a=e.author;if(M==null?void 0:M.classMsg)(await s.getChats())[A.BOT].sendMessage(t);else if(c)(0,g.sendAndDeleteMsg)(s,e,a,t);else if(h){const r=`${process.env.BOT_NAME}: ${t} 
:${n.FOOTERS.footers[m(n.FOOTERS.footerMsgLength)]}`;(0,g.sendAndDeleteMsg)(s,e,a,r)}else{const r=`${process.env.BOT_NAME}: ${t}`;(0,g.sendAndDeleteMsg)(s,e,a,r)}}},m=s=>Math.floor(Math.random()*s);0&&(module.exports={random,sendMessage});
//# sourceMappingURL=sendMessage.js.map
