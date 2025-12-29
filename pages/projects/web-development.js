import Layout from "../../components/Layout";
import Reveal from "../../components/Reveal";

export default function WebDevelopment() {
  return (
    <Layout>
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Full-Stack Web Application Development
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-200/70">
          Secure, database-driven web application with authentication
          and server-side logic.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-white">Overview</h2>
          <p className="mt-3 text-slate-200/70">
            This project focused on building a complete user workflow —
            from authentication to persistent data storage — with an
            emphasis on security and clarity.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Key Features</h2>
          <ul className="mt-4 space-y-2 text-slate-200/70">
            <li>• Secure user authentication</li>
            <li>• Server-side validation</li>
            <li>• Database-backed persistence</li>
            <li>• Clean dashboard UI</li>
          </ul>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Screens</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {["login.png", "dashboard.png", "products.png"].map((img) => (
              <div
                key={img}
                className="rounded-2xl border border-white/10 bg-white/5 p-3"
              >
                <img
                  src={`/images/web/${img}`}
                  className="rounded-xl w-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </Layout>
  );
}
