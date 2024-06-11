"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import { IPhone } from "../components/iphone";
import { useScreenSize } from "../components/getScreenSize";
import SwipeWrapper from "../wrappers/SwipeWrapper";

const createAnimatedText = (texts: string[], animationType: string) => {
  return texts.map((text, index) => (
    <SwipeWrapper key={index} animation={animationType} delay={index * 300}>
      <div
        className={`text-4xl sm:text-5xl md:text-8xl font-bold lg:ml-10 mt-0 sm:mt-10 lg:mt-0 mb-4 text-center sm:text-left`}
      >
        {text}
      </div>
    </SwipeWrapper>
  ));
};

const Hero: React.FC = () => {
  const [videoOpacity, setVideoOpacity] = useState(0);
  const { screenSize, windowWidth } = useScreenSize({});
  const animationType = windowWidth <= 480 ? "fade-right" : "fade-right";
  const text = createAnimatedText(
    ["Автобусны", "Шинэ", "апп гарлаа!"],
    animationType
  );

  useEffect(() => {
    // Start the opacity transition 500ms after the component mounts
    const timeoutId = setTimeout(() => setVideoOpacity(1), 500);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ColorWrapper color={"transparent"}>
      <div
        id="Hero"
        className={`flex flex-col sm:flex-row-reverse justify-center items-center space-y-4 sm:space-y-0`}
      >
        <div className="flex flex-col">{text}</div>
        <div className="z-10">
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <video
              preload="auto"
              style={{
                width: "100%",
                height: "100%",
                opacity: videoOpacity,
                transition: "opacity 2s",
              }}
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
  );
};

export default Hero;
