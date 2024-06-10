import React from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";
import { IPhone } from "../components/iphone";
import Start from "../../../public/images/figIMG/Splash.png";
import { useScreenSize } from "../components/getScreenSize";
import SwipeWrapper from "../wrappers/SwipeWrapper";

export default function Download() {
  const { screenSize } = useScreenSize({ landscapeRatio: 7, portraitRatio: 3 });
  const updateSize = screenSize;
  return (
    <div id="Download" className="lg:relative sm:none shadow-2xl rounded-xl">
      <SwipeWrapper animation="fade-up">
        <ColorWrapper color="primary">
          <div className="container   pt-8 pb-8 sm:pb-6 lg:p-0 flex flex-col lg:flex-row lg:items-center gap-16 overflow-clip justify-center items-center px-4 ">
            <div className="lg:absolute sm:none bottom-4 left-20 ">
              <IPhone
                boxShadow="0px 5px 25px rgba(0,0,0,0.6)"
                width={updateSize}
              >
                <Image src={Start} fill alt="" />
              </IPhone>
            </div>

            <div className="z-10 lg:pt-12 text-base-normal items-center flex flex-col justify-center lg:w-2/4">
              <div className="mb-8 ">
                <h1 className="font-semibold text-xl leading-7 sm:text-xl mb-5 sm:mb-6">
                  UBCARD аппликейшн татах
                </h1>
                <h1 className="font-normal sm:text-base">
                  Яг одоо аппликейшнаа татан авч хурдан, хялбар шийдлүүдийг өдөр
                  тутмын амьдралдаа хэрэгжүүлээрэй. Таны автобус аяллыг
                  хөнгөвчилнө.
                </h1>
              </div>

              <div className="flex flex-col items-center justify-center lg:w-2/4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a className="w-full lg:w-fit focus-visible-class" href="">
                    <button className="w-full lg:w-60 text-gray-700 bg-white font-semibold  rounded-2xl flex items-center  justify-center gap-2 p-2">
                      <Image
                        alt="App Store Logo"
                        src={AppStore}
                        width={50}
                        height={50}
                      />
                      <span>App Store</span>
                    </button>
                  </a>
                  <a className="w-full lg:w-fit focus-visible-class" href="">
                    <button className="w-full lg:w-60 text-gray-700 bg-white font-semibold  rounded-2xl flex items-center  justify-center gap-2 p-2">
                      <Image
                        alt="Play Store Logo"
                        src={PlayStore}
                        width={50}
                        height={50}
                      />
                      <span>Google Play</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ColorWrapper>
      </SwipeWrapper>
    </div>
  );
}
