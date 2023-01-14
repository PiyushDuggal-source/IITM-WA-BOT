import { model, Schema } from "mongoose";

type Roles = "ADMIN" | "STUDENT" | "LITTLE_ADMIN";

type User = {
  recipitantId: string;
  notifyForEvents: Boolean;
  roles: Roles;
  numberOfCmds: number;
};

const users = new Schema<User>({
  recipitantId: { type: String },
  notifyForEvents: { type: Boolean, default: true },
  roles: { type: String, default: "STUDENT" },
  numberOfCmds: {type: Number, default: 0}
});

export const UserModel = model("Users", users);
