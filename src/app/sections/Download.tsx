"use client";

import Image from "next/image";
import ColorWrapper from "../components/ColorWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";

export default function Download() {
  return (
    <ColorWrapper color="primary">
      <div
        id="Download"
        className="container pt-8 pb-8 sm:pb-60 lg:p-0 flex flex-col lg:items-center gap-16 overflow-clip justify-center items-center px-4 sm:px-0"
      >
        <div className="z-10 lg:pt-16 text-base-normal">
          <h1 className="font-semibold text-2xl leading-7 sm:text-5xl mb-5 sm:mb-6">
            UBCARD
          </h1>
          <p className="mb-8 sm:mb-10 font-normal sm:text-base">
            Таны автобусны аяллыг хөнгөвчли
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full sm:w-3/4 lg:w-2/4">
          <div className="flex flex-col sm:flex-row gap-3">
            <a className="w-full lg:w-fit focus-visible-class" href="">
              <button className=" bg-white font-semibold text-gray-700 rounded-2xl flex items-center justify-center gap-2 p-2">
                <Image
                  alt="App Store Logo"
                  src={AppStore}
                  width={50}
                  height={50}
                />
                <span>App Store-оос татаx</span>
              </button>
            </a>
            <a className="w-full lg:w-fit focus-visible-class" href="">
              <button className=" bg-white font-semibold text-gray-700 rounded-2xl flex items-center justify-center gap-2 p-2">
                <Image
                  alt="Play Store Logo"
                  src={PlayStore}
                  width={50}
                  height={50}
                />
                <span>Play Store-оос татаx</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </ColorWrapper>
  );
}
