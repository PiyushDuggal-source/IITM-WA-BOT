"use strict";var i=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var y=(o,e)=>{for(var t in e)i(o,t,{get:e[t],enumerable:!0})},d=(o,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of p(e))!f.call(o,s)&&s!==t&&i(o,s,{get:()=>e[s],enumerable:!(n=g(e,s))||n.enumerable});return o};var _=o=>d(i({},"__esModule",{value:!0}),o);var x={};y(x,{default:()=>h});module.exports=_(x);var m=require("child_process"),r=require("winston");const $=process.env.PAPERTRAIL_HOST,w=process.env.PAPERTRAIL_PORT,b=r.format.printf(({level:o,message:e,label:t,timestamp:n})=>`time-${n} [${t}] ${o}: ${e}`),c=`./logs/wa-${Date.now()}.log`,u="./bin";let l="";const T=new r.transports.File({filename:c}),P=new r.transports.Console;switch(process.platform){case"darwin":l="remote_syslog_darwin";break;case"linux":l="remote_syslog_linux";break;default:l="remote_syslog_linux"}const a=(0,r.createLogger)({format:r.format.combine(r.format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),b),levels:r.config.syslog.levels,transports:[T,P]}),R=(o,e)=>{a.info(o,{label:e})};try{const o="pkill [r]emote_syslog",e=`${u}/${l} -d ${$} -p ${w} ${c}`;try{(0,m.execSync)(o)}catch(t){console.log("No earlier remote syslog process found",t)}(0,m.execSync)(e)}catch(o){a.error("Someting went wrong while executing remote syslog command",o)}a.info(`Whats app bot rerun & logging initiated; logging at ${c}`,{label:"Bot Initialize"});var h=a;0&&(module.exports={});
//# sourceMappingURL=index.js.map