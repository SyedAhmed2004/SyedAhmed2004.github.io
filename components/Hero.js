'use client'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-700 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-700 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-6"
        >
          Think Different.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-xl md:text-2xl mb-8"
        >
          Syed Ahmed. Developer. Creator.
        </motion.p>
      </div>
    </section>
  )
}