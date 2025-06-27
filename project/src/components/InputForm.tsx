import React, { useState } from 'react';
import { Popcorn, Sparkles } from 'lucide-react';

interface InputFormProps {
  onGenerate: (mood: string, snack: string, character: string) => void;
  isLoading: boolean;
}

export default function InputForm({ onGenerate, isLoading }: InputFormProps) {
  const [mood, setMood] = useState('');
  const [snack, setSnack] = useState('');
  const [character, setCharacter] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood.trim() && snack.trim() && character.trim()) {
      onGenerate(mood.trim(), snack.trim(), character.trim());
    }
  };

  const moodSuggestions = [
    'numb but crunchy',
    'anxiously hopeful',
    'chaotically calm',
    'vengefully nostalgic',
    'peacefully unhinged'
  ];

  const snackSuggestions = [
    'Flamin\' Hot Cheetos',
    'stale Oreos',
    'expired hummus',
    'gas station sushi',
    'artisanal kale chips'
  ];

  const characterSuggestions = [
    'a brooding detective',
    'a quirky inventor',
    'a rebellious teenager',
    'a wise old sage',
    'an alien overlord',
    'add your own character here'
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Popcorn className="h-12 w-12 text-yellow-400" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            SnackFlix
          </h1>
        </div>
        <p className="text-xl text-gray-300 leading-relaxed">
          The bizarre movie generator that turns your mood + snacks into cinematic gold
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="mood" className="block text-lg font-semibold text-white mb-3">
              How are you feeling? ✨
            </label>
            <input
              type="text"
              id="mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g., numb but crunchy, anxiously hopeful..."
              className="w-full px-6 py-4 text-lg bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {moodSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setMood(suggestion)}
                  className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full hover:bg-gray-600/50 hover:text-white transition-all duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="snack" className="block text-lg font-semibold text-white mb-3">
              What's your snack? 🍿
            </label>
            <input
              type="text"
              id="snack"
              value={snack}
              onChange={(e) => setSnack(e.target.value)}
              placeholder="e.g., Flamin' Hot Cheetos, stale Oreos..."
              className="w-full px-6 py-4 text-lg bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {snackSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setSnack(suggestion)}
                  className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full hover:bg-gray-600/50 hover:text-white transition-all duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="character" className="block text-lg font-semibold text-white mb-3">
              What's your Character? 👤
            </label>
            <input
              type="text"
              id="character"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              placeholder="e.g., a brooding detective, a quirky inventor..."
              className="w-full px-6 py-4 text-lg bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {characterSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setCharacter(suggestion)}
                  className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full hover:bg-gray-600/50 hover:text-white transition-all duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!mood.trim() || !snack.trim() ||!character.trim() ||isLoading}
          className="w-full py-4 px-8 text-xl font-bold text-black bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 rounded-xl hover:from-yellow-300 hover:via-pink-400 hover:to-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="h-6 w-6 animate-spin" />
              Creating Movie Magic...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="h-6 w-6" />
              Generate Movie
            </div>
          )}
        </button>
      </form>
    </div>
  );
}