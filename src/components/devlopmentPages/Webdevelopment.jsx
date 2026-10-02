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

import "../../assets/css/service_css/webDevelopment.scss";

const WebDevelopment = () => {
  const features = [
    "Responsive Website Development",
    "Modern UI & Clean Design",
    "Frontend & Backend Integration",
    "Database Integration",
    "REST API Integration",
    "Performance Optimization",
    "Mobile-Friendly Layout",
    "Secure Form Handling",
  ];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React",
    "PHP",
    "Laravel",
    "MySQL",
  ];

  return (
    <Layout>
      <section className="web-development-page">

        {/* ================= HERO ================= */}
        <div className="web-hero">
          <div className="web-hero-glow web-glow-one"></div>
          <div className="web-hero-glow web-glow-two"></div>

          <div className="container">
            <div className="row align-items-center g-5">

              {/* Hero Content */}
              <div className="col-lg-7">
                <div className="web-badge">
                  <span className="badge-dot"></span>
                  WEB DEVELOPMENT
                </div>

                <h1>
                  Modern Websites
                  <br />
                  <span>Built To Perform.</span>
                </h1>

                <p className="web-hero-text">
                  I build responsive, modern and functional websites
                  that combine clean design, powerful functionality
                  and a smooth user experience across every device.
                </p>

                <div className="web-hero-buttons">
                  <a href="/contact" className="web-primary-btn">
                    <span>Start A Project</span>

                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={20}
                      color="currentColor"
                      strokeWidth={1.8}
                    />
                  </a>

                  <a href="#technologies" className="web-secondary-btn">
                    Explore Technologies
                  </a>
                </div>

                <div className="web-mini-stats">
                  <div>
                    <strong>01</strong>
                    <span>Clean Code</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Responsive</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>Scalable</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="col-lg-5">
                <div className="web-code-wrapper">

                  <div className="floating-icon icon-one">
                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={25}
                      color="currentColor"
                    />
                  </div>

                  <div className="floating-icon icon-two">
                    <HugeiconsIcon
                      icon={SmartPhone01Icon}
                      size={24}
                      color="currentColor"
                    />
                  </div>

                  <div className="floating-icon icon-three">
                    <HugeiconsIcon
                      icon={Database02Icon}
                      size={24}
                      color="currentColor"
                    />
                  </div>

                  <div className="web-code-card">

                    <div className="code-top">
                      <div className="code-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <span>web-project.jsx</span>
                    </div>

                    <div className="code-content">
                      <span className="code-line">
                        <i>01</i> <b>&lt;Website</b>
                      </span>

                      <span className="code-line">
                        <i>02</i> &nbsp;&nbsp;responsive=
                        <em>"true"</em>
                      </span>

                      <span className="code-line">
                        <i>03</i> &nbsp;&nbsp;modern=
                        <em>"true"</em>
                      </span>

                      <span className="code-line">
                        <i>04</i> &nbsp;&nbsp;secure=
                        <em>"true"</em>
                      </span>

                      <span className="code-line">
                        <i>05</i> &nbsp;&nbsp;performance=
                        <em>"high"</em>
                      </span>

                      <span className="code-line">
                        <i>06</i> <b>/&gt;</b>
                      </span>
                    </div>

                    <div className="code-status">
                      <span className="status-dot"></span>
                      Project Ready
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* ================= OVERVIEW ================= */}
        <div className="web-overview">
          <div className="container">

            <div className="section-heading">
              <span>WHAT I DO</span>

              <h2>
                Complete Web Development
                <br />
                <strong>From Idea To Launch.</strong>
              </h2>

              <p>
                Whether you need a business website, portfolio,
                management system or custom web application, I can
                build a solution around your requirements.
              </p>
            </div>


            <div className="row g-4">

              {/* Main Content */}
              <div className="col-lg-5">
                <div className="overview-card overview-main">

                  <div className="overview-icon">
                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={28}
                      color="currentColor"
                    />
                  </div>

                  <h3>Built With Purpose</h3>

                  <p>
                    I focus on creating websites that are not only
                    visually attractive but also fast, responsive,
                    maintainable and easy to extend.
                  </p>

                  <div className="overview-line"></div>

                  <span>
                    DESIGN <b>+</b> DEVELOPMENT
                  </span>

                </div>
              </div>


              {/* Small Cards */}
              <div className="col-lg-7">

                <div className="feature-grid">

                  {features.map((feature, index) => (
                    <div
                      className="feature-card"
                      key={feature}
                    >
                      <div className="feature-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <HugeiconsIcon
                        icon={CheckmarkCircle02Icon}
                        size={22}
                        color="currentColor"
                        strokeWidth={1.7}
                      />

                      <span>{feature}</span>

                      <div className="feature-arrow">
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


        {/* ================= TECHNOLOGIES ================= */}
        <div
          className="web-technologies"
          id="technologies"
        >
          <div className="container">

            <div className="tech-heading">
              <span>MY TOOLKIT</span>

              <h2>
                Technologies I
                <br />
                <strong>Work With.</strong>
              </h2>

              <p>
                A practical technology stack for building modern
                and reliable web applications.
              </p>
            </div>

            <div className="tech-list">
              {technologies.map((tech, index) => (
                <div
                  className="tech-pill"
                  key={tech}
                  style={{
                    "--delay": `${index * 0.08}s`,
                  }}
                >
                  <span className="tech-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{tech}</span>

                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={17}
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

export default WebDevelopment;