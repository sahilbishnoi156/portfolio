import Image from "next/image";
import React from "react";
import project1 from "@/Assets/project1.jpg";
import project2 from "@/Assets/project2.jpg";
import project3 from "@/Assets/project3.jpg";
import project4 from "@/Assets/project4.jpg";
import project5 from "@/Assets/project5.jpg";

const ProjectsHeader = () => {
  return (
    <div className="w-full text-[6vw] font-semibold flex flex-col leading-[7vw] px-[12vw] my-32">
      <div className="text-[7vw]">VISUAL</div>
      <div className="self-end">
        EXPERIMENTS <span className="text-xl ml-36 text-gray-400">2023</span>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className=" text-gray-100 mix-blend-difference mb-32">
      <ProjectsHeader />
      <div className="px-16 flex items-center justify-center gap-4 mb-4">
        <div className=" rounded-xl w-2/5 h-80">
          <Image
            src={project1}
            height={60}
            width={280}
            alt="notfound"
            quality={80}
            className="h-full w-full object-cover rounded-xl"
          ></Image>
        </div>
        <div className=" rounded-xl w-3/5 h-80">
          <Image
            src={project5}
            height={60}
            width={280}
            alt="notfound"
            quality={100}
            className="h-full w-full object-cover rounded-xl"
          ></Image>
        </div>
      </div>
      <div className="w-full flex px-16 gap-4">
        <div className="flex items-center justify-center gap-4 w-4/6 flex-col">
          <div className=" rounded-xl w-full h-80">
            <Image
              src={project3}
              height={60}
              width={280}
              alt="notfound"
              quality={80}
              className="h-full w-full object-cover rounded-xl"
            ></Image>
          </div>
          <div className="flex items-center justify-center gap-4 w-full">
            <div className=" rounded-xl w-full h-80">
              <Image
                src={project4}
                height={60}
                width={280}
                alt="notfound"
                quality={80}
                className="h-full w-full object-cover rounded-xl"
              ></Image>
            </div>
            <div className=" rounded-xl w-full h-80">
              <Image
                src={project5}
                height={60}
                width={280}
                alt="notfound"
                quality={80}
                className="h-full w-full object-cover rounded-xl"
              ></Image>
            </div>
          </div>
        </div>
        <div className="h-[41rem] w-1/3  rounded-xl">
          <Image
            src={project2}
            height={60}
            width={280}
            alt="notfound"
            quality={80}
            className="h-full w-full object-cover rounded-xl"
          ></Image>
        </div>  
      </div>
    </div>
  );
}
