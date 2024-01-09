"use client";
import { useScroll, motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

export default function HorizontalText({text, rotation}) {
  const slidingRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: slidingRef.current,
    offset: ["0 1", ["1 1"]],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["80%", "0%"]);
  return (
    <div
      className="h-[50vh] flex items-center justify-center text-gray-200 whitespace-nowrap overflow-hidden"
    >
      <motion.div
        className="text-[8vw]"
        ref={slidingRef}
        style={{
          x: x,
          rotate: rotation,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
