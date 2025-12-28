import { Request, Response } from "express";
import { askChatGPT } from "../services/openai.service";

export const chatController = async (req: Request, res: Response) => {
    try {
        const { message } = req.body;

        if(!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const reply = await askChatGPT(message);
        res.json({ reply });

    } catch(error){
        res.status(500).json({ error: "AI service failed"});
    }
};