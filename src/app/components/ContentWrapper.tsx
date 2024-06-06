import React, { ReactNode } from "react";
import ColorWrapper from "@/app/components/ColorWrapper";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
}: ContentWrapperProps) => {
  const isMobile =
    typeof window !== "undefined"
      ? window.innerWidth < window.innerHeight
      : false;

  return (
    <div
      className={`shadow-2xl rounded-3xl ${isMobile ? "flex-col" : "flex-row"}`}
    >
      <ColorWrapper color="transparent">
        <div>
          <div className="flex justify-around items-center">{children}</div>
        </div>
      </ColorWrapper>
    </div>
  );
};

export default ContentWrapper;
