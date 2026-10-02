
import Layout from "../common/Layout";
import Experience from "../aboutPages/Experience";
import React from "react";
import AboutMyselfImage from '../../assets/images/aboutmyself.png'
import '../../assets/css/about_css/About_myself.scss'
import   "../../assets/css/about_css/experience.scss";


const About = () => {
  return (
    
    <Layout>
<section className="about-section" id="about">
      <div className="container mt-5">
        <div className="row align-items-center g-5">
          {/* LEFT SIDE - IMAGE */}
          <div className="col-lg-5">
            <div className="about-image-wrapper">
              {/* Animated circles */}
              <div className="about-circle circle-one"></div>
              <div className="about-circle circle-two"></div>

              {/* Image */}
              <div className="about-image-box">
                <img
                  src={AboutMyselfImage}
                  alt="Aziz Ali"
                  className="about-image"
                />
              </div>

              {/* Floating experience card */}
              <div className="about-floating-card">
                <span className="floating-icon">💻</span>
                <div>
                  <strong>Web Developer</strong>
                  <small>PHP & Laravel</small>
                </div>
              </div>

              {/* Small floating code card */}
              <div className="code-card">
                <span>&lt;/&gt;</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="col-lg-7">
            <div className="about-content">
              <span className="text-subtitle">ABOUT ME</span>

              <h2>
                Building Modern Web
                <span> Experiences</span>
              </h2>

              <p className="about-intro">
                I'm <strong>Aziz Ali</strong>, a passionate Junior PHP & Laravel
                Developer who enjoys building modern, responsive and
                user-friendly web applications.
              </p>

              <p>
                I work mainly with{" "}
                <strong>PHP, Laravel, MySQL, React and JavaScript</strong>. I
                focus on creating clean backend systems, REST APIs and
                attractive frontend interfaces that provide a smooth user
                experience.
              </p>

              <p>
                My goal is to keep improving my development skills and build
                real-world products that solve practical problems.
              </p>

              {/* Skills */}
              <div className="about-skills">
                <span className="skill-item">PHP</span>
                <span className="skill-item">Laravel</span>
                <span className="skill-item">React</span>
                <span className="skill-item">MySQL</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">REST API</span>
              </div>

              {/* Buttons */}
              <div className="about-buttons">
            
               <a href="#contact">
                 <button type="button" className="gemilan-bt-send">
                  <span className="gemilan-bt-send__t">Hire Me</span>
                  <span className="gemilan-bt-send__p">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 2 11 13" />
                      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 2 11 13" />
                      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </span>
                </button>
               </a>

                <a href="#contact">
                  
                <button className="btn-talk fx-88">
                  <span className="btn-label ms-3">Let's Talk</span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Experience />
    </Layout>
    
   
  );
};

export default About;

