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
}) => {
  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default AnimationWrapper;
