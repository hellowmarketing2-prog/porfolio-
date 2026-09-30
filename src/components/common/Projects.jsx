import React from "react";
import "../../assets/css/projects.scss";
import ProjectImage1 from "../../assets/images/project1.jpg";
import ProjectImage2 from "../../assets/images/project2.jpg";
import ProjectImage3 from "../../assets/images/project3.jpg";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
export const Projects = () => {
  return (
    <>
    <section className="project-section" id="projects">

      <div className="container container1">
        <div className="row">
          <div className="col-md-6 left">
            <p className="left-p">
              <span className="left-span">Projects</span>
            </p>
            <h2 className="title-1">
              My Latest <br />
              awesome
              <span className="title-2 ms-2">Projects</span>
            </h2>
            <div className="pt-4">
              {/* project card  */}

              <div className="project-card">
                {/* <!-- Browser Header --> */}
                <div className="project-browser-header">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="browser-search"></div>
                </div>

                {/* <!-- Project Image --> */}
                <div className="project-image">
                  <img src={ProjectImage2} alt="" />

                  {/* <!-- Overlay --> */}
                  <div className="project-overlay">
                    <h3>Project Title</h3>

                    <a href="#">
                      VIEW WORK
                      <span>
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={28}
                          color="currentColor"
                          strokeWidth={1.5}
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-card">
              {/* <!-- Browser Header --> */}
              <div className="project-browser-header">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-search"></div>
              </div>

              {/* <!-- Project Image --> */}
              <div className="project-image">
                <img src={ProjectImage1} alt="" />

                {/* <!-- Overlay --> */}
                <div className="project-overlay">
                  <h3>Project Title</h3>

                  <a href="#">
                    VIEW WORK
                    <span>
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={28}
                        color="currentColor"
                        strokeWidth={1.5}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card mt-5 mb-5">
              {/* <!-- Browser Header --> */}
              <div className="project-browser-header">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-search"></div>
              </div>

              {/* <!-- Project Image --> */}
              <div className="project-image">
                <img src={ProjectImage3} alt="" />

                {/* <!-- Overlay --> */}
                <div className="project-overlay">
                  <h3>Project Title</h3>

                  <a href="#">
                    VIEW WORK
                    <span>
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={28}
                        color="currentColor"
                        strokeWidth={1.5}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};
export default Projects;
