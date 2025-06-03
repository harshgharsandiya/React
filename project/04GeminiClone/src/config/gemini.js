import { GoogleGenAI } from "@google/genai";
import config from "../config/config.js";

const ai = new GoogleGenAI({ apiKey: config.gemini });

export async function runGeminiQuery(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    console.log(response.text)
    return response.text;  // return the generated text
  } catch (error) {
    console.error("Gemini API error:", error);
    throw error; // rethrow error to handle it outside
  }
}
