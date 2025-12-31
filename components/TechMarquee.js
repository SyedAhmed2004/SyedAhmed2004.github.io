'use client'
import { motion } from 'framer-motion';

const skills = [
  "JavaScript", "React", "Next.js", "Node.js", "Python", "Genetic Algos", 
  "MySQL", "PHP", "Linux", "Git", "Bash", "Framer Motion", "Tailwind"
];

export default function TechMarquee() {
  return (
    <section className="py-10 overflow-hidden bg-black border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-16 pr-16"
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800 uppercase tracking-tighter">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}