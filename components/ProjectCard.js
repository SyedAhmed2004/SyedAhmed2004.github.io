import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech, href, badge }) {
  return (
    <motion.a
      href={href}
      className="group relative block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/7 transition"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(60%_60%_at_20%_10%,rgba(34,211,238,0.18),rgba(2,6,23,0))]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {badge ? (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
              {badge}
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-200/70">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-950/50 border border-white/10 px-3 py-1 text-xs text-slate-200/80"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 text-sm text-cyan-300/90 group-hover:text-cyan-200 transition">
          View details →
        </div>
      </div>
    </motion.a>
  );
}
