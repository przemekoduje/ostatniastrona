import React, { useEffect, useRef, useState } from "react";
import "./menu.scss";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoEllipse } from "react-icons/io5";
import { GiKey } from "react-icons/gi";
import { GiSkeletonKey } from "react-icons/gi";
import { PiScrollLight } from "react-icons/pi";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { GiLighthouse } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiDualityMask } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import { FaPuzzlePiece } from "react-icons/fa";
import { GiTheaterCurtains } from "react-icons/gi";

import { Link } from "react-router-dom";

const sections = [
  { label: "Home", icon: <FaHouse />, path: "/" },
  { label: "Czarna Dziura", icon: <IoEllipse />, path: "/black-hole" },
  { label: "FAQ", icon: <HiOutlineQuestionMarkCircle />, path:"/faq" },
  { label: "Secret Key", icon: <GiSkeletonKey />, path:"/secret-key" },
  { label: "Niedokończona historia", icon: <PiScrollLight />, path:"/unfinished-tale" },
  { label: "The code is hungry…", icon: <LiaCookieBiteSolid />, path:"/cookies" },
  { label: "Latarnia w Mgle", icon: <GiLighthouse />, path:"/lighthouse" },
  { label: "Telefon do przyjaciela", icon: <FaPhoneVolume />, path:"/phone-to-friend" },
  { label: "Twarz Twojej Marki", icon: <GiDualityMask />, path:"/mask" },
  { label: "Układanka Potrzeb", icon: <FaPuzzlePiece />, path:"/needs-puzzles" },
  { label: "Zakulisowo", icon: <GiTheaterCurtains />, path:"/behind-the-scenes" },
];


const Menu = ({
  onSectionChange,
  textColor,
  backgroundColor,
  textOpacity,
  backgroundOpacity,
}) => {
  const [visible, setVisible] = useState(true);
  const hideTimerRef = useRef(null);

  // Ustawienie początkowego timer na 3 sekundy (po załadowaniu)
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(initialTimer);
  }, []);

  const handleTriggerEnter = () => {
    // Na triggerze pojawienie się menu natychmiast
    setVisible(true);
    // Czyszczenie timera hideMenu, jeśli istnieje
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const handleMenuMouseEnter = () => {
    // Gdy kursor nad menu, zatrzymaj timer ukrywania
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    setVisible(true);
  };

  const handleMenuMouseLeave = () => {
    // Po opuszczeniu menu ustaw timer na 5 sekund, po którym menu się schowa
    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
    }, 3000);
  };
  return (
    <>
      <div className="menu-trigger" onMouseEnter={handleTriggerEnter}></div>
      <div
        className={`menu ${visible ? "visible" : "hidden"}`}
        style={{ 
            "--menu-text-color": textColor,
              "--menu-background-color": backgroundColor,
              "--menu-text-opacity": textOpacity,
              "--menu-background-opacity": backgroundOpacity,
        
        }} // Ustawiamy zmienną CSS dla całego menu
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
      >
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.path}
            className="menu-button"
            // onClick={() => onSectionChange(index)}
            style={{
              "--delay": `${index * 0.1}s`,
              
            }}
            data-label={section.label}
          >
            <div className="icon-wrapper">{section.icon}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
