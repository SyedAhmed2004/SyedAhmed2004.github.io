import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-gray-200">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="text-white">Syed</span>{" "}
          <span className="text-cyan-400">Ahmed</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-400"
        >
          Building secure, intelligent systems.  
          Computer Science student focused on{" "}
          <span className="text-gray-200">Cybersecurity</span>,{" "}
          <span className="text-gray-200">AI</span>, and{" "}
          <span className="text-gray-200">Systems Programming</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition"
          >
            View Work
          </a>
          <span className="px-6 py-3 border border-gray-500 rounded-lg text-gray-400 cursor-not-allowed">
            Resume (Coming Soon)
          </span>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-16 text-center"
        >
          Selected Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* GA PROJECT */}
          <Link href="/projects/ga-image-compression">
            <motion.div
              whileHover={{ y: -6 }}
              className="cursor-pointer bg-slate-900/60 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                AI-Based Image Compression Using Genetic Algorithms
              </h3>
              <p className="text-gray-400 mb-4">
                Treating image compression as an optimization problem using a
                block-based Genetic Algorithm.
              </p>
              <span className="text-sm text-cyan-400">
                Python · Genetic Algorithms · NumPy
              </span>
              <div className="mt-4 text-cyan-400 text-sm">
                View full project →
              </div>
            </motion.div>
          </Link>

          {/* WEB DEV PROJECT */}
          <Link href="/projects/web-development">
            <motion.div
              whileHover={{ y: -6 }}
              className="cursor-pointer bg-slate-900/60 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                Full-Stack Web Application Development
              </h3>
              <p className="text-gray-400 mb-4">
                Secure, database-driven web application with authentication,
                wishlist functionality, and server-side logic.
              </p>
              <span className="text-sm text-cyan-400">
                HTML · CSS · JavaScript · PHP · MySQL
              </span>
              <div className="mt-4 text-cyan-400 text-sm">
                View full project →
              </div>
            </motion.div>
          </Link>

        </div>
      </section>

      <footer className="py-10 text-center text-gray-500">
        © {new Date().getFullYear()} Syed Ahmed
      </footer>
    </div>
  );
}
