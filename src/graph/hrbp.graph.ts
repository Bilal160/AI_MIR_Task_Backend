import { HRBPAgent } from "../agent/hrbp.agent";

export async function runHRBP(message: string) {
  try {
    if (!message || message.trim().length === 0) {
      return "Please provide a valid question.";
    }
    
    const result = await HRBPAgent(message);
    return result;
  } catch (error) {
    console.error("Error in runHRBP:", error);
    return "An error occurred while processing your request. Please try again.";
  }
}
