import React, { useEffect, useState } from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import { useScreenSize } from "../components/getScreenSize";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";
import test from "../../../public/images/figIMG/test (2).png";
import { motion } from "framer-motion";
import Glider from "../components/Glider";

const createAnimatedText = (texts: string[], animationType: string) => {
  return texts.map((text, index) => {
    const splitText = text.split(" ");
    const firstLine = splitText.slice(0, splitText.length / 2).join(" ");
    const secondLine = splitText.slice(splitText.length / 2).join(" ");

    return (
      <SwipeWrapper key={index} animation={animationType} delay={index * 300}>
        <div
          className={`text-4xl text-ub-secondary sm:text-5xl md:text-6xl font-bold lg:ml-10 mt-0 md:  lg:mt-0 mb-4 text-center md:text-left`}
        >
          {texts}
        </div>
      </SwipeWrapper>
    );
  });
};

const Hero: React.FC = () => {
  const { screenSize, windowWidth } = useScreenSize({
    landscapeRatio: { xs: 3, sm: 4, md: 7, lg: 7, xl: 7, "2xl": 7, "3xl": 8 },
  });
  const animationType = windowWidth <= 480 ? "fade-right" : "fade-right";
  const text = createAnimatedText(["Таны Автобусны Шинэ Туслах"], animationType);

  const buttonSize: number = 40;

  return (
    <ColorWrapper color={"transparent"}>
      <div
        id="Hero"
        className={`flex flex-col justify-center items-center space-y-4 pb-16 pt-10  md:space-y-0 md:flex-row lg:space-y-0 lg:flex-row xl:space-y-0 xl:flex-row 2xl:space-y-0 2xl:flex-row`}
      >
        <div className="flex flex-col space-y-4 md:w-1/2 md:flex md:items-start justify-center md:justify-start md:pl-10">
          {text}
          <p className="px-20 text-center sm:px-20 text-lg text-ub-gray sm:text-xl md:text-2xl 3xl:text-3xl lg:ml-10 md:px-0 md:text-left">
            Нийтийн тээврийн үйлчилгээний Чиглэл, Зогсоол
            <br />
            Байршил, Автобусны ирэх хугацааг хялбараар хар!
          </p>

          <div className="flex flex-col sm:flex-col md:flex-row gap-3 lg:pl-10 justify-center sm:justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
              <a
                className="w-1/2 sm:w-auto lg:w-fit 3xl:w-auto focus-visible-class"
                href=""
              >
                <button className="w-60 sm:w-60 3xl:w-72 text-gray-100 bg-ub-secondary font-semibold rounded-2xl flex items-center justify-center gap-2 p-2">
                  <Image
                    alt="App Store Logo"
                    src={AppStore}
                    width={buttonSize}
                    height={buttonSize}
                  />
                  <span className="text-center sm:text-left">App Store</span>
                </button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
              <a
                className="w-1/2 sm:w-auto lg:w-fit 3xl:w-auto focus-visible-class"
                href=""
              >
                <button className="w-60 sm:w-60 3xl:w-72 text-gray-100 bg-ub-secondary font-semibold rounded-2xl flex items-center justify-center gap-2 p-2">
                  <Image
                    alt="Play Store Logo"
                    src={PlayStore}
                    width={buttonSize}
                    height={buttonSize}
                  />
                  <span className="text-center sm:text-left">Google Play</span>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="z-10 md:w-1/2 md:flex md:items-center md:justify-center relative">
          <motion.div animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }} className="absolute md:w-3/4 md:h-1/2 rounded-bl-full rounded-tr-full bg-ub-secondary" />
          <div className="flex justify-center items-center z-10">
            <div className="flex justify-center items-center z-10">
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ><Image
                  src={test}
                  alt="Start Image"
                  width={screenSize * 1.2}
                  height={screenSize * 1.2}
                  priority
                /></motion.div>
            </div>

          </div>

        </div>

      </div>

    </ColorWrapper>
  );
};

export default Hero;
