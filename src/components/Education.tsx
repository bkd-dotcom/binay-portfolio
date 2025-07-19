import React from "react";
import { motion } from "framer-motion";

const Education = () => (
  <motion.div
    className="py-12 w-full relative overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 opacity-80 blur-2xl" />
    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center relative z-10">Education</h2>
    <motion.div
      className="w-full bg-white/70 rounded-lg shadow-xl border border-gray-100 relative z-10 hover:scale-105 transition-transform backdrop-blur-md"
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="px-4 sm:px-8 py-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Bachelor of Science in Computer Science and Mathematics</h3>
        <div className="text-sm text-gray-500 mb-2">Pennsylvania State University, University Park, PA, USA</div>
        <div className="text-sm text-gray-500 mb-2">August 2023 - Present (Expected Graduation Date - August 2026)</div>
        <div className="text-sm text-gray-700 mb-2">GPA: <span className="font-semibold">3.91/4.0</span></div>
        <div className="text-sm text-gray-700 mb-2">Dean’s List: Fall 2023, Spring 2024, Summer 2024, Fall 2024, Spring 2025</div>
        <div className="text-sm text-gray-700 mb-2">Courses Completed: Python Programming, Java Programming, C and Systems Programming, Discrete Mathematics</div>
        <div className="text-sm text-gray-700">Clubs Involved: Nittany AI Alliance, ACM ML Club, and Google Student Developer's Club</div>
      </div>
    </motion.div>
  </motion.div>
);

export default Education; 