import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { useCursorStore } from "@/StateManagment/zustandLib";
import Image from "next/image";

export default function ProjectCard({ data, indNum }) {
  const { setIsHovering } = useCursorStore();
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const mouseXSpring = useSpring(cardX);
  const mouseYSpring = useSpring(cardY);

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

    cardX.set(xPct);
    cardY.set(yPct);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      key={indNum}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovering(true)}
      className="relative h-[80vh] w-full rounded-xl bg-gradient-to-br from-red-300 to-violet-300 shrink-0 cursor-pointer "
    >
      <motion.div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        whileTap={{
          scale: 1.2,
        }}
        className="absolute inset-4 flex items-start pt-16 justify-center rounded-xl bg-transparent"
      >
        <Image
          height={1960}
          width={1080}
          quality={100}
          alt="not found"
          src={data.link}
          className="absolute top-0 left-0 rounded-xl h-full w-full brightness-75"
        />
        <div
          style={{
            transform: "translateZ(30px)",
          }}
          className="font-semibold text-white flex items-center justify-center flex-col "
        >
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
