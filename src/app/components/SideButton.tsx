import { FaArrowRight, FaArrowDown } from "react-icons/fa";

interface SideButtonProps {
  direction: "right" | "down";
}

const SideButton: React.FC<SideButtonProps> = ({ direction }) => {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-full text-3xl sm:mt-32">
      {direction === "right" ? <FaArrowRight /> : <FaArrowDown />}
    </div>
  );
};

export default SideButton;
