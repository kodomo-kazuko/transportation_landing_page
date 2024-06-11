"use client";

import Image from "next/image";
import Binary_Logo from "../../../public/images/logo/BINARY_LOGO_WHITE.svg";

import ColorWrapper from "../wrappers/ColorWrapper";
import Spacer from "../components/spacer";
import {
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import InfoSection from "../components/About";

export default function Footer() {
  return (
    <div id="Footer">
      <SwipeWrapper animation="">
        <ColorWrapper color="secondary" className=" rounded-b-2xl">
          <InfoSection />
        </ColorWrapper>
      </SwipeWrapper>
    </div>
  );
}
