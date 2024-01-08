import Image from "next/image";
import React from "react";
import styles from "./project.module.css";
import { data } from "./projectData";
import AnimatedText from "../Reveal/AnimatedText";
import ProjectCard from "./ProjectCard";

const ProjectsHeader = () => {
  return (
    <div className="w-full text-[6vw] font-semibold flex flex-col leading-[7vw] px-[12vw] mb-32">
      <AnimatedText className="text-[7vw]" text="VISUAL"></AnimatedText>
      <div className="self-end flex items-end">
        <AnimatedText text="EXPERIMENTS"></AnimatedText>
        <span className="text-xl ml-36 text-gray-400 mb-2">2023</span>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="mb-32">
      <ProjectsHeader />
      <div className="flex flex-col items-center justify-center gap-16 px-[12vw]">
        {data?.map((item, index) => {
          return (
            <ProjectCard data={item} key={item}/>
          );
        })}
      </div>
    </div>
  );
}
