import React from "react";

const contacts = [
  {
    label: "Email",
    value: "binaydalai2024@gmail.com",
    href: "mailto:binaydalai2024@gmail.com",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#2563EB"/><text x="12" y="17" textAnchor="middle" fontSize="12" fill="#fff">@</text></svg>
    ),
  },
  {
    label: "GitHub",
    value: "bkd-dotcom",
    href: "https://github.com/bkd-dotcom",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#333"/><text x="12" y="17" textAnchor="middle" fontSize="12" fill="#fff">GH</text></svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "binay-dalai",
    href: "https://www.linkedin.com/in/binay-dalai/",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#0A66C2"/><text x="12" y="17" textAnchor="middle" fontSize="12" fill="#fff">in</text></svg>
    ),
  },
];

const Contact = () => (
  <div className="py-12 text-center">
    <h2 className="text-2xl font-bold text-blue-700 mb-6">Get in Touch</h2>
    <div className="flex flex-col items-center gap-4">
      {contacts.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target={c.href.startsWith('http') ? '_blank' : undefined}
          rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors text-lg"
        >
          {c.icon}
          <span>{c.value}</span>
        </a>
      ))}
    </div>
    <div className="mt-8">
      <a
        href="/Binay_ResumeMay.pdf"
        download
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  </div>
);

export default Contact; 