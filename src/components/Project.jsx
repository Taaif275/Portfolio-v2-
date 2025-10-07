import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pnpImg from "../assets/pnp.jpg";
import prImg from "../assets/pr.jpg"
import ckImg from "../assets/ck.jpg"
import wrImg from "../assets/wr.avif"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Personalized Nutrition Planner",
    image: pnpImg,
    tech: ["React", "MongoDB", "Tailwind", "Node.js"],
    desc: "AI-powered meal planner that personalizes nutrition based on user health data.",
    demo: "#",
    github: "#",
  },
  {
    title: "Cloud Kitchen Website",
    image: ckImg,
    tech: ["React", "Framer Motion", "Tailwind"],
    desc: "Responsive gold-black themed website optimized for mobile users.",
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    image: prImg,
    tech: ["React", "Framer Motion"],
    desc: "Personal portfolio showcasing projects and skills with smooth animations.",
    demo: "#",
    github: "#",
  },
  {
    title: "Task Tracker App",
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
    desc: "Work in Progress",
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-green-50 flex flex-col items-center px-4 sm:px-8 md:px-20 py-16 sm:py-20">
      {/* Title */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-green-700 mb-8 sm:mb-12 tracking-wide text-center">
        Projects
      </h2>

      <p className="max-w-xl sm:max-w-2xl text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-lg">
        A collection of projects that blend creativity, functionality, and modern design.
      </p>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 w-full max-w-6xl justify-items-center"
      >
        <AnimatePresence>
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
                         transition-transform duration-300 w-full max-w-[180px] sm:max-w-[340px]"
            >
    <div className="flex justify-center items-center overflow-hidden rounded-2xl">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-40 sm:h-56 object-contain transition-transform duration-500 hover:scale-105"
  />
</div>



              {/* Project Content */}
              <div className="p-3 sm:p-5">
                <h3 className="text-sm sm:text-xl font-bold text-gray-800 mb-1">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-green-600 font-medium hover:underline text-xs sm:text-base"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-gray-700 font-medium hover:underline text-xs sm:text-base"
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
          scale: 1.08,
          boxShadow: "0px 8px 20px rgba(16,185,129,0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -4, 0],
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative mt-10 sm:mt-14 px-6 sm:px-10 py-2.5 sm:py-3 rounded-full text-sm sm:text-lg font-semibold text-white 
                   bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg
                   hover:from-emerald-500 hover:to-green-600 
                   transition-all duration-300"
      >
        <motion.span
          key={showAll ? "less" : "more"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {showAll ? "View Less" : "View More"}
        </motion.span>

        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-30 blur-md"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            transition: { duration: 3, repeat: Infinity },
          }}
        />
      </motion.button>
    </section>
  );
}
