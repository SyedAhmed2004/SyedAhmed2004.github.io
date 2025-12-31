'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function AppleCard({ title, subtitle, category, image, href, className }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a 
      href={href}
      target="_blank"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group relative border border-white/10 bg-gray-900/50 overflow-hidden rounded-3xl ${className}`}
    >
      {/* 1. The Spotlight Effect Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. The Image Background */}
      <div className="absolute inset-0 z-0 opacity-60 transition-opacity duration-500 group-hover:opacity-40">
        <div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-black/60" /> 
      </div>

      {/* 3. The Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 border border-blue-500/30 w-fit px-2 py-1 rounded bg-blue-500/10">
          {category}
        </span>
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </motion.a>
  )
}