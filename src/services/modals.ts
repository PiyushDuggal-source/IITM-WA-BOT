import { Schema } from "mongoose";

type User = {
  name: string | undefined;
  serializeId: string;
  notificationSend: boolean;
};

const users = new Schema({});
