// src/hooks/usePreloadImages.js
import { useState, useEffect } from 'react';

const usePreloadImages = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (isMounted) {
          setProgress(Math.floor((loadedCount / imageUrls.length) * 100));
          if (loadedCount === imageUrls.length) {
            setLoaded(true);
          }
        }
      };
    });

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return { loaded, progress };
};

export default usePreloadImages;
