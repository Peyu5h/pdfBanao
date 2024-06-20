"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function MaskText({
  phrase,
  param,
}: {
  phrase: string;
  param?: string;
}) {
  const animation = {
    initial: { y: "100%" },
    enter: {
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={` ${param} font-koulen`}>
      <div className="overflow-hidden">
        <motion.p
          className="m-0 "
          variants={animation}
          initial="initial"
          animate={inView ? "enter" : ""}
        >
          {phrase}
        </motion.p>
      </div>
    </div>
  );
}
