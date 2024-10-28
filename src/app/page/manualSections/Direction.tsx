import image_1 from "../../../../public/images/manual/Stations 1.jpg";
import image_2 from "../../../../public/images/manual/6_direction_2.png";
import image_3 from "../../../../public/images/manual/6_direction_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function Direction() {
  const cards: CardData[] = [
    {
      title: "1. Хадгалсан чиглэл",
      description: "Та байнга зорчилт хийдэг чиглэлийг хадгалах боломжтой.",
      image: image_1,
    },
    {
      title: "2. Чиглэл/зогсоол хайх",
      description: "Автобусны чиглэл болон зогсоолоор хайх боломжтой.",
      image: image_2,
    },
    {
      title: "3. Байршил харах",
      description: "Газрын зураг дээрээс автобусны байршил харах боломжтой.",
      image: image_3,
    },
  ];

  return (
    <div id="direction">
      <ContentWrapper title="Чиглэл" cards={cards} />{" "}
    </div>
  );
}
