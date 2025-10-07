import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFigma,
  SiCanva,
  SiOpenai,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E44D26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#83CD29]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#4DB33D]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F1502F]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" /> },
  { name: "AI & OpenAI", icon: <SiOpenai className="text-[#9B59B6]" /> },
];

export default function SkillsMarquee() {
  const marqueeVariants = {
    animate: {
      x: [0, -2200],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="relative min-h-[75vh] bg-gradient-to-b from-white to-green-50 flex flex-col items-center justify-center px-4 sm:px-8 py-20 overflow-hidden">
      {/* Floating glow effects */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute w-60 sm:w-[25rem] h-60 sm:h-[25rem] bg-green-200/40 rounded-full blur-3xl top-0 left-6 sm:left-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-emerald-200/40 rounded-full blur-3xl bottom-0 right-6 sm:right-10"
      />

      {/* Title */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-green-700 mb-4 sm:mb-6 tracking-wide z-10 text-center">
        Skills & Tools
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-lg mb-10 sm:mb-16 max-w-2xl text-center z-10 leading-relaxed px-2">
        A blend of front-end, back-end, and creative tools I use to build responsive,
        interactive, and intelligent applications.
      </p>

      {/* Skills Marquee */}
      <div className="relative w-full overflow-hidden z-10 py-6">
        <motion.div
          className="flex gap-6 sm:gap-16 whitespace-nowrap items-center"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, rotateY: 6, rotateX: 3 }}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
              className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[180px] 
                         bg-white/60 backdrop-blur-lg border border-green-100 
                         rounded-2xl p-5 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="text-5xl sm:text-7xl mb-3 sm:mb-4"
              >
                {skill.icon}
              </motion.div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base tracking-wide text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer text */}
      <motion.p
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="mt-10 sm:mt-12 text-gray-500 italic text-xs sm:text-sm z-10 text-center"
      >
        “Design, Code, and Innovate — continuously evolving.”
      </motion.p>
    </section>
  );
}
