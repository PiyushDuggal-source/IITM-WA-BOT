var M=Object.create;var a=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var L=e=>a(e,"__esModule",{value:!0});var N=(e,s)=>{L(e);for(var i in s)a(e,i,{get:s[i],enumerable:!0})},O=(e,s,i)=>{if(s&&typeof s=="object"||typeof s=="function")for(let o of _(s))!T.call(e,o)&&o!=="default"&&a(e,o,{get:()=>s[o],enumerable:!(i=E(s,o))||i.enumerable});return e},t=e=>O(L(a(e!=null?M(y(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);N(exports,{userControl:()=>b});var p=t(require("../../actions/help")),C=t(require("../../actions/sendCalendar")),f=t(require("../../actions/sendClassMessage")),l=t(require("../../actions/courseInfo")),c=t(require("../../actions/sendMessage")),m=t(require("../../actions/sendNotes")),n=t(require("../../actions/sendSource")),r=t(require("../../utils/Commands/instructions")),u=t(require("../../actions/sendPlaylist")),S=t(require("../../utils/messages/messages")),d=t(require("../../utils/reply/replies")),A=t(require("../.."));const b=async(e,s,i)=>{const o=s.body.slice(1);S.BOT_CHECK_MESSAGES.includes(o.toLocaleLowerCase())?await(await e.getChats())[A.BOT].sendMessage(`${process.env.BOT_NAME}: ${d.PING_REPLIES.members[(0,c.random)(d.PING_REPLIES.memberMsgNumber)]}`):r.NOTES_CMD.includes(o.split(" ")[0].toLocaleLowerCase())?o.split(" ").length>1?(0,m.sendNotesByFilter)(e,o,s,i):(0,m.sendNotes)(e,s,i):r.CALENDAR_COMMANDS.includes(o.toLocaleLowerCase())||r.CALENDAR_TYPOS.includes(o.toLocaleLowerCase())?(0,C.sendCalendar)(e,s,i):r.CLASS_COMMAND.includes(o.toLocaleLowerCase())?(0,f.sendClassMessage)(e,s,i):r.HELP_CMDS.includes(o.toLocaleLowerCase())?(0,p.help)(e,s,i):r.SOURCE.includes(o.toLocaleLowerCase())?(0,n.sendSource)(e,i):r.IMP_DATES.includes(o.toLocaleLowerCase())?(0,l.sendImpDates)(e,s,i):r.ELIGIBILITY.includes(o.toLocaleLowerCase())?(0,l.sendEligibility)(e,s,i):r.PLALIST_CMD_ALISA.includes(o.toLocaleLowerCase())&&(0,u.sendPlayList)(e,s,i)};0&&(module.exports={userControl});
//# sourceMappingURL=userController.js.map