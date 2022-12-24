var y=Object.create;var n=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var f=e=>n(e,"__esModule",{value:!0});var b=(e,s)=>{f(e);for(var o in s)n(e,o,{get:s[o],enumerable:!0})},h=(e,s,o)=>{if(s&&typeof s=="object"||typeof s=="function")for(let t of d(s))!S.call(e,t)&&t!=="default"&&n(e,t,{get:()=>s[t],enumerable:!(o=c(s,t))||o.enumerable});return e},r=e=>h(f(n(e!=null?y(A(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);b(exports,{sendPlayList:()=>E});var g=r(require("..")),l=r(require("../resources/notes")),m=r(require("../utils/reply/footers")),p=r(require("../utils/reply/replies")),M=r(require("./sendAndDeleteMsg")),i=r(require("./sendMessage"));const E=async(e,s,o)=>{let t=`*These are your course PlayLists ${p.HEY_EMOJIES[(0,i.random)(p.HEY_EMOJIES.length)]}*`;l.PLAYLISTS.forEach(a=>{t+=`

${a.name}
${a.link}`}),t+=`

:${m.FOOTERS.footers[(0,i.random)(m.FOOTERS.footerMsgLength)]}`,o==="ADMIN"?(await e.getChats())[g.BOT].sendMessage(t):o!=="NONE"&&(0,M.sendAndDeleteMsg)(e,s,o,t)};0&&(module.exports={sendPlayList});
//# sourceMappingURL=sendPlaylist.js.map
