import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Resume from "./components/Resume.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

function App() {
  return (
    <div className="bg-orange-900 text-amber-100 ">
      <Navbar />
      <ScrollToTopButton />

      <Sidebar />

      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="skills">
        <Skills />
      </div>

      <Footer />
    </div>
  );
}

export default App;
