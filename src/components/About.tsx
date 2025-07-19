import React from "react";
import { motion } from "framer-motion";
import { SiTensorflow, SiPytorch, SiQiskit, SiPython } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const expertise = [
  { name: "Machine Learning", icon: <GiBrain className="text-yellow-400" size={36} /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" size={36} /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" size={36} /> },
  { name: "Qiskit", icon: <SiQiskit className="text-purple-600" size={36} /> },
  { name: "Python", icon: <SiPython className="text-blue-500" size={36} /> },
];

const About = () => (
  <motion.div
    className="py-12 text-center relative overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-80 blur-2xl" />
    <div className="relative max-w-3xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-6">
        I am fascinated by the applications of quantum computing and Machine Learning, which is my main focus of study and research. I have completed multiple courses on AI, ML, data analysis, and quantum computation, and I have earned several certifications that demonstrate my proficiency and creativity in these fields.
      </p>
      <div className="flex justify-center gap-8 flex-wrap mt-6">
        {expertise.map((item) => (
          <motion.div
            key={item.name}
            className="flex flex-col items-center bg-white/80 rounded-xl shadow p-4 m-2 hover:scale-110 transition-transform"
            whileHover={{ scale: 1.15, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.icon}
            <span className="mt-2 text-sm text-gray-700 font-medium">{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default About; 