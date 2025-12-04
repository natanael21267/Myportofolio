import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      <section className="pt-28 px-6 pb-20 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold dark:text-white mb-6">Contact Me</h1>

        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Ada pertanyaan? Atau mau kerja sama?  
          Silakan kirim pesan lewat form ini.
        </p>

        <form className="flex flex-col gap-5">
          <div>
            <label className="block mb-2 font-medium dark:text-gray-200">
              Nama
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              placeholder="Masukkan nama kamu..."
            />
          </div>

          <div>
            <label className="block mb-2 font-medium dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              placeholder="Masukkan email kamu..."
            />
          </div>

          <div>
            <label className="block mb-2 font-medium dark:text-gray-200">
              Pesan
            </label>
            <textarea
              rows={5}
              className="w-full p-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-white"
              placeholder="Tulis pesan kamu..."
            ></textarea>
          </div>

          <button
            className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            type="submit"
          >
            Kirim Pesan
          </button>
        </form>
      </section>
    </main>
  );
}
