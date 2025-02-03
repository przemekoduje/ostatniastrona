import React, { useState, useEffect } from 'react';
import './background.scss';

const Background = ({ src }) => {
  const [prevSrc, setPrevSrc] = useState(src);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (src !== prevSrc) {
      // Rozpocznij animację zanikania poprzedniego obrazu
      setFade(true);
      const timer = setTimeout(() => {
        setPrevSrc(src);
        setFade(false);
      }, 1000); // czas animacji fade-out (1s)
      return () => clearTimeout(timer);
    }
  }, [src, prevSrc]);

  return (
    <div className="background-container">
      <div
        className={`background previous ${fade ? 'fade-out' : ''}`}
        style={{ backgroundImage: `url(${prevSrc})` }}
      ></div>
      <div
        className="background current"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    </div>
  );
};

export default Background;
