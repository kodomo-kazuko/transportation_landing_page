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
      title: "1. Утасны дугаар оруулах",
      description:
        "Утасны дугаараа оруулан нэвтрэх дарснаар дугаарлуу баталгаажуулах код илгээнэ .",
      image: image_1,
    },
    {
      title: "2. OTP код авах",
      description:
        "Мессежээр ирсэн баталгаажуулах кодыг оруулж баталгаажуулна.",
      image: image_2,
    },
    {
      title: "3. Пин код үүсгэх",
      description:
        "Таны оруулсан 4 оронтой пин кодыг цаашид нэвтрэхэд ашиглана.",
      image: image_3,
    },
  ];

  const cardsCol: CardData[] = [
    {
      title: "4. Пин код давтан оруулах",
      description: "Үүсгэсэн 4 оронтой пин кодоо давтан оруулах.",
      image: image_4,
    },
    {
      title: "5. Пин код баталгаажсан",
      description: "Таны үүсгэсэн пин код амжилттай баталжгаажсан",
      image: image_5,
    },
    {
      title: "6. Пин код оруулан нэвтрэх",
      description: "Та өөрийн пин кодоо оруулан нэвтэрнэ",
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
