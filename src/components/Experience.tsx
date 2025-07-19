import React from "react";

const experiences = [
  {
    title: "IBM AI Engineer Co-op Intern",
    location: "Midwest Client Engineering Team, State College, PA",
    date: "May 2025–Present",
    bullets: [
      "Collaborating with the Midwest Client Engineering Team to design and deploy AI-powered solutions tailored for enterprise clients, focusing on natural language processing, generative AI, and machine learning.",
      "Building and optimizing scalable AI models using IBM Watson, Red Hat OpenShift, and foundational models for real-time client applications in cloud-native environments.",
    ],
  },
  {
    title: "Lockheed Martin Machine Learning Engineer",
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
  <div className="py-12">
    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Experience</h2>
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
          <div className="text-sm text-gray-500 mb-1">{exp.location} | {exp.date}</div>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Experience; 