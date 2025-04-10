import React, { useState } from "react";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";
import styles from "./navbar.module.css";
import { getImageUrl } from "../../utils";
export const Navbar = () => {
  const [menuopen, setmenuopen] = useState(false);  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        portfolio
      </a>
      <div className={styles.menu}>
        {/* <img
          className={styles.menuBtn}
          src={("nav/menuIcon.png ")}
          alt="menu-button"
        /> */}
        <img
          className={styles.menuBtn}
          src={menuopen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={()=>setmenuopen(!menuopen)}
       />
        <ul className={`${styles.menuItems} ${menuopen && styles.menuopen }`}
        onClick={()=>setmenuopen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
