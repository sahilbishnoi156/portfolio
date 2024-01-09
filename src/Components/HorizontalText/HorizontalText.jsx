"use client";
import { useScroll, motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

export default function HorizontalText() {
  const slidingRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: slidingRef.current,
    offset: ["0 1", ["1 1"]],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <div
      className="h-[40vh] flex items-center justify-center text-gray-200 whitespace-nowrap overflow-hidden"
      data-scroll
      data-scroll-speed=".3"
    >
      <motion.div
        className="text-[8vw]"
        ref={slidingRef}
        style={{
          x: x,
          rotate: 4,
        }}
      >
        TECH STACK TECH STACK TECH STACK TECH STACK TECH STACK TECH STACK
      </motion.div>
    </div>
  );
}
