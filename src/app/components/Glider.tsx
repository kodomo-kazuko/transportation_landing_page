import { useRef, FC } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
    text: string;
    baseVelocity?: number;
    spanCount: number;
    spanClassName: string;
}

const ParallaxText: FC<ParallaxProps> = ({ text, baseVelocity = 50, spanCount, spanClassName }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 500);
        if (velocityFactor.get() < 0) directionFactor.current = -1;
        else if (velocityFactor.get() > 0) directionFactor.current = 1;
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    const spans = Array.from({ length: spanCount }, (_, index) => (
        <span key={index} className={spanClassName}>{text}</span>
    ));

    return (
        <div className="overflow-hidden tracking-tighter leading-none m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div
                className="font-plaster uppercase text-5xl flex whitespace-nowrap "
                style={{ x }}
            >
                {spans}
            </motion.div>
        </div>
    );
};

const App: FC = () => {
    return (
        <section>
            <ParallaxText text="UB CARD" baseVelocity={-0.05} spanCount={100} spanClassName="block mr-5 text-blue-100" />
            <ParallaxText text="UB CARD" baseVelocity={0.05} spanCount={100} spanClassName="block mr-5 text-yellow-100" />
        </section>
    );
};

export default App;
