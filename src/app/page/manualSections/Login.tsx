import image_1 from "../../../../public/images/manual/1_login_1.png";
import image_2 from "../../../../public/images/manual/1_login_2.png";
import image_3 from "../../../../public/images/manual/1_login_3.png";
import ContentWrapper, { CardData } from "@/app/components/ContentWrapper";

export default function Login() {
  const cards: CardData[] = [
    {
      title: "Утасны дугаар оруулах",
      description:
        "Утасны дугаараа оруулан нэвтрэх дарснаар дугаарлуу баталгаажуулах код илгээнэ .",
      image: image_1,
    },
    {
      title: "OTP код авах",
      description:
        "Мессежээр ирсэн баталгаажуулах кодыг оруулж баталгаажуулна.",
      image: image_2,
    },
    {
      title: "OTP код баталгаажуулах",
      description:
        "Хэрэв хэрэглэгчийн утасны дугаар бүртгэлгүй байвал шинэ бүртгэл үүснэ.",
      image: image_3,
    },
  ];

  return <ContentWrapper title="Нэвтрэх" cards={cards} />;
}
