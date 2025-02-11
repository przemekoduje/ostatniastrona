import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./faq.scss";
import Background from "../../components/Background/Background";

gsap.registerPlugin(ScrollTrigger);

export default function Faq({ text }) {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('.letter');

    gsap.to(letters, {
      fontSize: '42px',  // Docelowy rozmiar czcionki
      stagger: {
        each: 0.5,       // Opóźnienie między animacjami kolejnych liter
        ease: 'none',
      },
      scrollTrigger: {
        trigger: ".text-container",
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 0.7,      // Czas "doganiania" animacji do pozycji scrolla
        markers: true,
      },
    });
  }, []);

  return (
    <div className="page faq">
      <Background />
      <div className="text-container" ref={textRef}>
      {text.split('').map((char, index) => (
          <span key={index} className={`letter ${char.trim() === '' ? 'space' : ''}`}>
            {char}
          </span>
        ))}
      </div>
    </div>

  );
}
