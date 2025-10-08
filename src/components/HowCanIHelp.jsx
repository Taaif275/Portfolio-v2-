import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRobot, FaRocket } from "react-icons/fa";

const helpItems = [
  {
    icon: <FaCode className="text-green-600 text-4xl sm:text-5xl mb-3 sm:mb-4" />,
    title: "Full-Stack Development",
    desc: "Building responsive, high-performance web apps using React, Node.js, and MongoDB.",
  },
  {
    icon: <FaPalette className="text-green-600 text-4xl sm:text-5xl mb-3 sm:mb-4" />,
    title: "UI/UX Design",
    desc: "Designing user-friendly, modern interfaces in Figma and Tailwind for seamless experiences.",
  },
  {
    icon: <FaRobot className="text-green-600 text-4xl sm:text-5xl mb-3 sm:mb-4" />,
    title: "AI Integration",
    desc: "Integrating OpenAI and automation tools to make apps smarter and more dynamic.",
  },
  {
    icon: <FaRocket className="text-green-600 text-4xl sm:text-5xl mb-3 sm:mb-4" />,
    title: "Performance Optimization",
    desc: "Improving SEO, accessibility, and speed for smooth and efficient web experiences.",
  },
];

export default function HowCanIHelp() {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center px-4 sm:px-8 md:px-20 py-16 sm:py-24 
                 bg-gradient-to-b from-white to-green-50 overflow-hidden"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-extrabold text-green-700 mb-6 sm:mb-10 tracking-wide text-center leading-snug"
      >
        What I Offer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl sm:max-w-2xl text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-lg px-2"
      >
        I combine design, development, and AI innovation to create products that are fast,
        visually appealing, and user-focused.
      </motion.p>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 z-10 w-full max-w-4xl">
        {helpItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md border border-green-100 rounded-2xl shadow-md 
                       p-6 sm:p-8 flex flex-col items-center text-center 
                       hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            {item.icon}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Floating Decorations */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute w-24 sm:w-40 h-24 sm:h-40 bg-green-200/20 rounded-full top-6 sm:top-10 left-6 sm:left-20 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute w-36 sm:w-56 h-36 sm:h-56 bg-emerald-300/20 rounded-full bottom-10 sm:bottom-20 right-4 sm:right-10 blur-3xl"
      />
    </section>
  );
}
