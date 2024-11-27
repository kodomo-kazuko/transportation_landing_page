import Image from "next/image";
import direction from "../../../public/images/figIMG/Get directions.png";
import GG from "../../../public/images/figIMG/Home-Regular 3.png";
import Payment from "../../../public/images/figIMG/Qpay.png";
import location from "../../../public/images/figIMG/Stations 4.png";
import phys from "../../../public/images/figIMG/Биет-Картууд.png";
import { IPhone } from "../components/iphone";
import VisualWrapper from "../wrappers/VisualWrapper";

import { motion } from "framer-motion";
import { useScreenSize } from "../components/getScreenSize";

export default function Visuals() {
  const { screenSize } = useScreenSize({
    landscapeRatio: { xs: 4, sm: 4, md: 6, lg: 6, xl: 6, "2xl": 7, "3xl": 8 },
  });

  const globalShadow: string = "-10px 10px 5px rgba(0,0,0,0.3)";

  return (
    <div
      id="Visual"
      className="flex flex-col md:flex-row flex-wrap justify-center"
    >
      <div className="md:w-1/2">
        <VisualWrapper
          color="secondary"
          animation="fade-up"
          text="UBCARD аппликейшнаар дамжуулан зорчих эрхийн QR код үүсгэн ашиглах боломжтой боллоо."
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
          >
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={GG} alt="" layout="fill" priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>
      </div>

      <div className="md:w-1/2">
        <VisualWrapper
          color="primary"
          animation="fade-up"
          text="Qpay, Socialpay ашиглан төлбөр төлөх боломжтой"
          // className=" md:rounded-r-3xl md:mr-5"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
          >
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={Payment} alt="" priority fill />
            </IPhone>
          </motion.div>
        </VisualWrapper>
      </div>

      <div className="w-full">
        {/* <Glider /> */}

        <VisualWrapper
          color="white"
          animation="fade-up"
          text="Автобусны биет картаа холбон аппликейшнээр автобусны картаа цэнэглэх боломжтой"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
          >
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={phys} alt="" layout="fill" priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>

        {/* <Glider /> */}
      </div>

      <div className="md:w-1/2">
        <VisualWrapper
          color="primary"
          animation="fade-up"
          text="UBCARD аппликейшнаар автобусны байршлыг харах боломжтойгоос гадна, зогсоол, карт борлуулах цэгүүдийг газрын зураг дээрээс харах боломжтой." // className=" md:rounded-l-3xl md:ml-5"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
          >
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
          text="Зам тооцоолох шинэ шийдлийн тусламжтайгаар өөрийн очих байршлыг оруулан хүссэн газраа саадгүй хүрээрэй."
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
          >
            <IPhone boxShadow={globalShadow} width={screenSize}>
              <Image src={direction} alt="Payment" fill priority />
            </IPhone>
          </motion.div>
        </VisualWrapper>
      </div>
    </div>
  );
}
