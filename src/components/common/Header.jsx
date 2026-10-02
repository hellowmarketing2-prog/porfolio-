
import React from "react";

import { Nav, Navbar } from "react-bootstrap";

import LogoImage from "../../assets/images/hero.png";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

import "../../assets/css/header.css";

import { Link, useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
const goToSection = (sectionId) => {
  if (location.pathname === "/") {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  } else {
    navigate(`/#${sectionId}`);
  }
};

  // Contact
  const goToContact = () => {
    goToSection("contact");
  };

  return (
    <section className="header-section">
      <header>
        <div className="fixed-header">

          {/* Top Banner */}
          <div className="top-banner">
            <span>Its my Portfolio.</span>
          </div>

          {/* Navbar */}
          <Navbar expand="lg" className="bg-white">
            <div className="container">

              {/* Logo */}
              <Navbar.Brand as={Link} to="/">
                <div className="d-flex align-items-center">

                  <img
                    src={LogoImage}
                    height={50}
                    width={50}
                    alt="Logo"
                    className="img-fluid me-3"
                  />

                  <div className="jutt">
                    <span className="text-subtitle d-block fw-bold fs-4">
                      Aziz Ali
                    </span>

                    <span className="text-second-title d-block">
                      Web Developer
                    </span>
                  </div>

                </div>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />

              <Navbar.Collapse id="navbarScroll">

                <Nav className="mx-auto my-2 my-lg-0" navbarScroll>

                  {/* HOME */}
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>


                  {/* ================= ABOUT ================= */}

                  <div className="custom-dropdown">

                    <Nav.Link
                      onClick={() => goToSection("about")}
                    >
                      About{" "}

                      <span className="dropdown-arrow">
                        <HugeiconsIcon
                          icon={ArrowDown01Icon}
                          size={24}
                          color="currentColor"
                          strokeWidth={1.5}
                        />
                      </span>
                    </Nav.Link>

                    <div className="custom-dropdown-menu">

                      <Link
                        to="/about-myself"
                        className="about"
                      >
                        About Myself
                      </Link>

                      <Link to="/about-projects">
                        About Projects
                      </Link>

                      <Link to="/about-services">
                        About Services
                      </Link>

                    </div>

                  </div>


                  {/* ================= SERVICES ================= */}

                  <div className="custom-dropdown">

                    <Nav.Link
                      onClick={() => goToSection("services")}
                    >
                      Services{" "}

                      <span className="dropdown-arrow">
                        <HugeiconsIcon
                          icon={ArrowDown01Icon}
                          size={24}
                          color="currentColor"
                          strokeWidth={1.5}
                        />
                      </span>
                    </Nav.Link>

                    <div className="custom-dropdown-menu">

                      <Link
                        to="/web-development"
                        className="service"
                      >
                        Web Development
                      </Link>

                      <Link to="/laravel-development">
                        Laravel Development
                      </Link>

                      <Link to="/react-development">
                        React Development
                      </Link>

                      <Link to="/bug-fixing">
                        Bug Fixing
                      </Link>

                    </div>

                  </div>


                  {/* ================= PROJECTS ================= */}

                  <div className="custom-dropdown">

                    <Nav.Link
                      onClick={() => goToSection("projects")}
                    >
                      Projects{" "}

                      <span className="dropdown-arrow">
                        <HugeiconsIcon
                          icon={ArrowDown01Icon}
                          size={24}
                          color="currentColor"
                          strokeWidth={1.5}
                        />
                      </span>
                    </Nav.Link>

                    <div className="custom-dropdown-menu">

                      <Link
                        to="/laravel/projects"
                        className="project"
                      >
                        Laravel Projects
                      </Link>

                      <Link to="/react/projects">
                        React Projects
                      </Link>

                      <Link to="/ecommerce/projects">
                        E-Commerce Projects
                      </Link>

                      <Link to="/other/projects">
                        Other Projects
                      </Link>

                    </div>

                  </div>


                  {/* ================= CONTACT ================= */}

                  <Nav.Link onClick={goToContact}>
                    Contact
                  </Nav.Link>

                </Nav>


                {/* ================= HIRE ME ================= */}

                <button
                  type="button"
                  className="gemilan-bt-send"
                  onClick={goToContact}
                >

                  <span className="gemilan-bt-send__t">
                    Hire Me
                  </span>

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

              </Navbar.Collapse>
            </div>
          </Navbar>

        </div>
      </header>
    </section>
  );
};

export default Header;

