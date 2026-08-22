import Image from "next/image";
import BeritaBeranda from "../components/BeritaBeranda";
import GaleriBeranda from "../components/GaleriBeranda";
import KantorNagariMap from "../components/KantorNagariMap";


const menu = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Pemerintahan", href: "#pemerintahan" },
  { label: "Lembaga", href: "#lembaga" },
  { label: "PPID", href: "/ppid" },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

const layanan = [
  { title: "Profil Nagari", icon: "🏛️", href: "/profil" },
  { title: "PPID", icon: "📄", href: "/ppid" },
  { title: "Dokumen Publik", icon: "📚", href: "/ppid" },
  { title: "Berita Nagari", icon: "📰", href: "/berita" },
  { title: "Galeri", icon: "🖼️", href: "/galeri" },
  { title: "Kontak", icon: "☎️", href: "/kontak" },
];

const pemerintahan = [
  {
    title: "Perangkat Nagari",
    desc: "Profil dan struktur perangkat Nagari Lambah.",
    href: "/profil/perangkat-nagari",
  },
  {
    title: "Program & Kegiatan",
    desc: "Informasi kegiatan pemerintahan dan pembangunan.",
    href: "/berita",
  },
  {
    title: "Pelayanan Publik",
    desc: "Informasi pelayanan yang tersedia bagi masyarakat.",
    href: "/ppid",
  },
];

const lembaga = [
  {
    title: "PKK",
    href: "/tp-pkk",
  },
  {
    title: "BAMUS",
    href: "/lembaga",
  },
  {
    title: "Bundo Kanduang",
    href: "/lembaga",
  },
  {
    title: "LPM",
    href: "/lembaga",
  },
];

const ppidItems = [
  {
    title: "Daftar Informasi Publik",
    href: "/ppid",
  },
  {
    title: "Permohonan Informasi",
    href: "/ppid",
  },
  {
    title: "Dokumen PPID",
    href: "/ppid",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* TOP BAR */}
      <div className="bg-[#082f57] px-4 py-2 text-xs text-white sm:px-6 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span>Nagari Lambah, Kecamatan Ampek Angkek</span>
          <span>Kabupaten Agam · Sumatera Barat</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/image/logo-agam.png"
              alt="Logo Kabupaten Agam"
              width={46}
              height={54}
              priority
              className="h-[52px] w-auto object-contain"
            />

            <div>
              <h1 className="text-lg font-black tracking-wide text-[#082f57] sm:text-xl">
                NAGARI LAMBAH
              </h1>
              <p className="text-[11px] text-slate-500 sm:text-xs">
                Kecamatan Ampek Angkek · Kabupaten Agam
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 xl:flex">
            {menu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-amber-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/ppid"
              className="hidden rounded-xl bg-[#082f57] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0b467d] md:inline-flex"
            >
              Layanan PPID
            </a>

            <details className="relative xl:hidden">
              <summary className="cursor-pointer list-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-[#082f57]">
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                {menu.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#082f57] via-[#124b7c] to-[#08728a] text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-amber-300/10" />

        <div className="relative mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-14">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Website Resmi Pemerintah Nagari
            </span>

            <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-[3.35rem]">
              Selamat Datang di
              <span className="block text-amber-300">Nagari Lambah</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Media informasi resmi pemerintah nagari, pelayanan publik,
              keterbukaan informasi, pembangunan, berita dan kegiatan
              masyarakat Nagari Lambah.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/profil"
                className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-900 shadow-lg transition hover:bg-amber-300"
              >
                Jelajahi Nagari
              </a>
              <a
                href="/ppid"
                className="rounded-xl border border-white/30 bg-white/5 px-6 py-3 font-bold transition hover:bg-white/10"
              >
                Layanan PPID
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-2xl">
              <Image
                src="/image/kantor-nagari-lambah.png"
                alt="Kantor Wali Nagari Lambah"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-sm font-semibold sm:text-base">
                  Kantor Wali Nagari Lambah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN CEPAT */}
      <section className="relative z-10 -mt-8 px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-3 rounded-3xl bg-white p-5 shadow-xl sm:grid-cols-2 lg:grid-cols-6">
          {layanan.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-2xl p-5 text-center transition hover:-translate-y-1 hover:bg-slate-50"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 text-sm font-bold text-[#082f57]">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </section>
      {/* PROFIL */}
      <section id="profil" className="px-4 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <KantorNagariMap />

          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-amber-600">
              Tentang Nagari
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#082f57] sm:text-4xl">
              Mengenal Nagari Lambah
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Nagari Lambah merupakan salah satu nagari yang berada di
              Kecamatan Ampek Angkek, Kabupaten Agam, Sumatera Barat. Website
              ini menjadi pusat informasi resmi pemerintahan nagari, pelayanan
              publik, pembangunan, kegiatan masyarakat dan keterbukaan
              informasi publik.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Profil", "Nagari"],
                ["Layanan", "Publik"],
                ["Informasi", "Terbuka"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="font-black text-[#082f57]">{a}</p>
                  <p className="text-sm text-slate-500">{b}</p>
                </div>
              ))}
            </div>

            <a
              href="/profil"
              className="mt-8 inline-flex rounded-xl bg-[#082f57] px-5 py-3 font-bold text-white transition hover:bg-[#0b467d]"
            >
              Selengkapnya tentang Nagari
            </a>
          </div>
        </div>
      </section>

      {/* SAMBUTAN */}
      <section className="bg-white px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-gradient-to-br from-slate-50 to-blue-50 p-8 ring-1 ring-slate-200 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200 shadow-lg">
              <Image
                src="/image/wali-nagari/fikri-farid.jpeg"
                alt="Wali Nagari Lambah"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>

            <div>
              <p className="font-bold uppercase tracking-[0.22em] text-amber-600">
                Sambutan Wali Nagari
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#082f57] sm:text-4xl">
                Selamat Datang di Website Resmi Nagari Lambah
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                Website ini dihadirkan sebagai media informasi, komunikasi dan
                pelayanan publik yang mudah diakses oleh masyarakat. Kami
                berharap kehadiran website ini dapat mendukung pemerintahan
                nagari yang transparan, informatif dan responsif.
              </p>
              <p className="mt-6 font-bold text-[#082f57]">
                Fiqri Farid
              </p>
              <p className="text-sm text-slate-500">Wali Nagari Lambah</p>

              <a
                href="/profil/walinagari"
                className="mt-7 inline-flex rounded-xl border border-[#082f57] px-5 py-3 font-bold text-[#082f57] transition hover:bg-[#082f57] hover:text-white"
              >
                Profil Wali Nagari
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PEMERINTAHAN */}
      <section id="pemerintahan" className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-amber-600">
              Pemerintahan Nagari
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#082f57] sm:text-4xl">
              Pelayanan Pemerintahan yang Transparan
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Informasi perangkat nagari, program kerja, pembangunan dan
              pelayanan masyarakat dapat diakses melalui website resmi Nagari
              Lambah.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pemerintahan.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">🏢</div>
                <h3 className="mt-4 text-xl font-black text-[#082f57]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LEMBAGA */}
      <section id="lembaga" className="bg-white px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-amber-600">
            Lembaga Nagari
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#082f57] sm:text-4xl">
            Lembaga Kemasyarakatan
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lembaga.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-3xl bg-slate-50 p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">◆</div>
                <h3 className="mt-4 text-xl font-black text-[#082f57]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Profil, kepengurusan dan kegiatan {item.title} Nagari Lambah.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PPID */}
      <section id="ppid" className="bg-[#082f57] px-4 py-24 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-amber-300">
              Keterbukaan Informasi
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              PPID Nagari Lambah
            </h2>
            <p className="mt-5 leading-8 text-slate-200">
              Terwujudnya pelayanan informasi publik yang terbuka, cepat,
              akurat, transparan dan akuntabel guna mendukung tata kelola
              pemerintahan nagari yang baik.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ppidItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur transition hover:bg-white/15"
              >
                <div className="text-3xl">📑</div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Akses informasi dan dokumen pelayanan publik Nagari Lambah.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BERITA TERBARU */}
      <div id="berita">
        <BeritaBeranda />
      </div>

      {/* GALERI */}
      <GaleriBeranda />

      {/* KONTAK */}
      <section id="kontak" className="border-t bg-slate-50 px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/image/logo-agam.png"
                alt="Logo Kabupaten Agam"
                width={60}
                height={72}
                className="h-[68px] w-auto object-contain"
              />

              <div>
                <h2 className="text-2xl font-black text-[#082f57]">
                  Pemerintah Nagari Lambah
                </h2>
                <p className="text-sm text-slate-500">
                  Kecamatan Ampek Angkek · Kabupaten Agam
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-600">
              Jorong Lambah Tangah, Nagari Lambah
              <br />
              Kecamatan Ampek Angkek, Kabupaten Agam
              <br />
              Sumatera Barat, Indonesia
            </p>

            <a
              href="/kontak"
              className="mt-6 inline-flex rounded-xl bg-[#082f57] px-5 py-3 font-bold text-white transition hover:bg-[#0b467d]"
            >
              Informasi Kontak
            </a>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="font-bold text-[#082f57]">Informasi Pelayanan</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Website ini disiapkan sebagai media informasi dan pelayanan
              digital Pemerintah Nagari Lambah.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600">
              <p>
                <strong>Email:</strong> nagari.lambah@gmail.com
              </p>
              <p>
                <strong>Telepon:</strong> 0895618462853
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#061f38] px-4 py-8 text-center text-sm text-slate-400 sm:px-6">
        © 2026 Pemerintah Nagari Lambah · Kecamatan Ampek Angkek · Kabupaten Agam
      </footer>
    </main>
  );
}