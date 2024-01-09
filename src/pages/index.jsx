import React from "react";
import PreLoader from "@/Components/Loadings/PreLoader";
import Hero from "@/Components/Hero/Hero";
import Main from "@/Components/Main/Main";
import Description from "@/Components/Description/Description";
import Projects from "@/Components/Projects/Projects";
import HorizontalText from "@/Components/HorizontalText/HorizontalText";
import Footer from "@/Components/Footer/Footer";
import { useAppStore } from "@/StateManagment/zustandLib";
import TechStack from "@/Components/TechStack/TechStack";

export default function Home() {
  const {isLoading} = useAppStore();
  React.useEffect(() => {
    (async () => {
      const Locomotive = (await import("locomotive-scroll")).default;
      const LocomotiveScroll = new Locomotive();
    })();
  });
  if (isLoading) {
    return (
          <PreLoader />
    );
  } else {
    return (
      <Main>
        <Hero />
        <Description />
        <Projects />
        <TechStack/>
        <Footer />
      </Main>
    );
  }
}
