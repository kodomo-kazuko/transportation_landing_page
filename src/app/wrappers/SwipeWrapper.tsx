import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ScrollWrapperProps {
  children: ReactNode;
  animation: string;
  delay?: number;
}

const SwipeWrapper: React.FC<ScrollWrapperProps> = ({
  children,
  animation,
  delay = 0,
}) => {
  useEffect(() => {
    // Calculate offset based on screen width
    let offset;
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      offset = 300; // Mobile devices
    } else if (screenWidth < 1024) {
      offset = 300; // Tablets
    } else {
      offset = 300; // Desktops
    }

    AOS.init({
      duration: 1500,
      once: true,
      mirror: true,
      offset,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [children, animation, delay]);

  return (
    <div data-aos={animation} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default SwipeWrapper;
