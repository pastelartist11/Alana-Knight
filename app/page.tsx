export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0620] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f472b6_0%,#f472b6_15%,transparent_25%),radial-gradient(circle_at_bottom_right,#60a5fa_0%,#60a5fa_18%,transparent_30%),linear-gradient(135deg,#0d0620_0%,#130827_35%,#0d0620_100%)]" />
      <div className="pointer-events-none absolute left-12 top-24 h-32 w-32 rounded-full bg-[#facc15]/70 shadow-[0_0_0_6px_rgba(250,204,21,0.15)] blur-xl" />
      <div className="pointer-events-none absolute right-16 top-40 h-28 w-28 rounded-full border border-[#f472b6]/70 bg-[#f472b6]/20 rotate-12" />
      <div className="pointer-events-none absolute left-1/2 top-60 h-28 w-28 -translate-x-1/2 rounded-full bg-[#60a5fa]/40 blur-2xl" />
      <div className="pointer-events-none absolute right-24 bottom-24 grid h-24 w-24 grid-cols-2 gap-1">
        <div className="bg-white/20" />
        <div className="bg-[#f472b6]/60" />
        <div className="bg-[#60a5fa]/60" />
        <div className="bg-[#facc15]/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10">
        <header className="flex items-center justify-end gap-10 text-sm font-semibold uppercase tracking-[0.35em] text-white">
          <a href="#home" className="transition hover:text-[#facc15]">
            Home
          </a>
          <a href="#projects" className="transition hover:text-[#60a5fa]">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-[#f472b6]">
            Contact
          </a>
        </header>

        <section className="relative mt-24 flex h-[50vh] items-center overflow-visible">
          <div className="absolute -left-10 top-16 h-20 w-20 rotate-12 rounded-full border-4 border-[#facc15]/90 bg-[#facc15]/20" />
          <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#60a5fa]/30" />
          <div className="absolute left-8 bottom-0 h-24 w-24 rotate-[25deg] border-x-8 border-[#f472b6]/80 border-t-transparent border-b-transparent" />
          <div className="absolute right-20 bottom-8 h-14 w-14 rotate-45 border-l-8 border-b-8 border-[#facc15]/90" />
          <div className="absolute left-10 bottom-10 grid h-20 w-20 grid-cols-2 gap-1">
            <div className="bg-white/30" />
            <div className="bg-[#f472b6]/60" />
            <div className="bg-[#60a5fa]/60" />
            <div className="bg-[#facc15]/80" />
          </div>

          <div className="relative flex h-full w-full flex-col justify-center">
            <div className="max-w-4xl">
              <h1
                style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}
                className="text-[clamp(3.75rem,8vw,8rem)] font-black leading-[0.9] tracking-[-0.03em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              >
                Alana Knight
              </h1>
              <div className="mt-8 flex items-center gap-4 text-sm uppercase tracking-[0.35em] text-white/80">
                <span className="inline-flex h-4 w-4 rounded-full bg-[#facc15]" />
                <span>Y2K pop style with comic-inspired graphics</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
