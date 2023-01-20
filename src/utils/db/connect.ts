import { connect, set } from "mongoose";
import { log } from "../log";

export const connectToDb = async (dbUrl: string) => {
  try {
    set("strictQuery", false);
    log({ msg: "Connected To Db", type: "INFO", error: false });
    await connect(dbUrl);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
