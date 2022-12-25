var r=Object.defineProperty;var l=e=>r(e,"__esModule",{value:!0});var s=(e,o)=>{l(e);for(var g in o)r(e,g,{get:o[g],enumerable:!0})};s(exports,{log:()=>N});const N=({msg:e,type:o,error:g})=>{let t=new Date,n="["+t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+"] ";g?console.error(n+` [${o}] `+e+`
`):console.log(n+` [${o}] `+e+`
`)};0&&(module.exports={log});
//# sourceMappingURL=index.js.map
