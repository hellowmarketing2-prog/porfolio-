import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "../src/components/common/About";
import Projects from "../src/components/common/Projects";
import AboutMyself from "./components/aboutPages/About_myself";
import AboutProjects from "./components/aboutPages/About_projects";
import AboutServices from "./components/aboutPages/About_services";
import WebDevelopment from "./components/devlopmentPages/Webdevelopment";
import ReactDevelopment from "./components/devlopmentPages/ReactDevelopment";
import LaravelDevelopment from "./components/devlopmentPages/LaravelDevelopment";
import BugFixing from "./components/devlopmentPages/BugFixing";

import LaravelProjects from "./components/projectsPages/LaravelProjects";
import ReactProjects from "./components/projectsPages/ReactProjects";
import EcommerceProjects from "./components/projectsPages/EcommerceProjects";
import OtherProjects from "./components/projectsPages/OtherProjects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-myself" element={<AboutMyself />} />
        <Route path="/about-projects" element={<AboutProjects />} />
        <Route path="/about-services" element={<AboutServices />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/react-development" element={<ReactDevelopment />} />
        <Route path="/laravel-development" element={<LaravelDevelopment />} />
        <Route path="/bug-fixing" element={<BugFixing />} />
        <Route path="/laravel/projects" element={<LaravelProjects />} />

        <Route path="/react/projects" element={<ReactProjects />} />

        <Route path="/ecommerce/projects" element={<EcommerceProjects />} />

        <Route path="/other/projects" element={<OtherProjects />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
