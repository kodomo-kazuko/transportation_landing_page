import theirIcon from '../../../public/images/Icon/Niitiin-teever-logo 1 (1).svg'
import Image from "next/image";

export default function TradeMark() {
    const size: number = 30
    return (
        <div className="flex justify-center items-center pb-5">
            <Image src={theirIcon} alt="Icon" className="mr-2" height={size} width={size} />
            <p className="text-gray-500 text-sm">Нийтийн Тээврийн Газар ©2024</p>
        </div>
    )
}
