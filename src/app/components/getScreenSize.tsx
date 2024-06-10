import { useState, useEffect } from "react";

interface Props {
  landscapeRatio?: number;
  portraitRatio?: number;
  constantSize?: number;
}

export function useScreenSize({
  landscapeRatio = 6,
  portraitRatio = 2.5,
  constantSize,
}: Props = {}) {
  const [screenSize, setScreenSize] = useState(constantSize || landscapeRatio);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
      if (!constantSize) {
        const newScreenSize =
          window.innerWidth >= window.innerHeight
            ? landscapeRatio
            : portraitRatio;
        setScreenSize(window.innerWidth / newScreenSize);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [landscapeRatio, portraitRatio, constantSize]);

  return { screenSize, windowWidth };
}
