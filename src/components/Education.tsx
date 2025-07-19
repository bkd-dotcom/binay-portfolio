import React from "react";
import { motion } from "framer-motion";

const Education = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ width: '100%', paddingTop: '3rem', paddingBottom: '3rem', fontFamily: 'sans-serif' }}
  >
    <div className="w-full px-0">
      <h2 className="text-5xl font-bold text-white mb-10 text-center">Education</h2>
      <div className="w-full bg-white/10 shadow px-4 sm:px-12 md:px-16 py-12">
        <h3 className="text-2xl font-semibold text-white mb-3">Bachelor of Science in Computer Science and Mathematics</h3>
        <div className="text-xl text-white/80 mb-3">Pennsylvania State University, University Park, PA, USA</div>
        <div className="text-xl text-white/80 mb-3">August 2023 - Present (Expected Graduation Date - August 2026)</div>
        <div className="text-xl text-white/90 mb-3">GPA: <span className="font-semibold">3.91/4.0</span></div>
        <div className="text-xl text-white/90 mb-3">Dean’s List: Fall 2023, Spring 2024, Summer 2024, Fall 2024, Spring 2025</div>
        <div className="text-xl text-white/90 mb-3">Courses Completed: Python Programming, Java Programming, C and Systems Programming, Discrete Mathematics</div>
        <div className="text-xl text-white/90">Clubs Involved: Nittany AI Alliance, ACM ML Club, and Google Student Developer's Club</div>
      </div>
    </div>
  </motion.div>
);

export default Education; 