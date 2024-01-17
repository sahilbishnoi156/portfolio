"use client";
import Main from "@/Components/Main/Main";
import AnimatedText from "@/Components/Reveal/AnimatedText";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function About() {
  const slidingRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: slidingRef.current,
    offset: ["0 1", ["1 1"]],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "60%"]);
  return (
    <Main>
      <div className="flex flex-col items-center justify-start py-16 ">
        <div className="xl:w-[30vw] md:w-[50vw] sm:w-[60vw] w-[90vw] flex flex-col items-center justify-start gap-12">
          <h1 className="md:text-[4vw] text-[8vw] self-start">About me?</h1>
          <div className=" w-full text-right leading-8 relative">
            <div className="relative z-20">
              <AnimatedText
                text={`I’m Sahil Bishnoi, a digital designer. At least, that’s what I fill in on forms. You can also see me type nerd, a future entrepreneur, or another one of those passionate home cooks. Is it because of an imposter syndrome, or my excitement for getting an understanding of things? I still don’t know, but I decided to embrace that I love to do everything at once - and do it good.Is it because of an imposter syndrome, or my excitement for getting an understanding of things? I still don’t know, but I decided to embrace that I love to do everything at once - and do it good.`}
                childrenDelay={0.001}
              />
            </div>
            <motion.div
              className="absolute -top-[40%] -right-[0%] -z-10 xl:-right-[40%] md:-right-[25%] sm:-right-[20%] xl:-top-[40%] md:-top-[30%]"
              style={{
                y: y,
              }}
              ref={slidingRef}
            >
              <Image
                alt="notFound"
                src={"/images/mypfp2.jpg"}
                width={200}
                height={200}
                className=" brightness-50 rounded-sm"
                data-scroll
                data-scroll-speed="0.6"
              />
            </motion.div>
          </div>
          <div className="leading-8 relative">
            <div className="relative z-20">
              <AnimatedText
                text={`I’m Sahil Bishnoi, a digital designer. At least, that’s what I fill in on forms. You can also see me type nerd, a future entrepreneur, or another one of those passionate home cooks. Is it because of an imposter syndrome, or my excitement for getting an understanding of things? I still don’t know, but I decided to embrace that I love to do everything at once - and do it good.Is it because of an imposter syndrome, or my excitement for getting an understanding of things? I still don’t know, but I decided to embrace that I love to do everything at once - and do it good.`}
                childrenDelay={0.001}
              />
            </div>
            <motion.div className="absolute -bottom-[20%] -left-[0%] -z-10 xl:-left-[40%] md:-left-[25%] sm:-left-[20%] xl:top-[40%] md:top-[30%]"
            style={{
              y: y,
            }}>
              <Image
                alt="notFound"
                src={"/images/mypfp3.jpg"}
                width={200}
                height={100}
                className="brightness-50 rounded-sm object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Main>
  );
}
