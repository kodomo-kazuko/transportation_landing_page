import Accordion, { AccordionItem } from "../components/Accordion";
import ColorWrapper from "../wrappers/ColorWrapper";
import SwipeWrapper from "../wrappers/SwipeWrapper";

export default function FAQ() {
  const items = [
    {
      title: "'UBCARD' гэж юу вэ?",
      content:
        "GPS болон төлбөр тооцооны ухаалаг системд суурилсан нийтийн тээврийн үйлчилгээний аппликейшн юм.",
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
  ];

  return (
    <div id="FAQ">
      <div className=" my-10 sm:my-20">
        <ColorWrapper color={"transparent"}>
          <div className="flex flex-col items-center justify-center px-4 sm:px-0">
            <div className="flex items-center flex-grow justify-center">
              <h1 className="flex text-4xl sm:text-6xl md:text-5xl items-center justify-center text-center mb-10">
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
    </div>
  );
}
