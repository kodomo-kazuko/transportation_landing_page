import React from "react";
import MyButton from "../components/Button";
import Image from "next/image";
import logoFull from "../../../public/images/logo/UBCard-Logo.svg";
import ColorWrapper from "../components/ColorWrapper";

interface NavBarProps {
  setShowSecondDiv: (showSecondDiv: boolean) => void;
}

export default function NavBar({ setShowSecondDiv }: NavBarProps) {
  const handleClick = (id: string, shouldShowSecondDiv: boolean) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: "smooth",
      });
    }
    setShowSecondDiv(shouldShowSecondDiv);
  };

  return (
    <ColorWrapper color={"primary"}>
      <div className="flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
        <button onClick={() => handleClick("", false)}>
          <Image priority alt="" src={logoFull} />
        </button>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10">
          <MyButton
            bgColor=""
            fontType="sans"
            onClick={() => handleClick("", true)}
          >
            Ашиглах заавар
          </MyButton>
          <MyButton
            bgColor=""
            fontType="sans"
            onClick={() => handleClick("FAQ", false)}
          >
            Түгээмэл асуултууд
          </MyButton>
          <MyButton
            bgColor=""
            fontType="sans"
            onClick={() => handleClick("Download", false)}
          >
            Татах
          </MyButton>
          <MyButton
            bgColor=""
            fontType="sans"
            onClick={() => handleClick("Footer", false)}
          >
            Холбоо барих
          </MyButton>
        </div>
      </div>
    </ColorWrapper>
  );
}
