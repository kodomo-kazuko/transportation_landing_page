import { useState, useEffect } from "react";

export function useScreenSize() {
  const landscapeRatio = 6;
  const portraitRatio = 2.5;

  const [screenSize, setScreenSize] = useState(landscapeRatio);

  useEffect(() => {
    function updateSize() {
      const newScreenSize =
        window.innerWidth >= window.innerHeight
          ? landscapeRatio
          : portraitRatio;
      setScreenSize(window.innerWidth / newScreenSize);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [landscapeRatio, portraitRatio]);

  return screenSize;
}
