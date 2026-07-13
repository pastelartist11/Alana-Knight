export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b3cff] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16)_0%,_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08)_0%,_transparent_30%)]" />
      <div className="pointer-events-none absolute left-10 top-16 h-24 w-24 rounded-full bg-[#ffdd55]/60 blur-2xl" />
      <div className="pointer-events-none absolute right-16 top-28 h-24 w-24 rounded-full border border-[#ff5ebc]/50 bg-[#ff5ebc]/20 rotate-12" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-6 py-8 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="rounded-[2rem] border-4 border-black bg-[#efece8] shadow-[14px_14px_0_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between rounded-t-[1.5rem] border-b-4 border-black bg-[#ff3cac] px-5 py-3 text-sm uppercase tracking-[0.35em] text-white">
              <span>ALANA.KNIGHT</span>
              <span className="h-6 w-6 rounded-sm border-2 border-white/90 bg-[#ffe4ef]" />
            </div>
            <div className="relative grid gap-6 p-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-[1rem] border-4 border-black bg-[#fff9d6] px-4 py-4 text-sm uppercase tracking-[0.35em] text-[#1d1d1d] shadow-[4px_4px_0_rgba(0,0,0,0.25)]">
                  <span className="block h-8 w-8 rounded-md bg-[#ff5ebc]" />
                  <span>Experimenting for the Consumer</span>
                </div>
                <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-black bg-[#f8f8f8] p-6 shadow-[8px_8px_0_rgba(0,0,0,0.15)]">
                  <div className="absolute -left-6 top-6 h-12 w-12 rounded-full bg-[#60a4ff]/20" />
                  <div className="absolute right-6 top-10 h-16 w-16 rounded-[0.8rem] border-4 border-[#ffdd55]/80 bg-[#ffdd55]/20" />
                  <div className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.95] text-[#0b1430]" style={{ textShadow: '0 6px 0 rgba(255,255,255,0.9), 8px 8px 0 rgba(0,0,0,0.24), 16px 16px 0 rgba(255,255,255,0.25)' }}>
                    <span className="block text-[#ff3cac]">Alana</span>
                    <span className="block text-[#3d8cff]">Knight</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] border-4 border-black bg-[#ffffff] p-5 text-sm text-[#1d1d1d] shadow-[8px_8px_0_rgba(0,0,0,0.15)]">
                  <p className="mb-4 text-[0.72rem] uppercase tracking-[0.45em] text-[#0b3dff]">Profile</p>
                  <ul className="space-y-3 text-sm leading-6">
                    <li className="font-black">Graphic Designer</li>
                    <li className="font-black">Visual Storyteller</li>
                    <li className="font-black">Brand Experimenter</li>
                  </ul>
                </div>
                <div className="grid gap-3">
                  <div className="h-24 rounded-[1.2rem] border-4 border-black bg-[#0b3cff] p-3">
                    <div className="h-full rounded-[1rem] bg-[#94caff]" />
                  </div>
                  <div className="h-24 rounded-[1.2rem] border-4 border-black bg-[#ff5ebc] p-3">
                    <div className="h-full rounded-[1rem] bg-[#ffd77c]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-[2rem] border-4 border-black bg-[#0b3cff] p-6 shadow-[14px_14px_0_rgba(0,0,0,0.9)]">
              <div className="mb-4 rounded-[1rem] bg-[#021079] px-4 py-3 text-sm uppercase tracking-[0.35em] text-[#7fc8ff]">
                About Me
              </div>
              <div className="grid gap-4 lg:grid-cols-[0.9fr_1fr]">
                <div className="rounded-[1.2rem] border-4 border-black bg-[#ffffff] p-4 shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
                  <div className="mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-[#0b3dff]">About</div>
                  <p className="text-sm leading-6 text-[#1d1d1d]">
                    I create bold, experimental designs that connect brands with people. I explore color,
                    culture, and curiosity to build visuals that stand out and stay remembered.
                  </p>
                  <p className="mt-4 text-sm font-black text-[#ff3cac]">Let’s make something unexpected together.</p>
                </div>
                <div className="grid gap-3">
                  <div className="h-24 rounded-[1.2rem] border-4 border-black bg-[#0b3cff] p-3">
                    <div className="h-full rounded-[1rem] bg-[#94caff]" />
                  </div>
                  <div className="h-24 rounded-[1.2rem] border-4 border-black bg-[#ff5ebc] p-3">
                    <div className="h-full rounded-[1rem] bg-[#ffd77c]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border-4 border-black bg-[#ffffff] p-6 shadow-[14px_14px_0_rgba(0,0,0,0.9)] text-[#1d1d1d]">
              <div className="mb-6 flex items-center justify-between rounded-[1rem] bg-[#ff3cac] px-4 py-3 text-sm uppercase tracking-[0.35em] text-white">
                <span>Featured Work</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs uppercase tracking-[0.4em]">New</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Branding', 'Poster', 'Packaging', 'Digital'].map((label) => (
                  <div key={label} className="rounded-[1.5rem] border-4 border-black bg-[#0b3cff] p-3 text-center text-sm font-black text-white shadow-[6px_6px_0_rgba(0,0,0,0.2)]">
                    {label}
                  </div>
                ))}
              </div>
              <button className="mt-6 rounded-[1rem] border-4 border-black bg-[#3d8cff] px-6 py-4 text-sm uppercase tracking-[0.35em] text-white shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
