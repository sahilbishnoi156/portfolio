import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import AnimatedText from "../Reveal/AnimatedText";
import Reveal from "../Reveal/Reveal";
import Magnetic from "../magnetic";
import { useCursorStore } from "@/StateManagment/zustandLib";

export default function Footer() {
  const { setIsButtonHovering } = useCursorStore();
  return (
    <Reveal>
      <div className="w-screen border-t-[1px] py-12">
        <div className="flex items-center justify-between w-screen h-full sm:flex-row flex-col gap-6">
          <div className="w-full flex items-center justify-center">
            <AnimatedText text={`Sahil Bishnoi`} childrenDelay={0.01} />
          </div>
          <div
            className="flex items-center justify-center gap-8 text-[1.2rem] w-full"
            onMouseEnter={() => setIsButtonHovering(true)}
            onMouseLeave={() => setIsButtonHovering(false)}
          >
            <Magnetic>
              <a href="https://github.com/sahilbishnoi156" target="_blank">
                <FaGithub className="hover:scale-150 hover:text-violet-500 duration-200" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="www.linkedin.com/in/sahil-poonia" target="_blank">
                <FaLinkedinIn className="hover:scale-150 hover:text-violet-500 duration-200" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.instagram.com/s.ahilbishnoi_/" target="_blank">
                <LuInstagram className="hover:scale-150 hover:text-violet-500 duration-200"  />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://twitter.com/SahilBi59723409" target="_blank">
                <FaTwitter className="hover:scale-150 hover:text-violet-500 duration-200" />
              </a>
            </Magnetic>
          </div>
          <div
            className="items-center justify-center gap-2 w-full sm:flex hidden"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.scrollTo(0, 0);
              }
            }}
          >
            <Reveal>Go to top</Reveal>
            <span>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
        <div className="h-full flex items-end justify-center sm:pt-32 pt-24">
          <AnimatedText
            text={`Made with love for great people`}
            childrenDelay={0.01}
          />
        </div>
      </div>
    </Reveal>
  );
}
