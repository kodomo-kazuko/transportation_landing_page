import React from "react";
import ColorWrapper from "@/app/wrappers/ColorWrapper";
import Card from "@/app/components/Card";
import { IPhone } from "@/app/components/iphone";
import SideButton from "@/app/components/SideButton";
import Image, { StaticImageData } from "next/image";
import { useScreenSize } from "../components/getScreenSize";

export type CardData = {
  title: string;
  description: string;
  image: StaticImageData;
  className?: string;
};

interface ContentWrapperProps {
  title: string;
  cards: CardData[];
  className?: string;
  secondColumnCards?: CardData[];
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  title,
  cards,
  className,
  secondColumnCards,
}: ContentWrapperProps) => {
  const isMobile =
    typeof window !== "undefined"
      ? window.innerWidth < window.innerHeight
      : false;

  const { screenSize } = useScreenSize({
    landscapeRatio: {
      xs: 2.5,
      sm: 6,
      md: 6,
      lg: 7,
      xl: 7,
      "2xl": 7,
      "3xl": 11,
    },
  });

  return (
    <div className="flex flex-col w-full">
      <ColorWrapper color="transparent" className="w-full">
        <div className="text-ub-primary text-3xl text-center p-4 md:text-4xl">
          <ColorWrapper
            color="primary"
            className={`rounded-2xl py-5 ${className}`}
          >
            {title}
          </ColorWrapper>
        </div>

        {/* First set of cards */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <Card title={card.title} description={card.description}>
                <div className="flex w-10/12 md:w-7/10 mx-auto justify-center">
                  <IPhone boxShadow={undefined} width={screenSize}>
                    <Image alt={card.title} src={card.image} priority fill />
                  </IPhone>
                </div>
              </Card>
              {index < cards.length - 1 && (
                <SideButton direction={isMobile ? "down" : "right"} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Second set of cards (below the first set) */}
        {secondColumnCards && (
          <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-8">
            {secondColumnCards.map((card, index) => (
              <React.Fragment key={index}>
                <Card title={card.title} description={card.description}>
                  <div className="flex w-10/12 md:w-7/10 mx-auto justify-center">
                    <IPhone boxShadow={undefined} width={screenSize}>
                      <Image alt={card.title} src={card.image} priority fill />
                    </IPhone>
                  </div>
                </Card>
                {index < secondColumnCards.length - 1 && (
                  <SideButton direction={isMobile ? "down" : "right"} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </ColorWrapper>
    </div>
  );
};

export default ContentWrapper;
