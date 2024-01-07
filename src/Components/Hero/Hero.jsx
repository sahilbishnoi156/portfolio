import Image from "next/image";
import React from "react";
import heroImg from "@/Assets/hero_img.jpg";
import styles from './Hero.module.css'
import { FaArrowDownLong } from "react-icons/fa6";

const ScrollDown = () => {
  const text = React.useRef(null);
  React.useEffect(() => {
    if (text.current) {
      const originalText = text.current.innerText;
      const transformedText = originalText
        .split('')
        .map((char, index) => `<span style="transform:rotate(${index * 8.31}deg)">${char}</span>`)
        .join('');

      text.current.innerHTML = transformedText;
    }
  })
  return (
    <div className="h-48 w-48 rounded-full relative flex items-center justify-center text-gray-400">
        <span className="text-xl"><FaArrowDownLong/></span>
      <div className={`h-full w-full absolute text-xl rotate-[15deg] ${styles.circle}`} >
        <p ref={text} className={styles.text}> SCROLL DOWN - SCROLL DOWN - </p>
      </div>
    </div>
  );
};

export default function Hero() {
  
  return (
    <div className="flex flex-col px-[12vw] leading-[6vw] gap-16 mt-6 text-gray-100 mix-blend-difference">
      <div className="w-full text-[5vw] font-bold tracking-wide">
        <p>HEY!👋</p>
        <div className="flex gap-4 items-center">
          <p>I&rsquo;M</p>
          <Image
            src={heroImg}
            height={60}
            width={280}
            data-scroll data-scroll-speed='.06'
            alt="notfound"
            className="rounded-[8rem] h-20 brightness-105 w-[9rem]"
          ></Image>
          <p >SAHIL</p>
        </div>
        <p >
          A &ldquo;C<span className="text-[4.7vw]">🥶</span>Ol&rdquo; DEVELOPER
        </p>
      </div>
      <div className="w-full text-[6vw] font-bold flex">
        <div className="w-[40%] flex items-center justify-center">
          <ScrollDown />
        </div>
        <div className="flex flex-col items-end tracking-wide w-[60%]" data-scroll data-scroll-speed='.06'>
          <p>DEVEL<span className={styles.develop} >O</span>PING</p>
          <p className="flex">
            NE<span className="text-[5vw]" data-scroll data-scroll-speed='.09'>⚒️</span>T GEN
          </p>
          <p data-scroll data-scroll-speed='.04'>SH*TS</p>
        </div>
      </div>
    </div>
  );
}
