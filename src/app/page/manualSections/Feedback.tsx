import image_1 from "../../../../public/images/manual/7_feedback_1.jpg";
import image_2 from "../../../../public/images/manual/7_feedback_2.png";
import image_3 from "../../../../public/images/manual/7_feedback_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function Feedback() {
  const cards: CardData[] = [
    {
      title: "1. Зорчилт",
      description:
        "Картаа уншуулан автобусанд суусан үед тухайн автобусны явж буй байршил харагдана.",
      image: image_1,
    },
    {
      title: "2. Жолоочид сэтгэгдэл үлдээх",
      description:
        "Тухайн суусан автобусны жолоочид үнэлгээ өгч сэтгэгдэл үлдээх боломжтой.",
      image: image_2,
    },
    {
      title: "3. Автобусанд сэтгэгдэл үлдээх",
      description: "Уг зорчилт хийж буй автобусанд сэтгэгдэл үлдээх боломжтой.",
      image: image_3,
    },
  ];

  return (
    <div id="feedback">
      <ContentWrapper title="Сэтгэгдэл үлдээх" cards={cards} />
    </div>
  );
}
