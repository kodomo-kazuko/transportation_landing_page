import { ReactNode, useEffect } from "react";
import { motion, MotionProps, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimationWrapperProps {
  children: ReactNode;
  motionProps: MotionProps;
  className?: string;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  motionProps,
  className,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.90
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 2 }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
