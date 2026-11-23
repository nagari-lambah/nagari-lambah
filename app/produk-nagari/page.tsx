import Navbar from "../../components/Navbar";
import Image from "next/image";

// Data produk utama Media Communication Board Bunglin (CBB) dan tautan pemesanan
const produkUtamaCBB = {
  kategori: "Produk Inovasi Utama · Program Kosabangsa 2026",
  nama: "Media Communication Board Bunglin (CBB)",
  gambar: "/image/produk/cbb-bunglin.png",
  deskripsi: "Alat bantu komunikasi alternatif dan augmentatif (AAC) berbasis visual interaktif...",
  spesifikasi: [
    "Material Bodi akrilik tebal 3 mm & papan visual ramah anak",
    "Simbol komunikasi visual kontras tinggi",
    "Desain ergonomis & portabel",
    "Hasil hilirisasi riset pendampingan UMBJ, UNP, dan Kemdiktisaintek"
  ],
  harga: "Hubungi Pengrajin / Sesuai Paket",
  katalogPdf: "/dokumen/katalog-cbb-bunglin.pdf",
  pesanWa: "https://wa.me",
  pesanEmail: "mailto:nagari.lambah@gmail.com"
};
const produkMeubeler = [
  {
    id: 1,
    kategori: "Meubeler & Furnitur Rumah",
    nama: "Lemari Pakaian & Lemari Arsip Kayu",
    gambar: "/image/produk/lemari.jpeg",
    deskripsi:
      "Lemari kayu kokoh buatan tangan pengrajin Nagari Lambah dengan konstruksi kuat, pengerjaan halus, dan ukuran yang dapat disesuaikan (custom).",
    harga: "Mulai Rp 2.500.000",
    pesanWa:
      "https://wa.me).",
  },
  {
    id: 2,
    kategori: "Meubeler Kantor",
    nama: "Meja Kerja",
    gambar: "/image/produk/meja-biro.jpeg",
    deskripsi:
      "Berbagai model meja kayu fungsional untuk kebutuhan rumah tangga, perkantoran nagari, maupun ruang kelas sekolah.",
    harga: "Mulai Rp 3.850.000",
    pesanWa:
      "https://wa.me).",
  },
  {
    id: 3,
    kategori: "Meubeler Sekolah",
    nama: "Meja Belajar",
    gambar: "/image/produk/meja-belajar.jpeg",
    deskripsi:
      "Meja dan kursi belajar kayu ergonomis untuk ruang kelas maupun rumah dengan konstruksi kokoh dan lapisan finishing tahan lama.",
    harga: "Mulai Rp 650.000 / set",
    pesanWa:
      "https://wa.me).",
  },
];
export default function ProdukNagariPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* TOP BAR LOKASI & NAVBAR */}
      <div className="bg-[#082f57] px-4 py-2 text-xs text-white sm:px-6 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span>Nagari Lambah, Kecamatan Ampek Angkek</span>
          <span>Kabupaten Agam · Sumatera Barat</span>
        </div>
      </div>
      <Navbar />

      {/* BANNER ETALASE PROGRAM KOSABANGSA 2026 */}
      <section
        id="etalase-kosabangsa"
        className="relative overflow-hidden bg-gradient-to-br from-[#082f57] via-[#124b7c] to-[#08728a] px-4 py-14 text-white sm:px-6 lg:py-20"
      >
        <div className="relative mx-auto max-w-7xl">
          <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Etalase Produk Inovasi Masyarakat Nagari Lambah — Program Kosabangsa 2026
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Sinergi pemberdayaan masyarakat dan hilirisasi inovasi teknologi tepat guna bersama Pemerintah Nagari Lambah, Universitas Mercubaktijaya (UMBJ) Padang, dan Universitas Negeri Padang (UNP).
          </p>
        </div>
      </section>
      {/* PROFIL KELOMPOK PENGRAJIN & DOKUMEN SK RESMI */}
      <section id="profil-pengrajin" className="relative z-10 -mt-8 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            {/* Profil Kelompok Pengrajin Lambah Sakato */}
            <div>
              <span className="rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase text-amber-800">
                🏛️ Profil Kelompok Pengrajin
              </span>
              <h2 className="mt-3 text-2xl font-black text-[#082f57] sm:text-3xl">
                Kelompok Pengrajin Lambah Sakato
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Unit produksi berbasis masyarakat di Nagari Lambah, hasil pendampingan Program Kosabangsa 2026 bersama Universitas Mercubaktijaya dan Universitas Negeri Padang.
              </p>
            </div>

            {/* Kartu Legalitas SK Wali Nagari Nomor 68 Tahun 2025 */}
            <div className="rounded-2xl border-2 border-[#082f57]/15 bg-slate-50 p-6">
              <h3 className="text-lg font-black text-[#082f57]">
                Keputusan Wali Nagari Lambah
              </h3>
              <p className="text-base font-extrabold text-amber-600">
                Nomor 68 Tahun 2025
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="/dokumen/sk-kelompok-pengrajin-lambah-sakato-2025.pdf"
                  target="_blank"
                  className="rounded-xl bg-[#082f57] px-4 py-2 text-center text-sm font-bold text-white"
                >
                  Lihat Dokumen SK (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3. KATALOG PRODUK */}
      <section id="katalog-produk" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-amber-600">
              Katalog Produk
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#082f57] sm:text-4xl">
              Produk Inovasi & Karya Pengrajin Nagari
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Produk inovasi program Kosabangsa 2026 serta berbagai produk
              meubeler berkualitas yang telah dihasilkan oleh Kelompok Pengrajin
              Lambah Sakato.
            </p>
          </div>

          {/* KARTU PRODUK UTAMA: MEDIA COMMUNICATION BOARD BUNGLIN (CBB) */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px] bg-slate-200 sm:min-h-[400px]">
                <Image
                  src={produkUtamaCBB.gambar}
                  alt={produkUtamaCBB.nama}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#082f57]/90 px-4 py-1.5 text-xs font-bold text-white backdrop-blur">
                  {produkUtamaCBB.kategori}
                </span>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <h3 className="text-2xl font-black text-[#082f57] sm:text-3xl">
                    {produkUtamaCBB.nama}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                    {produkUtamaCBB.deskripsi}
                  </p>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#082f57]">
                      Spesifikasi Utama:
                    </p>
                    <ul className="mt-2.5 space-y-2 text-sm text-slate-600">
                      {produkUtamaCBB.spesifikasi.map((spek, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="font-bold text-amber-600">✓</span>
                          <span>{spek}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex items-baseline justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Estimasi Harga
                    </span>
                    <span className="text-lg font-black text-[#082f57]">
                      {produkUtamaCBB.harga}
                    </span>
                  </div>
                </div>

                {/* Tombol Aksi: Katalog PDF, WhatsApp & Email */}
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <a
                    href={produkUtamaCBB.katalogPdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-[#082f57] px-3 py-3 text-xs font-bold text-[#082f57] transition hover:bg-slate-100 sm:text-sm"
                  >
                    <span>📄</span>
                    <span>Katalog PDF</span>
                  </a>
                  <a
                    href={produkUtamaCBB.pesanWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 sm:text-sm"
                  >
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={produkUtamaCBB.pesanEmail}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 px-3 py-3 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-amber-400 sm:text-sm"
                  >
                    <span>✉️</span>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* KATALOG PRODUK SEBELUMNYA (MEUBELER) */}
          <div className="mt-16">
            <h3 className="text-xl font-black text-[#082f57] sm:text-2xl">
              Produk Meubeler Kelompok Pengrajin Lambah Sakato
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Karya kerajinan kayu dan furnitur berkualitas untuk kebutuhan
              rumah tangga, kantor, maupun sekolah.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {produkMeubeler.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-xl"
                >
                  <div className="relative h-60 w-full bg-slate-200">
                    <Image
                      src={item.gambar}
                      alt={item.nama}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-[#082f57]/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                      {item.kategori}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h4 className="text-lg font-black text-[#082f57]">
                        {item.nama}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.deskripsi}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-semibold text-slate-400">
                          Harga
                        </span>
                        <span className="text-base font-black text-[#082f57]">
                          {item.harga}
                        </span>
                      </div>

                      <a
                        href={item.pesanWa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700"
                      >
                        <span>💬</span>
                        <span>Pesan via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#061f38] px-4 py-8 text-center text-sm text-slate-400 sm:px-6">
        © 2026 Pemerintah Nagari Lambah · Kecamatan Ampek Angkek · Kabupaten Agam
        <span className="mx-2 hidden sm:inline">|</span>
        <span className="block sm:inline">
          Etalase Produk Inovasi Program Kosabangsa 2026
        </span>
      </footer>
    </main>
  );
}
