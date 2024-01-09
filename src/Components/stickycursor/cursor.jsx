"use client";
import React from "react";
import styles from "./styles.module.css";
import {
  motion,
  useMotionValue,
  useSpring,
  animate,
  transform,
} from "framer-motion";
import { useCursorStore } from "@/StateManagment/zustandLib";

export default function Cursor({ stickyElement }) {
  const { isHovering } = useCursorStore();
  const cursorRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  let cursorSize = isHovered ? 45 : (isHovering ? 65 : 20);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const manageMouseOver = (e) => {
    setIsHovered(true);
  };
  
  const manageMouseLeave = (e) => {
    setIsHovered(false);
  };

  React.useEffect(() => {
    const currentStickyElement = stickyElement.current;
    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = currentStickyElement.getBoundingClientRect();
  
      const center = { x: left + width / 2, y: top + height / 2 };
      const distance = { x: clientX - center.x, y: clientY - center.y };
  
      if (isHovered) {
        mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.15);
        mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.15);
  
        //rotation
        const angle = Math.atan2(distance.y, distance.x);
        animate(cursorRef.current, {rotate:` ${angle}rad`}, {duration: 0})
  
        //stetching the circle
        const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
        const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
        const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8]);
        scale.x.set(newScaleX);
        scale.y.set(newScaleY);
      } else {
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
  
        scale.x.set(1);
        scale.y.set(1);

        animate(cursorRef.current, {rotate:` 0rad`}, {duration: 0})
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    currentStickyElement.addEventListener("mouseover", manageMouseOver);
    currentStickyElement.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      currentStickyElement.removeEventListener("mouseover", manageMouseOver);
      currentStickyElement.removeEventListener("mouseleave", manageMouseLeave);
    };
  });
const template = ({rotate, scaleX, scaleY}) =>{
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
};
  return (
    <motion.div
    transformTemplate={template}
      className={`${styles.cursor} ${!isHovering && "mix-blend-difference"} relative`}
      ref={cursorRef}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      
    >
      {isHovering && "click"}
    </motion.div>
  );
}
