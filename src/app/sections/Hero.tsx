"use client";

import React, { ReactNode, useEffect, useState } from "react";
import ColorWrapper from "../components/ColorWrapper";
import Start from "../../../public/images/figIMG/Splash.png";
import Image from "next/image";
import { IPhone } from "../components/iphone";
import SwipeWrapper from "../components/SwipeWrapper";

const createAnimatedText = (text: string) => {
  return text.split(" ").map((word, index) => (
    <SwipeWrapper key={index} animation="slide-right" delay={index * 250}>
      <div className="text-8xl font-bold lg:ml-10 mt-10 lg:mt-0 mb-4">
        {word}
      </div>
    </SwipeWrapper>
  ));
};

const Hero: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const text = createAnimatedText("NEW BUS APP!");

  return (
    <ColorWrapper color={"white"}>
      <div id="Hero" className="flex justify-center items-center">
        <div className="flex flex-col items-center lg:flex-row">
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={300}>
            <div style={{ opacity, transition: "opacity 2s ease-in-out" }}>
              <Image src={Start} fill alt="" />
            </div>
          </IPhone>
          <div className="flex flex-col" style={{ zIndex: 0 }}>
            {text}
          </div>
        </div>
      </div>
    </ColorWrapper>
  );
};

export default Hero;
