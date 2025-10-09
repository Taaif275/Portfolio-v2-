import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pnpImg from "../assets/pnp.jpg";
import prImg from "../assets/pr.jpg";
import ckImg from "../assets/ck.jpg";
import wrImg from "../assets/wr.avif";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Personalized Nutrition Planner",
    image: pnpImg,
    tech: ["React", "MongoDB", "Tailwind", "Node.js"],
    desc: "A smart nutrition planner that customizes meal plans based on user preferences and goals.",
    demo: "https://taaif275.github.io/Nourish-Flourish/",
    github: "https://github.com/taaif275",
  },
  {
    title: "Restaurant Webpage",
    image: ckImg,
    tech: ["React", "Framer Motion", "Tailwind"],
    desc: "A responsive restaurant website built to highlight dishes, ambiance, and easy online access.",
    demo: "",
    github: "https://github.com/taaif275",
  },
  {
    title: "Portfolio V2",
    image: prImg,
    tech: ["React", "Framer Motion"],
    desc: "Personal portfolio showcasing projects and skills with smooth animations.",
    demo: "#",
    github: "https://github.com/taaif275",
  },
  {
    title: "Steloros",
    image: wrImg,
    tech: ["React", "LocalStorage", "Tailwind"],
    desc: "Work in progress",
    demo: "#",
    github: "#",
  },
  {
    title: "Crypto Tracker",
    image: wrImg,
    tech: ["React", "API", "Chart.js"],
    desc: "Work in progress",
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-white to-green-50 flex flex-col items-center px-6 sm:px-10 md:px-20 py-16 sm:py-20"
    >
      <h2 className="text-3xl sm:text-5xl font-extrabold text-green-700 mb-8 sm:mb-12 tracking-wide text-center">
        My Work
      </h2>

      <p className="max-w-xl sm:max-w-2xl text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-lg">
        A collection of projects that blend creativity, functionality, and modern design.
      </p>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl justify-items-center"
      >
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              whileHover={{
                y: -5,
                boxShadow: "0px 6px 20px rgba(16,185,129,0.25)",
              }}
              className="bg-white w-full max-w-[420px] border-2 border-green-100 shadow-sm flex flex-col transition-all duration-300"
            >
              <div className="w-full h-60 sm:h-72 bg-white p-2 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain border border-green-100 rounded-none"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-green-100 text-green-700 px-2 py-1 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center justify-between border-t border-green-100 pt-3 mt-auto">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 font-semibold text-sm"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-400 italic text-sm cursor-not-allowed">
                      <FaExternalLinkAlt /> Demo (coming soon)
                    </span>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 font-semibold text-sm"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View More / Less Button */}
      <motion.button
        onClick={() => setShowAll(!showAll)}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 20px rgba(16,185,129,0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-3 text-lg font-semibold text-white 
                   bg-gradient-to-r from-green-500 to-emerald-600 shadow-md
                   hover:from-emerald-500 hover:to-green-600 
                   transition-all duration-300"
      >
        {showAll ? "View Less" : "View More"}
      </motion.button>
    </section>
  );
}
