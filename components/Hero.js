'use client'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
      
      {/* 1. The Intro Tag */}
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-blue-500 font-medium tracking-wide mb-4 text-lg"
      >
        Hello, my name is
      </motion.span>
      
      {/* 2. The Big Name (Apple Font Style) */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-4"
      >
        Syed Ahmed.
      </motion.h1>

      {/* 3. The "What I Do" Statement (Greyed out like Apple) */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-gray-400 tracking-tight mb-8"
      >
        I build intelligent digital experiences.
      </motion.h2>

      {/* 4. The Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-gray-400 max-w-xl text-lg leading-relaxed mb-10"
      >
        I am a Computer Science student at <span className="text-white">Brock University</span> specializing in AI optimization and Full-Stack architecture. Currently bridging the gap between complex algorithms and user-friendly design.
      </motion.p>

      {/* 5. The Call to Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4"
      >
        <a href="#work" className="px-8 py-4 bg-transparent border border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-500/10 transition-colors">
          Check out my work
        </a>
      </motion.div>
    </section>
  )
}