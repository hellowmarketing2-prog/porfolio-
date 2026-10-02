import React from "react";
import Layout from "../common/Layout";

import {
  ArrowUpRight01Icon,
  CheckmarkCircle02Icon,
  CodeIcon,
  Database02Icon,
  SecurityCheckIcon,
  ZapIcon,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";

import "../../assets/css/service_css/bugfix.scss";

const BugFixing = () => {
  const problems = [
    "PHP Errors",
    "Laravel Errors",
    "React Errors",
    "API Issues",
    "Database Errors",
    "Authentication Problems",
    "JavaScript Errors",
    "Frontend UI Issues",
  ];

  const technologies = [
    "PHP",
    "Laravel",
    "React",
    "JavaScript",
    "MySQL",
    "REST API",
    "Bootstrap",
    "Git",
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      text: "I first understand the error and reproduce the problem.",
    },
    {
      number: "02",
      title: "Find Cause",
      text: "I inspect the code, logs, API requests and database where necessary.",
    },
    {
      number: "03",
      title: "Fix",
      text: "I implement the required fix without unnecessarily changing existing functionality.",
    },
    {
      number: "04",
      title: "Test",
      text: "I test the affected functionality to verify that the issue is resolved.",
    },
  ];

  return (
    <Layout>
      <section className="bugfix-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="bugfix-hero">

          <div className="bugfix-glow bugfix-glow-one"></div>
          <div className="bugfix-glow bugfix-glow-two"></div>

          <div className="container">

            <div className="row align-items-center g-5">

              {/* Hero Content */}

              <div className="col-lg-7">

                <div className="bugfix-badge">
                  <span className="bugfix-badge-dot"></span>
                  BUG FIXING & OPTIMIZATION
                </div>

                <h1>
                  Find The Problem.
                  <br />
                  <span>Fix The Code.</span>
                </h1>

                <p className="bugfix-hero-text">
                  Having an error in your PHP, Laravel, React or
                  JavaScript project? I identify the root cause,
                  implement a practical fix and test the affected
                  functionality.
                </p>

                <div className="bugfix-hero-buttons">

                  <a
                    href="/contact"
                    className="bugfix-primary-btn"
                  >
                    <span>Send Me Your Problem</span>

                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={20}
                      color="currentColor"
                      strokeWidth={1.8}
                    />
                  </a>

                  <a
                    href="#bugfix-process"
                    className="bugfix-secondary-btn"
                  >
                    View My Process
                  </a>

                </div>

                <div className="bugfix-stats">

                  <div>
                    <strong>01</strong>
                    <span>Find</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Fix</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>Test</span>
                  </div>

                  <div>
                    <strong>04</strong>
                    <span>Optimize</span>
                  </div>

                </div>

              </div>


              {/* Hero Visual */}

              <div className="col-lg-5">

                <div className="bugfix-visual">

                  <div className="bugfix-floating bugfix-icon-one">
                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={24}
                      color="currentColor"
                    />
                  </div>

                  <div className="bugfix-floating bugfix-icon-two">
                    <HugeiconsIcon
                      icon={Database02Icon}
                      size={24}
                      color="currentColor"
                    />
                  </div>

                  <div className="bugfix-floating bugfix-icon-three">
                    <HugeiconsIcon
                      icon={SecurityCheckIcon}
                      size={24}
                      color="currentColor"
                    />
                  </div>


                  {/* Terminal Card */}

                  <div className="bugfix-terminal">

                    <div className="bugfix-terminal-top">

                      <div className="bugfix-window-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <span>debug.log</span>

                    </div>


                    <div className="bugfix-terminal-body">

                      <div className="terminal-line">
                        <i>01</i>
                        <span className="terminal-command">
                          $ npm run debug
                        </span>
                      </div>

                      <div className="terminal-line">
                        <i>02</i>
                        <span className="terminal-error">
                          ERROR: API request failed
                        </span>
                      </div>

                      <div className="terminal-line">
                        <i>03</i>
                        <span>
                          &nbsp;→ Checking endpoint...
                        </span>
                      </div>

                      <div className="terminal-line">
                        <i>04</i>
                        <span>
                          &nbsp;→ Checking response...
                        </span>
                      </div>

                      <div className="terminal-line">
                        <i>05</i>
                        <span className="terminal-warning">
                          WARNING: Invalid response
                        </span>
                      </div>

                      <div className="terminal-line">
                        <i>06</i>
                        <span>
                          &nbsp;→ Applying fix...
                        </span>
                      </div>

                      <div className="terminal-line">
                        <i>07</i>
                        <span className="terminal-success">
                          ✓ Problem Fixed
                        </span>
                      </div>

                    </div>


                    <div className="bugfix-status">

                      <span className="bugfix-status-dot"></span>

                      System Checked

                      <strong>FIXED</strong>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            PROBLEMS
        ===================================================== */}

        <div className="bugfix-problems">

          <div className="container">

            <div className="bugfix-section-heading">

              <span>WHAT I CAN FIX</span>

              <h2>
                From Errors
                <br />
                <strong>To Working Code.</strong>
              </h2>

              <p>
                Whether the problem is in the frontend, backend,
                API or database, I can inspect the issue and work
                toward a practical solution.
              </p>

            </div>


            <div className="row g-4">

              {/* Main Card */}

              <div className="col-lg-5">

                <div className="bugfix-main-card">

                  <div className="bugfix-main-icon">

                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={30}
                      color="currentColor"
                    />

                  </div>

                  <span className="bugfix-main-label">
                    DEBUGGING & FIXING
                  </span>

                  <h3>
                    Find.
                    <br />
                    Fix.
                    <br />
                    Improve.
                  </h3>

                  <p>
                    I investigate the actual cause of a problem
                    instead of only hiding the visible error.
                    The goal is to make the affected functionality
                    work correctly again.
                  </p>

                  <div className="bugfix-main-bottom">

                    <span>DEBUG</span>
                    <b>+</b>
                    <span>FIX</span>
                    <b>+</b>
                    <span>TEST</span>

                  </div>

                </div>

              </div>


              {/* Problem Cards */}

              <div className="col-lg-7">

                <div className="bugfix-feature-grid">

                  {problems.map((problem, index) => (
                    <div
                      className="bugfix-feature-card"
                      key={problem}
                    >

                      <div className="bugfix-feature-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="bugfix-check">

                        <HugeiconsIcon
                          icon={CheckmarkCircle02Icon}
                          size={22}
                          color="currentColor"
                          strokeWidth={1.7}
                        />

                      </div>

                      <span>{problem}</span>

                      <div className="bugfix-feature-arrow">

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
            DEBUGGING CAPABILITIES
        ===================================================== */}

        <div className="bugfix-capabilities">

          <div className="container">

            <div className="row g-4">

              <div className="col-md-4">

                <div className="bugfix-capability-card">

                  <div className="bugfix-capability-icon">

                    <HugeiconsIcon
                      icon={CodeIcon}
                      size={28}
                      color="currentColor"
                    />

                  </div>

                  <span>01</span>

                  <h3>Code Errors</h3>

                  <p>
                    Debug PHP, Laravel, React and JavaScript
                    errors and identify where the problem is
                    coming from.
                  </p>

                </div>

              </div>


              <div className="col-md-4">

                <div className="bugfix-capability-card">

                  <div className="bugfix-capability-icon">

                    <HugeiconsIcon
                      icon={Database02Icon}
                      size={28}
                      color="currentColor"
                    />

                  </div>

                  <span>02</span>

                  <h3>API & Database</h3>

                  <p>
                    Investigate API requests, responses,
                    MySQL queries and database-related issues.
                  </p>

                </div>

              </div>


              <div className="col-md-4">

                <div className="bugfix-capability-card">

                  <div className="bugfix-capability-icon">

                    <HugeiconsIcon
                      icon={SecurityCheckIcon}
                      size={28}
                      color="currentColor"
                    />

                  </div>

                  <span>03</span>

                  <h3>Authentication</h3>

                  <p>
                    Troubleshoot login systems, tokens,
                    protected routes and authentication issues.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            PROCESS
        ===================================================== */}

        <div
          className="bugfix-process"
          id="bugfix-process"
        >

          <div className="container">

            <div className="bugfix-process-heading">

              <span>MY DEBUGGING WORKFLOW</span>

              <h2>
                A Clear Process
                <br />
                <strong>For Solving Problems.</strong>
              </h2>

              <p>
                I follow a structured process to understand the
                issue, find its cause, implement the fix and
                verify the result.
              </p>

            </div>


            <div className="bugfix-process-grid">

              {process.map((item) => (
                <div
                  className="bugfix-process-card"
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
            TECHNOLOGIES
        ===================================================== */}

        <div
          className="bugfix-stack"
          id="bugfix-stack"
        >

          <div className="container">

            <div className="bugfix-stack-heading">

              <span>MY DEBUGGING TOOLKIT</span>

              <h2>
                Technologies I
                <br />
                <strong>Can Work With.</strong>
              </h2>

              <p>
                A practical development stack for diagnosing and
                fixing common web application problems.
              </p>

            </div>


            <div className="bugfix-tech-grid">

              {technologies.map((tech, index) => (
                <div
                  className="bugfix-tech-card"
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

export default BugFixing;