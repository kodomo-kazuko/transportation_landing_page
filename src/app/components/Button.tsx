import React, { ReactNode } from "react";

interface MyButtonProps {
  bgColor: string;
  fontType: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function MyButton({
  bgColor,
  fontType,
  children,
  onClick,
}: MyButtonProps) {
  return (
    <button
      className={`font-${fontType} bg-${bgColor} hover:bg-${bgColor}-light text-left sm:text-center rounded-xl p-1 hover:text-gray-200`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
