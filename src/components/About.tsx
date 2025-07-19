import React from "react";
import { motion } from "framer-motion";
import { SiTensorflow, SiPytorch, SiQiskit, SiPython } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const expertise = [
  { name: "Machine Learning", icon: <GiBrain className="text-yellow-400" size={36} /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" size={36} /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" size={36} /> },
  { name: "Qiskit", icon: <SiQiskit className="text-purple-200" size={36} /> },
  { name: "Python", icon: <SiPython className="text-blue-200" size={36} /> },
];

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ paddingTop: '3rem', paddingBottom: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden', fontFamily: 'sans-serif' }}
  >
    <div className="w-full px-0 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
      <p className="text-white/90 mb-10 text-2xl">
        I am fascinated by the applications of quantum computing and Machine Learning, which is my main focus of study and research. I have completed multiple courses on AI, ML, data analysis, and quantum computation, and I have earned several certifications that demonstrate my proficiency and creativity in these fields.
      </p>
      <div className="flex justify-center gap-8 flex-wrap mt-6">
        {expertise.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center bg-white/10 rounded-xl shadow p-4 m-2 hover:scale-110 transition-transform"
          >
            {item.icon}
            <span className="mt-2 text-lg text-white font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default About; 