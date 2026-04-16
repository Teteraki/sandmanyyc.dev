import { useState } from "react";

export default function CliPortfolioMockup() {
  const [activePanel, setActivePanel] = useState("work");

  const projects = [
    {
      name: "Cold Hands Collective",
      type: "Production Full Stack Website",
      desc: "Production-grade full stack website development for Calgary Esports Cold Hands Collective Ltd. Built as a live brand presence with polished frontend presentation and practical business functionality.",
      stack: [
        "Vite",
        "React",
        "React Router",
        "Tailwind CSS",
        "Vercel",
        "EmailJS",
      ],
      status: "live",
      url: "https://coldhands.org",
    },
    {
      name: "StoreFront by Dylan Sanders",
      type: "Storefront + Sales Dashboard",
      desc: "A React storefront and sales dashboard built as a Mount Royal University course assignment. Includes product browsing, filtering, cart and checkout flows, plus analytics for sales and profitability through tables and charts.",
      stack: [
        "Vite",
        "React",
        "React Router",
        "Tailwind CSS",
        "Recharts",
        "Vercel",
      ],
      status: "live",
      url: "https://react-storefront-gilt.vercel.app/",
    },
    {
      name: "Sandman CLI Portfolio",
      type: "Personal Portfolio",
      desc: "A one-page personal portfolio built to showcase personal web design work, projects, and creative digital identity through a polished terminal-inspired interface.",
      stack: ["Vite", "React", "Tailwind CSS", "EmailJS", "Vercel"],
      status: "live",
      url: "",
    },
  ];

  const commands = [
    "$ whoami",
    "> Dylan Sanders / Sandman",
    "$ role",
    "> Web designer + frontend developer",
    "$ focus --current",
    "> Building responsive, polished, user-first digital experiences",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-green-400 px-4 py-10 font-mono">
      <div className="mx-auto max-w-6xl rounded-3xl border border-green-500/20 bg-black shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 border-b border-green-500/20 bg-neutral-900 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <div className="ml-4 text-xs text-green-500/70">
            sandman@portfolio:~
          </div>
        </div>

        <section className="grid gap-8 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-10">
          <div>
            <p className="mb-3 text-sm text-green-500/70">
              $ init portfolio --theme cli
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-green-300 sm:text-5xl">
              Sandman
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-green-200/80 sm:text-base">
              I’m Dylan, a web designer and fullstack developer focused on
              building clean, modern interfaces and real-world digital products.
              From event platforms to storefront dashboards, I design and
              develop experiences that are intuitive, responsive, and built to
              ship.
            </p>

            <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
              <p className="text-sm text-green-300">$ tagline</p>
              <p className="mt-2 text-lg text-green-100">
                Designing and building user-focused web experiences.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setActivePanel("work")}
                className={`rounded-xl border px-4 py-2 text-sm transition ${
                  activePanel === "work"
                    ? "border-green-400/40 bg-green-400/10 text-green-200"
                    : "border-green-400/20 text-green-300/90 hover:bg-white/5"
                }`}
              >
                $ view-work
              </button>
              <button
                onClick={() => setActivePanel("contact")}
                className={`rounded-xl border px-4 py-2 text-sm transition ${
                  activePanel === "contact"
                    ? "border-green-400/40 bg-green-400/10 text-green-200"
                    : "border-green-400/20 text-green-300/90 hover:bg-white/5"
                }`}
              >
                $ contact
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-neutral-950/80 p-4">
            <p className="mb-3 text-sm text-green-500/70">
              $ profile --summary
            </p>

            <img
              src="https://placehold.co/400x400"
              alt="Dylan Sanders"
              className="mb-4 h-24 w-24 rounded-xl object-cover border border-green-400/30"
            />
            <div className="space-y-3 text-sm leading-6 text-green-200/90">
              {commands.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-green-500/20 px-6 py-8 lg:px-10">
          {activePanel === "work" ? (
            <>
              <p className="mb-4 text-sm text-green-500/70">
                $ ls portfolio/featured
              </p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <article
                    key={project.name}
                    className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5 transition hover:-translate-y-1 hover:border-green-400/40 hover:bg-green-500/10"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-semibold text-green-200">
                          {project.name}
                        </h2>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-green-500/70">
                          {project.type}
                        </p>
                      </div>
                      <span className="rounded-full border border-green-400/20 px-2 py-1 text-[10px] uppercase tracking-widest text-green-300/80">
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-green-100/75">
                      {project.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-green-400/20 bg-black/30 px-2.5 py-1 text-xs text-green-300/90"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-xl border border-green-400/40 bg-green-400/10 px-3 py-2 text-xs uppercase tracking-wider text-green-200 transition hover:bg-green-400/20"
                        >
                          $ open-project
                        </a>
                      ) : (
                        <span className="inline-flex rounded-xl border border-green-500/20 px-3 py-2 text-xs uppercase tracking-wider text-green-500/60">
                          $ site-unavailable
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="mb-4 text-sm text-green-500/70">$ contact --open</p>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
                  <form className="space-y-4 text-sm text-green-100/80">
                    <div>
                      <label className="mb-2 block text-green-300">
                        &gt; Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-green-500/20 bg-black/40 px-4 py-3 text-green-100 outline-none transition placeholder:text-green-500/40 focus:border-green-400/40"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-green-300">
                        &gt; Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-green-500/20 bg-black/40 px-4 py-3 text-green-100 outline-none transition placeholder:text-green-500/40 focus:border-green-400/40"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-green-300">
                        &gt; Message
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Tell me about your project..."
                        className="w-full rounded-xl border border-green-500/20 bg-black/40 px-4 py-3 text-green-100 outline-none transition placeholder:text-green-500/40 focus:border-green-400/40"
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-xl border border-green-400/40 bg-green-400/10 px-4 py-2 text-sm text-green-200 transition hover:bg-green-400/20"
                    >
                      $ send-message
                    </button>
                  </form>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm text-green-500/70">
                      $ cat about.txt
                    </p>
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5 text-sm leading-7 text-green-100/80">
                      I’m Dylan, a designer and fullstack developer focused on
                      building modern websites that feel intentional,
                      responsive, and visually distinct. My work blends
                      interface design with practical development so ideas don’t
                      just look good — they ship cleanly.
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm text-green-500/70">
                      $ contact-info
                    </p>
                    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5 text-sm leading-7 text-green-100/80">
                      <p>&gt; Email: dylan@example.com</p>
                      <p>&gt; Location: Calgary, AB + Southern Alberta</p>
                      <p>
                        &gt; Availability: Open for freelance, design, and
                        fullstack work
                      </p>
                      <p className="mt-4 text-green-400">
                        $ echo "Let’s build something clean."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
