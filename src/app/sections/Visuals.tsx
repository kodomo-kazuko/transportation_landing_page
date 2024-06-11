import { IPhone } from "../components/iphone";
import Image from "next/image";

import GG from "../../../public/images/figIMG/Home-Regular 3.png";
import Payment from "../../../public/images/figIMG/Qpay.png";
import map from "../../../public/images//figIMG/Stations 4.png";
import bus_list from "../../../public/images/figIMG/Stations 1.png";
import location from "../../../public/images/figIMG/Stations 4.png";
import direction from "../../../public/images/figIMG/Get directions.png";

import AnimationWrapper from "../wrappers/AnimationWrapper";
import VisualWrapper from "../wrappers/VisualWrapper";

import AlignedImage from "../components/ImageFix";
import { useScreenSize } from "../components/getScreenSize";

export default function Visuals() {
  const { screenSize } = useScreenSize({
    landscapeRatio: { xs: 2.5, sm: 5, md: 6, lg: 6, xl: 6, "2xl": 7 },
  });

  const MotionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.99 },
    zIndex: 2,
  };

  return (
    <div
      id="Visual"
      className="flex flex-col sm:flex-row flex-wrap justify-center"
    >
      <AnimationWrapper motionProps={MotionProps}>
        <VisualWrapper
          color="primary"
          animation="fade-up"
          text="Заавал автобусны карт ашиглах шаардлагагүй QR Code уншуулаад зорчих боломж"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <Image src={GG} alt="" layout="fill" priority />
          </IPhone>
        </VisualWrapper>
      </AnimationWrapper>

      <AnimationWrapper motionProps={MotionProps}>
        <VisualWrapper
          color="secondary"
          animation="fade-up"
          text="Qpay, Socialpay болон банкны картаар төлбөр төлөх боломжтой хялбар төлбөрийн шийдэл"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <AlignedImage src={Payment} alt="" priority width={screenSize} />
          </IPhone>
        </VisualWrapper>
      </AnimationWrapper>

      <AnimationWrapper motionProps={MotionProps} className="w-full">
        <VisualWrapper
          color="white"
          animation="fade-up"
          text="Заавал автобусны карт ашиглах шаардлагагүй QR Code уншуулаад зорчих боломж"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <Image src={bus_list} alt="" layout="fill" priority />
          </IPhone>
        </VisualWrapper>
      </AnimationWrapper>

      <AnimationWrapper motionProps={MotionProps}>
        <VisualWrapper
          color="secondary"
          animation="fade-up"
          text="Газрын зураг дээрээс автобусны байршил болон зогсоол, карт борлуулах цэгүүдийг харах"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <Image src={location} alt="" layout="fill" priority />
          </IPhone>
        </VisualWrapper>
      </AnimationWrapper>

      <AnimationWrapper motionProps={MotionProps}>
        <VisualWrapper
          shadow=""
          color="primary"
          animation="fade-up"
          text="Qpay, Socialpay болон банкны картаар төлбөр төлөх боломжтой хялбар төлбөрийн шийдэл"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <AlignedImage src={direction} alt="Payment" width={screenSize} />
          </IPhone>
        </VisualWrapper>
      </AnimationWrapper>
    </div>
  );
}
