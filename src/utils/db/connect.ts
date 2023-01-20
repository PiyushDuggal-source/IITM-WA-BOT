import { connect, set } from "mongoose";

export const connectToDb = async (dbUrl: string) => {
  try {
    set("strictQuery", false); // HACK: To suppress mongo deprecated warning
    await connect(dbUrl);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
