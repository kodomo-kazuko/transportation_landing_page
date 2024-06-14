import { IPhone } from "../components/iphone";
import Image from "next/image";

import GG from "../../../public/images/figIMG/Home-Regular 3.png";
import Payment from "../../../public/images/figIMG/Qpay.png";
import bus_list from "../../../public/images/figIMG/Stations 1.png";
import location from "../../../public/images/figIMG/Stations 4.png";
import direction from "../../../public/images/figIMG/Get directions.png";

import VisualWrapper from "../wrappers/VisualWrapper";

import { useScreenSize } from "../components/getScreenSize";

export default function Visuals() {
  const { screenSize } = useScreenSize({
    landscapeRatio: { xs: 2.5, sm: 5, md: 6, lg: 6, xl: 6, "2xl": 7 },
  });

  return (
    <div
      id="Visual"
      className="flex flex-col sm:flex-row flex-wrap justify-center"
    >
      <div className="sm:w-1/2">
        <VisualWrapper
          color="secondary"
          animation="fade-right"
          className=" "
          text="автобусны карт ашиглах шаардлагагүй. QR Code уншуулаад зорч"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <Image src={GG} alt="" layout="fill" priority />
          </IPhone>
        </VisualWrapper>
      </div>

      <div className="sm:w-1/2">
        <VisualWrapper
          color="white"
          animation="fade-left"
          text="Qpay, Socialpay болон банкны картаар төлбөр төлөх боломжтой хялбар төлбөрийн шийдэл"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <Image src={Payment} alt="" priority fill />
          </IPhone>
        </VisualWrapper>
      </div>

      <div className="w-full">
        <VisualWrapper
          color="secondary"
          animation="fade-up"
          text="Ахин Байнгийн суух автобусууда хайх шаардлаггүй. Хадгалахад болно"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <Image src={bus_list} alt="" layout="fill" priority />
          </IPhone>
        </VisualWrapper>
      </div>

      <div className="sm:w-1/2">
        <VisualWrapper
          color="white"
          animation="fade-left"
          text="Газрын зураг дээрээс автобусны байршил болон зогсоол, карт борлуулах цэгүүдийг харах"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <Image src={location} alt="" layout="fill" priority />
          </IPhone>
        </VisualWrapper>
      </div>

      <div className="sm:w-1/2">
        <VisualWrapper
          shadow=""
          color="secondary"
          animation="fade-right"
          className=""
          text="одоогийн байршлаасаа аль автобусаар хаашаа явахыг хүсч байгаагаа харах боломжтой"
        >
          <IPhone boxShadow="0px 5px 25px rgba(0,0,0,0.6)" width={screenSize}>
            <Image src={direction} alt="Payment" fill priority />
          </IPhone>
        </VisualWrapper>
      </div>
    </div>
  );
}
