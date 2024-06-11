import React from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";
import { IPhone } from "../components/iphone";
import Start from "../../../public/images/figIMG/Splash.png";
import { useScreenSize } from "../components/getScreenSize";

export default function Download() {
  const { screenSize } = useScreenSize({
    landscapeRatio: { xs: 2.5, sm: 3, md: 4, lg: 6, xl: 6, "2xl": 9 },
  });
  const updateSize = screenSize;
  return (
    <div id="Download" className="lg:relative sm:none shadow-2xl rounded-xl">
      <ColorWrapper
        color="primary"
        className=" justify-center flex py-10 sm:py-20"
      >
        <div className="container sm: m-5 pb-8 sm:pb-6 lg:p-0 flex flex-col lg:flex-row xl:flex-col lg:items-center overflow-clip justify-center items-center px-4 ">
          <div className="lg:absolute sm:none bottom-4 left-20 ">
            {/* <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={updateSize}>
              <Image src={Start} fill alt="" />
            </IPhone> */}
          </div>

          <div className="z-10  text-base sm:text-lg lg:text-base-normal items-center flex flex-col justify-center lg:w-2/4">
            <div className="mb-8 ">
              <h1 className="font-semibold text-xl leading-7 sm:text-2xl lg:text-xl mb-5 sm:mb-6">
                UBCARD аппликейшн татах
              </h1>
              <h1 className="font-normal text-sm sm:text-base lg:text-base">
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
    </div>
  );
}
