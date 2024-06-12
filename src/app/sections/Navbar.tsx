import React, { useState, useEffect } from "react";
import MyButton from "../components/Button";
import Image from "next/image";
import logoFull from "../../../public/images/logo/UBCard-Logo.svg";
import { FaBars } from "react-icons/fa";
import ColorWrapper from "../wrappers/ColorWrapper";

interface NavBarProps {
  setShowSecondDiv: (showSecondDiv: boolean) => void;
  setScrollToId: (id: string) => void;
}

const MOBILE_SCREEN_WIDTH = 768;

const NavBar: React.FC<NavBarProps> = ({ setShowSecondDiv, setScrollToId }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < MOBILE_SCREEN_WIDTH);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleClick = (id: string, shouldShowSecondDiv: boolean) => {
    setShowSecondDiv(shouldShowSecondDiv);
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

  return (
    <div className="">
      <ColorWrapper color="secondary">
        <div className="flex justify-between items-center p-3 sm:w-2/3 mx-auto">
          <div className="hidden sm:flex sm:justify-center">
            <button onClick={() => handleClick("", false)}>
              <Image priority alt="Logo" src={logoFull} />
            </button>
          </div>
          <div className="flex items-center justify-between w-full sm:hidden">
            <button onClick={() => handleClick("", false)}>
              <Image priority alt="Logo" src={logoFull} />
            </button>
            <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
              <FaBars size={30} />
            </button>
          </div>
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
              onClick={() => handleClick("Footer", false)}
            >
              Холбоо барих
            </MyButton>
          </div>
        )}
      </ColorWrapper>
    </div>
  );
};

export default NavBar;
