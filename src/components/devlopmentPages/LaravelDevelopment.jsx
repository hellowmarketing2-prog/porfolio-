import React from "react";
import Layout from "../common/Layout";

import {
  ArrowUpRight01Icon,
  CheckmarkCircle02Icon,
  CodeIcon,
  Database02Icon,
  SecurityCheckIcon,
  ApiIcon,
  ZapIcon,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";

import "../../assets/css/service_css/laraveldevelopment.scss";

const LaravelDevelopment = () => {
  const features = [
    "Laravel Web Applications",
    "REST API Development",
    "MySQL Database Integration",
    "Authentication & Authorization",
    "CRUD Applications",
    "Admin Dashboards",
    "API Authentication",
    "Backend Bug Fixing",
  ];

  const technologies = [
    "PHP",
    "Laravel",
    "MySQL",
    "REST API",
    "Eloquent ORM",
    "Authentication",
    "React",
    "Git",
  ];

  return (
    <Layout>
      <section className="laravel-development-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="laravel-hero">
          <div className="laravel-glow laravel-glow-one"></div>
          <div className="laravel-glow laravel-glow-two"></div>

          <div className="container">
            <div className="row align-items-center g-5">

              {/* Hero Content */}
              <div className="col-lg-7">
                <div className="laravel-badge">
                  <span className="laravel-badge-dot"></span>
                  LARAVEL DEVELOPMENT
                </div>

                <h1>
                  Powerful Backend
                  <br />
                  <span>Built With Laravel.</span>
                </h1>

                <p className="laravel-hero-text">
                  I build scalable Laravel applications, REST APIs and
                  database-driven systems with clean architecture,
                  secure authentication and maintainable code.
                </p>

                <div className="laravel-hero-buttons">
                  <a
                    href="/contact"
                    className="laravel-primary-btn"
                  >
                    <span>Hire Me</span>

                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={20}
                      color="currentColor"
                      strokeWidth={1.8}
                    />
                  </a>

                  <a
                    href="#laravel-stack"
                    className="laravel-secondary-btn"
                  >
                    Explore Stack
                  </a>
                </div>

                <div className="laravel-stats">
                  <div>
                    <strong>01</strong>
                    <span>APIs</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Backend</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>Database</span>
                  </div>

                  <div>
                    <strong>04</strong>
                    <span>Security</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="col-lg-5">
                <div className="laravel-visual">

                  {/* Floating Icon 1 */}
                  <div className="laravel-floating laravel-icon-one">
                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={24}
                      color="currentColor"
                    />
                  </div>

                  {/* Floating Icon 2 */}
                  <div className="laravel-floating laravel-icon-two">
                    <HugeiconsIcon
                      icon={ApiIcon}
                      size={24}
                      color="currentColor"
                    />
                  </div>

                  {/* Floating Icon 3 */}
                  <div className="laravel-floating laravel-icon-three">
                    <HugeiconsIcon
                      icon={Database02Icon}
                      size={24}
                      color="currentColor"
                    />
                  </div>

                  {/* Backend Card */}
                  <div className="laravel-backend-card">

                    <div className="laravel-card-top">
                      <div className="laravel-window-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <span>Laravel Backend</span>
                    </div>

                    <div className="laravel-code">

                      <div className="laravel-code-line">
                        <i>01</i>
                        <b>Route</b>::post(
                        <em>'/api/login'</em>
                        );
                      </div>

                      <div className="laravel-code-line">
                        <i>02</i>
                        <b>public function</b> login()
                      </div>

                      <div className="laravel-code-line">
                        <i>03</i>
                        {"{"}
                      </div>

                      <div className="laravel-code-line">
                        <i>04</i>
                        &nbsp;&nbsp;
                        <b>return</b> response()
                      </div>

                      <div className="laravel-code-line">
                        <i>05</i>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"->"}json(
                        <em>data</em>
                        );
                      </div>

                      <div className="laravel-code-line">
                        <i>06</i>
                        {"}"}
                      </div>

                    </div>

                    <div className="laravel-status">
                      <span className="laravel-status-dot"></span>
                      API Connected
                      <strong>200</strong>
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

        <div className="laravel-overview">
          <div className="container">

            <div className="laravel-section-heading">
              <span>WHAT I BUILD</span>

              <h2>
                Laravel Backend
                <br />
                <strong>Made For Real Applications.</strong>
              </h2>

              <p>
                From authentication systems and REST APIs to admin
                dashboards and database-driven applications, I build
                Laravel backends that are organized and practical.
              </p>
            </div>

            <div className="row g-4">

              {/* Main Card */}
              <div className="col-lg-5">
                <div className="laravel-main-card">

                  <div className="laravel-main-icon">
                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={30}
                      color="currentColor"
                    />
                  </div>

                  <span className="main-card-label">
                    LARAVEL BACKEND
                  </span>

                  <h3>
                    Clean.
                    <br />
                    Secure.
                    <br />
                    Scalable.
                  </h3>

                  <p>
                    I focus on structured backend architecture,
                    reusable code and reliable database integration
                    for modern web applications.
                  </p>

                  <div className="main-card-bottom">
                    <span>PHP</span>
                    <b>+</b>
                    <span>LARAVEL</span>
                    <b>+</b>
                    <span>MYSQL</span>
                  </div>

                </div>
              </div>


              {/* Feature Cards */}
              <div className="col-lg-7">
                <div className="laravel-feature-grid">

                  {features.map((feature, index) => (
                    <div
                      className="laravel-feature-card"
                      key={feature}
                    >
                      <div className="laravel-feature-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="laravel-check">
                        <HugeiconsIcon
                          icon={CheckmarkCircle02Icon}
                          size={22}
                          color="currentColor"
                          strokeWidth={1.7}
                        />
                      </div>

                      <span>{feature}</span>

                      <div className="laravel-feature-arrow">
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
            API / DATABASE / SECURITY
        ===================================================== */}

        <div className="laravel-capabilities">
          <div className="container">

            <div className="row g-4">

              {/* API */}
              <div className="col-md-4">
                <div className="capability-card">

                  <div className="capability-icon">
                    <HugeiconsIcon
                      icon={ApiIcon}
                      size={28}
                      color="currentColor"
                    />
                  </div>

                  <span>01</span>

                  <h3>REST APIs</h3>

                  <p>
                    Build structured APIs that connect Laravel
                    backends with React and other frontend
                    applications.
                  </p>

                </div>
              </div>


              {/* Database */}
              <div className="col-md-4">
                <div className="capability-card">

                  <div className="capability-icon">
                    <HugeiconsIcon
                      icon={Database02Icon}
                      size={28}
                      color="currentColor"
                    />
                  </div>

                  <span>02</span>

                  <h3>Database Systems</h3>

                  <p>
                    Work with MySQL, migrations, relationships
                    and Eloquent ORM for organized application data.
                  </p>

                </div>
              </div>


              {/* Authentication */}
              <div className="col-md-4">
                <div className="capability-card">

                  <div className="capability-icon">
                    <HugeiconsIcon
                      icon={SecurityCheckIcon}
                      size={28}
                      color="currentColor"
                    />
                  </div>

                  <span>03</span>

                  <h3>Authentication</h3>

                  <p>
                    Implement login systems, protected routes,
                    authorization and secure API access.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>


        {/* =====================================================
            TECHNOLOGY STACK
        ===================================================== */}

        <div
          className="laravel-stack"
          id="laravel-stack"
        >
          <div className="container">

            <div className="laravel-stack-heading">

              <span>MY LARAVEL TOOLKIT</span>

              <h2>
                Technologies I
                <br />
                <strong>Work With.</strong>
              </h2>

              <p>
                A backend-focused stack for building reliable
                Laravel applications and modern APIs.
              </p>

            </div>


            <div className="laravel-tech-grid">

              {technologies.map((tech, index) => (
                <div
                  className="laravel-tech-card"
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


       

      </section>
    </Layout>
  );
};

export default LaravelDevelopment;