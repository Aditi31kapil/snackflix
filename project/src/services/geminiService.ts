import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

export async function generatePosterImage(posterPrompt: string): Promise<string | null> {
  try {
    const contents = [
      { 
        text: `Create a high-quality, vertical movie poster based on this description: ${posterPrompt}. Use a portrait aspect ratio (e.g. 2:3), cinematic lighting, and bold visual composition.`
      }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: contents,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
        temperature: 0.8,
      },
    });

    // Find the image part in the response
    if (
      response.candidates &&
      response.candidates[0] &&
      response.candidates[0].content &&
      Array.isArray(response.candidates[0].content.parts)
    ) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.mimeType?.startsWith('image/')) {
          // Convert base64 to data URL
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }

    return null;
  } catch (error) {
    console.error('Error generating poster image:', error);
    return null;
  }
}

export async function enhanceMovieDescription(mood: string, snack: string, character: string): Promise<string | null> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a wildly imaginative Bollywood screenwriter. Based on the user's mood:"${mood}", snack:"${snack}", and character(s): "${character}", create a detailed, weird, and cinematic Indian movie concept.
Use this exact format in your response:
1. 🎬 Movie Title  
2. 🎭 Genre & Tone  
3. 📖 Plot Summary (must feature the character(s): "${character}")  
4. 👥 Cast: include: "${character}"  
5. 🍅 Rotten Tomatoes Score (0–100%) + Critics’ Quote  
6. 📝 One creative movie scene in screenplay format (INT/EXT, TIME, actions, dialogue).
⚠️ Return your response as a valid JSON object with these exact keys:
{
  "title": string,
  "genre": string,
  "plotSummary": string,
  "cast": "${character}"
  "rottenTomatoes": number,
  "criticsQuote": string,
  "scene": {
    "location": string,
    "time": string,
    "content": string
  },
  "posterPrompt": string
}
The character(s): "${character}" must appear in the 'cast' array, the 'plotSummary', and the 'scene'. Make the story entertaining and absurd. Keep everything in hinglish. Format strictly as JSON.`,
      config: {
        temperature: 1.0,
      },
    });

    return response.text || null;
  } catch (error) {
    console.error('Error enhancing movie description:', error);
    return null;
  }
}