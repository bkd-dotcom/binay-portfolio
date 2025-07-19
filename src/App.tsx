import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default App;

