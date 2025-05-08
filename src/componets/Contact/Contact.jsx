import React from "react";

import styles from "./Contact.module.css";
import email from "../../assets/contact/emailIcon.png";
import linkdin from  "../../assets/contact/linkedinIcon.png";
import github from "../../assets/contact/githubIcon.png";
import resume from "../../assets/contact/RESUME.jpg";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="deepakkumar887753@gmail.com">deepakkumar887753@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkdin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/deepakkumar78/">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/deepak789657">github.com </a>
        </li>
        <li className={styles.link}>
          <img src={resume} className={styles.resume} alt="Resume" />
          <a href="https://drive.google.com/file/d/13Uirg6Ayyu_JI94ZHL-Tksvv3zeA71-_/view?usp=sharing">Download Resume </a>
        </li>
      </ul>
    </footer>
  );
};
