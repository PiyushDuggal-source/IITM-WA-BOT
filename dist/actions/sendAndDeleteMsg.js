var c=Object.create;var i=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var g=t=>i(t,"__esModule",{value:!0});var h=(t,e)=>{g(t);for(var a in e)i(t,a,{get:e[a],enumerable:!0})},w=(t,e,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of W(e))!M.call(t,s)&&s!=="default"&&i(t,s,{get:()=>e[s],enumerable:!(a=m(e,s))||a.enumerable});return t},r=t=>w(g(i(t!=null?c(f(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);h(exports,{sendAndDeleteMsg:()=>d});var n=r(require("../utils/reply/replies")),l=r(require("./sendMessage")),p=r(require("../utils/reply/footers"));const d=async(t,e,a,s)=>{const o=await t.getChatById(a);s+=`

${p.END_FOOTER}`,await(await o.sendMessage(s)).delete(),(await o.fetchMessages({limit:4})).length<2&&await o.delete(),"react"in e&&await e.react(n.REACT_EMOGIES[(0,l.random)(n.REACT_EMOGIES.length)])};0&&(module.exports={sendAndDeleteMsg});
//# sourceMappingURL=sendAndDeleteMsg.js.map