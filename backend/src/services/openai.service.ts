import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export async function askChatGPT(message: string) {
    const response = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
            {
                role: "system", content: "You are a helpful AI assistant."
            },
            {
                role: "user", content: message
            }
        ],
        temperature: 0.7,
    });

    return response.choices[0].message.content;
}