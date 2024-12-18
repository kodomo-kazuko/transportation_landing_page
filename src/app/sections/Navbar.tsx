import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import theirIcon from "../../../public/images/Icon/Niitiin-teever-logo 1 (1).svg";
import logo_word from "../../../public/images/logo/logo_words.svg";
import MyButton from "../components/Button";
import ColorWrapper from "../wrappers/ColorWrapper";

interface NavBarProps {
  setShowSecondDiv: (showSecondDiv: boolean) => void;
  setScrollToId: (id: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setShowSecondDiv }) => {
  const [isMobileNavShow, setIsMobileNavShow] = useState(false);

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
    <div className="fixed top-0 left-0 w-full z-50">
      <ColorWrapper color="secondary" className="p-1">
        <div className="flex justify-between items-center p-3 md:w-11/12 mx-auto">
          <button
            onClick={() => handleClick("", false)}
            className="flex space-x-4 items-center"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image
                priority
                alt="Logo"
                src={theirIcon}
                height={40}
                width={40}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Image priority alt="Logo Word" src={logo_word} />
            </motion.div>
          </button>

          <div className="hidden md:flex md:space-x-1 lg:space-x-10 text-right">
            <motion.div whileHover={{ scale: 1.1 }}>
              <MyButton
                bgColor=""
                fontType="sans"
                onClick={() => handleClick("", true)}
              >
                Ашиглах заавар
              </MyButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <MyButton
                bgColor=""
                fontType="sans"
                onClick={() => handleClick("FAQ", false)}
              >
                Түгээмэл асуултууд
              </MyButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <MyButton
                bgColor=""
                fontType="sans"
                onClick={() => handleClick("Footer", false)}
              >
                Холбоо барих
              </MyButton>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center">
            <FaBars
              size={30}
              className="cursor-pointer"
              onClick={() => setIsMobileNavShow((prev) => !prev)}
            />
          </div>
        </div>

        {isMobileNavShow && (
          <div
            className="flex flex-col md:hidden space-y-4 p-4"
            onClick={() => setIsMobileNavShow(false)}
          >
            <motion.div whileHover={{ scale: 1.03 }}>
              <MyButton
                bgColor=""
                fontType="sans"
                onClick={() => handleClick("", true)}
              >
                Ашиглах заавар
              </MyButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }}>
              <MyButton
                bgColor=""
                fontType="sans"
                onClick={() => handleClick("FAQ", false)}
              >
                Түгээмэл асуултууд
              </MyButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }}>
              <MyButton
                bgColor=""
                fontType="sans"
                onClick={() => handleClick("Footer", false)}
              >
                Холбоо барих
              </MyButton>
            </motion.div>
          </div>
        )}
      </ColorWrapper>
    </div>
  );
};

export default NavBar;
