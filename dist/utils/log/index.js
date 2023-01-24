"use strict";var r=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var N=Object.prototype.hasOwnProperty;var a=(t,e)=>{for(var n in e)r(t,n,{get:e[n],enumerable:!0})},O=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let g of s(e))!N.call(t,g)&&g!==n&&r(t,g,{get:()=>e[g],enumerable:!(o=l(e,g))||o.enumerable});return t};var D=t=>O(r({},"__esModule",{value:!0}),t);var R={};a(R,{log:()=>E});module.exports=D(R);const E=({msg:t,type:e,error:n})=>{let o=new Date,g="["+o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate()+" "+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds()+"] ";n?console.error(g+` [${e}] `+t+`
`):console.log(g+` [${e}] `+t+`
`)};0&&(module.exports={log});
//# sourceMappingURL=index.js.map
