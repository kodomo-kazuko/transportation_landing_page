import image_1 from "../../../../public/images/manual/2_wallet_1.png";
import image_2 from "../../../../public/images/manual/2_wallet_2.png";
import image_3 from "../../../../public/images/manual/2_wallet_3.png";
import ContentWrapper, { CardData } from "@/app/components/ContentWrapper";

export default function Wallet() {
  const cards: CardData[] = [
    {
      title: "Энгийн зорчилт",
      description:
        "Энгийн зорчилт дээр хэдэн хүн зорчихоо тохируулах боломжтой.",
      image: image_1,
    },
    {
      title: "Хөнгөлөлттэй эрх авах",
      description:
        "Тодорхой хоногийн дотор хязгааргүй зорчих эрхийг худалдан авч болно.",
      image: image_2,
    },
    {
      title: "Хөнгөлөлттэй эрх ашиглах",
      description:
        "Хөнгөлөлттэй ирхээр зорчсон тохиолдолд хэтэвчнээс мөнгө хасагдахгүй.",
      image: image_3,
    },
  ];

  return <ContentWrapper title="Хэтэвч" cards={cards} />;
}
