import image_1 from "../../../../public/images/manual/5_card_1.png";
import image_2 from "../../../../public/images/manual/5_card_2.png";
import image_3 from "../../../../public/images/manual/5_card_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function PhysicalCard() {
  const cards: CardData[] = [
    {
      title: "1. Банкны картаар төлбөр төлөлт",
      description: "Та өөрийн холбосон картаар төлбөр төлөх боломжтой.",
      image: image_1,
    },
    {
      title: "2. Банкны картаар төлбөр төлөлт",
      description: "Та өөрийн холбосон картаар төлбөр төлөх боломжтой.",
      image: image_2,
    },
    {
      title: "3. Карт цэнэглэх",
      description: "Өөрийн хэтэвчнээс NFC карт уншигч дээр биет картыг уншуулан цэнэглэх боломжтой.",
      image: image_3,
    },
  ];

  return (
    <div id="physicalCard">
      <ContentWrapper title="Биет карт" cards={cards} />
    </div>
  );
}
