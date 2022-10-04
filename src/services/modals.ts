import { model, Schema } from "mongoose";

type User = {
  name: string | undefined;
  serializeId: string;
  notificationSend: boolean;
};

const users = new Schema<User>({
  name: { type: String, required: true },
  serializeId: { type: String, required: true },
  notificationSend: { type: Boolean, required: true, default: true },
});

export const UserModel = model("Users", users);
