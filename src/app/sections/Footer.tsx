"use client";

import Image from "next/image";
import Binary_Logo from "../../../public/images/logo/BINARY_LOGO_WHITE.svg";

import ColorWrapper from "../components/ColorWrapper";
import Spacer from "../components/spacer";
import {
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div id="Footer">
      <ColorWrapper color="secondary">
        <Spacer height={"40"} width={""} />
        <footer className="py-10 px-5 mb-5">
          <div className="flex flex-wrap justify-between font-normal">
            <div className="w-full md:w-1/4 mb-10 md:mb-0">
              <Image
                src={Binary_Logo}
                alt="Logo"
                width={250}
                height={250}
                priority
              />
            </div>
            <div className="w-full  md:w-1/4 mb-10 md:mb-0">
              <h2 className="text-lg  mb-3">Contact Us</h2>
              <div className="flex flex-nowrap gap-2">
                <div>
                  <FaPhoneAlt />
                </div>
                <div>Call us: 99027454</div>
              </div>
              <br></br>
              <div className="flex flex-nowrap gap-2">
                <div>
                  <FaEnvelopeOpenText />
                </div>
                <div>binarysystems.mn@gmail.com</div>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <h2 className="text-lg mb-3">Social</h2>
              <div className="flex space-x-4 text-2xl">
                <button
                  onClick={() =>
                    window.open("https://www.facebook.com", "_blank")
                  }
                >
                  <FaFacebookF />
                </button>
                <button
                  onClick={() =>
                    window.open("https://www.linkedin.com", "_blank")
                  }
                >
                  <FaLinkedinIn />
                </button>
                <button
                  onClick={() =>
                    window.open("https://www.twitter.com", "_blank")
                  }
                >
                  <FaTwitter />
                </button>
              </div>
            </div>
          </div>
        </footer>
        <div className="flex justify-center  font-thin text-sm">
          <p>BinarySystems &copy;2024</p>
        </div>
        <Spacer height={"35"} width={""} />
      </ColorWrapper>
    </div>
  );
}
