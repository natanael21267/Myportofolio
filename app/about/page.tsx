import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* WRAPPER */}
      <section className="pt-28 px-6 pb-20 max-w-5xl mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold dark:text-white mb-6 slide-up">
          About Me
        </h1>

        {/* BIO */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10 fade-in">
          Halo! Nama saya{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Windu Natanael
          </span>
          . Saya seorang Frontend Developer yang fokus membangun website
          modern, cepat, dan clean. Saya suka bermain dengan{" "}
          <span className="font-semibold">React, Next.js, dan Tailwind CSS</span>{" "}
          untuk membuat UI yang enak dilihat sekaligus nyaman dipakai.
          Selain ngoding, saya juga tertarik dengan desain UI/UX dan cara
          bikin pengalaman pengguna jadi lebih simple dan jelas.
        </p>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 slide-up">
          <div className="p-5 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700">
            <h2 className="font-semibold text-lg dark:text-white mb-2">
              Fokus Utama
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Frontend development, UI modern, dan pengalaman pengguna yang
              simple dan jelas.
            </p>
          </div>

          <div className="p-5 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700">
            <h2 className="font-semibold text-lg dark:text-white mb-2">
              Tech Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              React, Next.js, TypeScript, Tailwind CSS, Git, dan basic UI/UX.
            </p>
          </div>

          <div className="p-5 rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-700">
            <h2 className="font-semibold text-lg dark:text-white mb-2">
              Goals
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Jadi developer yang bisa bikin produk digital yang bener-bener
              kepakai dan bermanfaat.
            </p>
          </div>
        </div>

        {/* TIMELINE / JOURNEY SIMPLE */}
        <div className="space-y-6 fade-in">
          <h2 className="text-2xl font-bold dark:text-white mb-2">
            My Journey
          </h2>

          <div className="border-l border-gray-300 dark:border-gray-700 pl-5 space-y-4">
            <div>
              <p className="text-xs uppercase text-gray-400">Step 1</p>
              <h3 className="font-semibold dark:text-white">
                Mulai belajar web development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Kenal HTML, CSS, dan JavaScript. Mulai bikin halaman web
                sederhana dan ngulik-ngulik layout.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-400">Step 2</p>
              <h3 className="font-semibold dark:text-white">
                Kenal React & Next.js
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Masuk ke dunia SPA & framework modern. Mulai bikin project
                kecil dan portofolio pribadi.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-400">Step 3</p>
              <h3 className="font-semibold dark:text-white">
                Fokus bangun portofolio & skill
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Terus latihan, bangun project baru, dan memperdalam UI/UX
                agar setiap project kerasa lebih profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
