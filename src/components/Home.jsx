import React, { useEffect } from "react";
import Layout  from "../components/common/Layout.jsx";
import Hero from "./common/Hero.jsx";
import About from "./common/About.jsx";
import Projects from "../components/aboutPages/About_projects.jsx";
import Testimonials from "./common/Testimonials.jsx";
import Services from "./common/Services.jsx";
import Contact from "./common/Contact.jsx";

const Home = () => {
    useEffect(() => {
  if (window.location.hash === "#contact") {
    setTimeout(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }
}, []);
    return (

     <> 
         <Layout>

            <Hero />
            <About />
            <Services />
            <Projects/>
            <Testimonials/>
            <Contact/>


        </Layout>
      </>

    );
};

export default Home;