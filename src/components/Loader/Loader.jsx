import React, { useState, useEffect } from 'react';
import './loader.scss';

const Loader = ({ progress, onLoaderComplete }) => {
    // Obliczamy szerokość overlay jako 100% minus procent downloadu
    const overlayWidth = `${100 - progress}%`;
    const [showSubtext, setShowSubtext] = useState(false);
  
    useEffect(() => {
        if (progress === 100) {
          // Po osiągnięciu 100% czekamy 1 sekundę, aby następnie pokazać subtekst
          const timer1 = setTimeout(() => {
            setShowSubtext(true);
            // Po pokazaniu subtekstu czekamy kolejne 2 sekundy i wywołujemy onLoaderComplete
            const timer2 = setTimeout(() => {
              if (onLoaderComplete) {
                onLoaderComplete();
              }
            }, 2000);
            // Zwracamy funkcję czyszczącą timer2
            return () => clearTimeout(timer2);
          }, 1000);
          return () => clearTimeout(timer1);
        }
      }, [progress, onLoaderComplete]);
    
  
    return (
        <div className="loader-container">
        <div className="loader-text">
          OSTATNIA STRONA
          {showSubtext && (
            <div className="loader-subtext">by przemokouje.online</div>
          )}
        </div>
        <div className="loader-overlay" style={{ width: overlayWidth }}></div>
      </div>
    );
  };
  

export default Loader;