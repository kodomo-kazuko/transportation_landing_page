import image_1 from "../../../../public/images/manual/6_direction_1.png";
import image_2 from "../../../../public/images/manual/6_direction_2.png";
import image_3 from "../../../../public/images/manual/6_direction_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function Direction() {
  const cards: CardData[] = [
    {
      title: "Хадгалсан чиглэлүүд",
      description: "Өөрийн байнга зорчдог чиглэлүүдийг хадгалах боломжтой.",
      image: image_1,
    },
    {
      title: "Чиглэл/зогсоол хайх",
      description: "Автобусны чиглэл болон зогсоолоор хайх боломжтой.",
      image: image_2,
    },
    {
      title: "Байршил харах",
      description: "Хайлтанд гарч ирсэн зогсоол газрын зураг дээр харагдана.",
      image: image_3,
    },
  ];

  return <ContentWrapper title="Чиглэл" cards={cards} />;
}
