import React, { ReactNode } from "react";
import ColorWrapper from "../wrappers/ColorWrapper";

interface CardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="flex-grow rounded-lg p-4 space-y-4 md:p-8 md:space-y-8 text-left">
      <div className="h-20 md:h-24">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          {title}
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl">
          {description}
        </p>
      </div>
      <div className="items-end">{children}</div>
    </div>
  );
}
