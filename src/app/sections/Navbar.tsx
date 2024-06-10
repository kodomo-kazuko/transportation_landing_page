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

export default function NavBar({
  setShowSecondDiv,
  setScrollToId,
}: NavBarProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Function to check screen size and set isMobile state
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  // Add event listener for window resize
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup function
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClick = (id: string, shouldShowSecondDiv: boolean) => {
    setShowSecondDiv(shouldShowSecondDiv);

    // Wait for the state update to be completed before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = window.innerHeight * 0.05;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Don't render until we know the screen width
  if (isMobile === null) {
    return null;
  }

  return (
    <div className="shadow-xl rounded-xl">
      <ColorWrapper color={"primary"}>
        <div className="flex flex-row justify-between items-center p-4">
          <div className="flex items-center">
            <button onClick={() => handleClick("", false)}>
              <Image priority alt="" src={isMobile ? logoFull : logoFull} />
            </button>
          </div>
          <div className="flex-grow flex justify-end items-center">
            {isMobile && (
              <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
                <FaBars size={30} />
              </button>
            )}
            {!isMobile && (
              <div className="flex space-x-10">
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
    </div>
  );
}
