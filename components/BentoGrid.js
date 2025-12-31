'use client'
import { motion } from 'framer-motion';

// A Reusable Project Row Component
const ProjectRow = ({ title, description, tags, image, link, alignRight }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className={`flex flex-col md:flex-row gap-10 items-center mb-32 ${alignRight ? 'md:flex-row-reverse' : ''}`}
  >
    {/* Image Side */}
    <div className="w-full md:w-3/5 relative group rounded-xl overflow-hidden border border-white/10 bg-white/5">
      <div className="aspect-video relative overflow-hidden">
        {/* Using the user's uploaded images */}
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
      </div>
    </div>

    {/* Content Side */}
    <div className={`w-full md:w-2/5 ${alignRight ? 'md:text-left' : 'md:text-right'} text-left`}>
      <h4 className="text-blue-500 font-medium text-sm mb-2">Featured Project</h4>
      <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
      
      <div className={`bg-[#112240] p-6 rounded-lg text-gray-300 text-sm leading-relaxed mb-6 shadow-xl ${alignRight ? 'md:-ml-16' : 'md:-mr-16'} relative z-10`}>
        {description}
      </div>

      <ul className={`flex flex-wrap gap-4 text-xs font-medium text-gray-400 mb-6 ${alignRight ? 'justify-start' : 'justify-start md:justify-end'}`}>
        {tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>

      <div className={`flex gap-4 ${alignRight ? 'justify-start' : 'justify-start md:justify-end'}`}>
        <a href={link} target="_blank" className="text-white hover:text-blue-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div>
    </div>
  </motion.div>
);

export default function BentoGrid() {
  return (
    <section id="work" className="max-w-5xl mx-auto px-6 py-24">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex items-center text-2xl md:text-3xl font-bold text-white mb-16"
      >
        <span className="text-blue-500 mr-2">02.</span> Some Things I've Built
        <span className="ml-4 h-px bg-white/10 flex-grow max-w-xs"></span>
      </motion.h2>
      
      {/* Project 1: AI Compression */}
      <ProjectRow 
        title="AI Image Compression"
        description="Engineered a block-based Genetic Algorithm to compress 2000x1200 images to 200x120 while preserving global structure. Optimized pixel intensity using evolutionary strategies."
        tags={['Python', 'OpenCV', 'Genetic Algorithms', 'NumPy']}
        image="/work/Figure_2.png" 
        link="https://github.com/SyedAhmed2004/COSC3P71-Image-Compression-GA"
        alignRight={false}
      />

      {/* Project 2: E-Commerce */}
      <ProjectRow 
        title="Full-Stack E-Commerce"
        description="A secure shopping platform hosted on Brock University's Sandcastle server. Features dynamic wishlists, user auth, and PHP/MySQL backend logic executed via Bash scripts."
        tags={['PHP', 'MySQL', 'Bash', 'Linux']}
        image="/work/p3.jpg"
        link="https://github.com/SyedAhmed2004"
        alignRight={true}
      />

    </section>
  )
}