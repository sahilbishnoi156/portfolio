import React from "react";
import styles from "./description.module.css";
import { FaArrowDownLong } from "react-icons/fa6";
import Reveal from "../Reveal/Reveal";

export default function Description() {
  return (
    <div className={`flex flex-col xl:px-[10vw] md:px-[9vw] px-[4vw] sm:text-[1.5vw] text-[3vw] xl:py-32 md:py-28 sm:py-24 py-16 xl:gap-24 md:gap-20 sm:gap-16 gap-12`}>
      <div className={`${styles.descriptionone} md:w-[43%] w-[73%] `}>
        <Reveal>
          I&lsquo;M SAHIL BISHNOI, AN INTERACTIVE DESIGNER WITH EXPERIENCE IN
          ART DIRECTION AND GRAPHIC DESIGN.
          <p className={`${styles.downloadCv} sm:text-[1.8vw] text-[3vw] mt-6`}>
            DOWNLOAD CV{" "}
            <span>
              <FaArrowDownLong />
            </span>
          </p>
        </Reveal>
      </div>
      <div className={`${styles.descriptiontwo} md:w-[43%] w-[73%]`}>
        <Reveal>
          I&lsquo;M SAHIL BISHNOI, AN INTERACTIVE DESIGNER WITH EXPERIENCE IN
          ART DIRECTION AND GRAPHIC DESIGN.
        </Reveal>
      </div>
    </div>
  );
}
