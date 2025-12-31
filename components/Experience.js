'use client'
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-24">
       <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex items-center text-2xl md:text-3xl font-bold text-white mb-12"
      >
        <span className="text-blue-500 mr-2">01.</span> Where I've Worked
        <span className="ml-4 h-px bg-white/10 flex-grow max-w-xs"></span>
      </motion.h2>

      <div className="border-l-2 border-white/10 ml-2">
        
        {/* Job 1 */}
        <div className="pl-8 pb-12 relative">
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <h3 className="text-xl font-bold text-white">Sales Intern</h3>
          <p className="text-blue-500 font-medium mb-2">Flow Institute • Karachi</p>
          <p className="text-sm text-gray-500 mb-4 font-mono">June 2022 - Aug 2022</p>
          <ul className="list-disc ml-4 text-gray-400 space-y-2 text-sm">
            <li>Collaborated with a 4-person team under strict deadlines to execute sales strategies.</li>
            <li>Directly contributed to increasing customer acquisition through targeted outreach.</li>
          </ul>
        </div>

        {/* Education 1 */}
        <div className="pl-8 pb-12 relative">
           <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[9px] top-0"></div>
           <h3 className="text-xl font-bold text-white">Bachelor of Science</h3>
           <p className="text-blue-500 font-medium mb-2">Brock University • Canada</p>
           <p className="text-sm text-gray-500 mb-4 font-mono">Sept 2023 - Present</p>
           <p className="text-gray-400 text-sm">Focusing on Computer Science, Algorithms, and Software Engineering.</p>
        </div>

      </div>
    </section>
  )
}