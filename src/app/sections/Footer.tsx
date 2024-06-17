"use client";

import ColorWrapper from "../wrappers/ColorWrapper";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import InfoSection from "../components/About";

export default function Footer() {
  return (
    <div id="Footer" className="relative">
      <SwipeWrapper animation="">
        <ColorWrapper color="secondary">
          <InfoSection />
        </ColorWrapper>
      </SwipeWrapper>
      <div className="absolute inset-x-0 bottom-0 mx-auto w-full md:w-1/3 px-4 mb-5">
        <div className="text-gray-500 text-sm text-center">
          <p>Нийтийн Тээврийн Газар ©2024</p>
        </div>
      </div>
    </div>
  );
}
