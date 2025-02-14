import React, { useEffect, useRef } from "react";
import "./blackHole.scss";
import Background from "../../components/Background/Background";
import { Rive, useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlackHole = () => {
  const pngRef = useRef(null);

  const STATE_MACHINE_NAME = "statemachine1"; // Nazwa state machine w animacji Rive
  const INPUT_NAME = "handprogress"; // Nazwa wejścia kontrolującego progres

  const { rive, RiveComponent, setInput } = useRive({
    src: "/images/home_timeline/hand.riv", // Twoja animacja Rive
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const progressInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

  console.log(progressInput)
  
  useEffect(() => {
    if (!progressInput) return;

    ScrollTrigger.create({
      trigger: ".rive-wrapper",
      start: "top top",
      end: "+=300%",
      scrub: true,
      markers: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Aktualizacja wartości wejścia w state machine
        progressInput.value = progress;

        // Sterowanie pozycją .png po 50% postępu
        if (progress >= 0.5) {
          const pngProgress = (progress - 0.5) * 2;
          gsap.to(pngRef.current, {
            x: -300 * (1 - pngProgress),
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(pngRef.current, {
            x: "100%",
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      },
    });
  }, [progressInput]);

  return (
    <div className="blackHole">
      <Background />
      <div className="rive-wrapper">
        <RiveComponent style={{ width: "100%", height: "100%" }} />
      </div>
      <img ref={pngRef} src="/images/4c.png" className="png" alt="" />
    </div>
  );
};

export default BlackHole;
