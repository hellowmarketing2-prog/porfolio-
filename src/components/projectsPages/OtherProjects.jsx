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
    title: "Student Management System",
    description:
      "A simple student management application for organizing student records, academic information and important details through an easy-to-use interface.",
    image: ProjectImage3,
    technologies: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Forum Website",
    description:
      "A community-focused forum platform where users can create discussions, ask questions and share useful information with other members.",
    image: ProjectImage2,
    technologies: ["PHP", "MySQL", "JavaScript"],
  },
  {
    title: "Business Website",
    description:
      "A responsive business website designed to present company information, services, projects and contact details through a professional interface.",
    image: ProjectImage1,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal developer portfolio showcasing skills, services, projects and professional information with a modern responsive design.",
    image: ProjectImage1,
    technologies: ["React", "SCSS", "Bootstrap"],
  },
];

const OtherProjects = () => {
  return (
    <Layout>
      <section className="project-section about-projects" id="other-projects">
        <div className="container container1">

          <div className="project-heading">
            <p className="left-p">
              <span className="left-span">Other Projects</span>
            </p>

            <h2 className="title-1">
              Other
              <br />
              Interesting
              <span className="title-2"> Projects</span>
            </h2>

            <p className="project-intro">
              A collection of other web development projects created while
              exploring different technologies, ideas and development
              approaches.
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
                    <span>other-project.local</span>
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

export default OtherProjects;