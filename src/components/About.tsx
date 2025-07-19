import React from "react";

const expertise = [
  { name: "Machine Learning", icon: (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#F7DF1E"/><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#222">ML</text></svg>
  ) },
  { name: "Quantum Algorithms", icon: (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#8B5CF6"/><text x="16" y="21" textAnchor="middle" fontSize="14" fill="#fff">Q</text></svg>
  ) },
  // Add more as needed
];

const About = () => (
  <div className="py-12 text-center">
    <h2 className="text-2xl font-bold text-blue-700 mb-4">About Me</h2>
    <p className="max-w-2xl mx-auto text-gray-700 mb-6">
      I am fascinated by the applications of quantum computing and Machine Learning, which is my main focus of study and research. I have completed multiple courses on AI, ML, data analysis, and quantum computation, and I have earned several certifications that demonstrate my proficiency and creativity in these fields.
    </p>
    <div className="flex justify-center gap-8">
      {expertise.map((item) => (
        <div key={item.name} className="flex flex-col items-center">
          {item.icon}
          <span className="mt-2 text-sm text-gray-600">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default About; 