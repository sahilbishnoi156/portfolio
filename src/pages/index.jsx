"use client";
import Image from "next/image";
import React from "react";

import Hero from "@/Components/Hero/Hero";
import Main from "@/Components/Main/Main";
import Description from "@/Components/Description/Description";
import Projects from "@/Components/Projects/Projects";

export default function Home() {
  React.useEffect(() => {
    (async () => {
      const Locomotive = (await import("locomotive-scroll")).default;
      const LocomotiveScroll = new Locomotive();
    })();
  });
  return (
    <Main>
      <Hero />
      <Description />
      <Projects />
    </Main>
  );
}
