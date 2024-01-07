"use client";
import React, { useLayoutEffect } from "react";
import Header from "@/Components/Header/Header";
import Cursor from "../stickycursor/cursor";
import Hamburger from "../hambuger/Hamburger";


export default function Main({ children }) {
  const stickyElement = React.useRef(null);
  const stickyElement2 = React.useRef(null);
  
  return (
    <>
      <Hamburger ref={stickyElement}/>
      <Header />
      <Cursor stickyElement={stickyElement} />
      <>{children}</>
    </>
  );
}
