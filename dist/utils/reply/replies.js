var l=Object.create;var r=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty;var m=e=>r(e,"__esModule",{value:!0});var y=(e,o)=>{m(e);for(var n in o)r(e,n,{get:o[n],enumerable:!0})},c=(e,o,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let s of d(o))!p.call(e,s)&&s!=="default"&&r(e,s,{get:()=>o[s],enumerable:!(n=E(o,s))||n.enumerable});return e},a=e=>c(m(r(e!=null?l(u(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);y(exports,{GREETINGS:()=>f,HEY_EMOJIES:()=>S,HOLIDAY_REPLIES:()=>N,PING_REPLIES:()=>O,REACT_EMOGIES:()=>C,USER_COMMANDS:()=>I,USER_JOIN_GREETINGS:()=>b});var i=a(require("whatsapp-web.js")),R=a(require("../Commands/allCmds")),g=a(require("dotenv"));g.config();const O={admin:["Hello Sir \u{1F64F}","Need any help Sir?\u{1F647}\u200D\u2642\uFE0F","Aye aye Capn'","Yes Capn'","I am here Capn'"],adminMsgNumber:5,members:["Hey-Yo!","Hola","Yo \u270C","\u{1F918} hey","What iz up? I am UP!","\u{1F440} you called me? I am up!","Yes, my friend!","I am HERE!","I am Online!"],memberMsgNumber:9},h=e=>{const o=[];return e.forEach(n=>{n==null||n.forEach((s,t)=>{t<3&&o.push({id:`${t}`,title:`${process.env.BOT_PREFIX}${s}`})})}),o},I=new i.List(`Hey.. Wanna checkout what ${process.env.BOT_NAME} can do?
Checkout these commands!! \u{1F609}`,"Commands",[{title:"These are the commands you can perform as a USER",rows:h(R.User_AllCommands)}]),f={admin:["Sir","Master","Monsieur"],adminMsgNumber:3,member:["Fellow","Good Person","Dude","Gentle-men/women","My Friend!","Good Guy","An IITian"],memberMsgNumber:7},N={members:[`FINALLY *IITian* you are *free*... but wait.. not so fast... THIS IS ONLY FOR THIS DAY... from next day... you will suffer again..... \u{1F608}

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
C: A`,"no class today"],memberMsgNumber:3},S=["\u270C","\u{1F44B}","\u{1F918}","\u{1F450}","\u{1F917}"],b={messages:["Hey everyone, someone joined... say Helloo to our new friend!!","Hey All, Someone joined, say Hi!!","We got a new Member, Greetings, we are glad you joined our Group!"],messageNum:3},C=["\u{1F60C}","\u270C","\u{1F91F}","\u{1F91D}","\u{1F44C}","\u{1FAC2}","\u{1F31A}","\u{1F31D}","\u26A1"];0&&(module.exports={GREETINGS,HEY_EMOJIES,HOLIDAY_REPLIES,PING_REPLIES,REACT_EMOGIES,USER_COMMANDS,USER_JOIN_GREETINGS});
//# sourceMappingURL=replies.js.map
