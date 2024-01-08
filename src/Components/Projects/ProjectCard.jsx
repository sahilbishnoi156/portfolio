import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

export default function ProjectCard({ data }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10.5deg", "-10.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10.5deg", "10.5deg"]
  );

  const handleMouseMove = (e) => {
    const { width, height, top, left } = e.target.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      data-scroll
      data-scroll-speed="0.4"
      className="relative h-[80vh] w-full rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(30px)",
          }}
          className="font-semibold text-black flex items-center justify-center flex-col"
        >
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
