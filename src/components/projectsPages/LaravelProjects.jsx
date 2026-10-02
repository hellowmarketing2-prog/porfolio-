import React from "react";
import "../../assets/css/about_css/About_projects.scss";
import Layout from "../common/Layout";

import ProjectImage1 from "../../assets/images/project1.jpg";
import ProjectImage2 from "../../assets/images/project2.jpg";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const projects = [
  {
    title: "Construction Management Platform",
    description:
      "A complete Laravel-based construction management platform with project management, services, blogs, team members and contact management.",
    image: ProjectImage1,
    technologies: ["Laravel", "React", "MySQL"],
  },
  {
    title: "Laravel Admin Management System",
    description:
      "A powerful backend management system built with Laravel for managing website content, users, projects, services and other dynamic data.",
    image: ProjectImage2,
    technologies: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "REST API Backend",
    description:
      "A structured Laravel REST API backend with authentication, CRUD operations, validation and database relationships for modern web applications.",
    image: ProjectImage1,
    technologies: ["Laravel", "PHP", "API"],
  },
  {
    title: "Student Management Backend",
    description:
      "A Laravel-based management system designed to organize students, academic records and other important information through a secure backend.",
    image: ProjectImage2,
    technologies: ["Laravel", "PHP", "MySQL"],
  },
];

const LaravelProjects = () => {
  return (
    <Layout>
      <section className="project-section about-projects" id="laravel-projects">
        <div className="container container1">

          <div className="project-heading">
            <p className="left-p">
              <span className="left-span">Laravel Projects</span>
            </p>

            <h2 className="title-1">
              My Laravel
              <br />
              Development
              <span className="title-2"> Projects</span>
            </h2>

            <p className="project-intro">
              A collection of Laravel projects focused on backend development,
              REST APIs, authentication, database management and scalable web
              applications.
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
                    <span>laravel-project.local</span>
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

export default LaravelProjects;