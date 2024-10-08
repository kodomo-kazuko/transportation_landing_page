import image_1 from "../../../../public/images/manual/4_charge_1.png";
import image_2 from "../../../../public/images/manual/4_charge_2.png";
import image_3 from "../../../../public/images/manual/4_charge_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function Charge() {
  const cards: CardData[] = [
    {
      title: "1. Мөнгөн дүн оруулах",
      description:
        "Цэнэглэх дүнгээ оруулж үргэлжлүүлэх товч дарж төлбөрийн нөхцөл сонгоно.",
      image: image_1,
    },
    {
      title: "2. Төлбөр төлөх",
      description:
        "Qpay, Socialpay болон банкны картаар төлбөр төлөх боломжтой.",
      image: image_2,
    },
    {
      title: "3. Картаар төлбөр төлөх",
      description: "Өөрийн холбосон банкны картаар төлбөр төлнө .",
      image: image_3,
    },
  ];

  return (
    <div id="charge">
      <ContentWrapper title="Хэтэвч цэнэглэх" cards={cards} />
    </div>
  );
}
