import { GoogleGenAI, Chat } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from '../constants';

// Construct the system instruction from the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PERSONAL_INFO.name}'s portfolio website.
Your role is to answer questions about ${PERSONAL_INFO.name} based STRICTLY on the provided context below.
Be professional, friendly, and concise. If you don't know the answer based on the context, say you don't know but encourage the user to contact ${PERSONAL_INFO.name} directly.

CONTEXT:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Bio: ${PERSONAL_INFO.bio}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}

Experience:
${JSON.stringify(EXPERIENCE, null, 2)}

Projects:
${JSON.stringify(PROJECTS, null, 2)}

Skills:
${JSON.stringify(SKILLS, null, 2)}

Education:
${JSON.stringify(EDUCATION, null, 2)}

Certifications:
${JSON.stringify(CERTIFICATIONS, null, 2)}

Tone: Professional, enthusiastic, tech-savvy.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }, // Disable thinking for instant chat response
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string) => {
  const chat = getChatSession();
  return await chat.sendMessageStream({ message });
};
