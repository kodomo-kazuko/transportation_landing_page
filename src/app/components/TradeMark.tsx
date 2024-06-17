import theirIcon from '../../../public/images/Icon/Niitiin-teever-logo-1-_1_.svg'
import Image from "next/image";

export default function TradeMark() {
    const size: number = 25
    return (
        <div className="flex justify-center items-center pb-2">
            <Image src={theirIcon} alt="Icon" className="mr-2" height={size} width={size} />
            <p className="text-gray-500 text-sm">Нийтийн Тээврийн Газар ©2024</p>
        </div>
    )
}
