import image_1 from "../../../../public/images/manual/2_wallet_1.png";
import image_2 from "../../../../public/images/manual/2_wallet_2.png";
import image_3 from "../../../../public/images/manual/2_wallet_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function Wallet() {
  const cards: CardData[] = [
    {
      title: "1. Энгийн зорчилт",
      description:
        "Нэвтрэлт хийсний дараа танд өөрийн хэтэвч үүсэх бөгөөд уг хэтэвчний QR кодыг ашиглан зорчилт хийнэ.",
      image: image_1,
    },
    {
      title: "2. Хөнгөлөлттэй эрх авах",
      description:
        "Уг эрхээс та өөрт тохирсон нөхцөлтэй зорчилтын эрхийг худалдан авч болно.",
      image: image_2,
    },
    {
      title: "3. Хөнгөлөлттэй эрх ашиглах",
      description:
        "Та зорчилт хийхдээ хөнгөлөлттэй эрх хэсгийн QR уншуулан ашиглана. Худалдан авсан хөнгөлөлттэй эрхээр автобусанд зорчсон тохиолдолд таны хэтэвчээс мөнгө хасагдахгүй.",
      image: image_3,
    },
  ];

  return (
    <div id="wallet">
      <ContentWrapper title="Хэтэвч" cards={cards} />
    </div>
  );
}
