'use client';

import { useEffect, useState } from 'react';

const words = [
  'living',
  'connecting',
  'meeting up',
  'building friendships',
  'making memories',
  'experiencing life',
];

export function RotatingText() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        const nextCounter = prevCounter + 1;
        const current = nextCounter % words.length;

        setCurrentWord(words[current]);

        return nextCounter;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Find longest word for consistent width
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b);

  return (
    <span
      className="relative inline-block text-center mx-auto italic font-black"
      style={{
        perspective: '1000px',
        minWidth: 'fit-content',
        maxWidth: '100%',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 900
      }}
    >
      {/* Invisible placeholder to set width with italic applied */}
      <span className="invisible italic font-black whitespace-nowrap px-1" aria-hidden="true" style={{ fontStyle: 'italic', fontWeight: 900 }}>
        {currentWord}
      </span>

      {/* Current word - absolutely positioned and centered with enhanced styling */}
      <span
        key={counter}
        className="absolute inset-0 flex items-center justify-center text-burnt-orange animate-word-flip italic font-black whitespace-nowrap px-1"
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          fontStyle: 'italic',
          fontWeight: 900,
          textShadow: '0 2px 8px rgba(234, 88, 12, 0.15)',
          letterSpacing: '-0.03em'
        }}
      >
        {currentWord}
      </span>
    </span>
  );
}
