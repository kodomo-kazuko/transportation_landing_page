"use client";

import { IPhone } from "../components/iphone";
import Image from "next/image";
import styled from "@emotion/styled";
import Spacer from "../components/spacer";

import GG from "../../../public/images/figIMG/Home-Regular 3.png";
import Payment from "../../../public/images/figIMG/Qpay.png";
import map from "../../../public/images//figIMG/Stations 4.png";
import ColorWrapper from "../components/ColorWrapper";
import SwipeWrapper from "../components/SwipeWrapper";

export default function Visuals() {
  let screenSize: number = 0;
  if (window.innerWidth >= window.innerHeight) {
    screenSize = 5;
  } else {
    screenSize = 2.5;
  }

  const StyledImage = styled(Image)`
    object-fit: cover;
    object-position: center top;
  `;

  const StyledH1 = styled.h1`
    font-size: 2em;
  `;

  return (
    <div id="Visual">
      <SwipeWrapper animation="slide-right">
        <ColorWrapper color={"primary"}>
          <div className="flex justify-evenly">
            <div className="flex basis-1/3 justify-center items-center">
              <IPhone
                boxShadow="0px 5px 25px rgba(0,0,0,0.6)"
                width={window.innerWidth / screenSize}
              >
                <Image src={GG} alt="" layout="fill" priority />
              </IPhone>
            </div>
            <div className="flex basis-1/3 justify-center items-center">
              <StyledH1>QR Code-оо уншуулаад Зорчих</StyledH1>
            </div>
          </div>
        </ColorWrapper>
      </SwipeWrapper>

      <Spacer height="40px" width="0" />

      <SwipeWrapper animation="slide-left">
        <ColorWrapper color={"white"}>
          <div className="flex justify-evenly">
            <div className="flex basis-1/3 justify-center items-center">
              <StyledH1>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do."
              </StyledH1>
            </div>
            <div className="flex basis-1/3 justify-center items-center">
              <IPhone
                boxShadow="0px 5px 25px rgba(0,0,0,0.6)"
                width={window.innerWidth / screenSize}
              >
                <StyledImage src={Payment} alt="" layout="fill" priority />
              </IPhone>
            </div>
          </div>
        </ColorWrapper>
      </SwipeWrapper>

      <Spacer height="40px" width="0" />

      <SwipeWrapper animation={"slide-right"}>
        <ColorWrapper color={"primary"}>
          <div className="flex justify-evenly">
            <div className="flex basis-1/3 justify-center items-center">
              <IPhone
                boxShadow="0px 5px 25px rgba(0,0,0,0.6)"
                width={window.innerWidth / screenSize}
              >
                <Image src={map} alt="" layout="fill" priority />
              </IPhone>
            </div>
            <div className="flex basis-1/3 justify-center items-center">
              <StyledH1>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do."
              </StyledH1>
            </div>
          </div>
        </ColorWrapper>
      </SwipeWrapper>
    </div>
  );
}
