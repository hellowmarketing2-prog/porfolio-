import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "../src/components/common/About";
import Projects from "../src/components/common/Projects";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;