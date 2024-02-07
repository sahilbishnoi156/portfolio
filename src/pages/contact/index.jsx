import Main from "@/Components/Main/Main";
import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import AnimatedText from "@/Components/Reveal/AnimatedText";
import Reveal from "@/Components/Reveal/Reveal";
import Magnetic from "@/Components/magnetic";
import { useCursorStore } from "@/StateManagment/zustandLib";

const LinkDiv = ({ data }) => {
  const Icon = data.logo;
  return (
    <Reveal>
      <div className="relative group">
        <div className="flex items-center justify-between">
          <div className="ml-4">{data.title}</div>
          <div className="mr-4">
            <Icon />
          </div>
        </div>
        {data.title !== "Contact" ? (
          <a
            href={data.title !== "Email" ? data.link : `mailto:${data.link}`}
            target="_blank"
            className="absolute h-full w-full bg-white top-0 flex items-center justify-between left-0 text-black scale-y-0 origin-center group-hover:scale-100 duration-200"
          >
            <div className="ml-4">{data.title}</div>
            <div className="mr-4 flex items-center justify-center gap-4 text-blue-500">
              {data.title === "Contact" && data.link}
              <Icon />
            </div>
          </a>
        ) : (
          <div className="absolute h-full w-full bg-white top-0 flex items-center justify-between left-0 text-black scale-y-0 origin-center group-hover:scale-100 duration-200">
            <div className="ml-4">{data.title}</div>
            <div className="mr-4 flex items-center justify-center gap-4">
              {data.title === "Contact" && data.link}
              <Icon />
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
};
const linkArray = [
  { title: "Contact", logo: IoCall, link: "+91 8094229729" },
  { title: "Email", logo: MdEmail, link: "sahilbishnoi170@gmail.com" },
  {
    title: "Linkdin",
    logo: FaLinkedinIn,
    link: "https://www.linkedin.com/in/sahil-poonia",
  },
  {
    title: "Instagram",
    logo: LuInstagram,
    link: "https://www.instagram.com/s.ahilbishnoi_/?utm_source=qr",
  },
  {
    title: "Twitter",
    logo: FaTwitter,
    link: "https://twitter.com/SahilBi59723409",
  },
  {
    title: "Github",
    logo: FaGithub,
    link: "https://github.com/sahilbishnoi156",
  },
];

const SocialLinks = () => {
  return (
    <div className="w-screen md:text-[5vw] text-[7vw] divide-y-2 divide-gray-400 mt-6 border-y-2 border-gray-400">
      {linkArray.map((item, index) => {
        return <LinkDiv data={item} key={index} />;
      })}
    </div>
  );
};
export default function Index() {
  const { setIsButtonHovering } = useCursorStore();
  return (
    <Main>
      <div className="flex items-center justify-center">
        <div className="md:text-[4vw] text-[6vw] md:mb-16 mb-6">
          <AnimatedText text={`CONTACT DETAILS`} childrenDelay={0.009} />
        </div>
      </div>
      <SocialLinks />
      <div className="flex items-center justify-center my-20 px-4 text-center">
        <AnimatedText
          text={`Let's work together and build something amazing.`}
          childrenDelay={0.009}
        />
      </div>
      <div className="flex items-center justify-center mb-16">
        <Magnetic>
          <a href="mailto:sahilbishnoi170@gmail.com">
          <button
            
            className="w-56 h-56 bg-white rounded-full text-black font-extrabold xl:text-[1.5vw] md:text-[2.5vw] text-[6vw]"
            onMouseEnter={() => setIsButtonHovering(true)}
            onMouseLeave={() => setIsButtonHovering(false)}
          >
            Email Me
          </button>
          </a>
        </Magnetic>
      </div>
    </Main>
  );
}
