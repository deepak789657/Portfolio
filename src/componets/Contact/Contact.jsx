import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="../../assets/contact/emailIcon.png" alt="Email icon" />
          <a href="deepakkumar887753@gmail.com">deepakkumar887753@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="../../assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/deepakkumar78/">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src="../../assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/deepak789657">github.com </a>
        </li>
        <li className={styles.link}>
          <img src="../../assets/contact/RESUME.jpg" className={styles.resume} alt="Resume" />
          <a href="https://drive.google.com/file/d/13C5lMcPSEtztFG9w5LAMEJDPzPjeZHwm/view?usp=sharing">Download Resume </a>
        </li>
      </ul>
    </footer>
  );
};