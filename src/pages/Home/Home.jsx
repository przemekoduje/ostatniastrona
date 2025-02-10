import React, { useEffect, useRef } from "react";
import "./home.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "../../components/Background/Background";
import IntroSection from "./sections/IntroSection/IntroSection";
import SecondSection from "./sections/secondSection/SecondSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {


  return (
    <div className="page home-page">
      <Background/> 
      <div>
        
      </div>
      <IntroSection />
      <SecondSection/>
    </div>
  );
}
