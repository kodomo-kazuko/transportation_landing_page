import React from "react";
import Image from "next/image";
import ColorWrapper from "../wrappers/ColorWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";
import { useScreenSize } from "../components/getScreenSize";
import { motion } from "framer-motion";
import Start from "../../../public/images/figIMG/Phone_06.png";

export default function Download() {
  const { screenSize } = useScreenSize({
    landscapeRatio: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3, "2xl": 3.4, "3xl": 4 },
  });

  const w = screenSize;
  const h = screenSize;
  const buttonSize = 40;

  return (
    <div id="Download" className="lg:relative shadow-2xl rounded-xl">
      <ColorWrapper
        color="secondary"
        className=" justify-center
       flex relative"
      >
        <div className="container md:py-14 justify-center md:justify-end flex lg:flex-row lg:items-center overflow-clip">
          <div className="lg:flex lg:flex-1">
            <div
              className="relative md:absolute md:z-10"
              style={{ left: "0", top: "50%", transform: "translateY(-50%)" }}
            >
              <motion.div
                animate={{ y: [0, -50, 0], }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  style={{ width: w, height: h }}
                  className=" absolute md:relative"
                >
                  <Image
                    src={Start}
                    alt="Library application"
                    layout="fill"
                    objectFit="contain"
                    className="pointer-events-none select-none outline-none"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="lg:flex basis-2/3 z-0 lg:pt-16 text-base-normal flex flex-col items-center lg:items-start px-4">
            {" "}
            <div className="mb-8 lg:text-left sm:mb-10 font-normal text-sm sm:text-base">
              <h1 className="font-semibold text-2xl leading-7 sm:text-3xl mb-5 sm:mb-6">
                {" "}
                UBCARD аппликейшн татах{" "}
              </h1>
              <p className="mb-8 lg:text-left md:pr-40 lg:px-0 lg:pr-20 sm:mb-10 font-normal text-sm sm:text-base">
                Яг одоо аппликейшнаа татан авч хурдан, хялбар шийдлүүдийг өдөр
                тутмын амьдралдаа хэрэгжүүлээрэй. Таны автобус аяллыг
                хөнгөвчилнө.
              </p>
              <div className="flex flex-col w-60 md:w-auto md:flex-row gap-3 mx-auto lg:mx-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <a className="w-full lg:w-fit focus-visible-class" href="">
                    <button className="w-full lg:w-60 text-gray-700 bg-white font-semibold rounded-2xl flex items-center justify-center gap-2 p-2">
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
                    <button className="w-full lg:w-60 text-gray-700 bg-white font-semibold rounded-2xl flex items-center justify-center gap-2 p-2">
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
