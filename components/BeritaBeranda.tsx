import Link from "next/link";

const beritaBeranda = [
  {
    href: "/berita/masjid-usang-koto-marapak",
    kategori: "SEJARAH & BUDAYA",
    tanggal: "21 Agustus 2026",
    judul:
      "Masjid Usang Koto Marapak, Warisan Sejarah dan Syiar Islam di Nagari Lambah",
    gambar: "/image/sejarah-nagari-lambah.png",
  },
  {
    href: "/berita/mahasiswa-umnatsir-bukittinggi",
    kategori: "KEGIATAN NAGARI",
    tanggal: "15 Agustus 2026",
    judul:
      "Mahasiswa UMNatsir Bukittinggi Laksanakan KKN di Nagari Lambah",
    gambar:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIlRiRE6q7bQTQCFW0_1DKVUOPXewCJzQNqEN1TSym2DpPfdlz9peYw1KeTBrFjrU4No26Ur2oKE9hCBqC5pg96O3gXnu3PK4V5Rl1nAmgx1gI3tX-kEl3srJ-PsJRcV6JmqcSNb7F0X3zUnpInLsMjKARvTH3-U5L9RybNHSi9HlK9pxq8n-PBUCvQmk/s1600/WhatsApp%20Image%202026-08-15%20at%2014.44.28.jpeg",
  },
  {
    href: "/berita/verifikasi-rkp-nagari-lambah",
    kategori: "PERENCANAAN",
    tanggal: "14 Agustus 2026",
    judul:
      "Verifikasi RKP Nagari Lambah: Menajamkan Rencana Sebelum Menjadi Kegiatan",
    gambar:
      "https://rangkiang.agamkab.go.id/storage/berita/WrRGLjnNxYHELNmXcVuBDRZW27aZL8Mo81Of5xzz.png",
  },
  {
    href: "/berita/musyawarah-pertanggungjawaban-keuangan-bumnag-2025",
    kategori: "BUMNAG",
    tanggal: "23 Juli 2026",
    judul:
      "Musyawarah Nagari Pertanggungjawaban Keuangan 2025 BUMNag Lambah Sakato",
    gambar:
      "https://rangkiang.agamkab.go.id/storage/berita/C4gUw5EHuF8EwtZWrp5N2zIKRa5HE7tovjBQepVj.jpg",
  },
];

export default function BeritaBeranda() {
  return (
    <section className="bg-[#f5f7fa] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f0a000]">
              Informasi Terkini
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0d3763] sm:text-4xl">
              Berita Nagari
            </h2>
          </div>

          <Link
            href="/berita"
            className="font-bold text-[#0d3763] transition hover:text-[#0f8292]"
          >
            Lihat Semua Berita →
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {beritaBeranda.map((item) => (
            <article
              key={item.href}
              className="overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={item.href} className="block h-full">
                <div className="h-56 overflow-hidden bg-slate-100">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f0a000]">
                    {item.kategori}
                  </p>

                  <h3 className="mt-4 text-xl font-extrabold leading-snug text-[#0d3763]">
                    {item.judul}
                  </h3>

                  <p className="mt-5 text-sm font-medium text-slate-500">
                    {item.tanggal}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
