import { IPhone } from "../components/iphone";
import Image from "next/image";
import GG from "../../../public/images/figIMG/Home-Regular 3.png";
import Payment from "../../../public/images/figIMG/Qpay.png";
import phys from "../../../public/images/figIMG/Биет-Картууд.png";
import location from "../../../public/images/figIMG/Stations 4.png";
import direction from "../../../public/images/figIMG/Get directions.png";
import VisualWrapper from "../wrappers/VisualWrapper";

import { useScreenSize } from "../components/getScreenSize";
import Glider from "../components/Glider";
import { animate, motion } from "framer-motion";

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
          color="secondary"
          animation="fade-up"
          // className=" md:rounded-l-3xl md:ml-5"
          text="Биет картаа холбон утсаараа зорчих шинэ үйлчилгээ"

        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 1 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={phys} alt="" layout="fill" priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>



      </div>


      <div className="md:w-1/2">

        <VisualWrapper
          color="white"
          animation="fade-up"
          text="Qpay, Socialpay болон банкны картаар төлбөр төлөх хялбар шийдэл"
        // className=" md:rounded-r-3xl md:mr-5"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 2 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={Payment} alt="" priority fill />
            </IPhone>
          </motion.div>
        </VisualWrapper>

      </div>



      <div className="w-full">


        {/* <Glider /> */}


        <VisualWrapper
          color="secondary"
          animation="fade-up"
          text="Автобусны карт дахин ашиглах шаардлагагүй. Гар утасны QR кодоо ашиглан автобусны төлбөрийг хялбараар төлөх шинэ үйлчилгээ"
        // className=" md:rounded-3xl md:mx-5"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 2 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={GG} alt="" layout="fill" priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>


        {/* <Glider /> */}


      </div>



      <div className="md:w-1/2">

        <VisualWrapper
          color="white"
          animation="fade-up"
          text="Газрын зураг дээрээс автобусны байршил, зогсоол, карт борлуулах цэгүүдийг харах"
        // className=" md:rounded-l-3xl md:ml-5"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 2 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={location} alt="" layout="fill" priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>

      </div>



      <div className="md:w-1/2">

        <VisualWrapper
          shadow=""
          color="secondary"
          animation="fade-up"
          // className="md:rounded-r-3xl md:mr-5"
          text="Очих байршлаа сонгоод хялбар зорч"

        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: 2 }}>
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={direction} alt="Payment" fill priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>

      </div>
    </div>
  );
}
