import Image from "next/image";

export default function GAProject() {
  return (
    <main className="bg-slate-900 text-gray-200 px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          AI-Based Image Compression Using Genetic Algorithms
        </h1>

        <p className="text-gray-400 mb-8">
          Oct 2025 – Dec 2025 · Brock University
        </p>

        {/* OVERVIEW */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            This project formulates image compression as an optimization problem
            rather than relying on fixed interpolation methods. A block-based
            Genetic Algorithm (GA) is used to compress high-resolution RGB images
            (2000×1200) into compact 200×120 representations, which are later
            reconstructed through evolutionary optimization.
          </p>
        </section>

        {/* CHALLENGES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Extremely large search space due to pixel-level representation</li>
            <li>High computational cost of fitness evaluation</li>
            <li>Preserving global structure under a 100:1 compression ratio</li>
            <li>Block boundary artifacts during reconstruction</li>
          </ul>
        </section>

        {/* ACTIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Actions Taken</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Designed a block-based GA to reduce optimization complexity</li>
            <li>Implemented pixel-level chromosome representation</li>
            <li>Used MSE-based fitness with upscaling reconstruction</li>
            <li>Applied selection, crossover, and mutation operators</li>
            <li>Compared results against nearest, bilinear, and bicubic baselines</li>
          </ul>
        </section>

        {/* RESULTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Results</h2>

          <p className="text-gray-300 mb-6">
            The GA-based approach consistently preserved global image structure
            and dominant color regions across object-focused, portrait, and
            natural scene images. Fine-grained texture was partially sacrificed,
            reflecting the aggressive compression ratio and computational limits.
          </p>

          {/* FIGURE 1 */}
          <div className="mb-10">
            <Image
              src="/images/ga/fig1.png"
              alt="Object image compression result"
              width={1000}
              height={400}
              className="rounded-lg"
            />
            <p className="text-gray-400 text-sm mt-2">
              Object-based image: original, GA-compressed (200×120), reconstructed.
            </p>
          </div>

          {/* FIGURE 2 */}
          <div className="mb-10">
            <Image
              src="/images/ga/fig2.png"
              alt="Portrait compression result"
              width={1000}
              height={400}
              className="rounded-lg"
            />
            <p className="text-gray-400 text-sm mt-2">
              Portrait image: global facial structure preserved, fine details degraded.
            </p>
          </div>

          {/* FIGURE 3 */}
          <div className="mb-10">
            <Image
              src="/images/ga/fig3.png"
              alt="Natural scene compression result"
              width={1000}
              height={400}
              className="rounded-lg"
            />
            <p className="text-gray-400 text-sm mt-2">
              Natural scene: large-scale structure retained, textures smoothed.
            </p>
          </div>
        </section>

        {/* METRICS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Evaluation Metrics</h2>
          <p className="text-gray-300">
            Performance was evaluated using Mean Squared Error (MSE), Peak
            Signal-to-Noise Ratio (PSNR), and Structural Similarity Index (SSIM),
            alongside visual inspection and baseline interpolation comparisons.
          </p>
        </section>

        {/* LINKS */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Resources</h2>
          <ul className="list-disc list-inside text-cyan-400">
            <li>
              <a
                href="/reports/Image_Compression_GA_Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Project Report (PDF)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SyedAhmed2004/COSC3P71-Image-Compression-GA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code on GitHub
              </a>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
