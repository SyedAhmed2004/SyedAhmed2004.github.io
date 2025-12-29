import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "GA Image Compression",
      desc: "Block-based genetic algorithm to compress images while balancing visual quality vs size.",
      tech: ["Python", "Genetic Algorithm", "Image Processing"],
      href: "/projects/ga-image-compression",
      badge: "AI / GA",
    },
    {
      title: "Web App (Dashboard + Auth)",
      desc: "Clean product workflow with login + dashboard UI. Built to be fast, responsive, and readable.",
      tech: ["JavaScript", "UI/UX", "Web"],
      href: "/projects/web-development",
      badge: "Web",
    },
  ];

  return (
    <div id="top" className="grain min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="relative">
        <section className="relative pt-28 md:pt-32">
          <Background />

          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              {/* Left */}
              <div className="md:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200/80"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                  Dark • Cinematic • Recruiter-ready
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
                  className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white"
                >
                  Syed Ahmed — building{" "}
                  <span className="text-cyan-300">secure</span>,{" "}
                  <span className="text-cyan-300">intelligent</span> systems.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                  className="mt-5 max-w-2xl text-base md:text-lg text-slate-200/70 leading-relaxed"
                >
                  Computer Science student at Brock University focused on cybersecurity,
                  AI, and systems. I like clean engineering, strong visuals, and projects
                  that actually ship.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <a
                    href="#projects"
                    className="rounded-2xl bg-cyan-500/90 px-5 py-3 font-medium text-slate-950 hover:bg-cyan-400 transition"
                  >
                    View projects
                  </a>
                  <a
                    href="/resume.pdf"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
                  >
                    Open resume
                  </a>
                  <a
                    href="https://github.com/SyedAhmed2004"
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="mt-10 flex flex-wrap gap-6 text-sm text-slate-200/60"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    Fast, responsive UI
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    Clean project storytelling
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    GitHub Pages deploy
                  </div>
                </motion.div>
              </div>

              {/* Right */}
              <div className="md:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
                  className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(70%_60%_at_20%_0%,rgba(34,211,238,0.16),rgba(2,6,23,0))]" />
                  <div className="relative">
                    <div className="text-sm text-slate-200/60">Currently</div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      CS @ Brock University
                    </div>
                    <div className="mt-4 text-sm text-slate-200/70 leading-relaxed">
                      Building portfolio projects, shipping assignments, and leveling up
                      cybersecurity + AI fundamentals.
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                        <div className="text-xs text-slate-200/60">Focus</div>
                        <div className="mt-1 text-sm text-white">Cybersecurity</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                        <div className="text-xs text-slate-200/60">Strength</div>
                        <div className="mt-1 text-sm text-white">Systems + UI</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                        <div className="text-xs text-slate-200/60">Style</div>
                        <div className="mt-1 text-sm text-white">Clean + smooth</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                        <div className="text-xs text-slate-200/60">Deploy</div>
                        <div className="mt-1 text-sm text-white">GitHub Pages</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Projects */}
            <section id="projects" className="mt-16 md:mt-24 pb-8">
              <Reveal>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                      Selected work
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-slate-200/60 max-w-2xl">
                      Projects with strong outcomes, clean architecture, and clear storytelling.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {projects.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.08}>
                    <ProjectCard {...p} />
                  </Reveal>
                ))}
              </div>
            </section>

            {/* About */}
            <section id="about" className="py-10 md:py-16">
              <Reveal>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">About</h2>
                  <p className="mt-4 text-slate-200/70 leading-relaxed max-w-3xl">
                    I’m Syed — I build projects that combine strong fundamentals with clean UX.
                    I care about security, performance, and making technical work look professional.
                    This site is designed to feel premium: subtle motion, strong typography, and clarity.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Cybersecurity", "AI / GA", "Java", "Networking", "Web UI", "Systems"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-200/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* Contact */}
            <section id="contact" className="pb-20 md:pb-28">
              <Reveal>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact</h2>
                  <p className="mt-3 text-slate-200/70">
                    Want to reach me? Email is best.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      className="rounded-2xl bg-cyan-500/90 px-5 py-3 font-medium text-slate-950 hover:bg-cyan-400 transition"
                      href="mailto:yk23oz@brocku.ca"
                    >
                      Email me
                    </a>
                    <a
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
                      href="https://github.com/SyedAhmed2004"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="mt-10 text-center text-xs text-slate-200/40">
                © {new Date().getFullYear()} Syed Ahmed • Built with Next.js + Tailwind
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
