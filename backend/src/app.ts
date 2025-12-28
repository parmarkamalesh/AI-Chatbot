import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.route";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", chatRoutes);

app.listen(3000, () => {
  console.log("🚀 AI Chatbot server running on port 3000");
});
