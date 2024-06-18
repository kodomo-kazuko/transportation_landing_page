"use client";

import ColorWrapper from "../wrappers/ColorWrapper";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import InfoSection from "../components/About";
import TradeMark from "../components/TradeMark";

export default function Footer() {
  return (
    <div id="Footer" className="relative">
      <SwipeWrapper animation="">
        <ColorWrapper color="white">
          <InfoSection />
          <TradeMark />
        </ColorWrapper>
      </SwipeWrapper>
    </div>
  );
}
