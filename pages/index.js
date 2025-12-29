import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "AI Image Compression",
      desc: "Reframing image compression as an optimization problem using Genetic Algorithms.",
      tech: ["Python", "Genetic Algorithms", "NumPy"],
      href: "/projects/ga-image-compression",
      badge: "AI / GA",
    },
    {
      title: "Full-Stack Web Application",
      desc: "Secure, database-driven web app with authentication and server-side logic.",
      tech: ["JavaScript", "PHP", "MySQL"],
      href: "/projects/web-development",
      badge: "Web",
    },
  ];

  return (
    <Layout>
      {/* HERO / INTRO */}
      <section className="min-h-[80vh] flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
        >
          Syed Ahmed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-slate-200/70 leading-relaxed"
        >
          I build secure, intelligent systems — blending computer science
          fundamentals with clean, modern interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 hover:bg-cyan-400 transition"
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition"
          >
            Resume
          </a>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Selected Work
          </h2>
          <p className="mt-3 max-w-2xl text-slate-200/60">
            Projects focused on strong fundamentals, real constraints,
            and clear technical outcomes.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            About
          </h2>
          <p className="mt-4 max-w-3xl text-slate-200/70 leading-relaxed">
            I’m a Computer Science student at Brock University with interests
            in cybersecurity, AI, and systems programming. I enjoy taking
            complex ideas and turning them into structured, working systems.
          </p>
        </Reveal>
      </section>

      {/* LINKS / CREDIBILITY */}
      <section className="pb-24">
        <Reveal>
          <h2 className="text-xl font-semibold text-white">
            Connect
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/SyedAhmed2004"
              target="_blank"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:yk23oz@brocku.ca"
              className="rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 hover:bg-cyan-400 transition"
            >
              Email
            </a>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
