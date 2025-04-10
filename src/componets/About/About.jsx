import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img
        src="./src/assets/about/aboutImage1.png"
        alt=" me sitting with a laptop" className={styles.aboutImage}
      />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src="./src/assets/about/cursorIcon.png" alt="cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Devloper</h3>
            <p>
              I'm a frontend developer with building responsive websitesand
              optimise sites
            </p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img src="./src/assets/about/serverIcon.png" alt="server icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Devloper</h3>
            <p>
              I'm a backend developer with devloping fast and optimised back-end
              system with the Apis
            </p>
          </div>
        </li>

        {/* <li className={styles.aboutItem}>
          <img src="./src/assets/about/uiIcon.png" alt="Ui icon" />
          <div className={styles.aboutItemText}>
            <h3>Ui Ux Designer</h3>
            <p>
              i have created multiple landing pages and have created design
              system
            </p>
          </div>
        </li> */}
      </ul>
      </div>
    </section>
  );
};

export default About;