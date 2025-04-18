import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./projectCard";

// Dynamically import project images
const projectImages = import.meta.glob("../../assets/project/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

export const Projects = () => {
  const project = {
    title: "Airbnb Clone",
    description: "Developed a full-stack Airbnb clone ",
    imageSrc: projectImages["../../assets/project/project.jpg"],
    skills: [],
    demoLink: "https://airbnb-05qi.onrender.com/listings", // You can update this to the real demo if available
    sourceLink: "https://github.com/deepak789657/Airbnb"
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard project={project}/>
      </div>
    </section>
  );
};