import { model, Schema } from "mongoose";

type Roles = "ADMIN" | "STUDENT" | "SUPER_ADMIN";

type User = {
  recipitantId: string;
  notifyForEvents: Boolean;
  roles: Roles;
};

const users = new Schema<User>({
  recipitantId: { type: String },
  notifyForEvents: { type: Boolean, default: true },
  roles: { type: String, default: "STUDENT" },
});

export const UserModel = model("Users", users);
