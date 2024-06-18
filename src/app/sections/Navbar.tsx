import React, { useState, useEffect } from "react";
import MyButton from "../components/Button";
import Image from "next/image";
import logoFull from "../../../public/images/logo/UBCard-Logo.svg";
import { FaBars } from "react-icons/fa";
import ColorWrapper from "../wrappers/ColorWrapper";
import { motion } from "framer-motion";

interface NavBarProps {
  setShowSecondDiv: (showSecondDiv: boolean) => void;
  setScrollToId: (id: string) => void;
}

const MOBILE_SCREEN_WIDTH = 768;

const NavBar: React.FC<NavBarProps> = ({ setShowSecondDiv }) => {
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
        const offset = window.innerHeight * 0.5 - 150;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
    }, 100);
  };


  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50`}>
        <ColorWrapper color="secondary" className="p-1">
          <div className="flex justify-between items-center p-3 md:w-11/12 mx-auto">
            <div className="hidden md:flex md:justify-center">
              <button onClick={() => handleClick("", false)}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Image priority alt="Logo" src={logoFull} />
                </motion.div>
              </button>
            </div>
            <div className="flex items-center justify-between w-full md:hidden">
              <button onClick={() => handleClick("", false)}>
                <motion.div whileHover={{ scale: 1.1 }} className=" pl-2">
                  <Image priority alt="Logo" src={logoFull} />
                </motion.div>
              </button>
              <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
                <FaBars size={30} />
              </button>
            </div>
            {!isMobile && (
              <div className="flex md:space-x-1 lg:space-x-10 text-right">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <MyButton bgColor="" fontType="sans" onClick={() => handleClick("", true)}>
                    Ашиглах заавар
                  </MyButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <MyButton bgColor="" fontType="sans" onClick={() => handleClick("FAQ", false)}>
                    Түгээмэл асуултууд
                  </MyButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <MyButton bgColor="" fontType="sans" onClick={() => handleClick("Footer", false)}>
                    Холбоо барих
                  </MyButton>
                </motion.div>
              </div>
            )}
          </div>
          {isMobile && isMenuVisible && (
            <div className="flex flex-col space-y-2 p-4 md:p-4">
              <motion.div whileHover={{ scale: 1.03 }}>
                <MyButton bgColor="" fontType="sans" onClick={() => handleClick("", true)}>
                  Ашиглах заавар
                </MyButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <MyButton bgColor="" fontType="sans" onClick={() => handleClick("FAQ", false)}>
                  Түгээмэл асуултууд
                </MyButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <MyButton bgColor="" fontType="sans" onClick={() => handleClick("Footer", false)}>
                  Холбоо барих
                </MyButton>
              </motion.div>
            </div>
          )}
        </ColorWrapper>
      </div>
    </>
  );


};

export default NavBar;