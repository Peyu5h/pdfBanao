"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <p ref={container} className="text-4xl max-w-6xl mx-auto relative m-6">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  const actualProgress = progress.get();
  return (
    <span className="relative">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        const isLast = i === children.length - 1;
        return (
          <Char
            key={`c_${i}`}
            progress={progress}
            range={[start, end]}
            isLast={isLast}
          >
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({
  children,
  progress,
  range,
  isLast,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
  isLast: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block ${isLast ? "text-black" : ""}`}
    >
      {children}
    </motion.span>
  );
};
