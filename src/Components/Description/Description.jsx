import React from "react";
import styles from './description.module.css'
import { FaArrowDownLong } from "react-icons/fa6";

export default function Description() {
  return (
    <div className={`flex flex-col px-[12vw] text-[1.5vw] py-32 gap-24`}>
      <div className={styles.descriptionone}>
        I&lsquo;M SAHIL BISHNOI, AN INTERACTIVE DESIGNER WITH EXPERIENCE IN ART
        DIRECTION AND GRAPHIC DESIGN.
        <p className={styles.downloadCv}>DOWNLOAD CV <span><FaArrowDownLong/></span></p>
      </div>
      <div className={styles.descriptiontwo}>
        I&lsquo;M SAHIL BISHNOI, AN INTERACTIVE DESIGNER WITH EXPERIENCE IN ART
        DIRECTION AND GRAPHIC DESIGN.
      </div>
    </div>
  );
}
