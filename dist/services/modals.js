var d=Object.create;var n=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty;var i=e=>n(e,"__esModule",{value:!0});var S=(e,t)=>{i(e);for(var o in t)n(e,o,{get:t[o],enumerable:!0})},c=(e,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of l(t))!p.call(e,r)&&r!=="default"&&n(e,r,{get:()=>t[r],enumerable:!(o=a(t,r))||o.enumerable});return e},m=e=>c(i(n(e!=null?d(u(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);S(exports,{UserModel:()=>g});var s=m(require("mongoose"));const f=new s.Schema({name:{type:String,required:!0},notificationSend:{type:Boolean,required:!0,default:!0},chatId:{type:String},roles:{type:String,default:"STUDENT"}}),g=(0,s.model)("Users",f);0&&(module.exports={UserModel});
//# sourceMappingURL=modals.js.map
