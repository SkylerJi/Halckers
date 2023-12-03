"use client"
import React, { useState, useEffect, useRef } from 'react';

const HackedText: React.FC = () => {
  const [text, setText] = useState('HALCKERS');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const targetText = 'HALCKERS';
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
      <h1
        ref={h1Ref}
        data-value={targetText}
        className="text-black font-mono text-4xl"
      >
        {text}
      </h1>
    </div>
  );
};

export default HackedText;
