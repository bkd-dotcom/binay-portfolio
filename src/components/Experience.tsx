import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiQiskit, SiTensorflow, SiPytorch } from "react-icons/si";
import { FaUniversity, FaBuilding, FaIndustry } from "react-icons/fa";

const experiences = [
  {
    title: "IBM AI Engineer Co-op Intern",
    location: "Midwest Client Engineering Team, State College, PA",
    date: "May 2025–Present",
    logo: <FaBuilding className="text-blue-900" size={32} />, // IBM creative logo
    bullets: [
      "Collaborating with the Midwest Client Engineering Team to design and deploy AI-powered solutions tailored for enterprise clients, focusing on natural language processing, generative AI, and machine learning.",
      "Building and optimizing scalable AI models using IBM Watson, Red Hat OpenShift, and foundational models for real-time client applications in cloud-native environments.",
    ],
  },
  {
    title: "Lockheed Martin Machine Learning Engineer",
    location: "University Park, PA",
    date: "December 2024–April 2025",
    logo: <FaIndustry className="text-blue-700" size={32} />, // Lockheed Martin creative logo
    bullets: [
      "Working on the Lockheed Martin 'Learned Virus Mitigation Project' under the Penn State Nittany AIAdvance. Developing machine learning models, including reinforcement learning, physics-informed neural networks and Neural ODEs (SEIRV), to predict virus spread, optimize containment strategies, and schedule care actions in dynamic scenarios.",
      "Integrating high-performance computing techniques with AI-driven simulations to enhance virus spread modeling, leveraging GPU acceleration and quantum computing methodologies for faster and more accurate predictions.",
      "Developing AI/ML solutions to find, track, and stop virus spread in containment scenarios by predicting virus propagation, optimize containment strategies and schedule care actions using tools and platforms like Python, TensorFlow, Qiskit, PyTorch, NumPy, SciPy, and CUDA.",
    ],
  },
  {
    title: "Nirma University, Department of Computer Science and Engineering Summer Research Intern",
    location: "Ahmedabad, India",
    date: "May 2024–August 2024",
    logo: <FaUniversity className="text-green-700" size={32} />, // University icon
    bullets: [
      "Completed the 'Quantum-Based Transformer Model' research project, with the aim of improving the efficacy of the AI Transformer Model by around 50% and reducing the time of data processing by 30%.",
      "Implemented hybrid quantum-classical optimization techniques to improve the scalability of AI Transformer models, enabling efficient processing of large-scale datasets with reduced computational overhead.",
      "Designed optimized solution for the Google BERT Transformer model by analyzing a section of large datasets, and implementing the Quantum approximate optimization algorithm, leading to a 43% increase in efficiency of an AI transformer model using tools like Python, TensorFlow, Qiskit, and PyTorch.",
    ],
  },
  {
    title: "Indian Institute of Technology, Gandhinagar Intern (Part-time)",
    location: "Gandhinagar, India",
    date: "May 2024–June 2024",
    logo: <FaUniversity className="text-orange-600" size={32} />, // University icon
    bullets: [
      "Worked on the 'Generative AI meets Quantum Software Engineering' project giving emphasis to Green Computing by developing a Qiskit-Based Quantum algorithm for enhancing the CPU performance.",
      "Explored and applied quantum circuit optimizations to reduce energy consumption in AI-driven computations, contributing to sustainability efforts in green computing.",
      "Designed and implemented a Machine Learning solution, resulting in a 57% increase in accuracy, leading to more impactful decision for Green Computing using Qiskit, NumPy, JavaScript, SQL, Python Programming, C Programming.",
    ],
  },
];

const Experience = () => (
  <motion.div
    className="py-12 relative overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-cyan-100 to-purple-100 opacity-80 blur-2xl" />
    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center relative z-10">Experience</h2>
    <div className="space-y-8 relative z-10">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="bg-white/80 rounded-lg shadow-xl p-6 border border-gray-100 flex flex-col md:flex-row items-start gap-4 hover:scale-[1.03] transition-transform"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <div className="flex-shrink-0 mr-2">{exp.logo}</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">{exp.title}</h3>
            <div className="text-sm text-gray-500 mb-1">{exp.location} | {exp.date}</div>
            <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Experience; 