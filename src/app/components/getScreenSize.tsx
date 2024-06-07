import { useState, useEffect } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState(6);

  useEffect(() => {
    function updateSize() {
      const newScreenSize = window.innerWidth >= window.innerHeight ? 6 : 2.5;
      setScreenSize(window.innerWidth / newScreenSize);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return screenSize;
}
