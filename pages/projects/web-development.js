import Image from "next/image";

export default function WebDevProject() {
  return (
    <main className="bg-slate-900 text-gray-200 px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          Full-Stack Web Application Development
        </h1>

        <p className="text-gray-400 mb-8">
          Sep 2024 – Dec 2024 · Brock University
        </p>

        {/* OVERVIEW */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            This project focused on designing and implementing a full-stack web
            application with secure authentication, dynamic user interaction,
            and database-backed persistence. The system was built from scratch
            using modern web technologies and hosted on Brock University’s
            Sandcastle server.
          </p>
        </section>

        {/* FEATURES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>User registration and login system</li>
            <li>Session-based authentication</li>
            <li>Dynamic product listing with wishlist functionality</li>
            <li>Search and filtering capabilities</li>
            <li>Server-side validation and database integration</li>
          </ul>
        </section>

        {/* TECH STACK */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>HTML5 & CSS for layout and styling</li>
            <li>JavaScript for client-side interactivity</li>
            <li>PHP for backend logic and authentication</li>
            <li>MySQL for persistent data storage</li>
            <li>Bash & terminal-based deployment on Sandcastle server</li>
          </ul>
        </section>

        {/* IMAGES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Application Screens</h2>

          <div className="space-y-8">
            <Image
              src="/images/web/login.png"
              alt="Login page"
              width={1000}
              height={500}
              className="rounded-lg"
            />
            <Image
              src="/images/web/dashboard.png"
              alt="Dashboard"
              width={1000}
              height={500}
              className="rounded-lg"
            />
            <Image
              src="/images/web/products.png"
              alt="Product list"
              width={1000}
              height={500}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* SECURITY */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Security Focus</h2>
          <p className="text-gray-300">
            This project bridges web development with cybersecurity. Future work
            includes implementing Multi-Factor Authentication (MFA), improving
            access control, strengthening encryption, and adding logging and
            monitoring for real-world deployment scenarios.
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Skills Demonstrated</h2>
          <p className="text-cyan-400">
            Python · HTML · CSS · JavaScript · PHP · MySQL · Secure Coding ·
            Full-Stack Development
          </p>
        </section>

      </div>
    </main>
  );
}
