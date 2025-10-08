import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import HowCanIHelp from "./components/HowCanIHelp";
import AIChatWidget from "./components/AIChatWidget";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import ReadMore from "./components/ReadMore";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    // 👇 this ensures the router works in /Portfolio-v2-/ subpath
    <Router basename="/Portfolio-v2-/">
      {/* 👇 this ensures every new page starts at the top */}
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <HowCanIHelp />
              <Projects />
              <AIChatWidget />
              <Roadmap />
              <Footer />
            </>
          }
        />

        {/* Read More Page */}
        <Route path="/readmore" element={<ReadMore />} />
      </Routes>
    </Router>
  );
}

export default App;

