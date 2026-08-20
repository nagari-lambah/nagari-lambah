import Image from "next/image";
import Link from "next/link";

import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";

const berita = [
  {
    href: "/berita/masjid-usang-koto-marapak",
    tanggal: "21 Agustus 2026",
    kategori: "Sejarah & Budaya",
    judul:
      "Masjid Usang Koto Marapak, Warisan Sejarah dan Syiar Islam di Nagari Lambah",
    ringkasan:
      "Masjid Usang Koto Marapak merupakan salah satu bangunan bersejarah Nagari Lambah. Inskripsi 1319 Hijriah pada kayu bangunan menjadi petunjuk penting mengenai masa pembangunan dan peran ulama setempat.",
    gambar: "/image/sejarah-nagari-lambah.png",
  },
  {
    href: "/berita/mahasiswa-umnatsir-bukittinggi",
    tanggal: "15 Agustus 2026",
    kategori: "Kegiatan Nagari",
    judul:
      "Mahasiswa UMNatsir Bukittinggi Laksanakan KKN di Nagari Lambah, Mengusung Semangat “Berkarya, Mengabdi dan Berdampak”",
    ringkasan:
      "Mahasiswa Universitas Mohammad Natsir Bukittinggi melaksanakan KKN di Nagari Lambah dengan dukungan terhadap digitalisasi nagari, website, dan kelengkapan dokumen PPID.",
    gambar:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIlRiRE6q7bQTQCFW0_1DKVUOPXewCJzQNqEN1TSym2DpPfdlz9peYw1KeTBrFjrU4No26Ur2oKE9hCBqC5pg96O3gXnu3PK4V5Rl1nAmgx1gI3tX-kEl3srJ-PsJRcV6JmqcSNb7F0X3zUnpInLsMjKARvTH3-U5L9RybNHSi9HlK9pxq8n-PBUCvQmk/s1600/WhatsApp%20Image%202026-08-15%20at%2014.44.28.jpeg",
  },
];

export const metadata = {
  title: "Berita Nagari Lambah",
  description:
    "Berita, kegiatan, sejarah, pembangunan, dan informasi terbaru Pemerintah Nagari Lambah.",
};

export default function BeritaPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Informasi Nagari"
        title="Berita Nagari Lambah"
        description="Informasi kegiatan, pembangunan, pelayanan publik, sejarah, dan perkembangan Nagari Lambah."
      />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {berita.map((item) => (
            <article
              key={item.href}
              className="overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={item.href} className="block">
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.gambar}
                    alt={item.judul}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <div className="p-7">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-semibold">
                    <span className="text-[#f0a000]">{item.tanggal}</span>
                    <span className="rounded-full bg-[#0f8292]/10 px-3 py-1 text-[#0f8292]">
                      {item.kategori}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold leading-snug text-[#0d3763]">
                    {item.judul}
                  </h2>

                  <p className="mt-4 line-clamp-4 text-base leading-7 text-slate-600">
                    {item.ringkasan}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-bold text-[#15588a]">
                    Baca Selengkapnya
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
