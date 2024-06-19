"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.p
      ref={container}
      className="flex text-4xl items-center justify-center px-10 py-10 max-w-3xl mx-auto text-black flex-wrap"
      style={{ opacity }}
    >
      {paragraph}
    </motion.p>
  );
}
