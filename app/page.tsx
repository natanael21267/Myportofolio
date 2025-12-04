"use client";

import { useEffect, ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   SCROLL REVEAL HOOK
===================================================== */
function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* =====================================================
   PAGE
===================================================== */
export default function HomePage() {
  useReveal();

  return (
    <main className="min-h-screen bg-[#0f1013] text-slate-200 scroll-smooth">

      <Navbar />

      {/* ========================= HERO ========================= */}
      <section id="home" className="pt-36 pb-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] blur-[120px] 
                        bg-gradient-to-br from-indigo-300/20 via-sky-200/20 to-purple-200/20" />

        <div className="max-w-4xl mx-auto text-center relative z-10 
                        reveal opacity-0 translate-y-10 transition-all duration-1000">

          <h1 className="text-5xl md:text-7xl font-extrabold 
                         bg-gradient-to-r from-indigo-200 via-sky-200 to-purple-200 
                         bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.07)]">
            Windu Natanael
          </h1>

          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
           Mobile & Web Developer | Clean UI, Solid Code
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button href="#projects" variant="primary">
              Explore Projects
            </Button>
            <Button href="#about" variant="soft">
              About Me
            </Button>
          </div>

        </div>
      </section>

      {/* ========================= ABOUT ========================= */}
      <section id="about" className="px-6 pb-32 -mt-20 relative z-20">
        <div
          className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-2xl 
          border border-white/5 rounded-3xl p-10 
          shadow-[0_0_25px_-12px_rgba(255,255,255,0.08)]
          reveal opacity-0 translate-y-10 transition-all duration-1000">

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <img
              src="/asset/a.png"
              alt="Windu"
              className="w-36 h-36 rounded-xl object-cover 
              border border-white/10 shadow-md"
            />

            <div>
              <h2 className="text-3xl font-bold text-slate-100">
                Windu Natanael
              </h2>
              <p className="text-indigo-300 text-sm mt-1">Available for work</p>

              <p className="mt-4 font-medium text-slate-300">
                Mobile & Web Developer | Clean UI, Solid Code
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <Info label="Experience" value="1 yrs" color="text-indigo-300" />
                <Info label="Projects" value="10+" color="text-sky-300" />
                <Info label="Location" value="Indonesia" color="text-slate-200" />
                <Info label="Status" value="Open" color="text-emerald-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ABOUT STORY */}
<section className="py-24 px-6 max-w-4xl mx-auto">
  <h2
    className="text-4xl font-bold text-center tracking-tight 
               bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 
               text-transparent bg-clip-text">
    Profile
  </h2>

  <div className="mt-8 space-y-6 text-[15.5px] leading-relaxed text-slate-300">

    <p>
      Lulusan baru Program Studi Teknik Informatika Universitas Indraprasta PGRI Jakarta (2025) 
      dengan IPK <span className="text-indigo-300 font-semibold">3.37</span>. 
      Memiliki kemampuan dalam dukungan teknis, instalasi dan pemeliharaan sistem, 
      pengelolaan database, serta troubleshooting perangkat keras, perangkat lunak, 
      dan jaringan komputer.
    </p>

    <p>
      Terbiasa menggunakan berbagai alat digital seperti 
      <span className="text-sky-300 font-semibold"> Microsoft Office, Google Workspace, XAMPP, dan NetBeans</span>, 
      serta berpengalaman dalam pengelolaan data, administrasi digital, dan 
      pelayanan pengguna (<span className="text-purple-300 font-semibold">user support</span>).
    </p>

    <p>
      Individu yang disiplin, cepat beradaptasi, dan memiliki kemampuan komunikasi yang baik 
      dalam membantu penyelesaian berbagai masalah teknis.
    </p>

  </div>
</section>



{/* KEMAMPUAN TEKNIS */}
<section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3">
    Kemampuan <span className="text-indigo-400">Teknis</span>
  </h2>
  <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
    Ringkasan kemampuan teknis, tools, serta soft-skill yang mendukung pekerjaan saya.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {[
      { name: "Windows & Linux Setup", icon: "🖥️" },
      { name: "Hardware & Software Troubleshooting", icon: "🛠️" },
      { name: "Networking (Basic)", icon: "🌐" },
      { name: "Database: MySQL", icon: "🗄️" },
      { name: "Firebase Firestore", icon: "🔥" },
      { name: "Supabase", icon: "⚡" },
      { name: "Flutter (Android Apps)", icon: "📱" },
      { name: "Python (Automation/Data)", icon: "🐍" },
      { name: "Java Desktop (Swing/NetBeans)", icon: "☕" },
      { name: "Web Basic (HTML, CSS)", icon: "🧱" },
      { name: "Cloud: AWS / Firebase / Supabase", icon: "☁️" },
      { name: "CI/CD + API Integration", icon: "🔁" },
      { name: "Git Version Control", icon: "🌿" },
      { name: "Data Viz (Matplotlib/Seaborn)", icon: "📊" },
      { name: "Microsoft Office", icon: "📑" },
      { name: "PHP", icon: "🐘" },
      { name: "REST API", icon: "🔌" }

    ].map((skill, i) => (
      <div
        key={i}
        className="
          bg-slate-900/70 backdrop-blur-xl
          border border-slate-800
          rounded-2xl p-5
          hover:-translate-y-1
          hover:shadow-[0_0_35px_-12px_rgba(56,189,248,0.35)]
          transition
        "
      >
        <div className="text-2xl">{skill.icon}</div>
        <p className="mt-3 text-sm font-semibold text-slate-100 leading-snug">
          {skill.name}
        </p>
      </div>
    ))}
  </div>
</section>



      {/* JOURNEY */}
      <section id="Journey" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-10">
          My Academic and Professional{" "}
          <span className="text-indigo-400">Journey</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-100">Education</h3>

            <div className="space-y-4">
              <JourneyCard title="Cloud and Gen AI Machine Learning Track" subtitle="Program Kampus Merdeka – CendekiAwan by RevoU" date="Ags 2024 - Des 2024" />
              <JourneyCard title="Teknik Informatika" subtitle="Universitas Indraprasta PGRI" date="2021 - 2025" />
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-100">Professional Experience</h3>

            <div className="space-y-4">
              <JourneyCard title="Helper retur" subtitle="PT. Sumber Alfaria Trijaya, Tbk" date="Sep 2020 - Sep 2021" />
              <JourneyCard title="Asisten Lapangan (Field Assistant)" subtitle="PT Fajar Surya Wisesa Tbk. Jakarta." date="Jun 2022 - Ags 2022" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================= PROJECTS ========================= */}
      <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
        <h2
          className="text-3xl text-center font-semibold mb-14 
                     reveal opacity-0 translate-y-10 transition-all duration-1000">
          Featured <span className="text-indigo-300">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Program Kreativitas Mahasiswa (PKM) – PKMKC 2023", desc: "Inovasi Teknologi Pemilihan Bangku Stadion Menggunakan RFID Terintegrasi Android.", link: "#" },
            { title: "Aplikasi Desktop Sistem Rental Mobil — Auto Cars", desc: "Aplikasi manajemen rental mobil: data mobil, penyewaan, pengembalian, dan laporan.", link: "#" },
            { title: "Website Travel Pulau Pari — Ruang Teknologi", desc: "Website informasi & pemesanan perjalanan wisata Pulau Pari.", link: "#" },
             { title: "Website Sistem Tiketing Festival — Ruang Teknologi", desc: "Sistem tiket festival: info event, pemilihan tiket, registrasi user.", link: "#" },
          ].map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* ========================= SOCIALS CTA ========================= */}
     <section id="contact" className="py-28 px-6 max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold tracking-tight text-slate-100">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-3">
          Tertarik untuk kerja sama, kolaborasi project, atau ngobrol soal frontend & UI?
        </p>

        <div className="flex justify-center flex-wrap gap-6 mt-8">

          <Social link="https://www.instagram.com/windunatanael?igsh=MWNhZTJ2aDJnNHh5ZQ==" label="Instagram" icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-3-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5z" />
            </svg>} />

          <Social link="https://github.com/natanael21267" label="GitHub" icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5A11.44 11.44 0 0 0 .5 12a11.44 11.44 0 0 0 8 10.93c.58.1.79-.26.79-.58v-2.1c-3.25.71-3.94-1.41-3.94-1.41a3.11 3.11 0 0 0-1.29-1.7c-1.06-.7.08-.7.08-.7a2.45 2.45 0 0 1 1.79 1.21A2.54 2.54 0 0 0 9.76 18a2.6 2.6 0 0 1 .75-1.62c-2.6-.3-5.33-1.3-5.33-5.8A4.56 4.56 0 0 1 6.4 7.1a4.2 4.2 0 0 1 .11-3.1s1-.33 3.3 1.25a11.32 11.32 0 0 1 6 0c2.28-1.58 3.28-1.25 3.28-1.25a4.2 4.2 0 0 1 .12 3.1 4.56 4.56 0 0 1 1.22 3.48c0 4.52-2.71 5.49-5.35 5.78A2.6 2.6 0 0 1 14.5 18v2.75c0 .33.2.7.8.58A11.44 11.44 0 0 0 23.5 12 11.44 11.44 0 0 0 12 .5z" />
            </svg>} />

          <Social link="www.linkedin.com/in/windunatanael-5a06682ab" label="LinkedIn" icon={
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.1c.5-1 1.72-2.2 3.54-2.2 3.78 0 4.48 2.48 4.48 5.7V24h-4v-7.9c0-1.88-.04-4.3-2.62-4.3-2.62 0-3.03 2.05-3.03 4.16V24h-4z" />
            </svg>} />

        </div>
      </section>

      <Footer />

    </main>
  );
}

/* =====================================================
   COMPONENTS
===================================================== */

function Button({
  href,
  variant,
  children,
  className = "",
}: {
  href: string;
  variant: "primary" | "soft";
  children: ReactNode;
  className?: string;
}) {
  const base =
    "px-6 py-2 rounded-full text-sm font-medium transition inline-block shadow";

  const styles = {
    primary:
      "bg-gradient-to-r from-indigo-300 to-sky-300 text-slate-900 font-semibold hover:opacity-90 shadow-[0_0_12px_-2px_rgba(150,200,255,0.3)]",
    soft:
      "backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 shadow-sm",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}

function Info({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="reveal opacity-0 translate-y-6 transition-all duration-1000">
      <p className="text-slate-400 text-xs">{label}</p>
      <p className={`font-bold ${color} text-lg opacity-90`}>{value}</p>
    </div>
  );
}

function JourneyCard({
  title,
  subtitle,
  date,
}: {
  title: string;
  subtitle: string;
  date: string;
}) {
  return (
    <div
      className="bg-white/[0.03] border border-white/5 shadow-sm 
                 p-4 rounded-xl backdrop-blur-xl 
                 hover:bg-white/[0.06] transition"
    >
      <p className="text-xs text-slate-400">{date}</p>
      <p className="font-semibold text-slate-100">{title}</p>
      <p className="text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div
      className="bg-white/[0.035] border border-white/5 backdrop-blur-xl 
                 rounded-2xl p-6 transition cursor-pointer 
                 hover:bg-white/[0.07] hover:-translate-y-2
                 shadow-[0_0_25px_-10px_rgba(255,255,255,0.10)]"
    >
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="text-slate-400 mt-2 text-sm">{desc}</p>
      <a href={link} className="text-indigo-300 text-sm mt-3 block">
        View Project →
      </a>
    </div>
  );
}

function Social({
  link,
  label,
  icon,
}: {
  link: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-2 px-5 py-3 rounded-xl
                 bg-white/[0.04] border border-white/10 backdrop-blur-xl
                 hover:bg-white/[0.08] transition shadow-sm"
    >
      {icon}
      {label}
    </a>
  );
}
