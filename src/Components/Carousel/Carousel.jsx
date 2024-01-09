import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "../Projects/ProjectCard";
import { data } from "../Projects/projectData";

const Carousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-175%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]  -z-20 ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pl-16">
        <motion.div style={{ x: x }} className="relative w-full">
          <div className="relativeflex flex-col items-center justify-center gap-16">
            {data?.map((item, index) => {
              return (
                <div
                  key={`${item}+${index}`}
                  data-scroll
                  data-scroll-speed={`0.2`}
                  className="w-full"
                >
                  <ProjectCard data={item} indNum={index} />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;
