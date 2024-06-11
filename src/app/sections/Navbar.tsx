import React, { useState, useEffect } from "react";
import MyButton from "../components/Button";
import Image from "next/image";
import logoFull from "../../../public/images/logo/UBCard-Logo.svg";
import icon from "../../../public/images/Icon/white_ub.svg";
import ColorWrapper from "../wrappers/ColorWrapper";
import { FaBars } from "react-icons/fa";

interface NavBarProps {
  setShowSecondDiv: (showSecondDiv: boolean) => void;
  setScrollToId: (id: string) => void;
}

const MOBILE_SCREEN_WIDTH = 768;

export default function NavBar({
  setShowSecondDiv,
  setScrollToId,
}: NavBarProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size and set isMobile state
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < MOBILE_SCREEN_WIDTH);
  };

  // Add event listener for window resize
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleClick = (id: string, shouldShowSecondDiv: boolean) => {
    setShowSecondDiv(shouldShowSecondDiv);

    // Wait for the state update to be completed before scrolling
    const timeoutId = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = window.innerHeight * 0.05;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
    }, 100);

    // Clear the timeout
    return () => clearTimeout(timeoutId);
  };

  return (
    <ColorWrapper color={"primary"} className={"rounded-t-2xl"}>
      <div className="flex flex-row justify-between items-center p-3">
        <div className="flex flex-1 items-center justify-between w-full  mb-2 sm:mb-0">
          <button onClick={() => handleClick("", false)}>
            <Image priority alt="Logo" src={isMobile ? logoFull : logoFull} />
          </button>
          {isMobile && (
            <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
              <FaBars size={30} />
            </button>
          )}
        </div>
        {!isMobile && (
          <div className="flex space-x-10 flex-1">
            <MyButton
              bgColor=""
              fontType="sans"
              onClick={() => handleClick("", true)}
            >
              Ашиглах заавар
            </MyButton>
            <MyButton
              bgColor=""
              fontType="sans"
              onClick={() => handleClick("FAQ", false)}
            >
              Түгээмэл асуултууд
            </MyButton>
            <MyButton
              bgColor=""
              fontType="sans"
              onClick={() => handleClick("Download", false)}
            >
              Татах
            </MyButton>
            <MyButton
              bgColor=""
              fontType="sans"
              onClick={() => handleClick("Footer", false)}
            >
              Холбоо барих
            </MyButton>
          </div>
        )}
      </div>
      {isMobile && isMenuVisible && (
        <div className="flex flex-col space-y-2 p-4">
          <MyButton
            bgColor=""
            fontType="sans"
            onClick={() => handleClick("", true)}
          >
            Ашиглах заавар
          </MyButton>
          <MyButton
            bgColor=""
            fontType="sans"
            onClick={() => handleClick("FAQ", false)}
          >
            Түгээмэл асуултууд
          </MyButton>
          <MyButton
            bgColor=""
            fontType="sans"
            onClick={() => handleClick("Download", false)}
          >
            Татах
          </MyButton>
          <MyButton
            bgColor=""
            fontType="sans"
            onClick={() => handleClick("Footer", false)}
          >
            Холбоо барих
          </MyButton>
        </div>
      )}
    </ColorWrapper>
  );
}
