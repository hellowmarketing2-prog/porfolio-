import React from "react";

import Layout  from "../components/common/Layout";
import Hero from "./common/Hero";
import About from "./common/About";
import Projects from "./common/Projects";
import Testimonials from "./common/Testimonials";
import Services from "./common/Services";
import Contact from "./common/Contact";

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