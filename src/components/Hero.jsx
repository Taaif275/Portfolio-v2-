import React from "react";
import Logo from "../assets/logo.jpg"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 relative overflow-hidden">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 sm:px-8 py-4 absolute top-0 left-0">
        {/* Logo */}
  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center shadow-md">
  <img src={Logo} alt="Logo" className="w-full h-full object-contain" />

</div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="px-4 sm:px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition text-sm sm:text-base"
        >
          Explore More
        </a>
      </nav>

      {/* Transparent Card */}
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-12 text-center w-full max-w-3xl">
          {/* Greeting */}
          <p className="text-2xl sm:text-3xl text-green-300 mb-2">Hello, I’m</p>

          {/* Full Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 text-green-400 leading-tight">
            T M Eesaw Taaif
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
            Frontend Developer | Tech Enthusiast
          </p>

          {/* View Projects Button */}
          <div className="flex justify-center mb-8">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-2 sm:py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition text-sm sm:text-base"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 sm:gap-8 justify-center text-2xl sm:text-3xl text-green-400">
            <a
              href="https://github.com/taaif275"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/eesaw-taaif-tm-a398ab280/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center">
        <div className="animate-bounce text-green-400 text-2xl sm:text-3xl">
          ↓
        </div>
      </div>
    </section>
  );
}

export default Hero;



