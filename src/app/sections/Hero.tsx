import React, { useEffect, useState } from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import { IPhone } from "../components/iphone";
import { useScreenSize } from "../components/getScreenSize";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";
import start from "../../../public/images/figIMG/start.png";

const createAnimatedText = (texts: string[], animationType: string) => {
  return texts.map((text, index) => (
    <SwipeWrapper key={index} animation={animationType} delay={index * 300}>
      <div
        className={`text-4xl sm:text-3xl md:text-6xl font-bold lg:ml-10 mt-0 sm:mt-10 lg:mt-0 mb-4 text-center sm:text-left`}
      >
        {text}
      </div>
    </SwipeWrapper>
  ));
};

const Hero: React.FC = () => {
  const [videoOpacity, setVideoOpacity] = useState(0);
  const { screenSize, windowWidth } = useScreenSize({
    landscapeRatio: { xs: 2, sm: 3, md: 4, lg: 4, xl: 5, "2xl": 5.5 },
  });
  const animationType = windowWidth <= 480 ? "fade-right" : "fade-right";
  const text = createAnimatedText(
    ["Автобусны шинэ", "апп гарлаа!"],
    animationType
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => setVideoOpacity(1), 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ColorWrapper color={"transparent"}>
      <div
        id="Hero"
        className={`flex flex-col justify-center items-center space-y-4 pb-16 pt-10 sm:pb-32 sm:pt-16 md:space-y-0 md:flex-row lg:space-y-0 lg:flex-row xl:space-y-0 xl:flex-row 2xl:space-y-0 2xl:flex-row`}
      >
        <div className="flex flex-col space-y-4 md:w-1/2 md:flex md:items-start justify-center md:justify-start md:pl-10">
          {text}
          <p className=" px-20 sm:px-0 text-lg text-gray-500 sm:text-xl md:text-2xl lg:ml-10 text-center sm:text-left">
            welcome the new and improved bus app. It would legit knock your
            socks off if it had hands.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 lg:pl-10">
            <a className=" flex justify-center">
              <button className="  w-2/3 sm:w-24 md:w-32 lg:w-48 xl:w-56 2xl:w-64 text-gray-700 bg-white border border-black font-semibold  rounded-2xl flex items-center  justify-center gap-2 p-2">
                <Image
                  alt="App Store Logo"
                  src={AppStore}
                  width={30}
                  height={30}
                />
                <span>App Store</span>
              </button>
            </a>
            <a className=" flex justify-center">
              <button className="w-2/3 sm:w-24 md:w-32 lg:w-48 xl:w-56 2xl:w-64 text-gray-700 bg-white border border-black font-semibold  rounded-2xl flex items-center  justify-center gap-2 p-2">
                <Image
                  alt="Play Store Logo"
                  src={PlayStore}
                  width={30}
                  height={30}
                />
                <span>Google Play</span>
              </button>
            </a>
          </div>
        </div>
        <div className="z-10 md:w-1/2 md:flex md:items-center md:justify-center relative">
          <div className="absolute w-3/4 h-1/2 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 rounded-bl-full rounded-tr-full bg-ub-secondary" />
          <div className="flex justify-center items-center">
            <IPhone boxShadow="" width={screenSize}>
              <Image src={start} alt={""} fill priority />
            </IPhone>
          </div>
        </div>
      </div>
    </ColorWrapper>
  );
};

export default Hero;
