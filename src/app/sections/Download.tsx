import React from "react";
import Image from "next/image";
import ColorWrapper from "../components/ColorWrapper";
import PlayStore from "../../../public/images/Icon/PlayStore.svg";
import AppStore from "../../../public/images/Icon/AppStore.svg";

export default function Download() {
  return (
    <div className="shadow-2xl rounded-xl">
      <ColorWrapper color="transparent">
        <div
          id="Download"
          className="container pt-8 pb-8 sm:pb-6 lg:p-0 flex flex-col lg:items-center gap-16 overflow-clip justify-center items-center px-0 mx-0"
        >
          <div className="z-10 lg:pt-16 text-base-normal items-center">
            <h1 className="font-semibold text-xl leading-7 sm:text-xl mb-5 sm:mb-6 flex justify-center">
              UBCARD аппликейшн татах
            </h1>
            <h1 className="font-normal sm:text-base flex justify-center">
              Яг одоо татан авч хурдан, хялбар шийдлүүдийг өдөр тутмын
              амьдралдаа хэрэгжүүлээрэй. Таны автобус аяллыг хөнгөвчилнө.
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full sm:w-3/4 lg:w-2/4">
            <div className="flex flex-col sm:flex-row gap-3">
              <a className="w-full lg:w-fit focus-visible-class" href="">
                <button className="w-full lg:w-60 bg-neutral-800 font-semibold text-white rounded-2xl flex items-center border border-gray-400 justify-start sm:justify-center gap-2 p-2">
                  <div className="flex justify-center items-center">
                    <Image
                      alt="App Store Logo"
                      src={AppStore}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <span>App Store</span>
                  </div>
                </button>
              </a>
              <a className="w-full lg:w-fit focus-visible-class" href="">
                <button className="w-full lg:w-60 bg-neutral-800 font-semibold text-white rounded-2xl flex items-center border border-gray-400 justify-start sm:justify-center gap-2 p-2">
                  <div className="flex justify-center items-center">
                    <Image
                      alt="Play Store Logo"
                      src={PlayStore}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <span>Google Play</span>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </ColorWrapper>
    </div>
  );
}
