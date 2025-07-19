import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    href: "https://github.com/bkd-dotcom",
    icon: <SiGithub size={22} />,
    label: "GitHub",
    color: "hover:text-blue-400",
    aria: "GitHub profile"
  },
  {
    href: "https://www.linkedin.com/in/binay-dalai/",
    icon: <SiLinkedin size={22} />,
    label: "LinkedIn",
    color: "hover:text-blue-400",
    aria: "LinkedIn profile"
  },
  {
    href: "mailto:binaydalai2024@gmail.com",
    icon: <SiGmail size={22} />,
    label: "Gmail",
    color: "hover:text-red-400",
    aria: "Send email"
  },
];

const Navbar = () => {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gray-900 shadow-md border-b border-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <span className="font-bold text-lg text-white">Binay Dalai</span>
        <ul className="flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className="text-white hover:text-blue-300 transition-colors duration-200"
              >
                {link.label}
                <span className="block h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 ml-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.aria}
              className={`text-white ${s.color} transition-colors duration-200`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 