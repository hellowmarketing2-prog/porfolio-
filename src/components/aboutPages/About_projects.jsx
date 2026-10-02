
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
    title: "Construction Management Website",
    description:
      "A complete construction management platform designed to showcase construction projects, services, blogs and team members. The website also includes a functional contact system and admin management.",
    image: ProjectImage1,
    technologies: ["Laravel", "React", "MySQL"],
  },
  {
    title: "E-Commerce Website",
    description:
      "A modern e-commerce platform where customers can browse products, explore categories, manage their cart and complete checkout. The admin panel provides product and category management.",
    image: ProjectImage2,
    technologies: ["Laravel", "React", "MySQL"],
  },
  {
    title: "Student Management System",
    description:
      "A simple and efficient student management system for organizing student records, academic information and important details through an easy-to-use web interface.",
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
];

const Projects = () => {
  return (
    <Layout>
      <section className="project-section about-projects py-5" id="projects">
        <div className="container container1">

          {/* Section Heading */}
          <div className="project-heading">
            <p className="left-p">
              <span className="left-span">Projects</span>
            </p>

            <h2 className="title-1">
              My Latest <br />
              Awesome
              <span className="title-2"> Projects</span>
            </h2>

            <p className="project-intro">
              Here are some of the projects I have built using modern web
              technologies, focusing on clean UI, functionality and
              maintainable code.
            </p>
          </div>

          {/* Projects */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                className={`project-card ${
                  index % 2 !== 0 ? "project-card-offset" : ""
                }`}
                key={project.title}
              >
                {/* Browser Header */}
                <div className="project-browser-header">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-search">
                    <span>localhost</span>
                  </div>
                </div>

                {/* Image */}
                <div className="project-image">
                  <img src={project.image} alt={project.title} />

                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="project-number">
                        0{index + 1}
                      </span>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>

                      {/* Technologies */}
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

export default Projects;
