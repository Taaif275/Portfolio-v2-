import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-800 text-gray-100 py-20 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 opacity-95" />

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center gap-12 z-10 text-center">
        {/* Heading */}
        <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
>
  Thanks For Visiting
</motion.h2>

        {/* Navigation Links */}
<motion.ul
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="flex flex-wrap justify-center gap-6 sm:gap-10 text-base sm:text-lg font-medium"
>
  {["Home", "About", "Projects", "Skills", "Services"].map((item) => (
    <li key={item} className="relative group">
      <button
        onClick={() => {
          const id = item.toLowerCase();
          const section = document.getElementById(id);
          if (section) {
            const navbar = document.querySelector("[data-navbar]");
            const offset = navbar ? navbar.offsetHeight : 0;

            const y =
              section.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          }
        }}
        className="transition duration-200 group-hover:text-green-400 focus:outline-none"
      >
        {item}
      </button>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
    </li>
  ))}
</motion.ul>


        {/* Divider */}
        <div className="w-20 sm:w-24 h-[2px] bg-green-400/70 rounded-full"></div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-md text-center"
        >
          <p className="text-base sm:text-lg text-gray-300 mb-6">
            You’ve reached the end — but it doesn’t have to stop here.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 sm:gap-8 justify-center text-2xl sm:text-3xl text-green-400">
            {[
              { icon: <FaGithub />, href: "https://github.com/taaif275" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/eesaw-taaif-tm-a398ab280/" },
              { icon: <FaTwitter />, href: "https://twitter.com/" },
            ].map(({ icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-green-300"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xs sm:text-sm text-gray-400 mt-8 leading-relaxed"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-green-400 font-semibold">T M Eesaw Taaif</span> —{" "}
          Built with passion and precision
        </motion.p>

      </div>
    </footer>
  );
}
