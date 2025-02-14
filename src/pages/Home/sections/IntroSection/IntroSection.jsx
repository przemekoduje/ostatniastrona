import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './introSection.scss';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const ellipseRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animacja elipsy
    const anim = gsap.fromTo(
        ellipseRef.current,
        { scale: 0 },
        {
          scale: 100,
          duration: 15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ellipseRef.current,
            start: 'top 50%',
            end: '+=800',
            pin: true,
            // pinSpacing: false,
            scrub: true,
            markers: true,
            toggleActions: "play none none none",
          },
        }
      );

      // Animacja tekstu
    gsap.fromTo(
        textRef.current,
        { x: '100vw' }, // Start poza prawą krawędzią
        {
          x: '-150vw', // Koniec poza lewą krawędzią
          ease: 'none',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 20%',
            end: '+=1800',
            scrub: true,
            pin: true,
            markers: true,
          },
        }
      );

      return () => {
            anim.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          };


          
  }, []);

  return (
    <div className="intro-section">
      <div className="ellipse" ref={ellipseRef}></div>
      {/* <h1 className="intro-text" ref={textRef}>
        ostatnia strona
      </h1> */}
      <img src="/images/home_timeline/ostatniastrona.png" className="intro-text" alt="" ref={textRef}/>
    </div>
  );
};

export default IntroSection;
