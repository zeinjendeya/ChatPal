import express from "express";
import dotenv from "dotenv";

import { authRoutes, messagesRoutes } from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
