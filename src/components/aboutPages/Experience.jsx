import React from "react";
import "../../assets/css/about_css/experience.scss";


const Experience = () => {
  const experiences = [
    {
      year: "01",
      title: "PHP & Laravel Development",
      type: "Backend Development",
      icon: "⌘",
      description:
        "Building clean and structured backend systems using PHP and Laravel, with a focus on practical web applications and maintainable code.",
      skills: ["PHP", "Laravel", "MySQL"],
    },
    {
      year: "02",
      title: "REST API Development",
      type: "API & Backend",
      icon: "</>",
      description:
        "Working with REST APIs to connect backend systems with frontend applications and create smooth data-driven experiences.",
      skills: ["REST API", "PHP", "Laravel"],
    },
    {
      year: "03",
      title: "Frontend Development",
      type: "Web Development",
      icon: "◈",
      description:
        "Creating responsive and user-friendly interfaces using React, JavaScript, HTML and CSS with attention to modern UI design.",
      skills: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
      year: "04",
      title: "Real-World Projects",
      type: "Project Development",
      icon: "✦",
      description:
        "Developing practical projects that combine frontend interfaces, backend systems and databases to solve real-world problems.",
      skills: ["React", "Laravel", "MySQL"],
    },
  ];

  return (
      <section className="experience-section" id="experience">
        <div className="container">

          {/* Section Heading */}
          <div className="experience-heading">
            <span className="text-subtitle">MY EXPERIENCE</span>

            <h2>
              My Development{" "}
              <span>Journey</span>
            </h2>

            <p>
              A look at the technologies, projects and development skills
              I've been building along my journey as a web developer.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="experience-timeline">

            {experiences.map((experience, index) => (
              <div
                className={`experience-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={experience.year}
              >

                {/* Timeline Number */}
                <div className="experience-number">
                  {experience.year}
                </div>

                {/* Experience Card */}
                <div className="experience-card">

                  <div className="experience-card-top">

                    <div className="experience-icon">
                      {experience.icon}
                    </div>

                    <div>
                      <span className="experience-type">
                        {experience.type}
                      </span>

                      <h3>{experience.title}</h3>
                    </div>

                  </div>

                  <p>{experience.description}</p>

                  <div className="experience-skills">
                    {experience.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom Stats */}
          <div className="experience-stats">

            <div className="experience-stat">
              <strong>PHP</strong>
              <span>Backend</span>
            </div>

            <div className="experience-stat">
              <strong>Laravel</strong>
              <span>Framework</span>
            </div>

            <div className="experience-stat">
              <strong>React</strong>
              <span>Frontend</span>
            </div>

            <div className="experience-stat">
              <strong>MySQL</strong>
              <span>Database</span>
            </div>

          </div>

        </div>
      </section>
  );
};

export default Experience;