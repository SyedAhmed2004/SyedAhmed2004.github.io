import Layout from "../../components/Layout";
import Reveal from "../../components/Reveal";

export default function GAImageCompression() {
  return (
    <Layout>
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          AI-Based Image Compression using Genetic Algorithms
        </h1>

        <p className="mt-4 text-lg text-slate-200/70">
          Treating image compression as an optimization problem using a
          block-based Genetic Algorithm to balance visual quality and size.
        </p>
      </Reveal>

      {/* Overview */}
      <Reveal delay={0.1}>
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Overview</h2>
          <p className="mt-3 text-slate-200/70 leading-relaxed">
            This project reframes image compression as an evolutionary optimization
            task. Each chromosome represents a compressed block structure, evolved
            to minimize reconstruction error while maintaining compression ratios.
          </p>
        </section>
      </Reveal>

      {/* Tech Stack */}
      <Reveal delay={0.15}>
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Python", "Genetic Algorithms", "NumPy", "Image Processing"].map(t => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-200/80"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Results */}
      <Reveal delay={0.2}>
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Results</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {["fig1.png", "fig2.png", "fig3.png"].map(img => (
              <div
                key={img}
                className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl"
              >
                <img
                  src={`/images/ga/${img}`}
                  alt=""
                  className="w-full rounded-xl object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-slate-200/70 leading-relaxed">
            The GA approach preserved global image structure while significantly
            reducing resolution. Fine-grained details degrade gracefully, making
            the technique suitable for bandwidth-constrained environments.
          </p>
        </section>
      </Reveal>
    </Layout>
  );
}
