import { FaArrowRight, FaArrowDown } from "react-icons/fa";

interface SideButtonProps {
  direction: "right" | "down";
}

const SideButton: React.FC<SideButtonProps> = ({ direction }) => {
  return (
    <button className="p-4 bg-blue-500 text-white rounded-full text-3xl">
      {direction === "right" ? <FaArrowRight /> : <FaArrowDown />}
    </button>
  );
};

export default SideButton;
