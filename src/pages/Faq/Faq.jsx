import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./faq.scss";
import Background from "../../components/Background/Background";

gsap.registerPlugin(ScrollTrigger);

// Funkcja do mieszania liter w słowie
const shuffleWord = (word) => {
  if (word.length < 2) return word;
  const letters = word.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.join('');
};

// Funkcja do mieszania całego tekstu
const shuffleText = (text) => {
  return text
    .split(' ')
    .map((word) => shuffleWord(word))
    .join(' ');
};

export default function Faq({ text }) {
  const textRef = useRef(null);
  const shuffledText = shuffleText(text);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('.letter');

    gsap.to(letters, {
      fontSize: '42px',
      stagger: {
        each: 0.5,
        ease: 'none',
      },
      scrollTrigger: {
        trigger: ".text-container",
        start: 'top 50%',
        end: 'top 20%',
        scrub: 0.7,
        pin: true,
        
        markers: true,
        onUpdate: () => {
          const words = textRef.current.querySelectorAll('.word');
          
          words.forEach((word, wordIndex) => {
            const originalWord = text.split(' ')[wordIndex];
            const wordLetters = word.querySelectorAll('.letter');

            const allReachedSize = Array.from(wordLetters).every(
              (letter) => parseInt(window.getComputedStyle(letter).fontSize) >= 42
            );

            if (allReachedSize) {
              word.innerHTML = originalWord; // Podmiana na oryginalne słowo
            }
          });
        },
      },
    });
  }, [text]);

  return (
    <div className="page faq">
      <Background />
      <div className="text-container" ref={textRef}>
        {shuffledText.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="word">
            {word.split('').map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                className={`letter ${char.trim() === '' ? 'space' : ''}`}
                data-word={wordIndex}
              >
                {char}
              </span>
            ))}
            <span className="space"> </span>
          </span>
        ))}
      </div>
    </div>
  );
}
