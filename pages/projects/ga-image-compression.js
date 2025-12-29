import Layout from "../../components/Layout";
import Reveal from "../../components/Reveal";

export default function GAImageCompression() {
  return (
    <Layout>
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          AI-Based Image Compression using Genetic Algorithms
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-200/70">
          Treating image compression as an optimization problem rather than
          a fixed transformation.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-white">Problem</h2>
          <p className="mt-3 text-slate-200/70">
            Traditional compression techniques struggle to balance file size
            reduction with perceptual quality under extreme constraints.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Approach</h2>
          <p className="mt-3 text-slate-200/70">
            A block-based Genetic Algorithm was designed where each chromosome
            represents a compressed block configuration, evolved using fitness
            based on reconstruction error.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Results</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {["fig1.png", "fig2.png", "fig3.png"].map((img) => (
              <div
                key={img}
                className="rounded-2xl border border-white/10 bg-white/5 p-3"
              >
                <img
                  src={`/images/ga/${img}`}
                  className="rounded-xl w-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-slate-200/70">
            The GA preserved global structure while gracefully degrading
            fine-grained detail, demonstrating viability for constrained
            environments.
          </p>
        </section>
      </Reveal>
    </Layout>
  );
}
