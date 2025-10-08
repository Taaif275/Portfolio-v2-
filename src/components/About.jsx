import React from "react";
import { Link } from "react-router-dom";
import Profilepic from "../assets/profile.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id = "about"
      aria-label="About Me Section"
      className="min-h-screen relative bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800 flex items-center px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* ✅ Removed extra floating circle (kept design clean) */}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* ✅ Left - Text content */}
        <div className="flex-1 text-center md:text-left fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-6 sm:mb-8 drop-shadow-md">
            About Me
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            Hi! I'm <strong className="text-green-700">T M Eesaw Taaif</strong>, a
            passionate <span className="text-green-700">Frontend developer</span> dedicated to
            creating smooth, responsive, and modern web experiences.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            I specialize in{" "}
            <strong className="text-green-700">React, JavaScript, and Tailwind CSS</strong> — 
            turning ideas into visually appealing, accessible interfaces.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Outside of coding, I enjoy exploring new technologies, experimenting
            with UI animations, and continuously refining my craft.
          </p>

          {/* 📍 Location */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-green-700 text-base sm:text-lg mt-6">
            <FaMapMarkerAlt className="text-green-600" />
            <span>Based in Vellore, India</span>
          </div>

          {/* ✅ Read More Button */}
          <Link
            to="/readmore"
            className="inline-block mt-4 sm:mt-6 px-8 sm:px-10 py-3 rounded-full text-base sm:text-lg font-semibold text-white 
             bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg
             hover:from-emerald-500 hover:to-green-600 
             transition-all duration-300"
          >
            Read More
          </Link>
        </div>

        {/* ✅ Right - Profile image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 fade-in">
          <div className="relative group w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
            {/* Soft glow behind image */}
            <div className="absolute inset-0 bg-green-300/30 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>

            {/* Profile photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-green-100 hover:border-green-300 transition-all duration-500">
              <img
                src={Profilepic}
                alt="Profile"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Animations */}
      <style>
        {`
          @keyframes floatSlow {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-float-slow {
            animation: floatSlow 8s ease-in-out infinite;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(25px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeInUp 1.2s ease-out;
          }
        `}
      </style>
    </section>
  );
}
