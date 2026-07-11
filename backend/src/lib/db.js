import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    if (!ENV.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }
    const conn = await mongoose.connect(ENV.MONGO_URL);
    console.log("MONGODB CONNECT:", conn.connection.host);
  } catch (error) {
    console.error("MONGODB ERROR:", error);
    process.exit(1); //1 means failure, 0 means success.
  }
};
