import React from "react";

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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="font-bold text-lg text-blue-700">Binay Dalai</span>
        <ul className="flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 