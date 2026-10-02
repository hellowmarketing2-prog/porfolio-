import React from "react";
import "../../assets/css/about_css/About_projects.scss";
import Layout from "../common/Layout";

import ProjectImage1 from "../../assets/images/project1.jpg";
import ProjectImage2 from "../../assets/images/project2.jpg";
import ProjectImage3 from "../../assets/images/project3.jpg";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const projects = [
  {
    title: "React Portfolio Website",
    description:
      "A modern responsive portfolio website built with React featuring reusable components, animations, routing and a clean professional interface.",
    image: ProjectImage1,
    technologies: ["React", "Vite", "SCSS"],
  },
  {
    title: "React Admin Dashboard",
    description:
      "A responsive admin dashboard built with React for managing application data through reusable components and API integration.",
    image: ProjectImage2,
    technologies: ["React", "Bootstrap", "API"],
  },
  {
    title: "React Business Website",
    description:
      "A modern business website developed using React with responsive layouts, reusable sections and interactive UI components.",
    image: ProjectImage3,
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "React API Application",
    description:
      "A frontend application connected with backend APIs to display and manage dynamic data using React components and state management.",
    image: ProjectImage2,
    technologies: ["React", "REST API", "JavaScript"],
  },
];

const ReactProjects = () => {
  return (
    <Layout>
      <section className="project-section about-projects" id="react-projects">
        <div className="container container1">

          <div className="project-heading">
            <p className="left-p">
              <span className="left-span">React Projects</span>
            </p>

            <h2 className="title-1">
              My React
              <br />
              Development
              <span className="title-2"> Projects</span>
            </h2>

            <p className="project-intro">
              Modern React applications built with reusable components,
              responsive layouts, API integration and interactive user
              experiences.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                className={`project-card ${
                  index % 2 !== 0 ? "project-card-offset" : ""
                }`}
                key={project.title}
              >
                <div className="project-browser-header">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-search">
                    <span>react-project.local</span>
                  </div>
                </div>

                <div className="project-image">
                  <img src={project.image} alt={project.title} />

                  <div className="project-overlay">
                    <div className="overlay-content">

                      <span className="project-number">
                        0{index + 1}
                      </span>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>

                      <div className="project-tech">
                        {project.technologies.map((technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        ))}
                      </div>

                      <a href="#" className="view-work">
                        VIEW WORK

                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={25}
                          color="currentColor"
                          strokeWidth={1.5}
                        />
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default ReactProjects;