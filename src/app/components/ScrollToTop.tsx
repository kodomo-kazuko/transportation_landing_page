"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top z-50">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 cursor-pointer"
        >
          <button className="p-4 rounded-full text-2xl ring-3  border-2 bg-ub-secondary  md:text-3xl">
            <MdOutlineKeyboardDoubleArrowUp color="white" />
          </button>
        </div>
      )}
    </div>
  );
}
