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
    icon: <FaRobot className="text-blue-500" size={32} />,
  },
  {
    title: "Depr AI",
    description:
      "Machine learning model for detecting depression through speech analysis. Built with TensorFlow and Keras, utilizing datasets from Kaggle and Hugging Face.",
    tech: ["Python", "TensorFlow", "Keras", "Speech Analysis"],
    github: "https://github.com/bkd-dotcom/Depr-AI",
    icon: <FaBrain className="text-pink-500" size={32} />,
  },
];

const techIcons: Record<string, JSX.Element> = {
  Python: <SiPython className="text-blue-500" size={24} />,
  TensorFlow: <SiTensorflow className="text-orange-500" size={24} />,
  Qiskit: <SiQiskit className="text-purple-600" size={24} />,
  PyTorch: <SiPytorch className="text-red-500" size={24} />,
  Keras: <SiKeras className="text-red-700" size={24} />,
  "Speech Analysis": <FaBrain className="text-pink-400" size={24} />,
};

const Projects = () => (
  <motion.div
    className="py-12 w-full relative overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 opacity-80 blur-2xl" />
    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center relative z-10">Projects</h2>
    <div className="grid gap-8 md:grid-cols-2 relative z-10 w-full">
      {projects.map((proj, idx) => (
        <motion.div
          key={idx}
          className="w-full bg-white/80 rounded-lg shadow-xl border border-gray-100 flex flex-col hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <div className="flex items-center gap-3 mb-2 px-4 sm:px-8 pt-6">
            {proj.icon}
            <h3 className="text-lg font-semibold text-gray-800">{proj.title}</h3>
          </div>
          <p className="text-gray-700 mb-4 text-sm px-4 sm:px-8">{proj.description}</p>
          <div className="flex gap-3 mb-4 px-4 sm:px-8">
            {proj.tech.map((tech) => (
              <span key={tech} title={tech}>{techIcons[tech] || tech}</span>
            ))}
          </div>
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-600 hover:underline text-sm font-medium px-4 sm:px-8 pb-6"
          >
            View on GitHub
          </a>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Projects; 