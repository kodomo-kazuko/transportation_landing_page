"use client";

import React from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import { IPhone } from "../components/iphone";
import { useScreenSize } from "../components/getScreenSize";
import SwipeWrapper from "../wrappers/SwipeWrapper";

const createAnimatedText = (texts: string[], animationType: string) => {
  return texts.map((text, index) => (
    <SwipeWrapper key={index} animation={animationType} delay={index * 300}>
      <div
        className={`text-3xl sm:text-5xl md:text-8xl font-bold lg:ml-10 mt-4 sm:mt-10 lg:mt-0 mb-4 text-center sm:text-left`}
      >
        {text}
      </div>
    </SwipeWrapper>
  ));
};

const Hero: React.FC = () => {
  const { screenSize, windowWidth } = useScreenSize({
    landscapeRatio: 7,
    portraitRatio: 3,
  });
  const animationType = windowWidth <= 480 ? "fade-right" : "fade-right";
  const text = createAnimatedText(
    ["Шинэ", "автобусны", "апп гарлаа!"],
    animationType
  );

  return (
    <div className="shadow-md rounded-xl">
      <ColorWrapper color={"transparent"}>
        <div
          id="Hero"
          className={`flex flex-col sm:flex-row-reverse justify-center items-center space-y-4 sm:space-y-0`}
        >
          <div className="flex flex-col">{text}</div>
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
        </div>
      </ColorWrapper>
    </div>
  );
};

export default Hero;
