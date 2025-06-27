import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Movie } from '../types/movie';
import MovieCard from './MovieCard';
import { Movie } from '../utils/movieGenerator';

interface SwipeableCardsProps {
  movie: Movie;
}

export default function SwipeableCards({ movie }: SwipeableCardsProps) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isSwipeGestureActive, setIsSwipeGestureActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const currentX = useRef(0);

  const cards = [
    { type: 'title' as const, data: movie },
    { type: 'plot' as const, data: movie },
    { type: 'cast' as const, data: movie },
    { type: 'reviews' as const, data: movie },
    { type: 'scene' as const, data: movie },
    { type: 'poster' as const, data: movie }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setIsSwipeGestureActive(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwipeGestureActive) return;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isSwipeGestureActive) return;
    
    const diff = startX.current - currentX.current;
    const threshold = 50;

    if (diff > threshold) {
      nextCard();
    } else if (diff < -threshold) {
      prevCard();
    }

    setIsSwipeGestureActive(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    setIsSwipeGestureActive(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isSwipeGestureActive) return;
    currentX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isSwipeGestureActive) return;
    
    const diff = startX.current - currentX.current;
    const threshold = 50;

    if (diff > threshold) {
      nextCard();
    } else if (diff < -threshold) {
      prevCard();
    }

    setIsSwipeGestureActive(false);
  };

  const cardTitles = [
    'Title & Genre',
    'Plot Summary',
    'Cast',
    'Reviews',
    'Screenplay Scene',
    'Poster Concept'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mb-8">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCard(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentCard === index
                ? 'bg-gradient-to-r from-pink-500 to-cyan-400 scale-125'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Card container */}
      <div 
        ref={containerRef}
        className="relative w-full h-[600px] perspective-1000"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {cards.map((card, index) => (
          <MovieCard
            key={index}
            type={card.type}
            data={card.data}
            isActive={currentCard === index}
          />
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={prevCard}
          className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-xl transition-all duration-200 backdrop-blur-sm border border-gray-600"
        >
          <ChevronLeft className="h-5 w-5" />
          Previous
        </button>

        <div className="text-center">
          <p className="text-white font-semibold text-lg">{cardTitles[currentCard]}</p>
          <p className="text-gray-400 text-sm">{currentCard + 1} of {cards.length}</p>
        </div>

        <button
          onClick={nextCard}
          className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-xl transition-all duration-200 backdrop-blur-sm border border-gray-600"
        >
          Next
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Swipe instruction */}
      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          💡 Swipe left/right or use arrow keys to navigate cards
        </p>
      </div>
    </div>
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevCard();
      } else if (e.key === 'ArrowRight') {
        nextCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}