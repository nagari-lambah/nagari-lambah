import Image from "next/image";
import Link from "next/link";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Pemerintahan", href: "/#pemerintahan" },
  { label: "TP-PKK", href: "/tp-pkk" },
  { label: "Lembaga", href: "/#lembaga" },
  { label: "Produk Nagari", href: "/produk-nagari" },
  { label: "PPID", href: "/ppid" },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

const daftarProduk = [
  {
    id: 1,
    kategori: "Produk Utama · Kosabangsa 2026",
    nama: "Media Communication Board Bunglin (CBB)",
    gambar: "/image/produk/cbb-bunglin.png",
    deskripsi: "Alat bantu komunikasi alternatif dan augmentatif (AAC) berbasis visual interaktif karya inovasi pengrajin Nagari Lambah untuk mendukung kemandirian komunikasi.",
    spesifikasi: [
      "Material ramah anak, kokoh, dan tahan lama",
      "Simbol visual kontras tinggi & mudah dipahami",
      "Desain ergonomis & portabel untuk sekolah maupun rumah",
    ],
    harga: "Hubungi Pengrajin / Sesuai Paket",
    katalogPdf: "/dokumen/katalog-cbb-bunglin.pdf",
    pesanWa: "https://wa.me.",
  },
  {
    id: 2,
    kategori: "Produk Turunan · Inovasi Pengrajin",
    nama: "Produk Turunan Kelompok Pengrajin Lambah Sakato",
    gambar: "/image/produk/produk-turunan.jpg",
    deskripsi: "Pengembangan produk kreatif dan edukatif turunan dari program pendampingan inovasi masyarakat Nagari Lambah.",
    spesifikasi: [
      "Diproduksi langsung oleh pengrajin lokal terlatih",
      "Standar kualitas terkurasi melalui program Kosabangsa",
      "Dapat dipesan secara satuan maupun paket kelembagaan",
    ],
    harga: "Hubungi Pengrajin / Custom",
    katalogPdf: "/dokumen/katalog-produk-turunan.pdf",
    pesanWa: "https://wa.me.",
  },
];
export default function ProdukNagariPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="bg-[#082f57] px-4 py-2 text-xs text-white sm:px-6 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span>Nagari Lambah, Kecamatan Ampek Angkek</span>
          <span>Kabupaten Agam · Sumatera Barat</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/image/logo-agam.png" alt="Logo Kabupaten Agam" width={46} height={54} priority className="h-[52px] w-auto object-contain" />
            <div>
              <h1 className="text-lg font-black tracking-wide text-[#082f57] sm:text-xl">NAGARI LAMBAH</h1>
              <p className="text-[11px] text-slate-500 sm:text-xs">Kecamatan Ampek Angkek · Kabupaten Agam</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-[13px] font-semibold text-slate-700 xl:flex">
            {menu.map((item) => (
              <Link key={item.label} href={item.href} className={`whitespace-nowrap transition hover:text-amber-600 ${item.href === "/produk-nagari" ? "font-bold text-amber-600" : ""}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/ppid" className="hidden rounded-xl bg-[#082f57] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0b467d] md:inline-flex">Layanan PPID</Link>
            <details className="relative xl:hidden">
              <summary className="cursor-pointer list-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-[#082f57]">Menu</summary>
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                {menu.map((item) => (
                  <Link key={item.label} href={item.href} className={`block px-4 py-3 text-sm font-semibold hover:bg-slate-50 hover:text-amber-600 ${item.href === "/produk-nagari" ? "bg-amber-50 text-amber-700" : "text-slate-700"}`}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#082f57] via-[#124b7c] to-[#08728a] px-4 py-14 text-white sm:px-6 lg:py-20">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 px-4 py-2.5 shadow-md">
              <Image src="/image/logo/kemdiktisaintek.png" alt="Logo Kemdiktisaintek" width={120} height={40} className="h-9 w-auto object-contain" />
              <span className="h-6 w-px bg-slate-200" />
              <Image src="/image/logo/umbj.jpg" alt="Logo UMBJ" width={120} height={40} className="h-9 w-auto object-contain" />
              <span className="h-6 w-px bg-slate-200" />
              <Image src="/image/logo/unp.png" alt="Logo UNP" width={120} height={40} className="h-9 w-auto object-contain" />
            </div>
            <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-400/20 px-4 py-1.5 text-xs font-bold tracking-wide text-amber-200 sm:text-sm">
              Pendanaan Kemdiktisaintek · Program Kosabangsa 2026
            </span>
          </div>
          <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Etalase Produk Inovasi Masyarakat Nagari Lambah — <span className="text-amber-300">Program Kosabangsa 2026</span>
            <span className="block text-xl font-bold text-slate-200 sm:mt-2 sm:text-2xl">(Pendanaan Kemdiktisaintek)</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Sinergi pemberdayaan masyarakat dan hilirisasi inovasi teknologi tepat guna bersama Pemerintah Nagari Lambah, Universitas Mercubaktijaya Padang (UMBJ), dan Universitas Negeri Padang (UNP).
          </p>
        </div>
      </section>

      <section className="relative z-10 -mt-8 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
                <span>🏛️ Legalitas & Produsen Resmi</span>
              </div>
              <h2 className="mt-3 text-2xl font-black text-[#082f57] sm:text-3xl">Kelompok Pengrajin Lambah Sakato</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Unit produksi berbasis masyarakat di Nagari Lambah yang berfokus pada pembuatan produk kreatif, edukatif, dan alat bantu inovatif hasil pendampingan Program Kosabangsa 2026.
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-[#082f57]/15 bg-slate-50 p-5 lg:w-80">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Dasar Penetapan</p>
              <p className="mt-1 text-base font-black text-[#082f57]">SK Wali Nagari Lambah</p>
              <p className="text-sm font-bold text-amber-600">Nomor 68 Tahun 2025</p>
              <p className="mt-2 text-xs text-slate-500">Jorong Lambah Tangah, Kec. Ampek Angkek, Kab. Agam</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-amber-600">Katalog Inovasi</p>
            <h2 className="mt-2 text-3xl font-black text-[#082f57] sm:text-4xl">Produk Unggulan Kelompok Pengrajin</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Informasi detail spesifikasi, dokumen katalog PDF, dan pemesanan langsung produk hasil karya Kelompok Pengrajin Lambah Sakato.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {daftarProduk.map((produk) => (
              <article key={produk.id} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-xl">
                <div className="relative h-72 w-full bg-slate-200 sm:h-80">
                  <Image src={produk.gambar} alt={produk.nama} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#082f57]/90 px-4 py-1.5 text-xs font-bold text-white backdrop-blur">{produk.kategori}</span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-[#082f57]">{produk.nama}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{produk.deskripsi}</p>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#082f57]">Spesifikasi Utama:</p>
                    <ul className="mt-2.5 space-y-2 text-sm text-slate-600">
                      {produk.spesifikasi.map((spek, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="font-bold text-amber-600">✓</span>
                          <span>{spek}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex items-baseline justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Estimasi Harga</span>
                    <span className="text-lg font-black text-[#082f57]">{produk.harga}</span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a href={produk.katalogPdf} download target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#082f57] px-4 py-3 text-sm font-bold text-[#082f57] transition hover:bg-slate-100">
                      <span>📄</span>
                      <span>Unduh Katalog PDF</span>
                    </a>
                    <a href={produk.pesanWa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700">
                      <span>💬</span>
                      <span>Pesan via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#061f38] px-4 py-8 text-center text-sm text-slate-400 sm:px-6">
        © 2026 Pemerintah Nagari Lambah · Kecamatan Ampek Angkek · Kabupaten Agam
        <span className="mx-2 hidden sm:inline">|</span>
        <span className="block sm:inline">Etalase Produk Inovasi Program Kosabangsa 2026</span>
      </footer>
    </main>
  );
}
