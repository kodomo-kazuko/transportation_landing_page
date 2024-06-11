import { ReactNode } from "react";
import ColorWrapper from "../wrappers/ColorWrapper";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <ColorWrapper color={"white"}>{children}</ColorWrapper>;
}
