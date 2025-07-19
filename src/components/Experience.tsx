import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiQiskit, SiTensorflow, SiPytorch } from "react-icons/si";
import { FaUniversity, FaStar, FaIndustry } from "react-icons/fa";

const IBMLogo = (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    alt="IBM Logo"
    width={60}
    height={36}
    style={{ background: "white", borderRadius: 4, padding: 4 }}
  />
);
const LockheedLogo = (
  <div style={{
    background: "#003057",
    borderRadius: 4,
    padding: 6,
    display: "flex",
    alignItems: "center",
    height: 40,
    width: 60,
    justifyContent: "center"
  }}>
    <FaIndustry color="#fff" size={28} />
  </div>
);

const experiences = [
  {
    title: "IBM AI Engineer Co-op Intern",
    companyLogo: IBMLogo,
    location: "Midwest Client Engineering Team, State College, PA",
    date: "May 2025–Present",
    bullets: [
      "Collaborating with the Midwest Client Engineering Team to design and deploy AI-powered solutions tailored for enterprise clients, focusing on natural language processing, generative AI, and machine learning.",
      "Building and optimizing scalable AI models using IBM Watson, Red Hat OpenShift, and foundational models for real-time client applications in cloud-native environments.",
    ],
  },
  {
    title: "Lockheed Martin Machine Learning Engineer",
    companyLogo: LockheedLogo,
    location: "University Park, PA",
    date: "December 2024–April 2025",
    bullets: [
      "Working on the Lockheed Martin 'Learned Virus Mitigation Project' under the Penn State Nittany AIAdvance. Developing machine learning models, including reinforcement learning, physics-informed neural networks and Neural ODEs (SEIRV), to predict virus spread, optimize containment strategies, and schedule care actions in dynamic scenarios.",
      "Integrating high-performance computing techniques with AI-driven simulations to enhance virus spread modeling, leveraging GPU acceleration and quantum computing methodologies for faster and more accurate predictions.",
      "Developing AI/ML solutions to find, track, and stop virus spread in containment scenarios by predicting virus propagation, optimize containment strategies and schedule care actions using tools and platforms like Python, TensorFlow, Qiskit, PyTorch, NumPy, SciPy, and CUDA.",
    ],
  },
  {
    title: "Nirma University, Department of Computer Science and Engineering Summer Research Intern",
    companyLogo: <FaUniversity className="text-green-200" size={36} />, // University icon
    location: "Ahmedabad, India",
    date: "May 2024–August 2024",
    bullets: [
      "Completed the 'Quantum-Based Transformer Model' research project, with the aim of improving the efficacy of the AI Transformer Model by around 50% and reducing the time of data processing by 30%.",
      "Implemented hybrid quantum-classical optimization techniques to improve the scalability of AI Transformer models, enabling efficient processing of large-scale datasets with reduced computational overhead.",
      "Designed optimized solution for the Google BERT Transformer model by analyzing a section of large datasets, and implementing the Quantum approximate optimization algorithm, leading to a 43% increase in efficiency of an AI transformer model using tools like Python, TensorFlow, Qiskit, and PyTorch.",
    ],
  },
  {
    title: "Indian Institute of Technology, Gandhinagar Intern (Part-time)",
    companyLogo: <FaUniversity className="text-orange-200" size={36} />, // University icon
    location: "Gandhinagar, India",
    date: "May 2024–June 2024",
    bullets: [
      "Worked on the 'Generative AI meets Quantum Software Engineering' project giving emphasis to Green Computing by developing a Qiskit-Based Quantum algorithm for enhancing the CPU performance.",
      "Explored and applied quantum circuit optimizations to reduce energy consumption in AI-driven computations, contributing to sustainability efforts in green computing.",
      "Designed and implemented a Machine Learning solution, resulting in a 57% increase in accuracy, leading to more impactful decision for Green Computing using Qiskit, NumPy, JavaScript, SQL, Python Programming, C Programming.",
    ],
  },
];

const Experience = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ width: '100%', paddingTop: '3rem', paddingBottom: '3rem', fontFamily: 'sans-serif' }}
  >
    <div className="w-full px-0 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-10 text-center">Experience</h2>
      <div className="space-y-8 w-full">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="w-full bg-white/10 rounded-xl shadow p-8 flex flex-col md:flex-row items-start gap-4"
          >
            <div className="flex-shrink-0 mr-4 flex items-center">{exp.companyLogo}</div>
            <div className="w-full">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mb-2">{exp.title}</h3>
              <div className="text-lg text-white/80 mb-2">{exp.location} | {exp.date}</div>
              <ul className="list-disc ml-6 text-white/90 text-xl mt-2 space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Experience; 