import CurvedSvg from "../CurvedSvg/CurvedSvg";
import AnimatedText from "../Reveal/AnimatedText";
import Reveal from "../Reveal/Reveal";
import styles from "./project.module.css";

export default function ProjectsDesc() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <CurvedSvg svgWidth={0.7} />
        <div className={styles.description}>
          <div className={styles.tagsChild}>
            <Reveal>Smart Development</Reveal>
          </div>
          <div>
            <AnimatedText
              text={`Combining unique design and rich technology, we build digital products exactly as they were designed, without shortcuts or simplifications`}
              TextClassName={"text-[28px]"}
              childrenDelay={0.001}
            />
          </div>
        </div>
        <div className={styles.tagsContainer}>
          <div className={styles.tagsChild}>
            <Reveal>Areas</Reveal>
          </div>
            <Reveal>
          <div className={styles.tags}>
              <p>E-commerce</p>
              <p>Finance</p>
              <p>Education</p>
              <p>Social</p>
              <p>Entertainment</p>
          </div>
            </Reveal>
        </div>
      </div>
    </div>
  );
}
