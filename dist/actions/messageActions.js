"use strict";var M=Object.create;var n=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var u=(r,t)=>{for(var o in t)n(r,o,{get:t[o],enumerable:!0})},f=(r,t,o,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of A(t))!h.call(r,i)&&i!==o&&n(r,i,{get:()=>t[i],enumerable:!(e=l(t,i))||e.enumerable});return r};var I=(r,t,o)=>(o=r!=null?M(N(r)):{},f(t||!r||!r.__esModule?n(o,"default",{value:r,enumerable:!0}):o,r)),S=r=>f(n({},"__esModule",{value:!0}),r);var g={};u(g,{checkMessage:()=>W,react:()=>_,superCmdFilter:()=>E});module.exports=S(g);var y=I(require("dotenv")),a=require(".."),s=require("../models/models"),m=require("../utils/reply/replies"),c=require("./sendMessage"),d=require("../utils/Commands/allCmds");y.config();const W=async r=>{var t,o,e;return(r.fromMe||r.id.fromMe)&&String(r.to)===String(a.WA_BOT_ID)?{name:(t=r._data)==null?void 0:t.notifyName,role:"OWNER",chatId:r.from}:String(r.from)===String(a.WA_BOT_ID)?(await s.UserModel.find({roles:"ADMIN"})).some(p=>p.recipitantId===r.author)?{name:(e=r._data)==null?void 0:e.notifyName,role:"ADMIN",chatId:r.author||""}:{name:(o=r._data)==null?void 0:o.notifyName,role:"STUDENT",chatId:r.author||""}:{role:"NONE",chatId:r.author||""}},_=async r=>{await r.react(m.REACT_EMOGIES[(0,c.random)(m.REACT_EMOGIES.length)])},E=r=>{const t=r.split(" ")[0].slice(1);return d.OWNER_ADMIN_CMDS.some(o=>o.some(e=>e===t))};0&&(module.exports={checkMessage,react,superCmdFilter});
//# sourceMappingURL=messageActions.js.map
