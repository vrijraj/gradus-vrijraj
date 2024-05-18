import OpenAI from "openai";
import { getGeminiPrompt, getOpenAIPrompt } from "../utils/prompt";

async function fetchOpenAIResponse(prompt: string) {
  try {
    const openai = new OpenAI({
      apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
    });
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "user", content: getOpenAIPrompt(JSON.stringify(prompt)) },
      ],
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}

export default fetchOpenAIResponse;
