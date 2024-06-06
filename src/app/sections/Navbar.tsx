"use client";

import React from "react";
import MyButton from "../components/Button";
import Image from "next/image";
import logoFull from "../../../public/images/logo/UBCard-Logo.svg";
import ColorWrapper from "../components/ColorWrapper";

export default function NavBar() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: "smooth",
      });
    }
  };

  return (
    <ColorWrapper color={"primary"}>
      <div className="flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
        <div>
          <Image priority alt="" src={logoFull} />
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10">
          <MyButton
            bgColor="blue-400"
            fontType="sans"
            onClick={() => handleClick("Visual")}
          >
            танилцуулга
          </MyButton>
          <MyButton
            bgColor="blue-400"
            fontType="sans"
            onClick={() => handleClick("FAQ")}
          >
            Түгээмэл асуултууд
          </MyButton>
          <MyButton
            bgColor="blue-400"
            fontType="sans"
            onClick={() => handleClick("Download")}
          >
            Татах
          </MyButton>
          <MyButton
            bgColor="blue-400"
            fontType="sans"
            onClick={() => handleClick("Footer")}
          >
            Холбоо барих
          </MyButton>
        </div>
      </div>
    </ColorWrapper>
  );
}
