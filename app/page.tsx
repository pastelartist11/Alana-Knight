export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08102e] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f472b6_0%,#f472b6_12%,transparent_25%),radial-gradient(circle_at_bottom_right,#60a5fa_0%,#60a5fa_18%,transparent_30%),linear-gradient(145deg,#08102e_0%,#0f1f4a_40%,#08102e_100%)]" />
      <div className="pointer-events-none absolute left-10 top-16 h-24 w-24 rounded-full bg-[#facc15]/70 blur-2xl" />
      <div className="pointer-events-none absolute right-16 top-24 h-20 w-20 rounded-full border border-[#f472b6]/70 bg-[#f472b6]/15 rotate-12" />
      <div className="pointer-events-none absolute left-8 bottom-24 h-20 w-20 rounded-full bg-[#60a5fa]/20 blur-2xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10">
        <header className="flex justify-center">
          <nav className="flex items-center gap-6 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <a href="#home" className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 transition hover:bg-white/20">
              Home
            </a>
            <a href="#projects" className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 transition hover:bg-white/20">
              Projects
            </a>
            <a href="#contact" className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 transition hover:bg-white/20">
              Contact
            </a>
          </nav>
        </header>

        <section className="relative mt-24 flex h-[55vh] items-center justify-center overflow-visible">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[30rem] w-[30rem] max-w-[90vw] rounded-[2.5rem] bg-[#101a45] border-4 border-[#f472b6]/60 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute left-12 top-12 h-44 w-44 rounded-[2rem] bg-white" />
              <div className="absolute right-12 top-16 h-16 w-16 rounded-[1rem] border-4 border-[#facc15]/80 bg-[#facc15]/20" />
              <div className="absolute left-16 bottom-16 h-16 w-16 rotate-12 rounded-[0.85rem] border-4 border-[#60a5fa]/80 bg-[#60a5fa]/20" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <h1
              style={{
                fontFamily: "'Fredoka One', 'Comic Sans MS', 'Comic Sans', cursive",
                color: '#000000',
                textShadow:
                  '0 6px 0 rgba(255,255,255,0.95), 0 14px 0 rgba(0,0,0,0.25), 10px 10px 0 rgba(0,0,0,0.18), -4px -4px 0 rgba(255,255,255,0.7)',
              }}
              className="text-[clamp(4rem,8vw,8rem)] font-black leading-[0.85] tracking-[-0.06em]"
            >
              Alana Knight
            </h1>
            <p className="mt-8 max-w-2xl text-base uppercase tracking-[0.35em] text-white/80">
              Experimenting for the Consumer
            </p>
          </div>

          <div className="pointer-events-none absolute right-10 top-10 grid gap-3">
            <div className="h-14 w-28 rounded-lg border border-white/20 bg-white/10" />
            <div className="h-14 w-28 rounded-lg border border-white/20 bg-white/10" />
          </div>
          <div className="pointer-events-none absolute left-16 top-24 h-16 w-16 rotate-12 rounded-full border-4 border-[#facc15]/80 bg-[#facc15]/20" />
          <div className="pointer-events-none absolute right-20 bottom-20 h-16 w-16 rotate-[20deg] rounded-[0.85rem] border-4 border-[#60a5fa]/80 bg-[#60a5fa]/20" />
        </section>
      </div>
    </main>
  );
}
