import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./global-anim-bg.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AuroraBackground from "./components/AuroraBackground";

const particlesOptions = {
  background: { color: { value: "#0a0a23" } },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" }, resize: true },
    modes: { repulse: { distance: 80, duration: 0.4 } },
  },
  particles: {
    color: { value: ["#00eaff", "#ff00cc", "#fff", "#00ff99"] },
    links: { enable: true, color: "#fff", distance: 120, opacity: 0.2, width: 1 },
    move: { enable: true, speed: 0.7, direction: "none", outModes: "out" },
    number: { value: 60, density: { enable: true, area: 900 } },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

const App = () => {
  // For tsparticles v2, use this init function
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen text-gray-100 overflow-x-hidden">
      <AuroraBackground />
      {/* Global particle/starfield effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="fixed inset-0 -z-30 pointer-events-none"
      />
      {/* Global animated gradient background */}
      <div className="fixed inset-0 -z-20 animate-gradient-move bg-gradient-to-br from-gray-900 via-blue-900 to-black opacity-80" />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-blue-800/30 via-fuchsia-700/20 to-cyan-700/30 blur-2xl opacity-40 animate-gradient-move" />
      </div>
      <Navbar />
      <main className="w-full max-w-6xl mx-auto px-0">
        <section id="hero" className="w-full px-8 py-12"><div className="max-w-6xl mx-auto"><Hero /></div></section>
        <section id="about" className="w-full px-8 py-12"><div className="max-w-6xl mx-auto"><About /></div></section>
        <section id="experience" className="w-full px-8 py-12"><div className="max-w-6xl mx-auto"><Experience /></div></section>
        <section id="projects" className="w-full px-8 py-12"><div className="max-w-6xl mx-auto"><Projects /></div></section>
        <section id="education" className="w-full px-8 py-12"><div className="max-w-6xl mx-auto"><Education /></div></section>
        <section id="contact" className="w-full px-8 py-12"><div className="max-w-6xl mx-auto"><Contact /></div></section>
      </main>
    </div>
  );
};

export default App;

