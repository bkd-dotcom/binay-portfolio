import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100/80 backdrop-blur border-b border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="font-bold text-lg text-blue-700">Binay Dalai</span>
        <ul className="flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
                <span className="block h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar; 