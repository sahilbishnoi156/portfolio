import React from "react";
import Magnetic from "../magnetic";
import { HiMenuAlt1 } from "react-icons/hi";
import styles from './hamburger.module.css'
const Hamburger = React.forwardRef(function index(props, ref) {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-[20px] z-[1000] mix-blend-difference">
      <Magnetic>
        <div className={styles.burger}>
            <HiMenuAlt1 size={"1.5rem"} style={{mixBlendMode: 'difference'}}/>
          <div className={styles.bounds} ref={ref}></div>
        </div>
      </Magnetic>
    </div>
  );
});
export default Hamburger;
