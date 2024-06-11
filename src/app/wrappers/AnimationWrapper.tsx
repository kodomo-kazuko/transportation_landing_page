import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimationWrapperProps {
  children: ReactNode;
  motionProps: MotionProps;
  className?: string;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  motionProps,
  className = "w-full sm:w-1/2",
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ zIndex: 0 }}
      whileHover={{ scale: 1.02, zIndex: 1 }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
