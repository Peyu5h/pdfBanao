"use client";

import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="">
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </div>
  );
}
