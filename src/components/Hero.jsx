import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
  FaLaptopCode,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";

function Hero() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 relative overflow-hidden"
    >
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 absolute top-0 left-0"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-md flex items-center justify-center"
        >
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </motion.div>
      </motion.nav>

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center min-h-screen px-4 pt-20 sm:pt-0 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-12 w-full max-w-3xl"
        >
          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-lg sm:text-3xl text-green-300 mb-2"
          >
            Hello, I’m
          </motion.p>

          {/* Full Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-3xl sm:text-6xl font-extrabold mb-4 text-green-400 leading-tight"
          >
            Eesaw Taaif
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-sm sm:text-lg text-gray-200 mb-6"
          >
            Frontend Developer | Tech Enthusiast
          </motion.p>

          {/* Resume Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="flex justify-center mb-8"
          >
            <motion.a
              href="mailto:eesawtaaif275.p@gmail.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 sm:px-8 py-2 sm:py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition text-sm sm:text-base"
            >
              Let's Collaborate
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="flex gap-5 sm:gap-8 justify-center text-xl sm:text-3xl text-green-400"
          >
            {[
              { href: "https://github.com/taaif275", icon: <FaGithub /> },
              {
                href: "https://www.linkedin.com/in/eesaw-taaif-tm-a398ab280/",
                icon: <FaLinkedin />,
              },
              { href: "mailto:eesawtaaif275.p@gmail.com", icon: <FaEnvelope /> },
            ].map(({ href, icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.15,
                  color: "#86efac",
                  transition: { duration: 0.3 },
                }}
                className="hover:text-green-300 transition"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
          className="mt-10 sm:mt-16 text-center max-w-3xl w-full px-3"
        >
          <h2 className="text-xl sm:text-3xl font-semibold text-green-400 mb-4">
            Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: (
                  <FaLaptopCode className="text-green-400 text-2xl sm:text-3xl" />
                ),
                title: "Projects Completed",
                desc: "Built and deployed multiple web projects using React and Tailwind CSS.",
              },
              {
                icon: (
                  <FaLightbulb className="text-green-400 text-2xl sm:text-3xl" />
                ),
                title: "Skills Gained",
                desc: "Gained experience in responsive design, API integration, and clean UI/UX.",
              },
              {
                icon: (
                  <FaUsers className="text-green-400 text-2xl sm:text-3xl" />
                ),
                title: "Team Experience",
                desc: "Worked with peers on projects to enhance collaboration and teamwork.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 shadow-md hover:bg-white/20 transition"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-green-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div
          initial={{y: 20 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
            transition: {
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            },
          }}
          className="mt-10 sm:mt-14 flex justify-center cursor-pointer pb-8 sm:pb-10"
          onClick={() => scrollToSection("#contact")}
        >
          <FaChevronDown className="text-green-400 text-3xl sm:text-4xl hover:text-green-300 transition" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
