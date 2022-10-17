import { connect } from "mongoose";

export const connectToDb = async (dbUrl: string) => {
  try {
    await connect(dbUrl);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

