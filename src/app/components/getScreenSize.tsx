import { useState, useEffect, useCallback } from "react";

const defaultBreakpoints = { xs: 2.5, sm: 3, md: 4, lg: 5, xl: 6, "2xl": 7, "3xl": 10 };

export function useScreenSize({
  landscapeRatio = defaultBreakpoints,
  constantSize,
}: {
  landscapeRatio?: typeof defaultBreakpoints;
  portraitRatio?: typeof defaultBreakpoints;
  constantSize?: number;
}) {
  const [screenSize, setScreenSize] = useState(
    constantSize || landscapeRatio.xs || 0
  );
  const [windowWidth, setWindowWidth] = useState(0);

  const updateSize = useCallback(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      if (!constantSize) {
        let newScreenSize = landscapeRatio.xs || 0;
        if (window.innerWidth >= 1800) {
          newScreenSize = landscapeRatio["3xl"] || 0;
        }
        else if (window.innerWidth >= 1536) {
          // 2xl
          newScreenSize = landscapeRatio["2xl"] || 0;
        } else if (window.innerWidth >= 1280) {
          // xl
          newScreenSize = landscapeRatio.xl || 0;
        } else if (window.innerWidth >= 1024) {
          // lg
          newScreenSize = landscapeRatio.lg || 0;
        } else if (window.innerWidth >= 768) {
          // md
          newScreenSize = landscapeRatio.md || 0;
        } else if (window.innerWidth >= 640) {
          // sm
          newScreenSize = landscapeRatio.sm || 0;
        }

        console.log(newScreenSize)

        setScreenSize(window.innerWidth / newScreenSize);
      }
    }
  }, [landscapeRatio, constantSize]);

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [updateSize]);

  return { screenSize, windowWidth };
}
