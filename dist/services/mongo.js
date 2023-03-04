"use strict";var a=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var m=(r,t)=>{for(var i in t)a(r,i,{get:t[i],enumerable:!0})},y=(r,t,i,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of d(t))!p.call(r,e)&&e!==i&&a(r,e,{get:()=>t[e],enumerable:!(c=s(t,e))||c.enumerable});return r};var g=r=>y(a({},"__esModule",{value:!0}),r);var u={};m(u,{addUser:()=>O,disciplinaryAction:()=>l,increaseNumberOfCmd:()=>R,removeUser:()=>f});module.exports=g(u);var n=require("../models/models"),o=require("../utils/log");const O=async({recipitantId:r})=>{try{await n.UserModel.create({recipitantId:r})}catch(t){(0,o.log)({msg:`Creation Error${t}`,type:"ERROR",error:!0})}},f=async({recipitantId:r})=>{try{await n.UserModel.deleteOne({recipitantId:r}).exec()}catch(t){(0,o.log)({msg:`Deletion Error${t}`,type:"ERROR",error:!0})}},R=async({recipitantId:r})=>{await n.UserModel.findOneAndUpdate({recipitantId:r},{$inc:{numberOfCmds:1}})},l=async({recipitantId:r})=>{await n.UserModel.findOneAndUpdate({recipitantId:r},{$inc:{banCount:1}})};0&&(module.exports={addUser,disciplinaryAction,increaseNumberOfCmd,removeUser});
//# sourceMappingURL=mongo.js.map