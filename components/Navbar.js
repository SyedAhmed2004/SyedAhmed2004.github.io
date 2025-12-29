export default function Navbar() {
    return (
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3">
              <a href="#top" className="font-semibold tracking-tight text-white">
                Syed<span className="text-cyan-300">.</span>
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200/80">
                <a className="hover:text-white transition" href="#projects">Projects</a>
                <a className="hover:text-white transition" href="#about">About</a>
                <a className="hover:text-white transition" href="#contact">Contact</a>
              </nav>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 transition"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  className="rounded-xl bg-cyan-500/90 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400 transition"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  