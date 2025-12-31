'use client'
import { motion } from 'framer-motion';

export default function Hero() {
  const text = "I build things for the web.";

  return (
    <section className="h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-10">
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-400 font-mono text-sm mb-5 ml-1"
      >
        Hi, my name is
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4"
      >
        Syed Ahmed.
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl md:text-7xl font-bold text-gray-500 tracking-tighter mb-8"
      >
        {/* Typewriter Effect Container */}
        <span className="inline-block">
           I build intelligent digital experiences.
        </span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-gray-400 max-w-xl text-lg leading-relaxed mb-12"
      >
        I’m a Computer Science student at <span className="text-white font-semibold">Brock University</span> specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on accessible, human-centered products.
      </motion.p>
      
      <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a href="#work" className="px-8 py-4 border border-white text-white rounded-md hover:bg-white/10 transition-all font-mono text-sm">
          Check out my work
        </a>
      </motion.div>
    </section>
  )
}