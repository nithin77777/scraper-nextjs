
export default async function ai_model(params) {

    const { GoogleGenerativeAI } = require("@google/generative-ai");

    // Access your API key as an environment variable
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);

    // Make sure to include these imports:
    // import { GoogleGenerativeAI } from "@google/generative-ai";
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Write a story about a magic backpack.";

    const result = await model.generateContent(prompt);
    let a = result.response.text();
    console.log(a);
    
}

