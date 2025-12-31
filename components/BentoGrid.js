'use client'
import { motion } from 'framer-motion';

const Card = ({ title, subtitle, description, className, delay, href }) => (
  <motion.a 
    href={href}
    target={href?.startsWith('http') ? '_blank' : '_self'}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay, duration: 0.5 }}
    className={`block relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] cursor-pointer group ${className}`}
  >
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">{subtitle}</h3>
        <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{title}</h2>
        {description && <p className="text-gray-400 text-sm leading-relaxed">{description}</p>}
      </div>
      
      {/* Arrow Icon that appears on hover */}
      <div className="mt-8 flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more <span className="ml-2">→</span>
      </div>
    </div>
    
    {/* Subtle Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.a>
);

export default function BentoGrid() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-32">
      <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
        Selected Work.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)]">
        
        {/* PROJECT 1: AI Compression (Large Feature) */}
        <Card 
          title="AI Image Compression" 
          subtitle="Computer Vision & Genetic Algorithms" 
          description="Engineered a block-based Genetic Algorithm to compress 2000x1200 images to 200x120. Optimized pixel intensity using evolutionary strategies (Selection, Crossover, Mutation) to balance compression ratio with visual fidelity, preserving global structure where traditional resizing failed."
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/20 to-black min-h-[400px]"
          delay={0.1}
          href="https://github.com/SyedAhmed2004/COSC3P71-Image-Compression-GA"
        />

        {/* PROJECT 2: E-Commerce Platform */}
        <Card 
          title="Full-Stack E-Commerce" 
          subtitle="PHP / MySQL / Bash" 
          description="Built a secure shopping platform on Brock University's Sandcastle server. Implemented dynamic wishlists and user authentication using PHP/MySQL, executing backend logic via Bash scripts in a Linux environment."
          className="md:col-span-2 bg-blue-900/10"
          delay={0.2}
          href="https://github.com/SyedAhmed2004" 
        />

        {/* WORK EXPERIENCE */}
        <Card 
          title="Sales Intern" 
          subtitle="Flow Institute (Karachi)" 
          description="Collaborated with a 4-person team under strict deadlines. Executed strategic sales initiatives that directly increased customer acquisition. (June '22 - Aug '22)"
          className="md:col-span-2 bg-white/5"
          delay={0.3}
          href="#"
        />

        {/* EDUCATION - Brock */}
        <Card 
          title="Brock University" 
          subtitle="B.Sc Computer Science (2027)" 
          description="St. Catharines, ON. Focusing on Algorithms and Software Engineering."
          className="md:col-span-2"
          delay={0.4}
          href="https://brocku.ca"
        />

        {/* EDUCATION - Earlier */}
        <Card 
          title="Academic Foundation" 
          subtitle="Nixor College & Beaconhouse" 
          description="A-Level Pre-Engineering (Karachi) | O-Levels."
          className="md:col-span-1"
          delay={0.5}
          href="#"
        />

        {/* SOCIAL LINKS */}
        <Card 
          title="GitHub" 
          subtitle="Code" 
          className="md:col-span-1 bg-[#24292e] hover:bg-[#2b3137]"
          delay={0.6}
          href="https://github.com/SyedAhmed2004"
        />

        <Card 
          title="LinkedIn" 
          subtitle="Connect" 
          className="md:col-span-2 bg-[#0077b5] hover:bg-[#006396]"
          delay={0.7}
          href="https://www.linkedin.com/in/syed-ahmed-29642b240"
        />

      </div>
    </section>
  )
}