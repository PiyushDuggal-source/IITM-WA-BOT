import { model, Schema } from "mongoose";

type Roles = "ADMIN" | "STUDENT";

type User = {
  name: string | undefined;
  chatId: string;
  notificationSend: boolean;
  roles: Roles;
};

const users = new Schema<User>({
  name: { type: String, required: true },
  notificationSend: { type: Boolean, required: true, default: true },
  chatId: { type: String },
  roles: { type: String, default: "STUDENT" },
});

export const UserModel = model("Users", users);
