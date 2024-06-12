import React, { ReactNode } from "react";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import ColorWrapper, { WrapperBlueProps } from "../wrappers/ColorWrapper";
import styled from "@emotion/styled";
import AnimationWrapper from "./AnimationWrapper";

const StyledH1 = styled.h1`
  font-size: calc(0.5em + 0.8vw);
`;

interface VisualWrapperProps {
  color: WrapperBlueProps["color"];
  animation: string;
  text: string;
  children: ReactNode;
  shadow?: string;
}

const VisualWrapper: React.FC<VisualWrapperProps> = ({
  color,
  animation,
  text,
  children,
  shadow,
}) => {
  const MotionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.99 },
    zIndex: 2,
  };
  const className = " p-10 sm:p-20";
  return (
    <SwipeWrapper animation={animation}>
      <div className={shadow}>
        <ColorWrapper color={color} className={className}>
          <div className="flex justify-evenly">
            <div className="flex basis-1/3 justify-center items-center">
              {children}
            </div>
            <div className="flex basis-1/3 justify-center items-center">
              <StyledH1>{text}</StyledH1>
            </div>
          </div>
        </ColorWrapper>
      </div>
    </SwipeWrapper>
  );
};

export default VisualWrapper;
