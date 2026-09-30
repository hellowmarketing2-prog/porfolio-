import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import LogoImage from "../../assets/images/hero.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import "../../assets/css/header.css";
import { Link } from "react-router-dom";

export const Header = () => {
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
            <Navbar.Brand href="/">
              <div className="d-flex align-items-center">
                <img
                  src={LogoImage}
                  height={50}
                  width={50}
                  alt="Logo"
                  className="img-fluid me-3"
                />

                <div className="jutt">
                  <a href="/" className="text-decoration">
                  <span className="text-subtitle d-block fw-bold fs-4">
                    Aziz Ali
                  </span>

                  <span className="text-second-title d-block ">
                    Web Developer
                  </span>
                  </a>
                </div>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="/">Home</Nav.Link>

                {/* ABOUT */}
                <div className="custom-dropdown ">
                  <Nav.Link href="#about">
                    About{""}
                    <span className="dropdown-arrow ">
                      {" "}
                      <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        size={24}
                        color="currentColor"
                        strokeWidth={1.5}
                      />
                    </span>
                  </Nav.Link>

                  <div className="custom-dropdown-menu">
                    <a href="#about-myself" className="about">About Myself</a>
                    <a href="#about-projects">About Projects</a>
                    <a href="#about-services">About Services</a>
                  </div>
                </div>

                {/* SERVICES */}
                <div className="custom-dropdown">
                  <Nav.Link href="#services">
                    Services{" "}
                    <span className="dropdown-arrow">
                      {" "}
                      <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        size={24}
                        color="currentColor"
                        strokeWidth={1.5}
                      />
                    </span>
                  </Nav.Link>

                  <div className="custom-dropdown-menu">
                    <a href="#web-development" className="service">Web Development</a>
                    <a href="#laravel-development">Laravel Development</a>
                    <a href="#react-development">React Development</a>
                    <a href="#bug-fixing">Bug Fixing</a>
                  </div>
                </div>

                {/* PROJECTS */}
                <div className="custom-dropdown">
                  <Nav.Link href="#projects">
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
                    <a href="#laravel-projects" className="project">Laravel Projects</a>
                    <a href="#react-projects">React Projects</a>
                    <a href="#ecommerce-projects">E-Commerce Projects</a>
                    <a href="#other-projects">Other Projects</a>
                  </div>
                </div>

                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
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
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </header>
    </section>

  );
};

export default Header;
