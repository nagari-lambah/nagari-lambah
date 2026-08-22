import Image from "next/image";
import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";

const menuPpid = [
  { title: "Tentang PPID", href: "#tentang", image: "/image/ppid/profil-ppid.png" },
  { title: "Visi PPID", href: "#visi", image: "/image/ppid/visi.png" },
  { title: "Misi PPID", href: "#misi", image: "/image/ppid/misi.png" },
  { title: "Tugas dan Fungsi", href: "#tugas-fungsi", image: "/image/ppid/tugas-dan-fungsi.png" },
  { title: "Struktur Organisasi", href: "#struktur", image: "/image/ppid/struktur-organisasi.png" },
];

const misi = [
  "Meningkatkan kualitas pelayanan informasi publik.",
  "Menyediakan informasi yang mudah diakses oleh masyarakat.",
  "Mendorong partisipasi masyarakat dalam penyelenggaraan pemerintahan nagari.",
  "Mewujudkan tata kelola pemerintahan yang transparan dan akuntabel.",
  "Mengembangkan sistem dokumentasi dan informasi berbasis teknologi informasi.",
];

const tugas = [
  "Mengelola dan mendokumentasikan informasi publik Nagari Lambah.",
  "Memberikan pelayanan terhadap permohonan informasi publik.",
  "Melakukan klasifikasi informasi sesuai ketentuan.",
  "Menyusun dan memperbarui Daftar Informasi Publik.",
  "Melakukan uji konsekuensi terhadap informasi yang dikecualikan.",
  "Menyusun laporan pelayanan informasi secara berkala.",
];

const fungsi = [
  "Pengelolaan informasi dan dokumentasi.",
  "Pelayanan permohonan informasi publik.",
  "Koordinasi dengan perangkat nagari dalam penyediaan informasi.",
  "Penanganan keberatan dan dukungan penyelesaian sengketa informasi.",
  "Pembinaan dan penguatan keterbukaan informasi publik.",
];

export const metadata = {
  title: "PPID Nagari Lambah",
  description:
    "Tentang, visi misi, tugas fungsi, struktur organisasi, dan pelayanan informasi publik PPID Nagari Lambah.",
};

export default function PPIDPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Keterbukaan Informasi Publik"
        title="PPID Nagari Lambah"
        description="Pejabat Pengelola Informasi dan Dokumentasi Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam."
      />

      <main className="bg-[#f6f8fb]">
        {/* HERO */}
        <section className="px-4 py-10 sm:px-6 lg:py-14">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0d3763] via-[#15588a] to-[#0f8292] p-8 text-white shadow-xl lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                  Pelayanan Informasi Publik
                </span>
                <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Informasi Publik yang Terbuka, Cepat, Akurat, dan Akuntabel
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100">
                  PPID Nagari Lambah hadir untuk memberikan pelayanan informasi publik
                  yang mudah diakses, transparan, dan dapat dipertanggungjawabkan.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="#tentang"
                    className="rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-900 transition hover:bg-amber-300"
                  >
                    Tentang PPID
                  </Link>
                  <Link
                    href="#tugas-fungsi"
                    className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/15"
                  >
                    Tugas & Fungsi
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[26px] border border-white/15 bg-white/10 p-2 shadow-xl backdrop-blur">
                <Image
                  src="/image/ppid/profil-ppid.png"
                  alt="Profil PPID Nagari Lambah"
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section className="px-4 pb-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {menuPpid.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-video overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={900}
                      height={506}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-black text-[#0d3763]">
                      {item.title}
                    </h2>
                    <span className="mt-3 inline-flex font-bold text-[#0f8292]">
                      Lihat selengkapnya →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TENTANG PPID */}
        <section id="tentang" className="bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[28px] bg-slate-100 shadow-lg ring-1 ring-slate-200">
              <Image
                src="/image/ppid/profil-ppid.png"
                alt="Tentang PPID Nagari Lambah"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>

            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
                Tentang PPID
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#0d3763] sm:text-4xl">
                Pejabat Pengelola Informasi dan Dokumentasi (PPID) Nagari Lambah
              </h2>

              <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-600">
                <p>
                  <strong>Pejabat Pengelola Informasi dan Dokumentasi (PPID) Nagari Lambah</strong>{" "}
                  merupakan unsur pelaksana pelayanan informasi publik di lingkungan
                  Pemerintah Nagari Lambah.
                </p>

                <p>
                  PPID bertugas mengelola, menyimpan, mendokumentasikan, menyediakan,
                  serta memberikan pelayanan informasi kepada masyarakat secara{" "}
                  <strong>cepat, tepat, sederhana, dan transparan</strong>.
                </p>

                <p>
                  Pembentukan PPID Nagari Lambah merupakan implementasi dari amanat{" "}
                  <strong>
                    Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik
                  </strong>
                  . Kehadiran PPID bertujuan untuk menjamin hak masyarakat dalam memperoleh
                  informasi publik serta mendukung penyelenggaraan pemerintahan nagari yang{" "}
                  <strong>
                    transparan, akuntabel, partisipatif, dan berorientasi pada pelayanan masyarakat
                  </strong>
                  .
                </p>

                <p>
                  Melalui PPID, Pemerintah Nagari Lambah berkomitmen menyediakan informasi
                  yang mudah diakses, akurat, dan dapat dipertanggungjawabkan, sehingga
                  masyarakat dapat mengetahui berbagai kebijakan, program, kegiatan, serta
                  penyelenggaraan pemerintahan Nagari Lambah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VISI */}
        <section id="visi" className="px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-amber-600">Visi</p>
              <h2 className="mt-3 text-3xl font-black text-[#0d3763] sm:text-4xl">
                Visi PPID Nagari Lambah
              </h2>
              <blockquote className="mt-6 rounded-[24px] border-l-4 border-amber-500 bg-white p-6 text-lg font-semibold leading-8 text-[#0d3763] shadow-sm">
                Terwujudnya pelayanan informasi publik yang terbuka, cepat, akurat,
                transparan, dan akuntabel guna mendukung tata kelola pemerintahan
                nagari yang baik.
              </blockquote>
            </div>

            <Image
              src="/image/ppid/visi.png"
              alt="Visi PPID Nagari Lambah"
              width={1600}
              height={900}
              className="h-auto w-full rounded-[28px] shadow-lg"
            />
          </div>
        </section>

        {/* MISI */}
        <section id="misi" className="bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <Image
              src="/image/ppid/misi.png"
              alt="Misi PPID Nagari Lambah"
              width={1600}
              height={900}
              className="h-auto w-full rounded-[28px] shadow-lg"
            />

            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-amber-600">Misi</p>
              <h2 className="mt-3 text-3xl font-black text-[#0d3763] sm:text-4xl">
                Misi PPID Nagari Lambah
              </h2>

              <ol className="mt-6 space-y-3">
                {misi.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0f8292] font-black text-white">
                      {index + 1}
                    </span>
                    <span className="leading-7 text-slate-600">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* TUGAS DAN FUNGSI */}
        <section id="tugas-fungsi" className="px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
                Tugas dan Fungsi
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#0d3763] sm:text-4xl">
                Tugas Pokok dan Fungsi PPID
              </h2>

              <div className="mt-6">
                <h3 className="text-xl font-black text-[#0d3763]">Tugas PPID</h3>
                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  {tugas.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-black text-[#0f8292]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-black text-[#0d3763]">Fungsi PPID</h3>
                <ul className="mt-4 space-y-3 leading-7 text-slate-600">
                  {fungsi.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-black text-[#0f8292]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Image
              src="/image/ppid/tugas-dan-fungsi.png"
              alt="Tugas dan Fungsi PPID Nagari Lambah"
              width={1600}
              height={900}
              className="h-auto w-full rounded-[28px] shadow-lg"
            />
          </div>
        </section>

        {/* STRUKTUR */}
        <section id="struktur" className="bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
                Organisasi
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#0d3763] sm:text-4xl">
                Struktur Organisasi PPID Nagari Lambah
              </h2>
              <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
                Susunan kepengurusan PPID Nagari Lambah sebagai unsur penyelenggara
                pelayanan informasi dan dokumentasi publik.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] bg-slate-950 p-2 shadow-xl">
              <Image
                src="/image/ppid/struktur-organisasi.png"
                alt="Struktur Organisasi PPID Nagari Lambah"
                width={1600}
                height={900}
                className="h-auto w-full rounded-[22px]"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d3763] px-4 py-16 text-white sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-amber-300">
                Pelayanan Informasi
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Akses Informasi Publik Nagari Lambah
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-200">
                Masyarakat dapat memperoleh informasi publik, dokumen, dan layanan
                keterbukaan informasi melalui PPID Nagari Lambah.
              </p>
            </div>

            <Link
              href="/kontak"
              className="inline-flex self-start rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-900 transition hover:bg-amber-300"
            >
              Hubungi PPID
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
