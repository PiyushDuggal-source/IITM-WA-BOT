"use strict";var m=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var W=Object.prototype.hasOwnProperty;var L=(s,e)=>{for(var t in e)m(s,t,{get:e[t],enumerable:!0})},S=(s,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of E(e))!W.call(s,a)&&a!==t&&m(s,a,{get:()=>e[a],enumerable:!(o=b(e,a))||o.enumerable});return s};var T=s=>S(m({},"__esModule",{value:!0}),s);var A={};L(A,{sendPlayList:()=>P,sendPlayListByFilter:()=>w});module.exports=T(A);var f=require(".."),d=require("../resources/notes"),y=require("../utils/reply/footers"),r=require("../utils/reply/replies"),p=require("./sendAndDeleteMsg"),l=require("./sendMessage");const g=(s,e)=>(s.forEach(t=>{e+=`

${t.name}
${t.link}`}),e+=`

:${y.FOOTERS.footers[(0,l.random)(y.FOOTERS.footerMsgLength)]}`,e);let h=`*These are your course PlayLists ${r.HEY_EMOJIES[(0,l.random)(r.HEY_EMOJIES.length)]}*

*Use filters if you want specific subject's Playlist(s)
Eg: *!Playlist {SubjectName}* _without {}_`,M=`*These are your course PlayLists ${r.HEY_EMOJIES[(0,l.random)(r.HEY_EMOJIES.length)]}*`;const N=`Sorry ${r.GREETINGS.member[(0,l.random)(r.GREETINGS.memberMsgNumber)]}
Only one word is allowed after !playlist command ${r.HEY_EMOJIES[(0,l.random)(r.HEY_EMOJIES.length)]}`,O="The filter is invalid or notes are not updated with the respective subject, please wait for a while we will upload the respective notes soon",P=async(s,e,t)=>{let o=t.role==="OWNER"?M:h;o=g(d.PLAYLISTS,o),t.role==="OWNER"?(await s.getChats())[f.BOT].sendMessage(o):t.role!=="NONE"&&(0,p.sendAndDeleteMsg)(s,e,t.chatId,o)},w=async(s,e,t,o)=>{if(o.role!=="NONE"){const a=e.split(" "),i=(await s.getChats())[f.BOT];if(a.length>2)i.sendMessage(N);else{const c=d.PLAYLISTS.filter(n=>n.name.toLocaleLowerCase().includes(a[1].toLocaleLowerCase()));if(!c.length)i.sendMessage(O);else if(o.role==="OWNER"){let n=M;n=g(c,n),i.sendMessage(n)}else{let n=h;n=g(c,n),(0,p.sendAndDeleteMsg)(s,t,o.chatId,n)}}}};0&&(module.exports={sendPlayList,sendPlayListByFilter});
//# sourceMappingURL=sendPlaylist.js.map
