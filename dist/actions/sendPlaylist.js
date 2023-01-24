"use strict";var m=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var T=(s,e)=>{for(var t in e)m(s,t,{get:e[t],enumerable:!0})},A=(s,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of L(e))!S.call(s,r)&&r!==t&&m(s,r,{get:()=>e[r],enumerable:!(o=b(e,r))||o.enumerable});return s};var E=s=>A(m({},"__esModule",{value:!0}),s);var O={};T(O,{sendPlayList:()=>W,sendPlayListByFilter:()=>w});module.exports=E(O);var f=require(".."),y=require("../resources/notes"),p=require("../utils/reply/footers"),n=require("../utils/reply/replies"),d=require("./sendAndDeleteMsg"),i=require("./sendMessage");const g=(s,e)=>(s.forEach(t=>{e+=`

${t.name}
${t.link}`}),e+=`

:${p.FOOTERS.footers[(0,i.random)(p.FOOTERS.footerMsgLength)]}`,e);let M=`*These are your course PlayLists ${n.HEY_EMOJIES[(0,i.random)(n.HEY_EMOJIES.length)]}*

*Use filters if you want specific subject's Playlist(s)
Eg: *!Playlist {SubjectName}* _without {}_`,h=`*These are your course PlayLists ${n.HEY_EMOJIES[(0,i.random)(n.HEY_EMOJIES.length)]}*`;const N=`Sorry ${n.GREETINGS.member[(0,i.random)(n.GREETINGS.memberMsgNumber)]}
Only one word is allowed after !playlist command ${n.HEY_EMOJIES[(0,i.random)(n.HEY_EMOJIES.length)]}`,P="The filter is invalid or notes are not updated with the respective subject, please wait for a while we will upload the respective notes soon",W=async(s,e,t)=>{let o=t==="ADMIN"?h:M;o=g(y.PLAYLISTS,o),t==="ADMIN"?(await s.getChats())[f.BOT].sendMessage(o):t!=="NONE"&&(0,d.sendAndDeleteMsg)(s,e,t,o)},w=async(s,e,t,o)=>{if(o!=="NONE"){const r=e.split(" "),l=(await s.getChats())[f.BOT];if(r.length>2)l.sendMessage(N);else{const c=y.PLAYLISTS.filter(a=>a.name.toLocaleLowerCase().includes(r[1].toLocaleLowerCase()));if(!c.length)l.sendMessage(P);else if(o==="ADMIN"){let a=h;a=g(c,a),l.sendMessage(a)}else{let a=M;a=g(c,a),(0,d.sendAndDeleteMsg)(s,t,o,a)}}}};0&&(module.exports={sendPlayList,sendPlayListByFilter});
//# sourceMappingURL=sendPlaylist.js.map
