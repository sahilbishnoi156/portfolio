import React from "react";
import { useAnimation, useInView, motion } from "framer-motion";

export default function Reveal({ children }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount:.5, once: true });

  const mainControls = useAnimation();
  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration:0.5, delay:0.25}}
      >
        {children}
      </motion.div>
    </div>
  );
}
