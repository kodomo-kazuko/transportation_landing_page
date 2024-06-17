import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="rounded-lg px-10 py-5 sm:p-4 space-y-10 sm:space-y-4  md:space-y-8 md:w-2/4 text-left">
      <div className="h-20 md:h-24">
        <h1 className="text-xl font-bold lg:text-2xl">{title}</h1>
        <p className="text-md md:text-base">{description}</p>
      </div>
      <div className="items-end sm:pt-24 md:pt-10 lg:pt-5 xl:pt-0">{children}</div>
    </div>
  );
}
