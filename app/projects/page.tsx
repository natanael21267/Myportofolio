import Navbar from "../../components/Navbar";

const projects = [
  {
    title: "Project 1",
    desc: "Deskripsi singkat project pertama kamu.",
    link: "https://example.com",
  },
  {
    title: "Project 2",
    desc: "Deskripsi singkat project kedua kamu.",
    link: "https://example.com",
  },
  {
    title: "Project 3",
    desc: "Deskripsi singkat project ketiga kamu.",
    link: "https://example.com",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* HEADER */}
      <section className="pt-36 pb-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-indigo-400">Projects</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Kumpulan project yang pernah saya kerjakan — modern, responsive, dan dibangun dengan teknologi masa kini.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="pb-28 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                bg-slate-900/70 backdrop-blur-xl
                border border-slate-800 
                rounded-2xl 
                p-6 
                shadow-[0_0_25px_-8px_rgba(56,189,248,0.25)]
                hover:shadow-[0_0_45px_-6px_rgba(56,189,248,0.35)]
                hover:-translate-y-1 
                transition
              "
            >
              <h2 className="text-xl font-semibold text-slate-100">
                {p.title}
              </h2>

              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                {p.desc}
              </p>

              <a
                href={p.link}
                target="_blank"
                className="
                  inline-flex items-center gap-1 
                  text-indigo-400 mt-4 text-sm font-medium
                  hover:text-indigo-300 transition
                "
              >
                Lihat Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
