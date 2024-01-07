import { menuSlide } from "@/pages/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";


export default function SideMenu() {
  return (
    <motion.div
      className="h-screen w-screen fixed top-0 left-0 z-[1] flex items-center justify-between flex-col px-[12vw] pb-[12vw] pt-[2vw] text-[8vw] text-gray-300"
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <motion.div
        className="flex items-center justify-center w-full text-[1vw]"
        initial={{ scale:0 }}
        animate={{ scale:1 }}
        transition={{ duration: .1, delay: .5 }}
      >
        sahil bishnoi
      </motion.div>
      {[
        ["HOME", "CONTACT"],
        ["WORK", "ABOUT"],
      ].map((arr, ind) => {
        return (
          <motion.div
            className="flex items-center justify-between w-full"
            key={ind}
          >
            {arr.map((item, index) => {
              return (
                <div key={item} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "450px" }}
                    animate={{ y: "0px" }}
                    exit={{ x: "-2000px" , transition: { duration: .9, ease: [0.76, 0, 0.24, 1] },}}
                    transition={{ duration: 0.8, delay: index*0.2}}
                  >
                    <Link href={`/${item.toLocaleLowerCase()}`}>{item}</Link>
                  </motion.h1>
                </div>
              );
            })}
          </motion.div>
        );
      })}

    </motion.div>
  );
}
