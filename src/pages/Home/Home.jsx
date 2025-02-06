import React, { useEffect, useRef } from "react";
import "./home.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "../../components/Background/Background";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const backgroundRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(backgroundRef.current, {
  //     scale: 2.2, // Powiększenie do 150%
  //     y: "-10vh",
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: backgroundRef.current,
  //       start: "top top",
  //       end: "bottom+=800px top",
  //       scrub: true, // Płynny efekt podczas przewijania
  //     },
  //   });
  // }, []);

  useEffect(() => {
    gsap.to(".square", {
      x: 1000,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".square",
        start: "top 80%",
        end: "top 50%",
        markers: true,
        scrub: 5,
        pin: true,
        // pinSpacing: true,
        toggleActions: "restart none none none", 
        
      },
    });
  
    // // ✅ Usunięcie animacji przy odmontowaniu komponentu
    // return () => {
    //   anim.kill();
    //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    // };
  }, []);
  


  return (
    <div className="page home-page">
      {/* <Background ref={backgroundRef} />  */}
      <div className="div1">
        <h1>Strona Główna</h1>
        <p>Witaj na stronie głównej!</p>
      </div>
      <div className="div2">
        <div className="square"></div>
        <div className="square2"></div>
      </div>
    </div>
  );
}
