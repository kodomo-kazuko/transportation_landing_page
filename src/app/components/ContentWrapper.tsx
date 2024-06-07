import React, { ReactNode } from "react";
import ColorWrapper from "@/app/components/ColorWrapper";
import Card from "@/app/components/Card";
import { IPhone } from "@/app/components/iphone";
import SideButton from "@/app/components/SideButton";
import Image, { StaticImageData } from "next/image";
import { useScreenSize } from "../components/getScreenSize";

export type CardData = {
  title: string;
  description: string;
  image: StaticImageData;
};

interface ContentWrapperProps {
  title: string;
  cards: CardData[];
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  title,
  cards,
}: ContentWrapperProps) => {
  const isMobile =
    typeof window !== "undefined"
      ? window.innerWidth < window.innerHeight
      : false;

  const screenSize = useScreenSize();

  return (
    <>
      <div className=" text-black text-3xl pl-10">{title}</div>
      <div
        className={`shadow-2xl rounded-3xl ${
          isMobile ? "flex-col" : "flex-row"
        }`}
      >
        <ColorWrapper color="transparent">
          <div>
            <div className="flex justify-around items-center">
              {cards.map((card, index) => (
                <>
                  <Card title={card.title} description={card.description}>
                    <div className="flex w-11/12 md:w-7/10 mx-auto justify-center">
                      <IPhone boxShadow={undefined} width={screenSize}>
                        <Image alt="" src={card.image} fill priority />
                      </IPhone>
                    </div>
                  </Card>
                  {index < cards.length - 1 && <SideButton />}
                </>
              ))}
            </div>
          </div>
        </ColorWrapper>
      </div>
    </>
  );
};

export default ContentWrapper;
