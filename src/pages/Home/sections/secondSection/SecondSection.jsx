import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from 'lottie-react';
import animationData from '../../../../assets/Flow.json';
import "./secondSection.scss";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  const sectionRef = useRef(null);
  const trueRef = useRef(null);
  const trueParRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        end: "+=800",
        pin: true,
        scrub: 1,
        markers: true,
        toggleActions: "play complete none none",
      },
    });

    tl.to(trueRef.current, {
      duration: 2,
    });

    // 2) Zmniejszenie skali po "pauzie"
    tl.to(trueRef.current, {
      scale: 0.6,
      y: -20,
      duration: 1,
      ease: "power4.out",
    });

    // 3) Dopiero po ukończeniu animacji `trueRef` rozpoczynamy animację `trueParRef`.
    tl.to(trueParRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    });


    const lottieInstance = lottieRef.current;

    gsap.to(lottieInstance, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const frame = self.progress * lottieInstance.totalFrames;
          lottieInstance.goToAndStop(frame, true);
        },
      },
    });

  }, []);

  return (
    <div className="second-section">
      <div className="secondWrapper" ref={sectionRef}>
        <div className="trueStory" ref={trueRef}>
          HISTORIA PRAWDZIWA
        </div>
        <div
          className="trueStoryParagraf"
          ref={trueParRef}
          style={{ opacity: 0 }}
        >
          ZAJRZYSZ DO TEJEMNEJ KSIĘGI, <br /> W KTÓREJ SPOCZYWA SEKRET <br />
          DOSKONAŁEJ WITRYNY? <br />
          ODWAŻYSZ SIE CZYTAC DALEJ?
        </div>
        
      </div>
      <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          style={{ width: '100%', height: '100%' }}
        />
    </div>
  );
};

export default SecondSection;
