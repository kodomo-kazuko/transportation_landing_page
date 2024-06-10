"use client";

import React from "react";
import ColorWrapper from "../wrappers/ColorWrapper";
import Start from "../../../public/images/figIMG/Splash.png";
import Image from "next/image";
import { IPhone } from "../components/iphone";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import { useScreenSize } from "../components/getScreenSize";

const createAnimatedText = (text: string) => {
  return text.split(" ").map((word, index) => (
    <SwipeWrapper key={index} animation="fade-right" delay={index * 300}>
      <div className="text-3xl sm:text-left sm:text-5xl md:text-8xl font-bold lg:ml-10 mt-4 sm:mt-10 lg:mt-0 mb-4 text-center">
        {word}
      </div>
    </SwipeWrapper>
  ));
};

const Hero: React.FC = () => {
  const screenSize = useScreenSize();
  const text = createAnimatedText("Шинэ автобусны апп");

  return (
    <div className="shadow-md rounded-xl">
      <ColorWrapper color={"transparent"}>
        <div
          id="Hero"
          className="flex flex-col sm:flex-row-reverse justify-center items-center space-y-4 sm:space-y-0"
        >
          {screenSize <= 640 && <div className="flex flex-col">{text}</div>}
          <div className="z-10">
            <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
              <video
                style={{ width: "100%", height: "100%" }}
                src="https://images.apple.com/media/us/iphone-x/2017/01df5b43-28e4-4848-bf20-490c34a926a7/overview/primary/hero/small_2x.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </IPhone>
          </div>
          {screenSize > 640 && <div className="flex flex-col">{text}</div>}
        </div>
      </ColorWrapper>
    </div>
  );
};

export default Hero;
