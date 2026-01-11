import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRouter from "./routes/chat.route";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5500;
app.use(cors({
  origin: "*", 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/chat", chatRouter);
app.get("/", (req, res) => {
  res.send("HRBP AI Server is running");
});

app.listen(PORT, () => {
  console.log(`HRBP AI server running on http://localhost:${PORT}`);
});
