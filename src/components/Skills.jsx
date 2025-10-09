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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-white to-green-50 flex flex-col items-center justify-center px-6 py-24 sm:py-28 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-4 tracking-tight">
          Skills & Tools
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
        >
         A curated collection of tools and technologies I use to build seamless, efficient, and engaging digital experiences.
        </motion.p>
      </motion.div>

      {/* 🔁 Marquee */}
      <div className="w-full overflow-hidden relative py-6 sm:py-8">
        <motion.div
          className="flex gap-6 sm:gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="flex flex-col items-center justify-center bg-white border border-green-100 rounded-xl 
                         p-4 sm:p-5 w-24 sm:w-28 shadow-sm hover:shadow-lg hover:border-green-300 transition-all duration-300"
            >
              <motion.div
                whileHover={{
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.6 },
                }}
                className="text-3xl sm:text-4xl mb-2"
              >
                {skill.icon}
              </motion.div>
              <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-12 text-gray-500 italic text-xs sm:text-sm text-center"
      >
        “Learning never stops — it just evolves into creation.”
      </motion.p>
    </section>
  );
}
