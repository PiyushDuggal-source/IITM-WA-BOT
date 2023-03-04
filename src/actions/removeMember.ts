import { GroupChat, Message } from "whatsapp-web.js";
import { UserModel } from "../models/models";
import { disciplinaryAction } from "../services/mongo";
import { MessageType } from "../types/types";

export const removeMember = async (
  WA_BOT: GroupChat,
  userObj: MessageType,
  msg: Message
) => {
  if (!msg.mentionedIds.length) return;
  if (userObj.role === "OWNER") {
    console.log("removing memeber as OWNER");
    const chatIds = msg.mentionedIds;
    await WA_BOT.removeParticipants(chatIds);
  } else if (userObj.role === "ADMIN") {
    console.log("removing memeber as ADMIN");
    const mention = msg.mentionedIds;
    if (mention.length > 1) {
      WA_BOT.sendMessage(
        `You cannot remove more that one student, it can only be done by OWNER/ MALIK SAHAB`
      );
      return;
    }
    if (mention.includes("919871453667@c.us" as never)) {
      const recipitantId = msg.author || "";
      await disciplinaryAction({ recipitantId });
      WA_BOT.sendMessage(
        `Your ban count has been increased 🙂, what do you think? you can remove OWNER?`
      );
      return;
    }
    const isGroupAdmin = await UserModel.find({
      recipitantId: mention.at(0),
      roles: "ADMIN",
    });
    // empty
    if (!isGroupAdmin.length) {
      const chatIds = msg.mentionedIds;
      await WA_BOT.removeParticipants(chatIds);
    } else {
      const recipitantId = msg.author || "";
      await disciplinaryAction({ recipitantId });
      WA_BOT.sendMessage(
        `Your ban count has been increased 🙂, what do you think? you can remove your fellow ADMIN(s)?`
      );
    }
  }
};
