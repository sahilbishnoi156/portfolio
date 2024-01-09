import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import styles from "./carousel.module.css";
import { useCursorStore } from "@/StateManagment/zustandLib";

const HorizontalScrollCarousel = () => {
  const { setIsEmoji } = useCursorStore();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
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
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="h-[80vh] w-[40vw]">
      <div className="h-[70vh] w-full bg-black rounded-2xl"></div>
      <div className="flex items-center justify-start gap-4 mt-6 pl-5">
        <motion.button
          className={`rounded-full border-2 px-4 py-1 flex items-center justify-center gap-2 ${styles.button}`}
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
        <button
          className={`rounded-full border-2 px-4 py-1 flex items-center justify-center gap-2 ${styles.button}`}
          data-content="More"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "/images/suffererBg.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
