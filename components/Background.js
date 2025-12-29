export default function Background() {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* soft gradient wash */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(34,211,238,0.18),rgba(2,6,23,0))]" />
  
        {/* cinematic blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-96 w-96 rounded-full bg-fuchsia-400/10 blur-3xl" />
  
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_20%,rgba(2,6,23,0),rgba(2,6,23,0.65))]" />
      </div>
    );
  }
  