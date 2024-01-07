import Image from "next/image";
import React from "react";
import styles from "./project.module.css";
import { data } from "./projectData";
import AnimatedText from "../Reveal/AnimatedText";

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
      <div className="flex flex-col items-center justify-center gap-16">
        {data?.map((item, index) => {
          return (
            <div
              className="px-[12vw] relative"
              data-scroll
              data-scroll-speed="0.3"
              key={item}
            >
              <div
                className={`absolute top-[15%]  mx-[15vw] ${
                  item.isLeftImage ? "right-[2%]" : "left-[2%]"
                }`}
              >
                <h1 className="text-[4vw] font-bold">{item.title}</h1>
                <p className="text-xl text-gray-300 ">{item.description}</p>
              </div>
              <Image
                src={item.link}
                height={60}
                width={1080}
                alt="notfound"
                quality={100}
                className="h-full w-full object-cover rounded-xl stroke-white"
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
}
