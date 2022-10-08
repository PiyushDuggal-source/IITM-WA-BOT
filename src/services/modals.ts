import { model, Schema } from "mongoose";

type User = {
  name: string | undefined;
  chatId: string;
  notificationSend: boolean;
};

const users = new Schema<User>({
  name: { type: String, required: true },
  notificationSend: { type: Boolean, required: true, default: true },
  chatId: { type: String, required: true },
});

export const UserModel = model("Users", users);
