import React from "react";
import About from "./components/About"
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import HowCanIHelp from "./components/HowCanIHelp";
import AIChatAssistant from "./components/AIChatWidget";
import AIChatWidget from "./components/AIChatWidget";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <HowCanIHelp />
      <Projects />
      <AIChatAssistant />
      <AIChatWidget />
      <Roadmap />
      <Footer />
      

      
      
    </>
  );
}

export default App;
