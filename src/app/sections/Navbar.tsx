import React, { useState, useEffect } from "react";
import MyButton from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
// import logoFull from "../../../public/images/logo/UBCard-Logo.svg";
import { FaBars } from "react-icons/fa";
import ColorWrapper from "../wrappers/ColorWrapper";
import { motion } from "framer-motion";
import theirIcon from "../../../public/images/Icon/Niitiin-teever-logo 1 (1).svg";
import logo_word from "../../../public/images/logo/logo_words.svg";

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
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className=" flex space-x-4"
                >
                  <Image
                    priority
                    alt="Logo"
                    src={theirIcon}
                    height={40}
                    width={40}
                  />
                  <Image priority alt="Logo" src={logo_word} />
                </motion.div>
              </button>
            </div>
            <div className="flex items-center justify-between w-full md:hidden">
              <button onClick={() => handleClick("", false)}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className=" flex space-x-4"
                >
                  <Image
                    priority
                    alt="Logo"
                    src={theirIcon}
                    height={40}
                    width={40}
                  />
                  <Image priority alt="Logo" src={logo_word} />
                </motion.div>
              </button>
              <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
                <FaBars size={30} />
              </button>
            </div>
            {!isMobile && (
              <div className="flex md:space-x-1 lg:space-x-10 text-right">
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
                  <Button onClick={() => handleClick("FAQ", false)}>
                    Түгээмэл асуултууд
                  </Button>
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
            )}
          </div>
          {isMobile && isMenuVisible && (
            <div className="flex flex-col space-y-2 p-4 md:p-4">
              <motion.div whileHover={{ scale: 1.03 }}>
                <Dropdown>
                  <DropdownTrigger className="font-sans font-normal text-gray-100">
                    <Button
                      style={{ marginTop: -5, marginLeft: -14 }}
                      onClick={() => handleClick("", true)}
                    >
                      Ашиглах заавар
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    className="grid grid-cols-2 gap-4 p-2 bg-white rounded-lg"
                  >
                    <DropdownItem key="login">
                      <Link href="#login">
                        <p>Нэвтрэх</p>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="wallet">
                      <Link href="#wallet">
                        <p>Хэтэвч</p>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="discount">
                      <Link href="#discount">
                        <p>Хөнгөлөлттэй эрх</p>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="charge">
                      <Link href="#charge">
                        <p>Хэтэвч цэнэглэх</p>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="physicalCard">
                      <Link href="#physicalCard">
                        <p>Биет карт</p>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="direction">
                      <Link href="#direction">
                        <p>Чиглэл</p>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="feedback">
                      <Link href="#feedback">
                        <p>Сэтгэгдэл үлдээх</p>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="history">
                      <Link href="#history">
                        <p>Зорчилтын түүх</p>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
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
    </>
  );
};

export default NavBar;
