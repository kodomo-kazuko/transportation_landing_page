import image_1 from "../../../../public/images/manual/4_charge_1.png";
import image_2 from "../../../../public/images/manual/4_charge_2.png";
import image_3 from "../../../../public/images/manual/4_charge_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function Charge() {
  const cards: CardData[] = [
    {
      title: "1. Хэтэвч цэнэглэлт",
      description:
        "Цэнэглэх мөнгөн дүнг оруулж үргэлжлүүлэх товчийг дарж төлбөрийн нөхцөл сонгоно.",
      image: image_1,
    },
    {
      title: "2. Төлбөрийн суваг",
      description:
        "Та өөрийн хүссэн банкны данс болон QPay, SocialPay ашиглан төлбөр төлөх боломжтой.",
      image: image_2,
    },
    {
      title: "3. Банкны картаар төлбөр төлөлт",
      description: "Та өөрийн холбосон картаар төлбөр төлөх боломжтой.",
      image: image_3,
    },
  ];

  return (
    <div id="charge">
      <ContentWrapper title="Хэтэвч цэнэглэх" cards={cards} />
    </div>
  );
}
