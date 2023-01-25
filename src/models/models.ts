import { model, Schema } from "mongoose";

export type Roles = "ADMIN" | "STUDENT" | "LITTLE_ADMIN";

export type User = {
  name: string;
  roles: Roles;
  recipitantId: string;
  banCount: number;
  notifyForEvents: Boolean;
  numberOfCmds: number;
};

const users = new Schema<User>({
  name: { type: String },
  recipitantId: { type: String },
  notifyForEvents: { type: Boolean, default: true },
  banCount: { type: Number },
  roles: { type: String, default: "STUDENT" },
  numberOfCmds: { type: Number },
});

export const UserModel = model("Users", users);
