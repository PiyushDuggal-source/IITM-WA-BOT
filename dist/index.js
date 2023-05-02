"use strict";var G=Object.create;var g=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,J=Object.prototype.hasOwnProperty;var k=(e,o)=>{for(var n in o)g(e,n,{get:o[n],enumerable:!0})},I=(e,o,n,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of W(o))!J.call(e,s)&&s!==n&&g(e,s,{get:()=>o[s],enumerable:!(c=L(o,s))||c.enumerable});return e};var h=(e,o,n)=>(n=e!=null?G(U(e)):{},I(o||!e||!e.__esModule?g(n,"default",{value:e,enumerable:!0}):n,e)),P=e=>I(g({},"__esModule",{value:!0}),e);var q={};k(q,{BOT:()=>B,WA_BOT_ID:()=>a});module.exports=P(q);var d=require("whatsapp-web.js"),m=require("./actions/messageActions"),M=require("./controllers/main"),f=require("./actions/introduction"),t=require("./utils/reply/replies"),i=require("./actions/sendMessage"),A=h(require("express")),H=h(require("dotenv")),S=require("./utils/Commands/instructions"),_=require("./assets/assets"),b=require("./utils/log"),O=require("./actions/sendAndDeleteMsg"),v=require("./actions/pingEveryone"),p=require("./services/mongo"),C=require("./utils/db/connect"),R=require("./actions/removeMember"),w=require("./actions/sendClassNotification"),l=h(require("./utils/logger/index"));const F=require("qrcode-terminal");H.config();const E=(0,A.default)(),N=String(process.env.dev)==="true",B=N?1:0,a=N?process.env.WA_BOT_ID_DEV:process.env.WA_BOT_ID,V=N?process.env.DEV_DB_URL:process.env.PROD_DB_URL;(0,C.connectToDb)(V);const r=new d.Client({puppeteer:{headless:!0,args:["--no-sandbox","--disable-setuid-sandbox"]},authStrategy:new d.LocalAuth({dataPath:`${__dirname}/sessions`})});r.on("qr",e=>{F.generate(e,{small:!0}),console.log(e),l.default.info("QR generated",{label:"INFO"})}),r.on("ready",async()=>{l.default.info("Client Connected",{label:"CONNECTED"})}),r.on("message_create",async e=>{var y;if(console.log(e),e.from!=="919871453667@c.us"&&e.to!==a||e.from!==a)return;console.log("procceeding");const o=await(0,m.checkMessage)(e),n=e.mentionedIds;(e.body[0]==="@"&&n.includes("919871453667@c.us")||e.body.toLowerCase().split(" ").includes(`@${process.env.BOT_NAME.toLocaleLowerCase()}`))&&o.role!=="NONE"&&e.body.split(" ").length===1&&(0,f.introduction)(r,o,e);const s=await r.getChatById(a),u=e.body.split(",")[0].toLocaleLowerCase();if(S.COMMANDS_CMDS.includes(u)){(0,f.sendCommands)(r,e,o),await(0,p.increaseNumberOfCmd)({recipitantId:o.chatId});return}if(o.role==="STUDENT"&&(0,m.superCmdFilter)(e.body)){s.sendMessage("You cannot perform this action, because you are not a BOT ADMIN, you will get ban if you use this frequently :)");return}if(o.role!=="NONE"&&(0,m.superCmdFilter)(e.body)){console.log("entering removing"),await(0,R.removeMember)(s,o,e);return}if(o.role==="OWNER"&&["everyone"].includes(e.body)){await(0,v.pingEveryone)(r,e);return}if(o.role!=="NONE"&&e.body[0]===process.env.BOT_PREFIX){await(0,M.main)(r,e,o);return}if(o.role==="OWNER"&&e.body==="load"){(y=s.participants)==null||y.forEach(async D=>{let $=D.id._serialized;await(0,p.addUser)({recipitantId:$})}),s.sendMessage("SUCCESSFULLY ADDED ALL THE STUDENTS IN THE DB, MASTER!");return}}),r.on("group_join",async e=>{if(e.chatId===a){(0,b.log)({msg:`${e.recipientIds[0]} Joined the Group`,type:"GROUP_JOIN",error:!1});const o=await r.getNumberId(e.recipientIds[0]),n=await r.getContactById((o==null?void 0:o._serialized)||"");n.name?(0,O.sendAndDeleteMsg)(r,e,e.recipientIds[0],`${process.env.BOT_NAME}: *${n.name}* Thanks for joining the Group!
${t.USER_JOIN_GREETINGS.messages[(0,i.random)(t.USER_JOIN_GREETINGS.messageNum)]}
Hey new ${t.GREETINGS.member[(0,i.random)(t.GREETINGS.memberMsgNumber)]} ${t.HEY_EMOJIES[(0,i.random)(t.HEY_EMOJIES.length)]}!
Check out what bot(${process.env.BOT_NAME}) can do by *Mentioning* me!
or check the Commands of ${process.env.BOT_NAME} by typing
*${process.env.BOT_PREFIX}AllCmds*
*IN THE GROUP*
Simply watch the Video: https://drive.google.com/file/d/1tl33VralV0AXQ2EDJYnjC6r2eaCUHr-l/view?usp=sharing`):(0,O.sendAndDeleteMsg)(r,e,e.recipientIds[0],`${process.env.BOT_NAME}: ${t.GREETINGS.member[(0,i.random)(t.GREETINGS.memberMsgNumber)]}, Thanks for Joining the Group!
${t.USER_JOIN_GREETINGS.messages[(0,i.random)(t.USER_JOIN_GREETINGS.messageNum)]}
Hey new ${t.GREETINGS.member[(0,i.random)(t.GREETINGS.memberMsgNumber)]} ${t.HEY_EMOJIES[(0,i.random)(t.HEY_EMOJIES.length)]}!
Check out what bot(${process.env.BOT_NAME}) can do by *Mentioning* me!
or check the Commands of ${process.env.BOT_NAME} by typing
*${process.env.BOT_PREFIX}AllCmds*
*IN THE GROUP*
Simply watch the Video: https://drive.google.com/file/d/1tl33VralV0AXQ2EDJYnjC6r2eaCUHr-l/view?usp=sharing`);const c=e.recipientIds[0];await(0,p.addUser)({recipitantId:c})}}),r.on("group_leave",async e=>{if(e.chatId===a&&(0,b.log)({msg:`${e.recipientIds[0]} left the Group`,type:"GROUP_LEFT",error:!1}),e.chatId===a&&e.type!=="remove"){const c=d.MessageMedia.fromFilePath(`${__dirname}/../src/assets/images/grpJoinLeaveImgs/${_.grpLeaveStickers.images[(0,i.random)(_.grpLeaveStickers.numOfImgs)]}.png`),u=(await r.getChats())[B];r.sendMessage(a,`${process.env.BOT_NAME}: somebody left`),u.sendMessage(c,{sendMediaAsSticker:!0})}const n=e.recipientIds[0];await(0,p.removeUser)({recipitantId:n})}),setInterval(async()=>{(0,w.sendClassNotification)(r,a),l.default.info("Checked",{label:"INFO"})},5*60*1e3),r.initialize();const T=Number(process.env.PORT)||3e3;E.get("/",(e,o)=>{o.send("BOT")}),E.listen(T,()=>l.default.info(`[SERVER] Server is running on port ${T}`,{label:"INFO"})),E.all("*",(e,o)=>{o.status(404).send("<h1>Sorry, this page does not exist!</h1><br><a href='/'>Back to Home</a>")});0&&(module.exports={BOT,WA_BOT_ID});
//# sourceMappingURL=index.js.map
