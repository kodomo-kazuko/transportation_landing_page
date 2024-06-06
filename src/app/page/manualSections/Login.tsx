import React, { useState } from "react";
import Card from "@/app/components/Card";
import { IPhone } from "@/app/components/iphone";
import SideButton from "@/app/components/SideButton";
import Image from "next/image";
import login_1 from "../../../../public/images/manual/1_login_1.png";
import login_2 from "../../../../public/images/manual/1_login_2.png";
import login_3 from "../../../../public/images/manual/1_login_3.png";
import ColorWrapper from "@/app/components/ColorWrapper";
import { useScreenSize } from "../../components/getScreenSize";

export default function Login() {
  const isMobile =
    typeof window !== "undefined"
      ? window.innerWidth < window.innerHeight
      : false;
  const screenSize = useScreenSize();

  return (
    <div className=" shadow-2xl rounded-3xl">
      <ColorWrapper color="transparent">
        <div>
          <div
            className={`flex ${
              isMobile ? "flex-col" : "flex-row"
            } justify-around items-center `}
          >
            <Card
              title={"Утасны дугаар оруулах"}
              description={
                "Утасны дугаараа оруулан нэвтрэх дарснаар дугаарлуу баталгаажуулах код илгээнэ ."
              }
            >
              <div className="flex w-11/12 md:w-7/10 mx-auto justify-center">
                <IPhone boxShadow={undefined} width={screenSize}>
                  <Image alt="" src={login_1} fill priority />
                </IPhone>
              </div>
            </Card>

            <SideButton />

            <Card
              title={"OTP код авах"}
              description={
                "Мессежээр ирсэн баталгаажуулах кодыг оруулж баталгаажуулна."
              }
            >
              <div className="flex w-11/12 md:w-7/10 mx-auto justify-center">
                <IPhone boxShadow={undefined} width={screenSize}>
                  <Image alt="" src={login_2} fill priority />
                </IPhone>
              </div>
            </Card>

            <SideButton />

            <Card
              title={"OTP код баталгаажуулах"}
              description={
                "Хэрэв хэрэглэгчийн утасны дугаар бүртгэлгүй байвал шинэ бүртгэл үүснэ."
              }
            >
              <div className="flex w-11/12 md:w-7/10 mx-auto justify-center">
                <IPhone boxShadow={undefined} width={screenSize}>
                  <Image alt="" src={login_3} fill priority />
                </IPhone>
              </div>
            </Card>
          </div>
        </div>
      </ColorWrapper>
    </div>
  );
}