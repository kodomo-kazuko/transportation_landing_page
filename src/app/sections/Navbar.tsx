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
      <div className="flex justify-center">
        <div className="flex flex-auto justify-center ">
          <Image priority alt="" src={logoFull} />
        </div>

        <div className="flex flex-auto justify-around">
          <MyButton
            bgColor="blue-400"
            fontType="sans"
            onClick={() => handleClick("Visual")}
          >
            Visual
          </MyButton>
          <MyButton
            bgColor="blue-400"
            fontType="sans"
            onClick={() => handleClick("FAQ")}
          >
            FAQ
          </MyButton>
          <MyButton
            bgColor="blue-400"
            fontType="sans"
            onClick={() => handleClick("Download")}
          >
            Download
          </MyButton>
          <MyButton
            bgColor="blue-400"
            fontType="sans"
            onClick={() => handleClick("Footer")}
          >
            Contact
          </MyButton>
        </div>
      </div>
    </ColorWrapper>
  );
}
