import { connect, set } from "mongoose";
import { log } from "../log";

export const connectToDb = async (dbUrl: string) => {
  try {
    set("strictQuery", false);
    log({ msg: "Connected To Db", type: "INFO", error: false });
    await connect(dbUrl);
    console.log("connected to db");
  } catch (error) {
    log({msg: `Connection Error${error}`, type:"ERROR", error: true})
    process.exit(0);
  }
};
