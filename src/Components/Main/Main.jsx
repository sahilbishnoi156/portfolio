"use client";
import React from "react";
import Header from "@/Components/Header/Header";
import Cursor from "../stickycursor/cursor";
import Hamburger from "../hambuger/Hamburger";

// const HamburgerDesktop = React.forwardRef(function index({stickyElement}){
//   return
// })
export default function Main({ children }) {
  const stickyElement = React.useRef(null);
  return (
    <>
      <Hamburger ref={stickyElement}/>
      <Header />
      <Cursor stickyElement={stickyElement} />
      <>{children}</>
    </>
  );
}
