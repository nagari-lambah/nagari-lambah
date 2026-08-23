const lembaga = [
  {
    title: "BAMUS",
    subtitle: "Badan Permusyawaratan Nagari",
    desc: "Profil, fungsi, kepengurusan, dan kegiatan BAMUS Nagari Lambah.",
    href: "/lembaga/bamus",
  },
  {
    title: "KAN",
    subtitle: "Kerapatan Adat Nagari",
    desc: "Profil, peran adat, kepengurusan, dan kegiatan KAN Nagari Lambah.",
    href: "/lembaga/kan",
  },
  {
    title: "Bundo Kanduang",
    subtitle: "Bundo Kanduang Nagari Lambah",
    desc: "Profil, kepengurusan, program, dan kegiatan Bundo Kanduang Nagari Lambah.",
    href: "/lembaga/bundo-kanduang",
  },
  {
    title: "KADARKUM",
    subtitle: "Keluarga Sadar Hukum",
    desc: "Profil, kepengurusan, dan kegiatan KADARKUM Nagari Lambah.",
    href: "/lembaga/kadarkum",
  },
  {
    title: "Karang Taruna",
    subtitle: "Karang Taruna Nagari Lambah",
    desc: "Profil, kepengurusan, program, dan kegiatan kepemudaan Nagari Lambah.",
    href: "/lembaga/karang-taruna",
  },
  {
    title: "LPMN",
    subtitle: "Lembaga Pemberdayaan Masyarakat Nagari",
    desc: "Profil, kepengurusan, dan kegiatan pemberdayaan masyarakat Nagari Lambah.",
    href: "/lembaga/lpmn",
  },
  {
    title: "PERMATA",
    subtitle: "PERMATA Nagari Lambah",
    desc: "Profil, kepengurusan, program, dan kegiatan PERMATA Nagari Lambah.",
    href: "/lembaga/permata",
  },
  {
    title: "POSBAKUM",
    subtitle: "Pos Bantuan Hukum",
    desc: "Informasi profil dan layanan Pos Bantuan Hukum Nagari Lambah.",
    href: "/lembaga/posbakum",
  },
];

export default function LembagaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 px-4 py-16 text-white sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-emerald-900"
          >
            <span aria-hidden="true">←</span>
            Kembali ke Beranda
          </a>

          <p className="font-bold uppercase tracking-[0.22em] text-emerald-100">
            Pemerintahan Nagari Lambah
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Lembaga Nagari Lambah
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-emerald-50 sm:text-lg">
            Profil lembaga, fungsi, kedudukan, manfaat, kepengurusan, dan
            kegiatan lembaga yang ada di Nagari Lambah.
          </p>
        </div>
      </section>

      {/* DAFTAR LEMBAGA */}
      <section className="px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-[0.2em] text-emerald-700">
              Daftar Lembaga
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#082f57] sm:text-4xl">
              Lembaga di Nagari Lambah
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Pilih salah satu lembaga untuk melihat profil dan informasi
              selengkapnya.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lembaga.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex min-h-[255px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-xl font-black text-emerald-800 transition group-hover:bg-emerald-700 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-700">
                    →
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black text-[#082f57]">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-emerald-700">
                  {item.subtitle}
                </p>

                <p className="mt-4 flex-1 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#082f57]">
                  Lihat Profil
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-emerald-700 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#082f57] px-5 py-3 font-bold text-white transition hover:bg-[#0b467d]"
            >
              ← Kembali ke Homepage
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
