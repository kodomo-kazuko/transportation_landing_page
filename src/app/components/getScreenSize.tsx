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
  const [windowWidth, setWindowWidth] = useState(0);

  const updateSize = () => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      if (!constantSize) {
        const newScreenSize =
          window.innerWidth >= window.innerHeight
            ? landscapeRatio
            : portraitRatio;
        setScreenSize(window.innerWidth / newScreenSize);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [landscapeRatio, portraitRatio, constantSize, updateSize]);

  return { screenSize, windowWidth };
}
