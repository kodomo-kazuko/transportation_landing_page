import image_1 from "../../../../public/images/manual/1_login_1.png";
import image_2 from "../../../../public/images/manual/1_login_2.png";
import image_3 from "../../../../public/images/manual/1_login_3.png";
import image_4 from "../../../../public/images/manual/1_login_4.png";
import image_5 from "../../../../public/images/manual/1_login_5.png";
import image_6 from "../../../../public/images/manual/1_login_6.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function Login() {
  const cards: CardData[] = [
    {
      title: "1. Утасны дугаар бүртгүүлэх",
      description:
        "Нэвтрэх хэсэгт өөрийн утасны дугаарыг оруулан нэвтрэх товчийг дарснаар таны утсанд баталгаажуулах код ирнэ.",
      image: image_1,
    },
    {
      title: "2. Баталгаажуулалт",
      description:
        "Таны утасны дугаар руу илгээсэн баталгаажуулах кодыг оруулж баталгаажуулна.",
      image: image_2,
    },
    {
      title: "3. Пин код үүсгэх",
      description:
        "Та дурын 4 оронтой пин код уусгэн цаашид уг кодоор нэвтрэнэ.",
      image: image_3,
    },
  ];

  const cardsCol: CardData[] = [
    {
      title: "4. Пин код баталгаажуулалт",
      description: "Үүсгэсэн 4 оронтой пин кодыг давтан оруулж баталгаажуулна.",
      image: image_4,
    },
    {
      title: "5. Пин код баталгаажилт",
      description:
        "Таны үүсгэсэн пин код амжилттай баталгаажсан тохиолдолд амжилттай гэсэн мессеж харагдана.",
      image: image_5,
    },
    {
      title: "6. Пин кодоор нэвтрэлт",
      description: "Баталгаажсан пин кодоор нэвтрэнэ.",
      image: image_6,
    },
  ];

  return (
    <div id="login">
      <ContentWrapper
        title="Нэвтрэх"
        cards={cards}
        secondColumnCards={cardsCol}
      />
    </div>
  );
}
