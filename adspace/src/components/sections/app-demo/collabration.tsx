import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export const Collaboration = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const extendedRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });
    const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
        target: extendedRef,
        offset: ["start end", "end end"],
    });

    const scale = useTransform(
        scrollYProgressIncludingOverlap,
        [0.1, 0.4, 0.75, 1],
        [1, 2.5, 4.2, 1]
    );
    const x = useTransform(
        scrollYProgressIncludingOverlap,
        [0.1, 0.25, 0.75, 1],
        ["0vw", "-55vw", "-135vw", "-18vw"]
    );
    const y = useTransform(
        scrollYProgressIncludingOverlap,
        [0.75, 1],
        ["0vh", "40vh"]
    );
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    const avatarGroupOpacity = useTransform(
        scrollYProgress,
        [0, 0.23, 0.25],
        [0, 0, 1]
    );

    const avatarGroupX = useTransform(
        scrollYProgress,
        [0, 0.23, 0.25, 0.4, 0.45, 0.6, 0.65],
        ["60px", "60px", "40px", "40px", "20px", "20px", "0px"]
    );

    const avatarOneScale = useTransform(
        scrollYProgress,
        [0, 0.23, 0.25, 0.85, 0.9],
        [0, 0, 1, 1, 0]
    );

    const avatarTwoScale = useTransform(
        scrollYProgress,
        [0, 0.4, 0.45],
        [0, 0, 1]
    );

    const avatarTwoOpacity = useTransform(
        scrollYProgressIncludingOverlap,
        [0.9999, 1],
        [1, 0]
    );

    const avatarThreeScale = useTransform(
        scrollYProgress,
        [0, 0.6, 0.65, 0.85, 0.9],
        [0, 0, 1, 1, 0]
    );

    return (
        <section ref={targetRef} className="relative z-10  h-[300vh]">
            <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
                <div className="sticky top-[10vh]">
                    <div className="flex justify-center">
                        <motion.div style={{ scale, x, y }} className="origin-top">
                            <motion.img
                                style={{ opacity }}
                                src="/main-screen.svg"
                                className="h-auto -mt-[26px] max-h-none w-[70vw]"
                            />
                            <motion.div
                                style={{ opacity: avatarGroupOpacity, x: avatarGroupX }}
                                className="absolute right-[12%] top-[1.5%] flex gap-2"
                            >
                                <motion.img
                                    style={{ scale: avatarOneScale }}
                                    className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#4ca] object-cover"
                                    src="/avatars/rahul.svg"
                                />
                                <motion.img
                                    style={{ scale: avatarOneScale }}
                                    className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#4ca] object-cover"
                                    src="/avatars/amrinder.svg"
                                />
                                <motion.img
                                    style={{ scale: avatarOneScale }}
                                    className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#4ca] object-cover"
                                    src="/avatars/sanskar.svg"
                                />
                                <motion.img
                                    style={{ scale: avatarTwoScale, opacity: avatarTwoOpacity }}
                                    className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#c82] object-cover"
                                    src="/avatars/shorya.svg"
                                />
                                <motion.img
                                    style={{ scale: avatarThreeScale }}
                                    className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#f0f] object-cover"
                                    src="/avatars/kanak.svg"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};