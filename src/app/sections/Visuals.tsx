import { IPhone } from "../components/iphone";
import Image from "next/image";

import GG from "../../../public/images/figIMG/Home-Regular 3.png";
import Payment from "../../../public/images/figIMG/Qpay.png";
import phys from "../../../public/images/figIMG/Биет-Картууд.png";
import location from "../../../public/images/figIMG/Stations 4.png";
import direction from "../../../public/images/figIMG/Get directions.png";
import AnimationWrapper from "../wrappers/AnimationWrapper";
import VisualWrapper from "../wrappers/VisualWrapper";

import { useScreenSize } from "../components/getScreenSize";

export default function Visuals() {

  const { screenSize } = useScreenSize({
    landscapeRatio: { xs: 2.5, sm: 5, md: 6, lg: 6, xl: 6, "2xl": 7, "3xl": 8 },
  });

  const globalShadow: string = "-10px 10px 5px rgba(0,0,0,0.3)"

  return (
    <div
      id="Visual"
      className="flex flex-col md:flex-row flex-wrap justify-center"
    >
      <div className="md:w-1/2">

        <VisualWrapper
          color="primary"
          animation="fade-right"
          className=" "
          text="Биет картаа уншуулан утсаараа зорчих шинэ үйлчилгээ"
        >
          <IPhone boxShadow={globalShadow} width={screenSize}>
            <Image src={phys} alt="" layout="fill" priority />
          </IPhone>
        </VisualWrapper>

      </div>

      <div className="md:w-1/2">

        <VisualWrapper
          color="secondary"
          animation="fade-right"
          text="Qpay, Socialpay болон банкны картаар төлбөр төлөх хялбар шийдэл"
        >
          <IPhone boxShadow={globalShadow} width={screenSize}>
            <Image src={Payment} alt="" priority fill />
          </IPhone>
        </VisualWrapper>

      </div>

      <div className="w-full">

        <VisualWrapper
          color="transparent"
          animation="fade-left"
          text="Автобусны карт дахин ашиглах шаардлагагүй боллоо. Гар утсаа ашиглан автобусны төлбөрийг QR кодоор төлөх боломжтой."
        >
          <IPhone boxShadow={globalShadow} width={screenSize}>
            <Image src={GG} alt="" layout="fill" priority />
          </IPhone>
        </VisualWrapper>

      </div>

      <div className="md:w-1/2">

        <VisualWrapper
          color="secondary"
          animation="fade-right"
          text="Газрын зураг дээрээс автобусны байршил, зогсоол, карт борлуулах цэгүүдийг харах"
        >
          <IPhone boxShadow={globalShadow} width={screenSize}>
            <Image src={location} alt="" layout="fill" priority />
          </IPhone>
        </VisualWrapper>

      </div>

      <div className="md:w-1/2">

        <VisualWrapper
          shadow=""
          color="primary"
          animation="fade-right"
          className=""
          text="Очих байршлаа сонгоод хялбар зорч"
        >
          <IPhone boxShadow={globalShadow} width={screenSize}>
            <Image src={direction} alt="Payment" fill priority />
          </IPhone>
        </VisualWrapper>

      </div>
    </div>
  );
}
