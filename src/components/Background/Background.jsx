import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import './background.scss';

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

const Background = () => {
  const location = useLocation();
  const [prevSrc, setPrevSrc] = useState(null);
  const [currentSrc, setCurrentSrc] = useState(backgroundMap[location.pathname]);

  useEffect(() => {
    setPrevSrc(currentSrc);
    setTimeout(() => {
      setCurrentSrc(backgroundMap[location.pathname] || "/images/default.png");
    }, 200); // Opóźnienie dla płynniejszej zmiany
  }, [location.pathname]);

 
  return (
    <div className="background-container">
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

      <motion.div
        key={currentSrc}
        className="background"
        style={{ backgroundImage: `url(${currentSrc})` }}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Background;
