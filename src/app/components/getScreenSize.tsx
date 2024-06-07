import { useState, useEffect } from "react";

interface Props {
  landscapeRatio?: number;
  portraitRatio?: number;
}

export function useScreenSize({
  landscapeRatio = 6,
  portraitRatio = 2.5,
}: Props = {}) {
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
