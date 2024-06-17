"use client";

import ColorWrapper from "../wrappers/ColorWrapper";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import InfoSection from "../components/About";

export default function Footer() {
  return (
    <div id="Footer">
      <SwipeWrapper animation="">
        <ColorWrapper color="secondary">
          <InfoSection />
        </ColorWrapper>
      </SwipeWrapper>
    </div>
  );
}
