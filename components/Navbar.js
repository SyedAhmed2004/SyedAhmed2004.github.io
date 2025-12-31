'use client'
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-black/50 border-b border-white/10"
    >
      <div className="text-xl font-semibold tracking-tighter text-white">
        Syed<span className="text-gray-400">Ahmed</span>
      </div>
      <div className="flex gap-6 text-sm font-medium text-gray-300">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </motion.nav>
  )
}