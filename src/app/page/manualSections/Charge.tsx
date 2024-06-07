import image_1 from "../../../../public/images/manual/4_charge_1.png";
import image_2 from "../../../../public/images/manual/4_charge_2.png";
import image_3 from "../../../../public/images/manual/4_charge_3.png";
import ContentWrapper, { CardData } from "@/app/components/ContentWrapper";

export default function Charge() {
  const cards: CardData[] = [
    {
      title: "Мөнгөн дүн оруулах",
      description:
        "Цэнэглэх дүнгээ оруулж үргэлжлүүлэх товч дарж төлбөрийн нөхцөл сонгоно.",
      image: image_1,
    },
    {
      title: "Төлбөр төлөх",
      description:
        "Qpay, Socialpay болон банкны картаар төлбөр төлөх боломжтой.",
      image: image_2,
    },
    {
      title: "Картаар төлбөр төлөх",
      description: "Өөрийн холбосон банкны картаар төлбөр төлнө .",
      image: image_3,
    },
  ];

  return <ContentWrapper title="Хэтэвч цэнэглэх" cards={cards} />;
}
