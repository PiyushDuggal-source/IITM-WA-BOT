import { GroupChat, Message } from "whatsapp-web.js";
import { UserModel } from "../models/models";
import { disciplinaryAction } from "../services/mongo";
import { MessageType, WA_Grp } from "../types/types";

export const removeMember = async (
  WA_BOT: GroupChat,
  userObj: MessageType,
  msg: Message
) => {
  if (userObj.role === "OWNER") {
    console.log("removing memeber as OWNER")
    const chatIds = msg.mentionedIds;
    await WA_BOT.removeParticipants(chatIds);
  } else if (userObj.role === "ADMIN") {
    const mention = msg.mentionedIds;
    if (mention.includes(process.env.OWNER_CHAT_ID as never)) {
      const recipitantId = msg.author || "";
      await disciplinaryAction({ recipitantId });
      WA_BOT.sendMessage(
        `Your ban count has been increased 🙂, what do you think? you can remove OWNER?`
      );
      return;
    }
    // @ts-ignore
    const isGroupAdmin = await UserModel.find({ recipitantId: mention[0] });
    // contains
    if (isGroupAdmin.length) {
      const recipitantId = msg.author || "";
      await disciplinaryAction({ recipitantId });
      WA_BOT.sendMessage(
        `Your ban count has been increased 🙂, what do you think? you can remove your fellow ADMIN(s)?`
      );
    } else {
      const chatIds = msg.mentionedIds;
      await WA_BOT.removeParticipants(chatIds);
    }
  }
};
