import { useState } from 'react';
import { Movie } from './utils/movieGenerator';
import { generateMovie } from './utils/movieGenerator';
import InputForm from './components/InputForm';
import SwipeableCards from './components/SwipeableCards';

function App() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (mood: string, snack: string, character: string) => {
    setIsLoading(true);
    
    // Simulate API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const generatedMovie = await generateMovie(mood, snack, character);
    setMovie(generatedMovie);
    setIsLoading(false);
  };

  const handleReset = () => {
    setMovie(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {!movie ? (
          <InputForm onGenerate={handleGenerate} isLoading={isLoading} />
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <button
                onClick={handleReset}
                className="px-6 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                ← Generate Another Movie
              </button>
            </div>
            <SwipeableCards movie={movie} />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center pb-8">
        <p className="text-gray-500 text-sm">
          Made with ✨ by SnackFlix • Where bizarre meets brilliant
        </p>
      </div>
    </div>
  );
}

export default App;