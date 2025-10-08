import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes } from "react-icons/fa";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, I’m Stella — Taaif’s assistant. How may I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("none"); // 👈 No options at start
  const [isTyping, setIsTyping] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false); // 👈 Detects first message

  const showTypingThen = (callback, delay = 700) => {
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
          response = "Would you like me to show Taaif’s contact information?";
          setStep("contact");
          break;
        case "new_project":
          response = "What kind of project are you planning to build?";
          setStep("project");
          break;
        case "learn":
          response = "What would you like to start learning?";
          setStep("learn");
          break;
        case "explore_ai":
          response = "Would you like AI ideas for learning or personal projects?";
          setStep("ai");
          break;
        default:
          response = "I didn’t quite get that. Could you try again?";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    });
  };

  const handleFollowUp = (choice, type) => {
    setMessages((prev) => [...prev, { sender: "user", text: choice }]);

    showTypingThen(() => {
      let responseSet = [];

      if (type === "contact" && choice === "Yes") {
        responseSet = [
          { sender: "bot", text: "Here’s how you can reach Taaif:" },
          { sender: "bot", text: "Email: taaif@example.com" },
          { sender: "bot", text: "LinkedIn: linkedin.com/in/taaif" },
        ];
      }

      if (type === "project") {
        if (choice === "Portfolio")
          responseSet = [{ sender: "bot", text: "A portfolio is a great project to showcase your skills." }];
        else if (choice === "Website")
          responseSet = [{ sender: "bot", text: "A simple website is perfect for learning the basics of React." }];
        else if (choice === "Mini App")
          responseSet = [{ sender: "bot", text: "A to-do list or weather app would be a solid first app." }];
      }

      if (type === "learn") {
        if (choice === "HTML & CSS")
          responseSet = [{ sender: "bot", text: "Start with layouts, responsive design, and clean styling." }];
        else if (choice === "React")
          responseSet = [{ sender: "bot", text: "React is great — begin with components, props, and state." }];
        else if (choice === "JavaScript")
          responseSet = [{ sender: "bot", text: "Focus on DOM manipulation and basic algorithms first." }];
      }

      if (type === "ai") {
        if (choice === "Learning")
          responseSet = [{ sender: "bot", text: "Explore OpenAI or Hugging Face tutorials to get started." }];
        else if (choice === "Projects")
          responseSet = [{ sender: "bot", text: "You can try building a chatbot or text summarizer." }];
      }

      setMessages((prev) => [
        ...prev,
        ...responseSet,
        { sender: "bot", text: "Would you like to go back to the main options?" },
      ]);
      setStep("back");
    });
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    if (!hasUserInteracted) {
      setHasUserInteracted(true);
      showTypingThen(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Got it. Here are a few things I can help you with:" },
        ]);
        setStep("main"); // 👈 Show options *after* first message
      });
    } else {
      showTypingThen(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Understood. Anything else I can help with?" },
        ]);
      });
    }
  };

  const goBackToMain = () => {
    setStep("main");
    setMessages((prev) => [...prev, { sender: "bot", text: "Back to main options." }]);
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaComments size={20} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-green-600 text-white p-3 font-semibold text-lg flex justify-between items-center">
              <span>Stella</span>
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
                      ? "bg-gray-100 text-gray-800 self-start"
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
                  className="p-3 bg-gray-100 text-gray-700 rounded-lg text-sm w-fit"
                >
                  ...
                </motion.div>
              )}

              {/* Options (Only after user interacts) */}
              {hasUserInteracted && (
                <Options
                  step={step}
                  handleOption={handleOption}
                  handleFollowUp={handleFollowUp}
                  goBackToMain={goBackToMain}
                />
              )}
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
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Options */
function Options({ step, handleOption, handleFollowUp, goBackToMain }) {
  const mainOptions = [
    { label: "Contact Taaif", action: "contact" },
    { label: "Start a New Project", action: "new_project" },
    { label: "Learn by Building", action: "learn" },
    { label: "Explore AI Ideas", action: "explore_ai" },
  ];

  const followUps = {
    contact: ["Yes", "Back"],
    project: ["Portfolio", "Website", "Mini App", "Back"],
    learn: ["HTML & CSS", "React", "JavaScript", "Back"],
    ai: ["Learning", "Projects", "Back"],
    back: ["Back to Main"],
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
            onClick={() => (label.includes("Back") ? goBackToMain() : handleFollowUp(label, step))}
          />
        ))}
      </div>
    );

  return null;
}

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
