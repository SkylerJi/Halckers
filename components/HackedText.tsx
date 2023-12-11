"use client"
import React, { useState, useEffect, useRef } from 'react';

const HackedText: React.FC = () => {
  const [text, setText] = useState('HALCKERS');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const targetText = 'HALCKERS';
  const [isHovered, setIsHovered] = useState(false);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleMouseOver = () => {
      let interval: NodeJS.Timeout | null = null;
      let iteration = 0; // Resetting iteration to 0

      clearInterval(interval!);

      interval = setInterval(() => {
        setText((prevText) => {
          return prevText
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return targetText[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join('');
        });

        if (iteration >= targetText.length) {
          clearInterval(interval!);
        }

        iteration += 1 / 3;
      }, 30);
    };

    h1Ref.current?.addEventListener('mouseover', handleMouseOver);

    return () => {
      h1Ref.current?.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="flex-shrink-0 max-w-xs">
      <div className = "relative">
      <h1
        ref={h1Ref}
        data-value={targetText}
        className={`font-mono text-4xl ${isHovered ? 'translate-effect-2' : ''}`}
      >
        {text}
      </h1>
      <h1
        ref={h1Ref}
        data-value={targetText}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`font-mono text-4xl absolute top-0 left-0 ${isHovered ? 'translate-effect' : ''}`}
      >
        {text}
      </h1>

      </div>
    
    </div>
  );
};

export default HackedText;
