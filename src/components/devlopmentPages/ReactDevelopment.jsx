import React from "react";
import Layout from "../common/Layout";

import {
  ArrowUpRight01Icon,
  CheckmarkCircle02Icon,
  CodeIcon,
  Database02Icon,
  SmartPhone01Icon,
  ZapIcon,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";

import "../../assets/css/service_css/reactdevelopment.scss";

const ReactDevelopment = () => {
  const services = [
    "React Website Development",
    "Reusable Components",
    "React Router Integration",
    "REST API Integration",
    "Authentication Interfaces",
    "Responsive UI",
    "State Management",
    "Bug Fixing & Optimization",
  ];

  const technologies = [
    "React",
    "JavaScript",
    "JSX",
    "React Router",
    "REST APIs",
    "Bootstrap",
    "SCSS",
    "Git",
  ];

  const process = [
    {
      number: "01",
      title: "Planning",
      text: "Understand the project requirements and plan the frontend structure.",
    },
    {
      number: "02",
      title: "UI Development",
      text: "Build reusable React components and responsive user interfaces.",
    },
    {
      number: "03",
      title: "API Integration",
      text: "Connect React applications with REST APIs and backend services.",
    },
    {
      number: "04",
      title: "Testing",
      text: "Test functionality, responsiveness and fix frontend issues.",
    },
  ];

  return (
    <Layout>
      <section className="react-development-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="react-hero">
          <div className="react-glow react-glow-one"></div>
          <div className="react-glow react-glow-two"></div>

          <div className="container">
            <div className="row align-items-center g-5">

              {/* Hero Content */}
              <div className="col-lg-7">

                <div className="react-badge">
                  <span className="react-badge-dot"></span>
                  REACT DEVELOPMENT
                </div>

                <h1>
                  Interactive Frontends
                  <br />
                  <span>Built With React.</span>
                </h1>

                <p className="react-hero-text">
                  I build modern, responsive and interactive React
                  applications using reusable components, API integration
                  and clean frontend architecture.
                </p>

                <div className="react-hero-buttons">

                  <a
                    href="/contact"
                    className="react-primary-btn"
                  >
                    <span>Discuss Project</span>

                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={20}
                      color="currentColor"
                      strokeWidth={1.8}
                    />
                  </a>

                  <a
                    href="#react-stack"
                    className="react-secondary-btn"
                  >
                    Explore Stack
                  </a>

                </div>

                <div className="react-stats">

                  <div>
                    <strong>01</strong>
                    <span>Components</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Responsive</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>APIs</span>
                  </div>

                  <div>
                    <strong>04</strong>
                    <span>UI/UX</span>
                  </div>

                </div>

              </div>


              {/* Hero Visual */}
              <div className="col-lg-5">

                <div className="react-visual">

                  {/* Floating Icons */}

                  <div className="react-floating react-icon-one">
                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={24}
                      color="currentColor"
                    />
                  </div>

                  <div className="react-floating react-icon-two">
                    <HugeiconsIcon
                      icon={SmartPhone01Icon}
                      size={24}
                      color="currentColor"
                    />
                  </div>

                  <div className="react-floating react-icon-three">
                    <HugeiconsIcon
                      icon={Database02Icon}
                      size={24}
                      color="currentColor"
                    />
                  </div>


                  {/* React Code Card */}

                  <div className="react-code-card">

                    <div className="react-card-top">

                      <div className="react-window-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <span>React Component</span>

                    </div>


                    <div className="react-code">

                      <div className="react-code-line">
                        <i>01</i>
                        <b>const</b>{" "}
                        <em>App</em> = () =&gt; {"{"}
                      </div>

                      <div className="react-code-line">
                        <i>02</i>
                        &nbsp;&nbsp;
                        <b>return</b> (
                      </div>

                      <div className="react-code-line">
                        <i>03</i>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &lt;<em>main</em>&gt;
                      </div>

                      <div className="react-code-line">
                        <i>04</i>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &lt;<em>Hero</em> /&gt;
                      </div>

                      <div className="react-code-line">
                        <i>05</i>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &lt;<em>Projects</em> /&gt;
                      </div>

                      <div className="react-code-line">
                        <i>06</i>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &lt;/<em>main</em>&gt;
                      </div>

                      <div className="react-code-line">
                        <i>07</i>
                        &nbsp;&nbsp;
                        );
                      </div>

                      <div className="react-code-line">
                        <i>08</i>
                        {"}"};
                      </div>

                    </div>


                    <div className="react-status">

                      <span className="react-status-dot"></span>

                      React App Ready

                      <strong>✓</strong>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>


        {/* =====================================================
            OVERVIEW
        ===================================================== */}

        <div className="react-overview">

          <div className="container">

            <div className="react-section-heading">

              <span>WHAT I BUILD</span>

              <h2>
                Modern React
                <br />
                <strong>Interfaces For Real Projects.</strong>
              </h2>

              <p>
                From business websites and dashboards to API-powered
                applications, I build React interfaces that are
                reusable, responsive and easy to maintain.
              </p>

            </div>


            <div className="row g-4">

              {/* Main Card */}

              <div className="col-lg-5">

                <div className="react-main-card">

                  <div className="react-main-icon">

                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={30}
                      color="currentColor"
                    />

                  </div>

                  <span className="react-main-label">
                    REACT FRONTEND
                  </span>

                  <h3>
                    Modern.
                    <br />
                    Interactive.
                    <br />
                    Responsive.
                  </h3>

                  <p>
                    I focus on reusable components, clean frontend
                    architecture and responsive interfaces that work
                    across modern devices.
                  </p>

                  <div className="react-main-bottom">

                    <span>REACT</span>
                    <b>+</b>
                    <span>JSX</span>
                    <b>+</b>
                    <span>API</span>

                  </div>

                </div>

              </div>


              {/* Feature Cards */}

              <div className="col-lg-7">

                <div className="react-feature-grid">

                  {services.map((service, index) => (
                    <div
                      className="react-feature-card"
                      key={service}
                    >

                      <div className="react-feature-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="react-check">

                        <HugeiconsIcon
                          icon={CheckmarkCircle02Icon}
                          size={22}
                          color="currentColor"
                          strokeWidth={1.7}
                        />

                      </div>

                      <span>{service}</span>

                      <div className="react-feature-arrow">

                        <HugeiconsIcon
                          icon={ArrowUpRight01Icon}
                          size={17}
                          color="currentColor"
                        />

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <div className="react-capabilities">

          <div className="container">

            <div className="row g-4">

              {/* Component Development */}

              <div className="col-md-4">

                <div className="react-capability-card">

                  <div className="react-capability-icon">

                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={28}
                      color="currentColor"
                    />

                  </div>

                  <span>01</span>

                  <h3>Reusable Components</h3>

                  <p>
                    Build reusable React components that make
                    applications easier to develop, update and scale.
                  </p>

                </div>

              </div>


              {/* API Integration */}

              <div className="col-md-4">

                <div className="react-capability-card">

                  <div className="react-capability-icon">

                    <HugeiconsIcon
                      icon={Database02Icon}
                      size={28}
                      color="currentColor"
                    />

                  </div>

                  <span>02</span>

                  <h3>API Integration</h3>

                  <p>
                    Connect React applications with Laravel,
                    REST APIs and other backend services.
                  </p>

                </div>

              </div>


              {/* Responsive UI */}

              <div className="col-md-4">

                <div className="react-capability-card">

                  <div className="react-capability-icon">

                    <HugeiconsIcon
                      icon={SmartPhone01Icon}
                      size={28}
                      color="currentColor"
                    />

                  </div>

                  <span>03</span>

                  <h3>Responsive UI</h3>

                  <p>
                    Create responsive interfaces that provide
                    a consistent experience across different screens.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            DEVELOPMENT PROCESS
        ===================================================== */}

        <div className="react-process">

          <div className="container">

            <div className="react-process-heading">

              <span>MY WORKFLOW</span>

              <h2>
                React Development
                <br />
                <strong>Process.</strong>
              </h2>

              <p>
                A simple development workflow focused on clean code,
                reusable components and reliable functionality.
              </p>

            </div>


            <div className="react-process-grid">

              {process.map((item) => (
                <div
                  className="react-process-card"
                  key={item.number}
                >

                  <span className="process-number">
                    {item.number}
                  </span>

                  <div className="process-line"></div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={20}
                    color="currentColor"
                  />

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            TECHNOLOGY STACK
        ===================================================== */}

        <div
          className="react-stack"
          id="react-stack"
        >

          <div className="container">

            <div className="react-stack-heading">

              <span>MY REACT TOOLKIT</span>

              <h2>
                Technologies I
                <br />
                <strong>Work With.</strong>
              </h2>

              <p>
                A frontend-focused toolkit for building modern,
                responsive and interactive React applications.
              </p>

            </div>


            <div className="react-tech-grid">

              {technologies.map((tech, index) => (
                <div
                  className="react-tech-card"
                  key={tech}
                  style={{
                    "--tech-delay": `${index * 0.08}s`,
                  }}
                >

                  <span className="tech-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="tech-name">
                    {tech}
                  </span>

                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={18}
                    color="currentColor"
                  />

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="react-final-cta">

          <div className="react-cta-orb react-orb-one"></div>
          <div className="react-cta-orb react-orb-two"></div>

          <div className="container">

            <div className="react-cta-inner">

              <div className="react-cta-icon">

                <HugeiconsIcon
                  icon={ZapIcon}
                  size={28}
                  color="currentColor"
                />

              </div>

              <span>
                NEED A REACT FRONTEND?
              </span>

              <h2>
                Let's build your
                <br />
                <strong>next interface.</strong>
              </h2>

              <p>
                Have a React website, dashboard or API-powered
                application in mind? Let's discuss your requirements
                and build a clean, modern frontend.
              </p>

              <a
                href="/contact"
                className="react-cta-button"
              >

                <span>LET'S WORK TOGETHER</span>

                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={21}
                  color="currentColor"
                />

              </a>

            </div>

          </div>

        </div>

      </section>
    </Layout>
  );
};

export default ReactDevelopment;