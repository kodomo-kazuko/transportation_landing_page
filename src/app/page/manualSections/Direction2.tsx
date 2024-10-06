import image_1 from "../../../../public/images/manual/6_direction_4.png";
import image_2 from "../../../../public/images/manual/6_direction_5.png";
import image_3 from "../../../../public/images/manual/6_direction_6.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function Direction2() {
  const cards: CardData[] = [
    {
      title: "4. Зогсоолын дэлгэрэнгүй",
      description:
        "Сонгосон автобусны зогсоол дээр ирэх чиглэлийн автобуснууд харагдана.",
      image: image_1,
    },
    {
      title: "5. Чиглэлийн дэлгэрэнгүй",
      description:
        "Сонгосон чиглэлийн автобуснууд хаана явж байгаа нь жагсаалт хэлбэрээр харагдана.",
      image: image_2,
    },
    {
      title: "6. Чиглэлийн маршрут",
      description: "Мөн газрын зураг дээрээс автобусны байршилыг харж болно.",
      image: image_3,
    },
  ];

  return (
    <div id="direction2">
      <ContentWrapper title="" cards={cards} className=" bg-white pb-0" />
    </div>
  );
}
