"use client";

import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { ChevronDown } from "react-feather";

interface AccordionContextProps {
  selected: string | null;
  setSelected: (value: string | null) => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

interface AccordionProps {
  children: ReactNode;
  value: string | null;
  onChange?: (value: string | null) => void;
}

export default function Accordion({
  children,
  value,
  onChange,
  ...props
}: AccordionProps) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

interface AccordionItemProps {
  children: ReactNode;
  value: string;
  trigger: ReactNode;
}

export function AccordionItem({
  children,
  value,
  trigger,
  ...props
}: AccordionItemProps) {
  const { selected, setSelected } = useContext(AccordionContext)!;
  const open = selected === value;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li className="border-b " {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
