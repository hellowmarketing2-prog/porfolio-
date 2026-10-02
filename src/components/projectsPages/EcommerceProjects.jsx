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
    title: "Modern E-Commerce Platform",
    description:
      "A complete e-commerce application where customers can browse products, explore categories, manage their cart and proceed through checkout.",
    image: ProjectImage2,
    technologies: ["Laravel", "React", "MySQL"],
  },
  {
    title: "E-Commerce Admin Panel",
    description:
      "An admin dashboard for managing products, categories and other important store data through a clean and responsive interface.",
    image: ProjectImage1,
    technologies: ["React", "Laravel", "Bootstrap"],
  },
  {
    title: "Product Management System",
    description:
      "A dynamic product management application with product creation, editing, deletion, categories and database integration.",
    image: ProjectImage3,
    technologies: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Shopping Cart Application",
    description:
      "A responsive shopping experience with product browsing, cart management, quantity updates and checkout functionality.",
    image: ProjectImage2,
    technologies: ["React", "JavaScript", "API"],
  },
];

const EcommerceProjects = () => {
  return (
    <Layout>
      <section className="project-section about-projects" id="ecommerce-projects">
        <div className="container container1">

          <div className="project-heading">
            <p className="left-p">
              <span className="left-span">E-Commerce Projects</span>
            </p>

            <h2 className="title-1">
              My E-Commerce
              <br />
              Development
              <span className="title-2"> Projects</span>
            </h2>

            <p className="project-intro">
              E-commerce applications focused on product management, shopping
              carts, APIs, checkout experiences and powerful admin panels.
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
                    <span>ecommerce-project.local</span>
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

export default EcommerceProjects;