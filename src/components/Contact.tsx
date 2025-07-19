import React from "react";
import { motion } from "framer-motion";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";

const contacts = [
  {
    label: "Gmail",
    value: "binaydalai2024@gmail.com",
    href: "mailto:binaydalai2024@gmail.com",
    icon: <SiGmail className="text-red-500" size={28} />,
  },
  {
    label: "GitHub",
    value: "bkd-dotcom",
    href: "https://github.com/bkd-dotcom",
    icon: <SiGithub className="text-gray-800" size={28} />,
  },
  {
    label: "LinkedIn",
    value: "binay-dalai",
    href: "https://www.linkedin.com/in/binay-dalai/",
    icon: <SiLinkedin className="text-blue-700" size={28} />,
  },
];

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ padding: '3rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden', width: '100%' }}
  >
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 opacity-80 blur-2xl" />
    <h2 className="text-2xl font-bold text-blue-700 mb-6 relative z-10">Get in Touch</h2>
    <div className="flex flex-col items-center gap-4 relative z-10 w-full px-4 sm:px-8">
      {contacts.map((c) => (
        <motion.div
          key={c.label}
          whileHover={{ scale: 1.08, backgroundColor: '#e0e7ff' }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors text-lg bg-white/80 px-4 py-2 shadow hover:scale-105 rounded-xl w-full"
          >
            {c.icon}
            <span>{c.value}</span>
          </a>
        </motion.div>
      ))}
    </div>
    <div className="mt-8 relative z-10 w-full px-4 sm:px-8">
      <a
        href="/Binay_ResumeMay.pdf"
        download
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow hover:scale-105 w-full justify-center"
      >
        <FaFileDownload className="text-white animate-bounce" /> Download Resume
      </a>
    </div>
  </motion.div>
);

export default Contact; 