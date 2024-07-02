import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import theirIcon from "../../../public/images/Icon/Niitiin-teever-logo 1 (1).svg";
import Image from "next/image";

export default function TradeMark() {
  const size: number = 30;
  return (
    <div className="flex justify-center items-center pb-5 md:mr-1">
      <Image src={theirIcon} alt="Icon" className="mr-2" height={size} width={size} />
      <p className="text-gray-500 text-sm">Нийтийн Тээврийн бодлогын Газар ©2024</p>

      <div className="md:ml-24"></div>
    </div>
  );
}
