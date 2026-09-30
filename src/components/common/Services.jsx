import React, { useState } from "react";
import "../../assets/css/services.scss";

const services = [
    {
        id: 1,
        number: "01",
        title: "Web Development",
        shortTitle: "Web Development",
        icon: "🌐",
        description:
            "I build modern, responsive and high-performance websites that are designed to provide a smooth experience across desktop, tablet and mobile devices.",
        features: [
            "Responsive Website Development",
            "Modern UI Implementation",
            "Performance Optimization",
            "SEO Friendly Structure",
            "Cross Browser Compatibility",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },

    {
        id: 2,
        number: "02",
        title: "PHP & Laravel",
        shortTitle: "PHP & Laravel",
        icon: "⚡",
        description:
            "I develop powerful backend applications using PHP and Laravel with clean architecture, REST APIs, authentication and database integration.",
        features: [
            "Laravel Web Applications",
            "REST API Development",
            "Authentication Systems",
            "MySQL Database Integration",
            "Admin Dashboard Development",
        ],
        technologies: ["PHP", "Laravel", "MySQL", "REST API"],
    },

    {
        id: 3,
        number: "03",
        title: "React Development",
        shortTitle: "React Development",
        icon: "⚛️",
        description:
            "I create interactive React interfaces with reusable components, smooth navigation and dynamic data handling.",
        features: [
            "Reusable React Components",
            "API Integration",
            "React Router",
            "Dynamic Interfaces",
            "Responsive Design",
        ],
        technologies: ["React", "JavaScript", "Bootstrap", "REST API"],
    },

    {
        id: 4,
        number: "04",
        title: "Bug Fixing",
        shortTitle: "Bug Fixing",
        icon: "🛠️",
        description:
            "I troubleshoot and fix frontend, backend and Laravel issues while keeping the existing project structure clean and stable.",
        features: [
            "Laravel Error Fixing",
            "React Error Fixing",
            "API Debugging",
            "Database Problems",
            "Frontend UI Issues",
        ],
        technologies: ["PHP", "Laravel", "React", "MySQL"],
    },

    {
        id: 5,
        number: "05",
        title: "API Development",
        shortTitle: "API Development",
        icon: "🔗",
        description:
            "I create secure and scalable REST APIs for websites and frontend applications with proper authentication and database communication.",
        features: [
            "RESTful API Development",
            "API Authentication",
            "CRUD Operations",
            "JSON Responses",
            "Frontend API Integration",
        ],
        technologies: ["Laravel", "PHP", "MySQL", "React"],
    },
];

const Services = () => {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="services-section" id="services">

            {/* Heading */}
            <div className="services-heading">

                <span className="text-subtitle">
                    MY SERVICES
                </span>

                <h2>
                    What I <span>Can Do</span>
                </h2>

                <p>
                    I create modern digital experiences with clean code,
                    professional design and reliable functionality.
                </p>

            </div>


            {/* Main Services Area */}
            <div className="services-wrapper">

                {/* ================= SIDEBAR ================= */}

                <aside className="services-sidebar">

                    <div className="sidebar-label">
                        SERVICES
                    </div>

                    <div className="services-menu">

                        {services.map((service) => (

                            <button
                                key={service.id}
                                className={`service-menu-item ${
                                    activeService.id === service.id
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() =>
                                    setActiveService(service)
                                }
                            >

                                <span className="service-number">
                                    {service.number}
                                </span>

                                <span className="service-menu-title">
                                    {service.shortTitle}
                                </span>

                                <span className="service-arrow">
                                    →
                                </span>

                            </button>

                        ))}

                    </div>

                </aside>


                {/* ================= CONTENT ================= */}

                <div className="service-content">

                    {/* Decorative circles */}

                    <div className="service-decoration decoration-one"></div>
                    <div className="service-decoration decoration-two"></div>


                    {/* Icon */}

                    <div className="service-icon-box">

                        <div className="service-icon">
                            {activeService.icon}
                        </div>

                    </div>


                    {/* Number */}

                    <span className="content-number">
                        {activeService.number}
                    </span>


                    {/* Title */}

                    <h3 key={activeService.id} className="service-title">
                        {activeService.title}
                    </h3>


                    {/* Description */}

                    <p
                        key={`description-${activeService.id}`}
                        className="service-description"
                    >
                        {activeService.description}
                    </p>


                    {/* Features */}

                    <div className="service-details">

                        <div className="features-column">

                            <h4>
                                What You'll Get
                            </h4>

                            <div className="features-list">

                                {activeService.features.map(
                                    (feature, index) => (

                                        <div
                                            className="feature-item"
                                            key={index}
                                            style={{
                                                animationDelay: `${
                                                    index * 0.08
                                                }s`,
                                            }}
                                        >

                                            <span className="feature-check">
                                                ✓
                                            </span>

                                            <span>
                                                {feature}
                                            </span>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>


                        {/* Technologies */}

                        <div className="technologies-column">

                            <h4>
                                Technologies
                            </h4>

                            <div className="technology-list">

                                {activeService.technologies.map(
                                    (technology, index) => (

                                        <span
                                            key={index}
                                            className="technology-badge"
                                        >
                                            {technology}
                                        </span>

                                    )
                                )}

                            </div>

                        </div>

                    </div>


                    {/* Button */}

                    <div className="service-action">

                       <a href="#contact">
                        <button type="button" className="gemilan-bt-send">
                <span className="gemilan-bt-send__t">Let's Work Together</span>
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

 
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Services;