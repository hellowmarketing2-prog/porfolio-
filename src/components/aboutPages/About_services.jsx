
import React from "react";
import Layout from "../common/Layout";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeIcon,
  ApiIcon,
  ReactIcon,
  Database02Icon,
  Bug01Icon,
  SecurityCheckIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

import "../../assets/css/about_css/About_services.scss";

const services = [
  {
    number: "01",
    icon: CodeIcon,
    title: "PHP Development",
    description:
      "I build reliable and maintainable PHP applications with clean architecture, reusable code and practical solutions for business needs.",
    tags: ["PHP", "Backend", "MySQL"],
  },
  {
    number: "02",
    icon: ApiIcon,
    title: "Laravel Development",
    description:
      "I develop Laravel applications, REST APIs, authentication systems and database-driven solutions with a focus on performance and clean code.",
    tags: ["Laravel", "REST API", "Authentication"],
  },
  {
    number: "03",
    icon: ReactIcon,
    title: "React Development",
    description:
      "I create responsive and interactive React interfaces with reusable components and modern frontend development practices.",
    tags: ["React", "JavaScript", "UI"],
  },
  {
    number: "04",
    icon: Database02Icon,
    title: "MySQL Database",
    description:
      "I design and manage structured MySQL databases, relationships and queries to keep web applications organized and efficient.",
    tags: ["MySQL", "Database", "Queries"],
  },
  {
    number: "05",
    icon: Bug01Icon,
    title: "Bug Fixing",
    description:
      "I troubleshoot PHP, Laravel, React and database issues, identify the root cause and implement practical fixes for application errors.",
    tags: ["Debugging", "Fixes", "Optimization"],
  },
  {
    number: "06",
    icon: SecurityCheckIcon,
    title: "Security & Privacy",
    description:
      "I focus on secure authentication, input validation, access control and responsible handling of application data.",
    tags: ["Security", "Validation", "Auth"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="services-page" id="services">

        <div className="container">

          {/* =========================================
              HEADING
          ========================================= */}

          <div className="services-heading">

            <div className="services-label">
              <span></span>
              MY SERVICES
            </div>

            <div className="services-heading-row">

              <h1>
                What I Can
                <br />
                <span>Do For You.</span>
              </h1>

              <p>
                I help businesses and individuals turn ideas into
                modern, responsive and functional web applications
                using reliable technologies.
              </p>

            </div>

          </div>


          {/* =========================================
              SERVICES GRID
          ========================================= */}

          <div className="services-grid">

            {services.map((service) => (

              <div className="service-card" key={service.number} data-color={service.number} data-number={service.number}>

                {/* Top */}
                <div className="service-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">

                    <HugeiconsIcon
                      icon={service.icon}
                      size={30}
                      color="currentColor"
                      strokeWidth={1.5}
                    />

                  </div>

                </div>


                {/* Content */}
                <div className="service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>


                {/* Technologies */}
                <div className="service-tags">

                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>


                {/* Bottom */}
                <div className="service-bottom">

                  <span>
                    SERVICE
                  </span>

                  <div className="service-arrow">

                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={20}
                      color="currentColor"
                      strokeWidth={1.5}
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* =========================================
              CTA
          ========================================= */}

          <div className="services-cta">

            <div>

              <span className="cta-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's build something
                <br />
                <span>great together.</span>
              </h2>

              <p>
                Have an idea, website or application that needs
                development? Let's discuss your requirements.
              </p>

            </div>

            <a
              href="/contact"
              className="services-cta-button"
            >
              <span>CONTACT ME</span>

              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={22}
                color="currentColor"
                strokeWidth={1.5}
              />
            </a>

          </div>

        </div>

      </section>
    </Layout>
  );
};

export default Services;
