import Accordion, { AccordionItem } from "../components/Accordion";
import ColorWrapper from "../components/ColorWrapper";
import SwipeWrapper from "../components/SwipeWrapper";

export default function FAQ() {
  const items = [
    {
      title: "Accordion Item #1",
      content: "This is the first item's accordion body.",
    },
    {
      title: "Accordion Item #2",
      content: "This is the second item's accordion body.",
    },
    {
      title: "Accordion Item #3",
      content: "This is the third item's accordion body.",
    },
    {
      title: "Accordion Item #1",
      content: "This is the first item's accordion body.",
    },
    {
      title: "Accordion Item #2",
      content: "This is the second item's accordion body.",
    },
    {
      title: "Accordion Item #3",
      content: "This is the third item's accordion body.",
    },
  ];

  return (
    <div id="FAQ">
      <SwipeWrapper animation={"slide-left"}>
        <ColorWrapper color={"white"}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center flex-grow justify-center">
              <h1 className="text-9xl">FAQ</h1>
            </div>

            <div className="flex w-2/4 justify-center items-center">
              <div className=" flex-1">
                <Accordion value={null}>
                  {items.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={index.toString()}
                      trigger={item.title}
                    >
                      {item.content}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </ColorWrapper>
      </SwipeWrapper>
    </div>
  );
}
