import { menuSlide } from "@/Components/SideMenu/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styles from "./sidemenu.module.css";
import Magnetic from "../magnetic";

export default function SideMenu() {
  return (
    <motion.div
      className="h-screen w-screen fixed top-0 left-0 z-[1] flex items-center justify-between flex-col px-[12vw] pb-[12vw] pt-[2vw] text-[6vw] text-gray-300"
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <motion.div
        className="flex items-center justify-center w-full text-[1.2vw]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1, delay: 0.5 }}
      >
        sahil bishnoi
      </motion.div>
      {[
        ["HOME", "CONTACT"],
        ["WORK", "ABOUT"],
      ].map((arr, ind) => {
        return (
          <motion.div
            className="flex items-center gap-[14vw] w-full"
            key={ind}
          >
            {arr.map((item, index) => {
              return (
                <div key={item} className={styles.mainDiv}>
                  <motion.h1
                    data-text={item}
                    initial={{ y: "450px" }}
                    animate={{ y: "0px" }}
                    exit={{
                      x: "-2000px",
                      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
                    }}
                    transition={{
                      duration: 0.8,
                      delay: (ind + 0.05) * index * 0.2,
                    }}
                  >
                    
                    <Link
                      href={`/${(ind === 0 && index ===0) ? "" : item.toLocaleLowerCase()}`}
                      className={styles.link}
                    >
                      {item}
                      <div className={styles.empty1}></div>
                      <div className={styles.empty2}></div>
                    </Link>
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
