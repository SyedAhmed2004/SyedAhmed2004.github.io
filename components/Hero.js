'use client'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20">
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-blue-400 font-mono text-sm mb-6 tracking-widest"
      >
        HI, MY NAME IS
      </motion.p>
      
      {/* Name - MASSIVE & TIGHT */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter mb-4 -ml-1"
      >
        Syed Ahmed.
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-7xl font-bold text-gray-500 tracking-tighter mb-8"
      >
        I engineer digital reality.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 max-w-xl text-lg leading-relaxed mb-10 border-l-2 border-blue-500/50 pl-6"
      >
        Computer Science at <span className="text-white">Brock University</span>. 
        Specializing in <span className="text-blue-400">AI Optimization</span> and <span className="text-blue-400">High-Scale Architecture</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a href="#work" className="group relative px-8 py-4 bg-transparent text-blue-400 border border-blue-400/30 font-mono text-sm hover:bg-blue-400/10 transition-colors">
          <span className="relative z-10">Check out my work</span>
          <div className="absolute inset-0 bg-blue-400/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </a>
      </motion.div>

    </section>
  )
}