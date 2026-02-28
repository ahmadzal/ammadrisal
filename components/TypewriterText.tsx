'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  pauseEnd?: number;
  className?: string;
}

export default function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 100, 
  pauseEnd = 2000,
  className = '' 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Typing forward
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        // Pause at end
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseEnd);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        setDisplayedText(text.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (isDeleting && currentIndex === 0) {
        // Start over
        setIsDeleting(false);
      }
    }, isDeleting ? speed / 2 : (currentIndex === 0 ? delay : speed));

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, delay, speed, pauseEnd]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
