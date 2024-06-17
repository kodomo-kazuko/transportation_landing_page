import image_1 from "../../../../public/images/manual/5_card_1.png";
import image_2 from "../../../../public/images/manual/5_card_2.png";
import image_3 from "../../../../public/images/manual/5_card_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function PhysicalCard() {
  const cards: CardData[] = [
    {
      title: "1. Биет картын жагсаалт",
      description: "Биет картуудыг өөрийн бүртгэл дээр холбох боломжтой.",
      image: image_1,
    },
    {
      title: "2. Картын дэлгэрэнгүй",
      description:
        "Биет картын цэнэглэлт болон зорчилтын түүхийг харах боломжтой.",
      image: image_2,
    },
    {
      title: "3. Карт цэнэглэх",
      description: "Мөн гар утаснаас биет картыг цэнэглэх боломжтой.",
      image: image_3,
    },
  ];

  return <ContentWrapper title="Биет карт" cards={cards} />;
}
