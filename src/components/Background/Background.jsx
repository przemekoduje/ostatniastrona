import React, { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./background.scss";

// Mapa tła do każdej podstrony
const backgroundMap = {
  "/": "/images/background01.png",
  "/black-hole": "/images/background09.png",
  "/faq": "/images/background02.png",
  "/secret-key": "/images/background06.png",
  "/unfinished-tale": "/images/background07.png",
  "/cookies": "/images/background10.png",
  "/lighthouse": "/images/background05.png",
  "/phone-to-friend": "/images/background04.png",
  "/mask": "/images/background08.png",
  "/needs-puzzles": "/images/background12.png",
  "/behind-the-scenes": "/images/background11.png",
};

// ✅ Poprawione użycie `forwardRef`
const Background = forwardRef((props, ref) => {
  const location = useLocation();
  const [prevSrc, setPrevSrc] = useState(null);
  const [currentSrc, setCurrentSrc] = useState(backgroundMap[location.pathname]);

  useEffect(() => {
    setPrevSrc(currentSrc);
    setTimeout(() => {
      setCurrentSrc(backgroundMap[location.pathname] || "/images/default.png");
    }, 200);
  }, [location.pathname]);

  return (
    <div className="background-container" ref={ref}>
      {prevSrc && (
        <motion.div
          key={prevSrc}
          className="background"
          style={{ backgroundImage: `url(${prevSrc})` }}
          initial={{ opacity: 1, filter: "blur(0px)" }}
          animate={{ opacity: 0, filter: "blur(10px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}

      {/* ✅ Tylko `div` obsłuży GSAP */}
      <div
        key={currentSrc}
        className="background"
        style={{ backgroundImage: `url(${currentSrc})` }}
        ref={ref} // Przekazanie refa dla GSAP
      />
    </div>
  );
});

export default Background;
