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
  const StyledImage = styled(Image)`
    object-fit: cover;
    object-position: center top;
  `;

  return (
    <div id="Visual">
      <SwipeWrapper animation="slide-right">
        <ColorWrapper color={"primary"}>
          <div className="flex justify-center">
            <div className="flex basis-1/3 justify-center items-center">
              <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={300}>
                <Image src={GG} alt="" layout="fill" priority />
              </IPhone>
            </div>
            <div className="flex basis-1/3 justify-center items-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </div>
        </ColorWrapper>
      </SwipeWrapper>

      <Spacer height="40px" width="0" />

      <SwipeWrapper animation="slide-left">
        <ColorWrapper color={"white"}>
          <div className="flex justify-center">
            <div className="flex basis-1/3 justify-center items-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
            <div className="flex basis-1/3 justify-center items-center">
              <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={300}>
                <StyledImage src={Payment} alt="" layout="fill" priority />
              </IPhone>
            </div>
          </div>
        </ColorWrapper>
      </SwipeWrapper>

      <Spacer height="40px" width="0" />

      <SwipeWrapper animation={"slide-right"}>
        <ColorWrapper color={"primary"}>
          <div className="flex justify-center">
            <div className="flex basis-1/3 justify-center items-center">
              <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={300}>
                <Image src={map} alt="" layout="fill" priority />
              </IPhone>
            </div>
            <div className="flex basis-1/3 justify-center items-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </div>
        </ColorWrapper>
      </SwipeWrapper>
    </div>
  );
}
