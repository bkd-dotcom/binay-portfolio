
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-4 sm:px-6 lg:px-8 py-8 text-gray-900">
      <section className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Binay Dalai</h1>
          <h2 className="text-lg sm:text-xl text-blue-600 mb-6">
            Senior at Penn State | Schreyer Honors Scholar | Tau Beta Pi
          </h2>
        </motion.div>

        <motion.p
          className="mb-6 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Passionate about quantum algorithms, generative AI, and designing intelligent systems. Currently exploring the intersection of quantum computing and AI through impactful research and internships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">About Me</h3>
              <p className="text-sm sm:text-md">
                I am a Computer Science senior at The Pennsylvania State University with a minor in Mathematics. I've contributed to quantum-based transformer optimization, virus mitigation modeling, and green computing. My research involves applying AI to solve real-world challenges through both classical and quantum techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Featured Projects</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  <strong>Learned Virus Mitigation:</strong> Developed AI/ML models (SEIRV, PINNs) to simulate virus spread, integrated with real-time visualizations.
                </li>
                <li>
                  <strong>Quantum-Based Transformer:</strong> Improved efficiency of transformer models using quantum circuits and QAOA.
                </li>
                <li>
                  <strong>Green Computing + Quantum:</strong> Designed Qiskit-based quantum solutions to optimize CPU performance and reduce energy use.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Contact</h3>
              <div className="flex flex-col gap-3 text-blue-600">
                <a
                  href="mailto:binaydalai2024@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" /> binaydalai2024@gmail.com
                </a>
                <a
                  href="https://github.com/bkd-dotcom"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> github.com/bkd-dotcom
                </a>
                <a
                  href="https://www.linkedin.com/in/binay-dalai/"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" /> linkedin.com/in/binay-dalai
                </a>
              </div>
              <div className="mt-4">
                <Button asChild>
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
