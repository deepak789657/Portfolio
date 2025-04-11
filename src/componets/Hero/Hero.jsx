
import React from "react";
import styles from "./Hero.module.css"
import hero from "../../assets/hreo/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi i am Deepak</h1>
        <p className={styles.description}>
        I’m a MERN stack developer passionate about building full-stack web
          applications using MongoDB, Express, React, and Node.js. I enjoy
          creating responsive, user-friendly interfaces and robust backends.
        </p>
        <a href="deepakkumar887753@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={hero} alt=" my image " className={styles.heroImg}  />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
