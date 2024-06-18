import React, { ReactNode } from "react";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import ColorWrapper, { WrapperBlueProps } from "../wrappers/ColorWrapper";
import styled from "@emotion/styled";

const StyledH1 = styled.h1`
  font-size: calc(0.5em + 0.8vw);
`;

interface VisualWrapperProps {
  color: WrapperBlueProps["color"];
  animation: string;
  text: string;
  children: ReactNode;
  shadow?: string;
  className?: string;
}

const VisualWrapper: React.FC<VisualWrapperProps> = ({
  color,
  animation,
  text,
  children,
  shadow,
  className,
}) => {
  const MotionProps = {};

  return (
    <SwipeWrapper animation={animation}>
      <div className={shadow}>
        <ColorWrapper color={color} className={`p-10 sm:p-20 ${className}`}>
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
