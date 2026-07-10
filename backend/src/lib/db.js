import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URL } = process.env;
    if (!MONGO_URL) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }
    const conn = await mongoose.connect(MONGO_URL);
    console.log("MONGODB CONNECT:", conn.connection.host);
  } catch (error) {
    console.error("MONGODB ERROR:", error);
    process.exit(1); //1 means failure, 0 means success.
  }
};
