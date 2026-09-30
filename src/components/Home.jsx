import React from "react";

import Layout  from "../components/common/Layout.jsx";
import Hero from "./common/Hero.jsx";
import About from "./common/About.jsx";
import Projects from "./common/Projects.jsx";
import Testimonials from "./common/Testimonials.jsx";
import Services from "./common/Services.jsx";
import Contact from "./common/Contact.jsx";

const Home = () => {
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