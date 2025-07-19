import React from "react";
import { motion } from "framer-motion";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";

const contacts = [
  {
    label: "Gmail",
    value: "binaydalai2024@gmail.com",
    href: "mailto:binaydalai2024@gmail.com",
    icon: <SiGmail className="text-red-200" size={28} />,
  },
  {
    label: "GitHub",
    value: "bkd-dotcom",
    href: "https://github.com/bkd-dotcom",
    icon: <SiGithub className="text-white" size={28} />,
  },
  {
    label: "LinkedIn",
    value: "binay-dalai",
    href: "https://www.linkedin.com/in/binay-dalai/",
    icon: <SiLinkedin className="text-blue-200" size={28} />,
  },
];

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ width: '100%', paddingTop: '3rem', paddingBottom: '3rem', fontFamily: 'sans-serif' }}
  >
    <div className="w-full px-0 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-10 text-center">Get in Touch</h2>
      <div className="flex flex-col items-center gap-4 w-full bg-white/10 rounded-xl shadow px-0 py-10">
        {contacts.map((c) => (
          <div
            key={c.label}
            className="w-full"
          >
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors text-xl px-4 py-2 rounded-xl w-full justify-center"
            >
              {c.icon}
              <span>{c.value}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full flex justify-center">
        <a
          href="/Binay_ResumeMay.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow hover:scale-105 text-xl"
        >
          <FaFileDownload className="text-white animate-bounce" /> Download Resume
        </a>
      </div>
    </div>
  </motion.div>
);

export default Contact; 