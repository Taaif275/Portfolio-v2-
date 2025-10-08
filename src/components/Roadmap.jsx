import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTools, FaCompass, FaFlask, FaStar } from "react-icons/fa";

const roadmapData = [
  {
    stage: "Completed Projects",
    icon: <FaCheck className="text-green-600 text-3xl sm:text-4xl" />,
    desc: "These projects built the foundation of my web development journey — focusing on design, performance, and interactivity.",
    items: [
      "PNP – Personalized Nutrition Planner",
      "Portfolio Website v2 – responsive and minimal design.",
      "Restaurant Website with an elegant design and interactive menu system.",
    ],
    color: "from-green-100 to-green-50 border-green-300",
  },
  {
    stage: "In Progress",
    icon: <FaTools className="text-yellow-500 text-3xl sm:text-4xl" />,
    desc: "Currently refining user experience and integrating deeper AI logic into practical full-stack applications.",
    items: [
      "Simple and efficient task manager to boost productivity.",
      "Real-time cryptocurrency price tracker with interactive charts.",
      "Full-stack dashboard with authentication and analytics.",
    ],
    color: "from-yellow-50 to-white border-yellow-200",
  },
  {
    stage: "Upcoming Developments",
    icon: <FaCompass className="text-blue-500 text-3xl sm:text-4xl" />,
    desc: "Next, I’ll explore projects that merge AI automation and user-centric design for advanced productivity tools.",
    items: [
      "Add an AI chatbot nutrition coach (like a “food assistant”) that answers user queries.",
      "AI-powered Blogging Platform.",
      "Personal API Service (Next.js + MongoDB).",
    ],
    color: "from-blue-50 to-white border-blue-200",
  },
  {
    stage: "Research & Innovation",
    icon: <FaFlask className="text-pink-500 text-3xl sm:text-4xl" />,
    desc: "Prototyping experimental concepts like adaptive UIs, predictive AI behavior, and generative tools for designers and developers.",
    items: [
      "Predictive UI system prototypes.",
      "Exploring new technologies and creative methods to design smarter, more efficient, and user-friendly digital experiences.",
      "AI-assisted front-end automation.",
    ],
    color: "from-pink-50 to-white border-pink-200",
  },
  {
    stage: "Vision Ahead",
    icon: <FaStar className="text-purple-500 text-3xl sm:text-4xl" />,
    desc: "Long-term goal: building intelligent, scalable ecosystems that connect creativity, automation, and personalized digital experiences.",
    items: [
      "Fully autonomous portfolio management platform.",
      "Looking ahead to creating meaningful, scalable, and well-crafted digital products that leave a lasting impact.",
      "Building better, smarter, and more creative digital experiences ahead.",
    ],
    color: "from-purple-50 to-white border-purple-200",
  },
];

export default function Roadmap() {
  return (
    <section id = "roadmap"className="min-h-screen bg-gradient-to-b from-white to-green-50 flex flex-col items-center px-4 sm:px-8 md:px-20 py-20">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-extrabold text-green-700 mb-8 tracking-wide text-center"
      >
        Roadmap
      </motion.h2>

      <p className="max-w-2xl text-center text-gray-600 mb-16 text-sm sm:text-lg">
        A detailed look at my current journey — from early builds to future innovations.
      </p>

      {/* Roadmap Zigzag Layout */}
      <div className="w-full max-w-6xl flex flex-col gap-16">
        {roadmapData.map((phase, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                !isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Connector line */}
              {index !== roadmapData.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-1/2 w-px h-full bg-green-200 -translate-x-1/2" />
              )}

              {/* Icon */}
              <div className="z-10 bg-white p-4 rounded-full shadow-md border-2 border-green-200 flex-shrink-0">
                {phase.icon}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`flex-1 bg-gradient-to-br ${phase.color} rounded-2xl p-6 sm:p-8 shadow-md border text-center md:text-left`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  {phase.stage}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                  {phase.desc}
                </p>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  {phase.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 before:content-['•'] before:text-green-500 before:mt-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
