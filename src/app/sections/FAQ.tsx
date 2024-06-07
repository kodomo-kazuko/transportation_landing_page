import Accordion, { AccordionItem } from "../components/Accordion";
import ColorWrapper from "../components/ColorWrapper";
import SwipeWrapper from "../components/SwipeWrapper";

export default function FAQ() {
  const items = [
    {
      title: "'UBCARD' гэж юу вэ?",
      content:
        "GPS болон төлбөр тооцооны ухаалаг системд суурилсан нийтийн тээврийн үйлчилгээний аппликейшн",
    },

    {
      title: "Хөнгөлөлттэй эрх гэж юу вэ?",
      content:
        "Хөнгөлөлттэй эрх нь 'Хязгааргүй эрх', 'Оюутны эрх' гэсэн төрлүүдтэй ба та өөрийн хэрэгцээнд зориулан худалдан авах эсвэл үнэгүй авах боломжтой. Хөнгөлөлттэй эрхээр зорчсон тохиолдолд хэтэвчнээс мөнгө хасагдахгүй.",
    },
    {
      title: "Төлбөр хэрхэн төлөх вэ?",
      content:
        "Хэрэглэгч QPay, Socialpay болон өөрийн хэрэглэдэг банкны картыг аппликейшнд холбон төлбөрөө төлж, картаа цэнэглэнэ.",
    },
    {
      title: "Хэрэглэгчийн үнэлгээ гэж юу вэ?",
      content:
        "Картаа уншуулан автобусанд суусан үед тухайн автобусны явж буй байршил харагдана. Та автобус болон жолоочид сэтгэгдэл үлдээх, үнэлгээ өгөх боломжтой.",
    },
    {
      title:
        "Нийтийн тээвэртэй холбоотой гомдол, санал, хүсэлтийг хаана хандах вэ?",
      content: "",
    },
  ];

  return (
    <SwipeWrapper animation={""}>
      <div id="FAQ" className="shadow-md rounded-xl">
        <ColorWrapper color={"transparent"}>
          <div className="flex flex-col items-center justify-center px-4 sm:px-0">
            <div className="flex items-center flex-grow justify-center">
              <h1 className="flex text-4xl sm:text-6xl md:text-5xl items-center justify-center text-center">
                Түгээмэл асуултууд
              </h1>
            </div>

            <div className="flex w-full sm:w-3/4 lg:w-2/4 justify-center items-center">
              <div className="flex-1">
                <Accordion value={null}>
                  {items.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={index.toString()}
                      trigger={item.title}
                    >
                      {/* {item.content} */}
                      <div className="p-1 text-gray-700 text-sm font-normal leading-relaxed">
                        {item.content}
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </ColorWrapper>
      </div>
    </SwipeWrapper>
  );
}
