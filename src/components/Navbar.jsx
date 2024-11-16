import React from "react";

// Navbar component with TailwindCSS and absolute positioning to match Header vibe
const Navbar = () => {
  // This function will handle the scrolling to the section with a smooth effect
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`No section found with id ${sectionId}`);
    }
  };

  const navItemClass =
    "text-gray-900 dark:text-gray-200 dark:hover:text-orange-400 hover:text-orange-600 cursor-pointer px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="absolute top-0 left-0 right-0 bg-gray-200 dark:bg-gray-800 z-10">
      <ul className="flex sm:space-x-2 justify-center p-2 sm:p-4 font-comfortaa">
        {/* Use li tags with onClick to handle scrolling */}
        <li className={navItemClass} onClick={() => scrollToSection("about")}>
          About
        </li>
        <li
          className={navItemClass}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>
        <li className={navItemClass} onClick={() => scrollToSection("skills")}>
          Skills
        </li>
        <li className={navItemClass} onClick={() => scrollToSection("resume")}>
          Resume
        </li>
        <li className={navItemClass} onClick={() => scrollToSection("contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
