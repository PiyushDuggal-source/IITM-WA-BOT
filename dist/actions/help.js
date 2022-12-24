var l=Object.create;var r=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var a=e=>r(e,"__esModule",{value:!0});var N=(e,m)=>{a(e);for(var n in m)r(e,n,{get:m[n],enumerable:!0})},f=(e,m,n)=>{if(m&&typeof m=="object"||typeof m=="function")for(let t of g(m))!y.call(e,t)&&t!=="default"&&r(e,t,{get:()=>m[t],enumerable:!(n=M(m,t))||n.enumerable});return e},p=e=>f(a(r(e!=null?l(b(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);N(exports,{help:()=>E});var i=p(require("..")),s=p(require("../utils/reply/replies")),d=p(require("./sendAndDeleteMsg")),o=p(require("./sendMessage"));let h=`Hey ${s.GREETINGS.admin[(0,o.random)(s.GREETINGS.adminMsgNumber)]} ${s.HEY_EMOJIES[(0,o.random)(s.HEY_EMOJIES.length)]}, Need my help!!

Just do one of these simple things ${s.GREETINGS.admin[(0,o.random)(s.GREETINGS.adminMsgNumber)]}:
1. *Mention me*
2. Type: !allCmds
3. !cmd`,c=`Hey ${s.GREETINGS.member[(0,o.random)(s.GREETINGS.memberMsgNumber)]} ${s.HEY_EMOJIES[(0,o.random)(s.HEY_EMOJIES.length)]}, Need my help!!

Just do one of these simple things ${s.GREETINGS.member[(0,o.random)(s.GREETINGS.memberMsgNumber)]}:
1. *Mention me*
2. Type: !allCmds
3. !cmd`;const E=async(e,m,n)=>{const t=n==="ADMIN"?h:c;n==="ADMIN"?(await e.getChats())[i.BOT].sendMessage(t):n!=="NONE"&&(0,d.sendAndDeleteMsg)(e,m,n,t)};0&&(module.exports={help});
//# sourceMappingURL=help.js.map
