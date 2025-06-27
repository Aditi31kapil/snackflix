// import { Movie } from '../types/movie';

// const genres = [
//   'Revenge thriller with existential overtones',
//   'Absurdist workplace satire with horror elements',
//   'Dystopian comedy-drama',
//   'Surreal romantic comedy',
//   'Post-apocalyptic dark comedy',
//   'Psychological thriller with culinary themes',
//   'Supernatural workplace drama',
//   'Noir comedy with food-based suspense',
//   'Coming-of-age horror-comedy',
//   'Corporate espionage with snack-based warfare'
// ];

// const actors = [
//   ['Aubrey Plaza', 'Pedro Pascal', 'Danny DeVito'],
//   ['Tilda Swinton', 'Oscar Isaac', 'LaKeith Stanfield'],
//   ['Anya Taylor-Joy', 'John Turturro', 'Thomasin McKenzie'],
//   ['Michael Shannon', 'Regina King', 'Brian Cox'],
//   ['Lupita Nyong\'o', 'Adam Driver', 'Frances McDormand'],
//   ['Mahershala Ali', 'Saoirse Ronan', 'Jeff Goldblum'],
//   ['Cate Blanchett', 'Rami Malek', 'Toni Collette'],
//   ['Sterling K. Brown', 'Elisabeth Moss', 'Walton Goggins']
// ];

// const locations = [
//   'OFFICE BASEMENT',
//   'ABANDONED GROCERY STORE',
//   'CORPORATE BOARDROOM',
//   'KITCHEN NIGHTMARE',
//   'VENDING MACHINE WAREHOUSE',
//   'SUBURBAN KITCHEN',
//   'FOOD TRUCK',
//   'CONVENIENCE STORE'
// ];

// const times = ['NIGHT', 'DAWN', 'MIDNIGHT', 'DUSK', 'LATE EVENING'];

// function generateTitle(mood: string, snack: string): string {
//   const moodWords = mood.split(' ');
//   const snackWords = snack.split(' ');
  
//   const titleTemplates = [
//     `${snackWords[snackWords.length - 1]} Dreams`,
//     `The ${moodWords[0]} ${snackWords[0]}`,
//     `${snackWords[snackWords.length - 1]} Vendetta`,
//     `Chronicles of ${snackWords[0]}`,
//     `The ${moodWords[moodWords.length - 1]} Snack`,
//     `${snackWords[0]} Apocalypse`,
//     `Midnight ${snackWords[snackWords.length - 1]}`,
//     `The ${moodWords[0]} Kitchen`
//   ];
  
//   return titleTemplates[Math.floor(Math.random() * titleTemplates.length)];
// }

// function generatePlot(mood: string, snack: string, title: string, character: string): string {
//   const plotTemplates = [
//     `After being betrayed by their closest friend, a ${mood} office worker discovers that ${snack} holds the key to unlocking a conspiracy that spans generations. Armed with nothing but determination and an endless supply of their favorite snack, they embark on a journey that will change everything.`,
    
//     `In a world where ${snack} has been banned, a ${mood} rebel leads an underground resistance movement. When the government's enforcement squad closes in, they must choose between safety and fighting for what they believe in.`,
    
//     `A ${mood} food critic's life is turned upside down when they discover that ${snack} triggers vivid memories of a past life. As the visions become more intense, they realize they're the key to preventing a catastrophic event.`,
    
//     `When a mysterious vending machine dispensing ${snack} appears in their apartment building, a ${mood} resident becomes obsessed with understanding its purpose. Their investigation leads them into a world of corporate espionage and supernatural forces.`
//   ];
  
//   return plotTemplates[Math.floor(Math.random() * plotTemplates.length)];
// }

// function generateScene(mood: string, snack: string): { location: string; time: string; content: string } {
//   const location = locations[Math.floor(Math.random() * locations.length)];
//   const time = times[Math.floor(Math.random() * times.length)];
  
//   const sceneTemplates = [
//     `SARAH stares at the ${snack} in her trembling hands. The fluorescent lights flicker ominously.\n\nSARAH\n(whispering)\nThis changes everything.\n\nA shadow moves behind the shelves. SARAH clutches the ${snack} tighter, her ${mood} expression hardening into determination.`,
    
//     `MARCUS enters, holding a bag of ${snack}. His ${mood} demeanor fills the room with tension.\n\nMARCUS\nYou thought you could hide from me?\n\nVOICE (O.S.)\nThe ${snack} belongs to all of us.\n\nMARCUS spins around, scattering ${snack} across the floor.`,
    
//     `ELENA methodically arranges ${snack} on the table. Her ${mood} energy is palpable.\n\nELENA\n(to herself)\nPatterns. It's always about patterns.\n\nSuddenly, the ${snack} begins to glow. ELENA's eyes widen in recognition.`
//   ];
  
//   return {
//     location,
//     time,
//     content: sceneTemplates[Math.floor(Math.random() * sceneTemplates.length)]
//   };
// }

// function generatePosterPrompt(title: string, mood: string, snack: string): string {
//   const prompts = [
//     `A haunted vending machine glowing with electric blue light in a dimly lit space, surrounded by scattered ${snack}. A figure in a hoodie holds a single piece like a torch. Retro 80s horror poster style with dramatic neon shadows and bold typography.`,
    
//     `Close-up of hands holding ${snack} against a backdrop of corporate office windows at night. The snack glows with inner light while city lights blur in the background. Modern thriller poster aesthetic with clean typography.`,
    
//     `A ${mood} person stands in a surreal landscape made entirely of ${snack} packages. The sky is a gradient of deep purples and electric blues. Surrealist movie poster style with floating elements and impossible geometry.`,
    
//     `Split-screen composition: ordinary kitchen on the left, otherworldly dimension on the right, connected by a bridge made of ${snack}. A silhouetted figure crosses between worlds. Contemporary art house cinema poster design.`
//   ];
  
//   return prompts[Math.floor(Math.random() * prompts.length)];
// }

// export function generateMovie(mood: string, snack: string): Movie {
//   const title = generateTitle(mood, snack);
//   const cast = actors[Math.floor(Math.random() * actors.length)];
//   const rottenTomatoes = Math.floor(Math.random() * 30) + 70; // 70-100%
  
//   const criticsQuotes = [
//     `"A ${mood} masterpiece that redefines what cinema can be."`,
//     `"${title} is the ${snack}-fueled fever dream we didn't know we needed."`,
//     `"Brilliant, bizarre, and surprisingly profound."`,
//     `"This film will leave you questioning everything you thought you knew about ${snack}."`,
//     `"A genre-defying experience that's both hilarious and haunting."`
//   ];
  
//   return {
//     title,
//     genre: genres[Math.floor(Math.random() * genres.length)],
//     plotSummary: generatePlot(mood, snack, title),
//     cast,
//     rottenTomatoes,
//     criticsQuote: criticsQuotes[Math.floor(Math.random() * criticsQuotes.length)],
//     scene: generateScene(mood, snack),
//     posterPrompt: generatePosterPrompt(title, mood, snack)
//   };
// }
import { enhanceMovieDescription, generatePosterImage } from '../services/geminiService';

export interface Scene {
  location: string;
  time: string;
  content: string;
}

export interface Movie {
  title: string;
  genre: string;
  plotSummary: string;
  cast: string;
  rottenTomatoes: number;
  criticsQuote: string;
  scene: Scene;
  posterPrompt: string;
  posterImageUrl?: string | null;
}

// Clean up Gemini output to remove Markdown-style code fences
function cleanGeminiJsonOutput(raw: string): string {
  return raw
    .trim()
    .replace(/^```json/, '')
    .replace(/^```/, '')  // in case it's just ``` without "json"
    .replace(/```$/, '')
    .trim();
}

export async function generateMovie(
  mood: string,
  snack: string,
  character: string
): Promise<Movie | null> {
  try {
    const rawOutput = await enhanceMovieDescription(mood, snack, character);
    if (!rawOutput) {
      console.error('No response from Gemini.');
      return null;
    }

    console.log('Raw output from Gemini:', rawOutput);

    let parsed: Movie;
    try {
      const cleaned = cleanGeminiJsonOutput(rawOutput);
      parsed = JSON.parse(cleaned) as Movie;
    } catch (parseError) {
      console.error('Error parsing JSON from Gemini response:', parseError);
      return null;
    }

    if (!parsed.posterPrompt || parsed.posterPrompt.length < 10) {
      parsed.posterPrompt = `A surreal Bollywood-style movie poster featuring the mood "${mood}", snack "${snack}", and a character like "${character}". Use neon lighting, dramatic composition, and cinematic flair.`;
      console.warn('Poster prompt missing or too short, using fallback.');
    }

    try {
      const posterImageUrl = await generatePosterImage(parsed.posterPrompt);
      if (!posterImageUrl) {
        console.warn('Poster image could not be generated. Leaving it null.');
      }
      parsed.posterImageUrl = posterImageUrl;
    } catch (imageError) {
      console.error('Error generating poster image:', imageError);
      parsed.posterImageUrl = null;
    }

    return parsed;
  } catch (err) {
    console.error('Failed to generate or parse movie description:', err);
    return null;
  }
}

