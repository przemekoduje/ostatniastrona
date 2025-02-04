import React, { useState, useEffect, useRef } from "react";
import usePreloadImages from "./hooks/usePreloadImages";
import Loader from "./components/Loader/Loader";
import Background from "./components/Background/Background";
import Menu from "./components/Menu/Menu";

const sections = [
  {
    label: "Home",
    background: "/images/background01.png",
    content: "Treść sekcji 10",
    textColor: "#000",
    backgroundColor: "#000",
    textOpacity: 0.6,
    backgroundOpacity: 0.25,

  },
  {
    label: "Czarna Dziura",
    background: "/images/background09.png",
    content: "Treść sekcji 1",
    textColor: "#fff",
    backgroundColor: "#fff",
    textOpacity: 0.3,
    backgroundOpacity: 0.15,
  },
  {
    label: "FAQ",
    background: "/images/background02.png",
    content: "Treść sekcji 2",
    textColor: "#000",
    backgroundColor: "#000",
    textOpacity: 0.6,
    backgroundOpacity: 0.25,
  },
  {
    label: "Secret Key",
    background: "/images/background06.png",
    content: "Treść sekcji 3",
    textColor: "#000",
    backgroundColor: "#000",
    textOpacity: 0.6,
    backgroundOpacity: 0.35,
  },
  {
    label: "Niedokończona historia",
    background: "/images/background07.png",
    content: "Treść sekcji 4",
    textColor: "#000",
    backgroundColor: "#000",
    textOpacity: 0.6,
    backgroundOpacity: 0.35,
  },
  {
    label: "The code is hungry…",
    background: "/images/background03.png",
    content: "Treść sekcji 5",
    textColor: "#000",
    backgroundColor: "#000",
    textOpacity: 0.6,
    backgroundOpacity: 0.35,
  },
  {
    label: "Latarnia w Mgle",
    background: "/images/background05.png",
    content: "Treść sekcji 6",
    textColor: "#000",
    backgroundColor: "#000",
    textOpacity: 0.6,
    backgroundOpacity: 0.35,
  },
  {
    label: "Telefon do przyjaciela",
    background: "/images/background04.png",
    content: "Treść sekcji 7",
    textColor: "#fff",
    backgroundColor: "#fff",
    textOpacity: 0.3,
    backgroundOpacity: 0.15,
  },
  {
    label: "Twarz Twojej Marki",
    background: "/images/background08.png",
    content: "Treść sekcji 8",
    textColor: "#000",
    backgroundColor: "#000",
    textOpacity: 0.6,
    backgroundOpacity: 0.35,
  },
  {
    label: "Układanka Potrzeb",
    background: "/images/background01.png",
    content: "Treść sekcji 9",
    textColor: "#000",
    backgroundColor: "#000",
    textOpacity: 0.6,
    backgroundOpacity: 0.35,
  },

  {
    label: "Sekcja 11",
    background: "/images/background11.png",
    content: "Treść sekcji 11",
    textColor: "#fff",
    backgroundColor: "#fff",
    textOpacity: 0.3,
    backgroundOpacity: 0.15,
  },
];

export default function OstatniaStrona() {
  const imageUrls = sections.map((section) => section.background);

  const { loaded, progress } = usePreloadImages(imageUrls);
  const [currentSection, setCurrentSection] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  //   const audioRef = useRef(null);

  const onSectionChange = (index) => {
    setCurrentSection(index);
    // if (audioRef.current) {
    //   audioRef.current.play();
    // }
  };

  return (
    <div className="ostatnia-strona">
      {!loaded || showLoader ? (
        <Loader
          progress={progress}
          onLoaderComplete={() => setShowLoader(false)}
        />
      ) : (
        <>
          <Background src={sections[currentSection].background} />
          <div className="section-content">
            {sections[currentSection].content}
          </div>
          <Menu
            onSectionChange={onSectionChange}
            textColor={sections[currentSection].textColor}
            backgroundColor={sections[currentSection].backgroundColor}
            textOpacity={sections[currentSection].textOpacity}
            backgroundOpacity={sections[currentSection].backgroundOpacity}
          />

          {/* <audio ref={audioRef} src="/sounds/change.mp3" /> */}
        </>
      )}
    </div>
  );
}
