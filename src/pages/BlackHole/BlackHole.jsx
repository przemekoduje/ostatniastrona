import React, { useEffect, useRef } from "react";
import "./blackHole.scss";
import { motion } from "framer-motion";
import Background from "../../components/Background/Background";
import lottie from "lottie-web";
import animationData from "../../assets/Flow2.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlackHole = () => {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    // Inicjalizacja animacji Lottie
    const lottieInstance = lottie.loadAnimation({
      container: lottieContainerRef.current,
      animationData: animationData,
      renderer: "svg",
      loop: false,
      autoplay: false,
    });

    // Konfiguracja ScrollTrigger
    ScrollTrigger.create({
      trigger: ".lottie-wrapper",
      start: "top top",
      end: "+=100%",
      scrub: true,
      // pin: true,
      // pinSpacing: false,
      anticipatePin: 1,
      toggleActions: "play none none none",
      markers: true,
      onUpdate: (self) => {
        const frame = self.progress * lottieInstance.totalFrames;
        lottieInstance.goToAndStop(frame, true);
      },
    });

    // Czyszczenie po odmontowaniu komponentu
    return () => {
      lottieInstance.destroy();
    };
  }, []);

  return (
    <div className="blackHole">
      <Background />
      <div className="lottie-wrapper">
        <div
          ref={lottieContainerRef}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            border: "1px solid red",
          }}
        ></div>
      </div>
    </div>
  );
};
export default BlackHole;
