import React from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";
import { useScreenSize } from "../components/getScreenSize";
import { motion } from "framer-motion";
import Start from "../../../public/images/figIMG/Phone_06.png";

export default function Download() {
  const { screenSize, windowWidth } = useScreenSize({
    landscapeRatio: { xs: 2.5, sm: 3, md: 4, lg: 6, xl: 6, "2xl": 9 },
  });
  const updateSize = screenSize;
  const buttonSize: number = 40;
  return (
    <div id="Download" className="lg:relative sm:none shadow-2xl rounded-xl">
      <ColorWrapper
        color="primary"
        className=" justify-center flex py-10 sm:py-20"
      >
        <div className="container sm: m-5 pb-8 sm:pb-6 lg:p-0 flex flex-col md:flex-row lg:items-center overflow-clip justify-center items-center px-4 ">
          <div className="flex-1 relative">
            <Image
              src={Start}
              layout="fill"
              objectFit="cover"
              alt=""
              className="absolute w-full h-full"
            />
          </div>

          <div className="flex-1 z-10  text-base sm:text-lg lg:text-base-normal items-center flex flex-col justify-center lg:w-2/4">
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <a className="w-full lg:w-fit focus-visible-class" href="">
                    <button className="w-full lg:w-60 text-gray-700 bg-white font-semibold  rounded-2xl flex items-center  justify-center gap-2 p-2">
                      <Image
                        alt="App Store Logo"
                        src={AppStore}
                        width={buttonSize}
                        height={buttonSize}
                      />
                      <span>App Store</span>
                    </button>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <a className="w-full lg:w-fit focus-visible-class" href="">
                    <button className="w-full lg:w-60 text-gray-700 bg-white font-semibold  rounded-2xl flex items-center  justify-center gap-2 p-2">
                      <Image
                        alt="Play Store Logo"
                        src={PlayStore}
                        width={buttonSize - 3}
                        height={buttonSize - 3}
                      />
                      <span>Google Play</span>
                    </button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </ColorWrapper>
    </div>
  );
}
