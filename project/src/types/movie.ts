export interface Movie {
  title: string;
  genre: string;
  plotSummary: string;
  cast: string[] | string;
  rottenTomatoes: number;
  criticsQuote: string;
  scene: {
    location: string;
    time: string;
    content: string;
  };
  posterPrompt: string;
  enhancedDescription?: string;
}