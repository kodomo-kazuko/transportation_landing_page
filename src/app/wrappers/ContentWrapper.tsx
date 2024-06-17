import React, { ReactNode } from "react";
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
  className?: string
};

interface ContentWrapperProps {
  title: string;
  cards: CardData[];
  className?: string
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  title,
  cards,
  className,
}: ContentWrapperProps) => {
  const isMobile =
    typeof window !== "undefined"
      ? window.innerWidth < window.innerHeight
      : false;

  const { screenSize } = useScreenSize({
    landscapeRatio: { xs: 2.5, sm: 6, md: 6, lg: 7, xl: 7, "2xl": 7, "3xl": 11 },
  });

  return (
    <div className={` flex  sm:flex-col  md:flex-row w-full"}`}>
      <ColorWrapper color="transparent" className=" w-full">
        <div className=" text-ub-primary text-3xl text-center px-5 sm:p-4 md:text-4xl ">
          <ColorWrapper color="primary" className={`rounded-2xl py-5 ${className} `}>
            {title}</ColorWrapper>
        </div>
        <div>
          <div
            className={`flex flex-col  sm:flex-row "
              } justify-between items-center overflow-auto w-full`}
          >
            {cards.map((card, index) => (
              <>
                <Card title={card.title} description={card.description}>
                  <div className="flex w-10/12 md:w-7/10 mx-auto justify-center">
                    <IPhone boxShadow={undefined} width={screenSize}>
                      <Image alt="" src={card.image} priority fill />
                    </IPhone>
                  </div>
                </Card>
                {index < cards.length - 1 && (
                  <SideButton direction={isMobile ? "down" : "right"} />
                )}
              </>
            ))}
          </div>
        </div>
      </ColorWrapper>
    </div>
  );
};

export default ContentWrapper;
