import React from "react";

const projects = [
  {
    title: "AI Transformer Optimization",
    description:
      "Improved AI Transformer Model efficiency by 43% using Quantum approximate optimization algorithm. Implemented using Python, TensorFlow, Qiskit, and PyTorch.",
    tech: ["Python", "TensorFlow", "Qiskit", "PyTorch"],
    github: "https://github.com/bkd-dotcom/Transformer-Project",
  },
  {
    title: "Depr AI",
    description:
      "Machine learning model for detecting depression through speech analysis. Built with TensorFlow and Keras, utilizing datasets from Kaggle and Hugging Face.",
    tech: ["Python", "TensorFlow", "Keras", "Speech Analysis"],
    github: "https://github.com/bkd-dotcom/Depr-AI",
  },
];

const techIcons: Record<string, JSX.Element> = {
  Python: (
    <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3776AB"/><text x="12" y="17" textAnchor="middle" fontSize="10" fill="#fff">Py</text></svg>
  ),
  TensorFlow: (
    <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FF6F00"/><text x="12" y="17" textAnchor="middle" fontSize="10" fill="#fff">TF</text></svg>
  ),
  Qiskit: (
    <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#6929C4"/><text x="12" y="17" textAnchor="middle" fontSize="10" fill="#fff">Q</text></svg>
  ),
  PyTorch: (
    <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#EE4C2C"/><text x="12" y="17" textAnchor="middle" fontSize="10" fill="#fff">PT</text></svg>
  ),
  Keras: (
    <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#D00000"/><text x="12" y="17" textAnchor="middle" fontSize="10" fill="#fff">K</text></svg>
  ),
  "Speech Analysis": (
    <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#00B8D9"/><text x="12" y="17" textAnchor="middle" fontSize="8" fill="#fff">SA</text></svg>
  ),
};

const Projects = () => (
  <div className="py-12">
    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Projects</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((proj, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 border border-gray-100 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{proj.title}</h3>
          <p className="text-gray-700 mb-4 text-sm">{proj.description}</p>
          <div className="flex gap-3 mb-4">
            {proj.tech.map((tech) => (
              <span key={tech} title={tech}>{techIcons[tech] || tech}</span>
            ))}
          </div>
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-600 hover:underline text-sm font-medium"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects; 