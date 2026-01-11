import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.route";

// Validate environment variables on startup
const validateEnv = () => {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  
  if (!apiKey) {
    console.error("❌ ERROR: OPENAI_API_KEY environment variable is not set!");
    console.error("Please set OPENAI_API_KEY in your environment variables.");
    process.exit(1);
  }
  
  if (!apiKey.startsWith('sk-')) {
    console.warn("⚠️  WARNING: OpenAI API key format may be incorrect. Keys typically start with 'sk-'");
  }
  
  console.log("✅ Environment variables validated");
  console.log(`✅ OpenAI API Key: ${apiKey.substring(0, 7)}...${apiKey.substring(apiKey.length - 4)}`);
};

validateEnv();

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
