import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGODB CONNECT:", conn.connection.host);
  } catch (error) {
    console.error("MONGODB ERROR:", error);
    process.exit(1); //1 means failure, 0 means success.
  }
};
