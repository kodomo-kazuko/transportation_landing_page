import React, { useState, useEffect } from "react";
import MyButton from "../components/Button";
import Image from "next/image";
import logoFull from "../../../public/images/logo/UBCard-Logo.svg";
import ColorWrapper from "../wrappers/ColorWrapper";
import { FaBars } from "react-icons/fa";

interface NavBarProps {
  setShowSecondDiv: (showSecondDiv: boolean) => void;
}

export default function NavBar({ setShowSecondDiv }: NavBarProps) {
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
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight * 0.05;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
    setShowSecondDiv(shouldShowSecondDiv);
  };

  // Don't render until we know the screen width
  if (isMobile === null) {
    return null;
  }

  return (
    <div className="shadow-xl rounded-xl">
      <ColorWrapper color={"primary"}>
        <div className="flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
          <div className="flex flex-row justify-between items-center space-x-8">
            {isMobile && (
              <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
                <FaBars size={30} />
              </button>
            )}
            <button onClick={() => handleClick("", false)}>
              <Image priority alt="" src={logoFull} />
            </button>
          </div>

          {(isMenuVisible || !isMobile) && (
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 text-left sm:text-center ">
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
      </ColorWrapper>
    </div>
  );
}
