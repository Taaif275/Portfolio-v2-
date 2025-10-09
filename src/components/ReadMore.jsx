import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBookOpen,
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode,
  FaStar,
  FaHeart,
} from "react-icons/fa";

export default function ReadMore() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50 text-gray-800 px-4 sm:px-8 md:px-16 py-12 sm:py-16 relative overflow-hidden">

      {/* ✅ Back Button */}
      <div className="flex justify-center mb-8 sm:mb-10">
           <button
        onClick={() => navigate("/", { state: { scrollTo: "about" } })}
        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-green-600 text-white text-sm sm:text-base font-semibold shadow-md hover:bg-emerald-600 transition"
      >
        <FaArrowLeft /> Back to Home
      </button>
      </div>

      {/* ✅ Content */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-green-100 rounded-2xl shadow-xl p-5 sm:p-8 md:p-12 relative z-10 fade-in">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <FaBookOpen className="text-green-600 text-3xl sm:text-4xl" />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-green-700 text-center mb-8 sm:mb-10">
          A Little More About Me
        </h1>

        {/* Education Section */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 flex items-center gap-2 mb-4 sm:mb-6">
            <FaGraduationCap /> Education
          </h2>
          <div className="relative border-l-4 border-green-400 pl-4 sm:pl-6 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-green-700">
                B.C.A (Bachelor of Computer Applications)
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                C Abdul Hakeem College (2022–2025)
              </p>
              <p className="text-gray-600 text-xs sm:text-sm italic">
                Focused on Web Development, JavaScript, and Web Technologies.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-green-700">
                Higher Secondary Education
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                K H Matric Boys Higher Sec School (2020–2022)
              </p>
              <p className="text-gray-600 text-xs sm:text-sm italic">
                Majored in Commerce.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-green-700">
                Secondary School Education
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                K H Matric Boys Higher Sec School (2018–2020)
              </p>
              <p className="text-gray-600 text-xs sm:text-sm italic">
                Completed with Distinction.
              </p>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 flex items-center gap-2 mb-4 sm:mb-6">
            <FaCertificate /> Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Generative AI", issuer: "Simlilearn" },
              { title: "AI/ML Robotics", issuer: "CIIC" },
              { title: "Encryption Basics", issuer: "Great Learning" },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-green-100/70 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition hover:scale-105"
              >
                <h3 className="text-green-700 font-semibold text-base sm:text-lg mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 flex items-center gap-2 mb-4 sm:mb-6">
            <FaLaptopCode /> Experience
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            My journey as a developer has been hands-on and self-driven. I’ve
            learned most of my technical and creative skills by{" "}
            <span className="text-green-700 font-semibold">building projects</span>{" "}
            — from personal websites and interactive UI components to complete
            front-end applications. Every project sharpened my understanding of
            problem-solving, design thinking, and creating smooth, responsive
            user experiences.
          </p>
        </div>

        {/* Hobbies */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 flex items-center gap-2 mb-4 sm:mb-6">
            <FaHeart /> Hobbies
          </h2>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-700 text-sm sm:text-base space-y-2 sm:space-y-3">
            <li>Designing UI mockups and experimenting with layouts.</li>
            <li>Listening to music while coding.</li>
            <li>Exploring AI tools and automating workflows.</li>
            <li>Watching tech talks and learning from dev communities.</li>
            <li>Gaming — and dreaming to build one someday.</li>
          </ul>
        </div>

        {/* Goals */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 flex items-center gap-2 mb-4 sm:mb-6">
            <FaStar /> Goals
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            My long-term goal is to continue improving as a{" "}
            <strong>frontend engineer</strong>, crafting interfaces that feel
            natural and fluid. I aim to explore{" "}
            <span className="text-green-700 font-semibold">full-stack development</span>{" "}
            and build impactful products that blend creativity with technology.
          </p>
        </div>
      </div>

      {/* Fade-in Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeInUp 1s ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
