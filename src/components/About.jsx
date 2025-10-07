import React from "react";
import Profilepic from "../assets/profile.jpg"; // ✅ fixed import path
import { FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section
      aria-label="About Me Section"
      className="min-h-screen relative bg-gradient-to-b from-green-50 to-white text-gray-800 flex items-center px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* ✅ Background decorative shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 md:w-64 md:h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-72 md:h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 md:w-32 md:h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float-slow"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 relative z-10">
        
        {/* ✅ Left - Text content */}
        <div className="flex-1 text-center md:text-left fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-6 sm:mb-8">
            About Me
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            Hi! I'm <strong className="text-green-700">T M Eesaw Taaif</strong>, a
            passionate <span className="text-green-700">frontend developer</span> focused on crafting
            seamless, modern, and interactive user experiences.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            I specialize in{" "}
            <strong className="text-green-700">React, JavaScript, and Tailwind CSS</strong> — 
            turning ideas into visually appealing, responsive interfaces.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Outside of coding, I enjoy exploring new tech, building creative side
            projects, and continuously improving my craft.
          </p>

          {/* 📍 Location */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-green-700 text-base sm:text-lg mb-6">
            <FaMapMarkerAlt className="text-green-600" />
            <span>Based in Vellore, India</span>
          </div>

          {/* ✅ Read More Button */}
          <a
            href="#more"
            className="inline-block mt-4 sm:mt-6 px-8 sm:px-10 py-3 rounded-full text-base sm:text-lg font-semibold text-white 
             bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg
             hover:from-emerald-500 hover:to-green-600 
             transition-all duration-300"
          >
            Read More
          </a>
        </div>

        {/* ✅ Right - Profile image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src={Profilepic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
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
            animation: floatSlow 7s ease-in-out infinite;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeInUp 1.2s ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
