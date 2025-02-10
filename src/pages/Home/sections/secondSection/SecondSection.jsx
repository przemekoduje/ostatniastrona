import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./secondSection.scss";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  const sectionRef = useRef(null);
  const trueRef = useRef(null);
  const trueParRef = useRef(null);
  const imageRef = useRef(null);
  const spriteRef = useRef(null);

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
    tl.fromTo(
      spriteRef.current,
      { backgroundPosition: "0px 0px" },
      {
        backgroundPosition: "-1800vw 0px", // przykładowa wartość (dostosuj do wymiarów)
        ease: "steps(4)", // np. 4 klatki
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="second-section">
      <div className="secondWrapper" ref={sectionRef}>
        <div className="trueStory" ref={trueRef}>
          PRAWDZIWA HISTORIA
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
        <div ref={spriteRef} className="spriteSheet" />
      </div>
    </div>
  );
};

export default SecondSection;
