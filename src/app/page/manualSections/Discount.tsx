import image_1 from "../../../../public/images/manual/3_discount_1.png";
import image_2 from "../../../../public/images/manual/3_discount_2.png";
import image_3 from "../../../../public/images/manual/3_discount_3.png";
import ContentWrapper, { CardData } from "@/app/wrappers/ContentWrapper";

export default function Discount() {
  const cards: CardData[] = [
    {
      title: "1. Оюутны эрх",
      description: "Оюутны хөнгөлөлттэй эрхийн тоо сар бүр шинэчлэгдэнэ.",
      image: image_1,
    },
    {
      title: "2. Оюутны эрх",
      description:
        "Оюутны хөнгөлөлттэй эрх нь амралтын өдрүүдээр хүчингүй болно.",
      image: image_2,
    },
    {
      title: "3. Хязгааргүй эрх",
      description:
        "Өндөр настан болон хүндэт/тусгай хэрэгцээт иргэд хязгааргүй эрхээр зорчино.",
      image: image_3,
    },
  ];

  return <ContentWrapper title="Хөнгөлөлттэй эрх" cards={cards} />;
}
