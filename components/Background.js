'use client'
export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] h-full w-full bg-black">
      {/* 1. The Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. The Radial Fade (Vignette) so edges are darker */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#00000000,transparent_50%,#000000)]"></div>
    </div>
  )
}