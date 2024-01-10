"use client";
import React, { useLayoutEffect } from "react";
import Header from "@/Components/Header/Header";
import Cursor from "../stickycursor/cursor";
import Hamburger from "../hambuger/Hamburger";
import Footer from "../Footer/Footer";


export default function Main({ children }) {
  const stickyElement = React.useRef(null);
  const isMouseDevice = window.matchMedia("(pointer: fine)").matches;

  return (
    <>
      <Hamburger ref={stickyElement}/>
      <Header />
      {isMouseDevice && <Cursor stickyElement={stickyElement} />}
      <>{children}</>
      <Footer />
    </>
  );
}
