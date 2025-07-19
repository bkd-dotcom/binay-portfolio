import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiTensorflow, SiQiskit, SiPytorch, SiKeras } from "react-icons/si";
import { FaRobot, FaBrain } from "react-icons/fa";

const projects = [
  {
    title: "AI Transformer Optimization",
    description:
      "Improved AI Transformer Model efficiency by 43% using Quantum approximate optimization algorithm. Implemented using Python, TensorFlow, Qiskit, and PyTorch.",
    tech: ["Python", "TensorFlow", "Qiskit", "PyTorch"],
    github: "https://github.com/bkd-dotcom/Transformer-Project",
    icon: <FaRobot className="text-blue-200" size={32} />,
  },
  {
    title: "Depr AI",
    description:
      "Machine learning model for detecting depression through speech analysis. Built with TensorFlow and Keras, utilizing datasets from Kaggle and Hugging Face.",
    tech: ["Python", "TensorFlow", "Keras", "Speech Analysis"],
    github: "https://github.com/bkd-dotcom/Depr-AI",
    icon: <FaBrain className="text-pink-200" size={32} />,
  },
];

const techIcons: Record<string, JSX.Element> = {
  Python: <SiPython className="text-blue-200" size={24} />,
  TensorFlow: <SiTensorflow className="text-orange-200" size={24} />,
  Qiskit: <SiQiskit className="text-purple-200" size={24} />,
  PyTorch: <SiPytorch className="text-red-200" size={24} />,
  Keras: <SiKeras className="text-red-200" size={24} />,
  "Speech Analysis": <FaBrain className="text-pink-200" size={24} />,
};

const Projects = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ width: '100%', paddingTop: '3rem', paddingBottom: '3rem', fontFamily: 'sans-serif' }}
  >
    <div className="w-full px-0 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-10 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 w-full">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="w-full bg-white/10 rounded-xl shadow flex flex-col hover:scale-105 transition-transform p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              {proj.icon}
              <h3 className="text-2xl font-semibold text-white">{proj.title}</h3>
            </div>
            <p className="text-white/90 mb-6 text-xl">{proj.description}</p>
            <div className="flex gap-3 mb-6">
              {proj.tech.map((tech) => (
                <span key={tech} title={tech}>{techIcons[tech] || tech}</span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-blue-200 hover:underline text-lg font-medium pb-2"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Projects; 