import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Resume from "./components/Resume.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="bg-orange-900 text-amber-100 ">
      <Navbar />
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
      <div id="skills">
        <Skills />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
