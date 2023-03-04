"use strict";var R=Object.create;var a=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var O=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty;var d=(e,o)=>{for(var n in o)a(e,n,{get:o[n],enumerable:!0})},t=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of S(o))!c.call(e,s)&&s!==n&&a(e,s,{get:()=>o[s],enumerable:!(r=l(o,s))||r.enumerable});return e};var u=(e,o,n)=>(n=e!=null?R(O(e)):{},t(o||!e||!e.__esModule?a(n,"default",{value:e,enumerable:!0}):n,e)),E=e=>t(a({},"__esModule",{value:!0}),e);var C={};d(C,{GREETINGS:()=>f,HEY_EMOJIES:()=>h,HOLIDAY_REPLIES:()=>B,PING_REPLIES:()=>I,RANDOM_WAKEUP_MSG:()=>b,REACT_EMOGIES:()=>N,USER_COMMANDS:()=>p,USER_JOIN_GREETINGS:()=>G});module.exports=E(C);var m=require("whatsapp-web.js"),i=require("../Commands/allCmds"),y=u(require("dotenv"));y.config();const I={admin:["Hello Sir \u{1F64F}","Need any help Sir?\u{1F647}\u2642\uFE0F","Aye aye Capn'","Yes Capn'","I am here Capn'"],members:["Hey-Yo!","Hola","Yo \u270C","\u{1F918} hey","Here I am!","\u{1F440} you called me? I am up!","Yes, my friend!","I am HERE!","I am Online!"]},g=e=>{const o=[];return e.forEach(n=>{n==null||n.forEach((r,s)=>{s<3&&o.push({id:`${s}`,title:`${process.env.BOT_PREFIX}${r}`})})}),o},p=new m.List(`Hey.. Wanna checkout what ${process.env.BOT_NAME} can do?
Checkout these commands!! \u{1F609}`,"Commands",[{title:"These are the commands you can perform as a USER",rows:g(i.User_AllCommands)}]),f={admin:["Sir","Master","Monsieur"],adminMsgNumber:3,member:["Fellow","Good Person","Dude","My Friend!","Good Guy","IITian"],memberMsgNumber:6},B={members:[`FINALLY *IITian* you are *free*... but wait.. not so fast... THIS IS ONLY FOR THIS DAY... from next day... you will suffer again..... \u{1F608}

    ERROR \u{1F6AB} ERROR \u{1F6AB} ERROR \u{1F6AB} ERROR
    ERROR \u{1F6AB} ERROR \u{1F6AB} ERROR \u{1F6AB} ERROR
    ERROR \u{1F6AB} ERROR \u{1F6AB} ERROR \u{1F6AB} ERROR
    ERROR \u{1F6AB} ERROR \u{1F6AB} ERROR \u{1F6AB} ERROR

    Process loading: 0%
    Process loading: 50%
    Process loading: 100%

    back online::
    ${process.env.BOT_NAME} : Sorry fellas, an Evil took my place, now everything is fine!!! and yea... *There is no class today!* \u{1F605}

    `,`*There is no Class Today!!* 
Give some of your precious time and think about me and help me be a better BOT!!
or Go take some rest and work on *something special* to you, utilize your *free* time!
*Never stop learning!*
     `,`Q1: There are N number of classes today and N = 0 then guess how many classes are there? *1 Point*
A: NO Class
B: C
C: A`,"no class today"],memberMsgNumber:3},h=["\u270C","\u{1F44B}","\u{1F918}","\u{1F450}","\u{1F917}"],G={messages:["Hey everyone, someone joined... say Helloo to our new friend!!","Hey All, Someone joined, say Hi!!","We got a new Member, Greetings, we are glad you joined our Group!"],messageNum:3},N=["\u{1F60C}","\u270C","\u{1F91F}","\u{1F91D}","\u{1F44C}","\u{1FAC2}","\u{1F31A}","\u{1F31D}","\u26A1","\u{1F973}","\u{1F60E}","\u{1F5FF}"],b=["\u{1F916} I'm all hooked up, BOSS  \u{1F31E}","\u{1F4BB} All systems up, BOSS \u{1F305}","\u{1F4E1} I've got a strong signal, BOSS \u{1F680}","\u{1F310} I'm fully online, BOSS \u{1F680}","\u{1F91D} I'm connected, BOSS \u{1F916}","\u{1F91D} I'm synced up, BOSS \u{1F31D}","\u{1F4A1} I'm lit up, BOSS \u{1F916}","\u{1F50C} I'm plugged in, BOSS \u{1F31D}","\u{1F4F6} I'm receiving some signal, BOSS \u{1F31D}","\u{1F680} I'm ready for liftoff, BOSS \u{1F680}","\u{1F6F0}\uFE0F I'm in orbit, BOSS \u{1F305}","\u{1F30D} I'm globally connected, BOSS \u{1F31E}","\u{1F916}\u{1F44B} Greetings, BOSS! I'm connected \u{1F31D}","\u{1F4C8} I'm fully operational, BOSS \u{1F916}","\u{1F6AA} I've entered the network, BOSS \u{1F680}","\u{1F4AC} I'm in communication, BOSS  \u{1F31E}","\u{1F916}\u{1F4AC} I'm online and at your service, BOSS \u{1F305}","\u{1F916}\u{1F4AC} I can listen to you BOSS \u{1F31D}"];0&&(module.exports={GREETINGS,HEY_EMOJIES,HOLIDAY_REPLIES,PING_REPLIES,RANDOM_WAKEUP_MSG,REACT_EMOGIES,USER_COMMANDS,USER_JOIN_GREETINGS});
//# sourceMappingURL=replies.js.map
