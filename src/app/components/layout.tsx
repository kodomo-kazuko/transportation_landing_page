import { ReactNode } from "react";
import ColorWrapper from "../wrappers/ColorWrapper";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ColorWrapper color={"white"} className={"rounded-2xl m-5 p-0"}>
      {children}
    </ColorWrapper>
  );
}
