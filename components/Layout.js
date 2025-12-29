import Navbar from "./Navbar";
import Background from "./Background";

export default function Layout({ children }) {
  return (
    <div className="grain min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="relative pt-28">
        <Background />
        <div className="relative mx-auto max-w-5xl px-4 pb-24">
          {children}
        </div>
      </main>
    </div>
  );
}
