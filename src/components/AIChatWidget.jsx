import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes } from "react-icons/fa";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there 👋 I'm your AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("main");
  const [isTyping, setIsTyping] = useState(false);

  const mainOptions = [
    { label: "📞 Contact Boss (Taaif)", action: "contact" },
    { label: "🚀 Start a New Project", action: "new_project" },
    { label: "🧠 Get Career Guidance", action: "career_guidance" },
    { label: "💡 Explore AI Ideas", action: "explore_ai" },
  ];

  const showTypingThen = (callback, delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleOption = (action, label) => {
    setMessages((prev) => [...prev, { sender: "user", text: label }]);

    showTypingThen(() => {
      let response = "";
      switch (action) {
        case "contact":
          response = "Would you like me to show Taaif’s contact info?";
          setStep("contact");
          break;
        case "new_project":
          response = "Awesome 🚀! What type of project are you planning?";
          setStep("project");
          break;
        case "career_guidance":
          response = "Sure! What area would you like help with?";
          setStep("career");
          break;
        case "explore_ai":
          response = "Cool! Want to see creative or productivity AI ideas?";
          setStep("ai");
          break;
        default:
          response = "Hmm, I didn’t quite get that.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    });
  };

  const handleFollowUp = (choice, type) => {
    setMessages((prev) => [...prev, { sender: "user", text: choice }]);

    showTypingThen(() => {
      let responseSet = [];

      if (type === "contact") {
        if (choice === "Yes") {
          responseSet = [
            { sender: "bot", text: "Here’s how you can reach Taaif 👇" },
            { sender: "bot", text: "📧 Email: taaif@example.com" },
            { sender: "bot", text: "🔗 LinkedIn: linkedin.com/in/taaif" },
          ];
        }
      }

      if (type === "project") {
        if (choice === "Web App") {
          responseSet = [
            { sender: "bot", text: "Nice! A web app sounds exciting. Let’s start by planning the tech stack." },
          ];
        } else if (choice === "AI Tool") {
          responseSet = [
            { sender: "bot", text: "Awesome choice! AI tools are trending. I can suggest OpenAI or TensorFlow APIs." },
          ];
        } else if (choice === "Creative Project") {
          responseSet = [
            { sender: "bot", text: "Cool! Let’s brainstorm some unique ideas with design and animation." },
          ];
        }
      }

      if (type === "career") {
        if (choice === "Frontend") {
          responseSet = [
            { sender: "bot", text: "Frontend dev is fun! Focus on mastering React and animations with Framer Motion." },
          ];
        } else if (choice === "Backend") {
          responseSet = [
            { sender: "bot", text: "Backend is powerful! Try Node.js, MongoDB, and APIs for full control." },
          ];
        } else if (choice === "AI Development") {
          responseSet = [
            { sender: "bot", text: "AI Dev is the future 🤖 — explore LangChain, OpenAI API, and vector databases." },
          ];
        }
      }

      if (type === "ai") {
        if (choice === "Creative") {
          responseSet = [
            { sender: "bot", text: "How about an AI art generator or story creator?" },
          ];
        } else if (choice === "Productivity") {
          responseSet = [
            { sender: "bot", text: "Try building an AI task planner or writing assistant!" },
          ];
        }
      }

      setMessages((prev) => [
        ...prev,
        ...responseSet,
        { sender: "bot", text: "↩️ Tap below to go back." },
      ]);
      setStep("back");
    });
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    showTypingThen(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Got it 👍 Anything else I can help with?" },
      ]);
    });
  };

  const goBackToMain = () => {
    setStep("main");
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "Back to main options 👇" },
    ]);
  };

  return (
    <>
      {/* Floating Chat Icon (only shows when closed) */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaComments size={20} />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-50"
          >
            {/* ✅ Header with Close Button */}
            <div className="bg-green-600 text-white p-3 font-semibold text-lg flex justify-between items-center">
              <span>AI Assistant 🤖</span>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:text-gray-200">
                <FaTimes size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg text-sm ${
                    msg.sender === "bot"
                      ? "bg-green-100 text-gray-800 self-start"
                      : "bg-green-600 text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-3 bg-green-100 text-gray-700 rounded-lg text-sm w-fit"
                >
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    💭 ...
                  </motion.span>
                </motion.div>
              )}

              {/* Options */}
              <Options
                step={step}
                handleOption={handleOption}
                handleFollowUp={handleFollowUp}
                goBackToMain={goBackToMain}
              />
            </div>

            {/* Input */}
            <div className="border-t border-gray-100 p-3 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                onClick={sendMessage}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full text-sm font-medium"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ✅ Options Component */
function Options({ step, handleOption, handleFollowUp, goBackToMain }) {
  const mainOptions = [
    { label: "📞 Contact Boss (Taaif)", action: "contact" },
    { label: "🚀 Start a New Project", action: "new_project" },
    { label: "🧠 Get Career Guidance", action: "career_guidance" },
    { label: "💡 Explore AI Ideas", action: "explore_ai" },
  ];

  const followUps = {
    contact: ["✅ Yes", "↩️ Back"],
    project: ["🌐 Web App", "🤖 AI Tool", "🎨 Creative Project", "↩️ Back"],
    career: ["🎯 Frontend", "⚙️ Backend", "🤖 AI Development", "↩️ Back"],
    ai: ["🎨 Creative", "💼 Productivity", "↩️ Back"],
    back: ["↩️ Back to Main"],
  };

  if (step === "main")
    return (
      <div className="flex flex-col gap-3 mt-3">
        {mainOptions.map((opt) => (
          <Option key={opt.action} label={opt.label} onClick={() => handleOption(opt.action, opt.label)} />
        ))}
      </div>
    );

  if (followUps[step])
    return (
      <div className="flex flex-col gap-3 mt-3">
        {followUps[step].map((label) => (
          <Option
            key={label}
            label={label}
            onClick={() =>
              label.includes("Back") ? goBackToMain() : handleFollowUp(label.replace("✅ ", ""), step)
            }
          />
        ))}
      </div>
    );

  return null;
}

/* ✅ Option Button Component */
function Option({ label, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="cursor-pointer bg-white border border-gray-200 shadow-sm rounded-lg p-3 text-sm text-gray-700 hover:bg-green-50 transition-all"
    >
      {label}
    </motion.div>
  );
}
