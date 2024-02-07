/* eslint-disable @next/next/no-img-element */
import { motion, useTransform, useScroll } from "framer-motion";
import { Fragment, useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import styles from "./carousel.module.css";
import { useCursorStore } from "@/StateManagment/zustandLib";
import Reveal from "../Reveal/Reveal";
import { data } from "../Projects/projectData";
import Link from "next/link";

const Carousel = () => {
  const { setIsEmoji } = useCursorStore();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-84%"]);

  return (
    <div>
      <div ref={targetRef} className="relative h-[500vh] md:block hidden">
        <div className="sticky top-0 flex items-center h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8">
            {data.map((card, index) => {
              return <Card card={card} key={card.id} />;
            })}
            <div
              className="h-[70vh] w-[20vw] flex items-center justify-center text-2xl"
              onMouseEnter={() => setIsEmoji({ shape: 1, hovering: true })}
              onMouseLeave={() => setIsEmoji({ shape: 1, hovering: false })}
            >
              <h1>More?</h1>
            </div>
            <div
              className="h-[70vh] w-[20vw] flex items-center justify-center text-2xl"
              onMouseEnter={() => setIsEmoji({ shape: 2, hovering: true })}
              onMouseLeave={() => setIsEmoji({ shape: 2, hovering: false })}
            >
              <h1>Seriously</h1>
            </div>
            <div
              className="h-[70vh] w-[20vw] flex items-center justify-center text-2xl flex-col"
              onMouseEnter={() => setIsEmoji({ shape: 3, hovering: true })}
              onMouseLeave={() => setIsEmoji({ shape: 3, hovering: false })}
            >
              <h1 className="">Fine</h1>
            </div>
            <div className="h-[70vh] w-[20vw] flex items-center justify-center text-2xl flex-col">
              <h1 className={`${styles.toGithub}`}>
                Github
                <span>
                  <FaArrowDownLong />
                </span>
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex gap-4 md:hidden flex-col w-screen overflow-scroll px-4">
        {data.map((card, index) => {
          return <Card card={card} key={`${card.id}`} />;
        })}
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="md:h-[80vh] sm:h-[70vh] h-[40vh] md:w-[70vw] w-full"
    >
      <Reveal>
        <div className="md:h-[70vh] sm:h-[60vh] h-[30vh] w-full  rounded-2xl">
          <img
            src={card.link}
            alt="not found"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
        <div className="flex items-center justify-start gap-4 mt-6 pl-5">
        <a href={card.visitLink} target="_blank">
          <motion.button
            className={`rounded-2xl border-2 px-4 py-1 flex items-center justify-center gap-2 ${styles.button}`}
            data-content="Visit"
            whileTap={{
              scale: 0.9,
            }}
          >
            Visit
            <span className="-rotate-[135deg]">
              <FaArrowDownLong />
            </span>
          </motion.button>
          </a>
          <Link
            href={`/work/${card.id}`}
            className={`rounded-full border-2 px-4 py-1 flex items-center justify-center gap-2 ${styles.button}`}
            data-content="More"
          >
            More
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default Carousel;
