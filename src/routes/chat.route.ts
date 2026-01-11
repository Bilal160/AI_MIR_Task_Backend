import express, { Request, Response } from "express";
import { runHRBP } from "../graph/hrbp.graph";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { message } = req.body;
  const reply = await runHRBP(message);
  res.json({ reply });
});

export default router;
