import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="rounded-lg p-4 space-y-4 md:p-8 md:space-y-8 md:w-1/3 text-center">
      <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      <p className="text-sm md:text-base">{description}</p>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
