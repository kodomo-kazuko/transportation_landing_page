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
    AOS.init({
      duration: 1500,
      once: true,
      mirror: true,
      offset: 100,
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