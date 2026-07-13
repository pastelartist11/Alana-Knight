export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0620] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#f472b6_0%,#f472b6_15%,transparent_25%),radial-gradient(circle_at_bottom_right,#60a5fa_0%,#60a5fa_18%,transparent_30%),linear-gradient(135deg,#0d0620_0%,#130827_35%,#0d0620_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10">
        <header className="flex justify-center">
          <nav className="flex items-center gap-12 text-sm font-semibold uppercase tracking-[0.35em] text-white">
            <a href="#home" className="transition hover:text-[#facc15]">
              Home
            </a>
            <a href="#projects" className="transition hover:text-[#60a5fa]">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-[#f472b6]">
              Contact
            </a>
          </nav>
        </header>

        <section className="relative mt-24 flex h-[50vh] items-center justify-center overflow-visible">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[28rem] w-[28rem] max-w-[90vw] rounded-[3rem]">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 rounded-[3rem] overflow-hidden border-4 border-white/20">
                <div className="bg-[#f472b6]" />
                <div className="bg-[#60a5fa]" />
                <div className="bg-[#facc15]" />
                <div className="bg-[#f472b6]" />
                <div className="bg-[#60a5fa]" />
                <div className="bg-[#facc15]" />
                <div className="bg-[#f472b6]" />
                <div className="bg-[#60a5fa]" />
                <div className="bg-[#facc15]" />
                <div className="bg-[#f472b6]" />
                <div className="bg-[#60a5fa]" />
                <div className="bg-[#facc15]" />
                <div className="bg-[#f472b6]" />
                <div className="bg-[#60a5fa]" />
                <div className="bg-[#facc15]" />
                <div className="bg-[#f472b6]" />
              </div>
              <div className="absolute left-10 top-10 h-[19rem] w-[19rem] rounded-[2.5rem] border-4 border-white bg-white" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <h1
              style={{
                fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
                textShadow:
                  '0 8px 0 rgba(0,0,0,0.25), 6px 6px 0 rgba(255,255,255,0.18), -2px -2px 0 rgba(255,255,255,0.35)',
              }}
              className="text-[clamp(4rem,7vw,8rem)] font-black leading-[0.9] tracking-[-0.04em] text-white"
            >
              Alana Knight
            </h1>
            <p className="mt-8 max-w-2xl text-base uppercase tracking-[0.35em] text-white/80">
              Experimenting for the Consumer
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
