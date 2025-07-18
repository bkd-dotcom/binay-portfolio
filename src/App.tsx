import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 sm:px-6 lg:px-8 py-10 text-white font-sans">
      <section className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Binay Dalai
          </h1>
          <h2 className="text-lg sm:text-xl text-cyan-300 mt-2">
            Senior at Penn State | Schreyer Honors Scholar | Tau Beta Pi
          </h2>
        </motion.div>

        <motion.p
          className="mt-6 mb-10 text-lg sm:text-xl text-gray-200 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Passionate about quantum algorithms, generative AI, and designing intelligent systems. Currently exploring the intersection of quantum computing and AI through impactful research and internships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <Card className="bg-gradient-to-r from-[#1f1c2c] to-[#928DAB] border-none shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-300 mb-3">About Me</h3>
              <p className="text-md text-gray-100">
                I am a Computer Science senior at The Pennsylvania State University with a minor in Mathematics. I've contributed to quantum-based transformer optimization, virus mitigation modeling, and green computing. My research involves applying AI to solve real-world challenges through both classical and quantum techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-[#1f1c2c] to-[#928DAB] border-none shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-300 mb-3">Featured Projects</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-100">
                <li>
                  <strong className="text-white">Learned Virus Mitigation:</strong> Developed AI/ML models (SEIRV, PINNs) to simulate virus spread, integrated with real-time visualizations.
                </li>
                <li>
                  <strong className="text-white">Quantum-Based Transformer:</strong> Improved efficiency of transformer models using quantum circuits and QAOA.
                </li>
                              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-[#1f1c2c] to-[#928DAB] border-none shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-300 mb-3">Contact</h3>
              <div className="flex flex-col gap-4 text-cyan-200">
                <a href="mailto:binaydalai2024@gmail.com" className="flex items-center gap-2 hover:text-white transition">
                  <Mail className="h-4 w-4" /> binaydalai2024@gmail.com
                </a>
                <a href="https://github.com/bkd-dotcom" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                  <Github className="h-4 w-4" /> github.com/bkd-dotcom
                </a>
                <a href="https://www.linkedin.com/in/binay-dalai/" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                  <Linkedin className="h-4 w-4" /> linkedin.com/in/binay-dalai
                </a>
              </div>
              <div className="mt-6">
                <Button asChild className="bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold px-6 py-2 rounded-xl">
                  <a href="/Binay_ResumeMay.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}

