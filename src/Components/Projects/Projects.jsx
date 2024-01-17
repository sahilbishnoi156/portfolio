import Image from "next/image";
import React from "react";
import styles from "./project.module.css";
import { data } from "./projectData";
import AnimatedText from "../Reveal/AnimatedText";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import Magnetic from "../magnetic";
import Reveal from "../Reveal/Reveal";

const ProjectsHeader = () => {
  return (
    <div className="w-full text-[6vw] font-semibold flex flex-col leading-[7vw] xl:px-[10vw] md:px-[9vw] px-[4vw] mb-24">
      <AnimatedText
        className="text-[7vw]"
        text="VISUAL"
        childrenDelay={0.02}
      ></AnimatedText>
      <div className="self-end flex items-end">
        <AnimatedText text="EXPERIMENTS" childrenDelay={0.05}></AnimatedText>
        <span className="md:text-xl text-xs ml-28 text-gray-400 mb-2">
          2023
        </span>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="" data-scroll-container>
      <ProjectsHeader />
      <div className="flex flex-col items-center justify-center xl:px-[10vw] md:px-[9vw] px-[4vw] gap-16">
        {data.slice(0, 2)?.map((item, index) => {
          return (
            <div
              key={`${item}+${index}`}
              data-scroll
              data-scroll-speed={`0.${index + 2}`}
              className="w-full"
            >
              <Reveal objectAmount={0.1}>
                <ProjectCard data={item} indNum={index} />
              </Reveal>
              <div className="font-semibold text-white flex items-center justify-center flex-col mt-6" >
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="w-full flex items-center justify-center mt-12"
        data-scroll
        data-scroll-speed={`0.2`}
      >
        <Link
          href="/work"
          className={`border-2 px-8 py-2 rounded-full overflow-hidden ${styles.button}`}
          data-content="MORE"
        >
          MORE
        </Link>
      </div>
    </div>
  );
}
