import Image from "next/image";
import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";

const pengurusInti = [
  { jabatan: "Ketua TP-PKK", nama: "Elsa Wahyuni" },
  { jabatan: "Wakil Ketua TP-PKK", nama: "Hutri Rozana" },
  { jabatan: "Sekretaris", nama: "Silvi Ermi Yusti" },
  { jabatan: "Wakil Sekretaris", nama: "Ria Riska" },
  { jabatan: "Bendahara", nama: "Nanda Wulan Sari" },
];

const pokja = [
  {
    title: "Pokja I",
    bidang: "Penghayatan dan Pengamalan Pancasila serta Gotong Royong",
    pengurus: [
      { jabatan: "Ketua", nama: "Yurni" },
      { jabatan: "Wakil Ketua", nama: "Yul Ediva" },
      { jabatan: "Sekretaris", nama: "Lola Otrimira" },
      { jabatan: "Anggota", nama: "Rahmawati" },
      { jabatan: "Anggota", nama: "Melia Contessa" },
      { jabatan: "Anggota", nama: "Husna" },
      { jabatan: "Anggota", nama: "Fitriani" },
      { jabatan: "Anggota", nama: "Sri Rosdianti" },
      { jabatan: "Anggota", nama: "Trismai Wahyuni" },
      { jabatan: "Anggota", nama: "Arniwati" },
    ],
  },
  {
    title: "Pokja II",
    bidang:
      "Pendidikan dan Keterampilan serta Pengembangan Kehidupan Berkoperasi",
    pengurus: [
      { jabatan: "Ketua", nama: "Martalena" },
      { jabatan: "Wakil Ketua", nama: "Nurlela" },
      { jabatan: "Sekretaris", nama: "Mega Lamoranedi" },
      { jabatan: "Anggota", nama: "Fitri Agustia Dewi" },
      { jabatan: "Anggota", nama: "Aulia Dewita" },
      { jabatan: "Anggota", nama: "Rahma Indah Febrina" },
      { jabatan: "Anggota", nama: "Elindawati" },
      { jabatan: "Anggota", nama: "Silvia" },
      { jabatan: "Anggota", nama: "Isma Yanti" },
      { jabatan: "Anggota", nama: "Yulia Putriani" },
      { jabatan: "Anggota", nama: "Wismayul Efni" },
      { jabatan: "Anggota", nama: "Fira Zulfiantika" },
    ],
  },
  {
    title: "Pokja III",
    bidang: "Pangan, Sandang, Perumahan dan Tata Laksana Rumah Tangga",
    pengurus: [
      { jabatan: "Ketua", nama: "Ermi Yusnita" },
      { jabatan: "Wakil Ketua", nama: "Esi Susanti" },
      { jabatan: "Sekretaris", nama: "Poppy Novita" },
      { jabatan: "Anggota", nama: "Reni Yulia" },
      { jabatan: "Anggota", nama: "Rini Eka Putri" },
      { jabatan: "Anggota", nama: "Endang Sri Yeni" },
      { jabatan: "Anggota", nama: "Subrianti" },
      { jabatan: "Anggota", nama: "Fatmawati" },
      { jabatan: "Anggota", nama: "Wisda Yenti" },
      { jabatan: "Anggota", nama: "Phonera Wati" },
    ],
  },
  {
    title: "Pokja IV",
    bidang: "Kesehatan, Pelestarian Lingkungan Hidup, dan Perencanaan Sehat",
    pengurus: [
      { jabatan: "Ketua", nama: "Nur Azizah" },
      { jabatan: "Wakil Ketua", nama: "Dhika Indriana S" },
      { jabatan: "Sekretaris", nama: "Veramawita" },
      { jabatan: "Anggota", nama: "Ferizen" },
      { jabatan: "Anggota", nama: "Fitriani" },
      { jabatan: "Anggota", nama: "Rice Handayani" },
      { jabatan: "Anggota", nama: "Nelfira Yenti" },
      { jabatan: "Anggota", nama: "Ade Tria Nengsih" },
      { jabatan: "Anggota", nama: "Nurmalini" },
      { jabatan: "Anggota", nama: "Elva" },
      { jabatan: "Anggota", nama: "Yurina" },
    ],
  },
];

const menuPkk = [
  { title: "Sambutan", href: "#sambutan", icon: "💬" },
  { title: "Visi & Misi", href: "#visi-misi", icon: "🎯" },
  { title: "Struktur", href: "#struktur", icon: "🗂️" },
  { title: "Pengurus", href: "#pengurus", icon: "👥" },
  { title: "Pokja I–IV", href: "#pokja", icon: "📋" },
  { title: "Galeri PKK", href: "#galeri", icon: "🖼️" },
];

export const metadata = {
  title: "TP-PKK Nagari Lambah",
  description:
    "Profil, visi misi, struktur organisasi, pengurus dan kelompok kerja TP-PKK Nagari Lambah periode 2023–2029.",
};

function PersonCard({
  jabatan,
  nama,
  highlight = false,
}: {
  jabatan: string;
  nama: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-2xl bg-[#0d3763] p-5 text-center text-white shadow-lg"
          : "rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
      }
    >
      <p
        className={
          highlight
            ? "text-xs font-bold uppercase tracking-wider text-amber-300"
            : "text-xs font-bold uppercase tracking-wider text-[#0f8292]"
        }
      >
        {jabatan}
      </p>
      <p
        className={
          highlight
            ? "mt-2 text-lg font-black"
            : "mt-2 text-lg font-black text-[#0d3763]"
        }
      >
        {nama}
      </p>
    </div>
  );
}

export default function TPPKKPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Lembaga Kemasyarakatan"
        title="TP-PKK Nagari Lambah"
        description="Tim Penggerak Pemberdayaan dan Kesejahteraan Keluarga Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam."
      />

      <main className="bg-[#f6f8fb]">
        {/* HERO FOTO BERSAMA */}
        <section className="px-4 py-8 sm:px-6 lg:py-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#0d3763] shadow-xl">
            <div className="relative aspect-[16/8.5] min-h-[360px] w-full">
              <Image
                src="/image/tp-pkk/tp-pkk-nagari-lambah.png"
                alt="Pengurus TP-PKK Nagari Lambah"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061f38]/90 via-[#061f38]/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9 lg:p-12">
                <span className="inline-flex rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-900">
                  TP-PKK Nagari Lambah
                </span>
                <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Bergerak Bersama PKK, Mewujudkan Keluarga Sejahtera
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100 sm:text-base">
                  Bersama membangun keluarga yang sehat, mandiri, berdaya, dan
                  berperan aktif dalam kemajuan Nagari Lambah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NAVIGASI */}
        <section className="px-4 pb-16 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {menuPkk.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="mt-3 font-black text-[#0d3763]">{item.title}</p>
                <span className="mt-3 inline-flex text-sm font-bold text-[#0f8292]">
                  Lihat detail →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SAMBUTAN */}
        <section id="sambutan" className="bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
              Sambutan
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#0d3763] sm:text-4xl">
              Sambutan Ketua TP-PKK Nagari Lambah
            </h2>

            <div className="mt-8 rounded-[28px] bg-gradient-to-br from-emerald-50 to-cyan-50 p-7 ring-1 ring-slate-200 sm:p-9">
              <p className="text-lg font-black text-[#0d3763]">Elsa Wahyuni</p>
              <p className="mt-1 text-sm font-semibold text-[#0f8292]">
                Ketua TP-PKK Nagari Lambah
              </p>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>Assalamu&apos;alaikum Warahmatullahi Wabarakatuh.</p>
                <p>
                  Puji syukur ke hadirat Allah SWT atas segala rahmat dan
                  karunia-Nya. Halaman TP-PKK Nagari Lambah ini dihadirkan
                  sebagai media informasi, dokumentasi, dan komunikasi bagi
                  kader PKK serta masyarakat.
                </p>
                <p>
                  Melalui semangat kebersamaan dan gotong royong, TP-PKK Nagari
                  Lambah berkomitmen mendukung terwujudnya keluarga yang sehat,
                  mandiri, sejahtera, berdaya, serta aktif dalam pembangunan
                  nagari.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VISI MISI */}
        <section id="visi-misi" className="px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-2">
            <div className="rounded-[28px] bg-[#0d3763] p-8 text-white shadow-lg">
              <p className="font-bold uppercase tracking-[0.2em] text-amber-300">
                Visi
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Terwujudnya keluarga yang beriman, sehat, mandiri, sejahtera,
                dan berdaya.
              </h2>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
                Misi
              </p>
              <ul className="mt-5 space-y-4 leading-7 text-slate-600">
                <li>✓ Meningkatkan kualitas kehidupan keluarga.</li>
                <li>✓ Mendorong partisipasi aktif kader dan masyarakat.</li>
                <li>✓ Mengembangkan ketahanan pangan dan ekonomi keluarga.</li>
                <li>✓ Meningkatkan kesehatan dan pendidikan keluarga.</li>
                <li>✓ Memperkuat gotong royong dan kepedulian sosial.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* STRUKTUR GAMBAR */}
        <section id="struktur" className="bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
                Organisasi
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#0d3763] sm:text-4xl">
                Struktur Pengurus TP-PKK Nagari Lambah
              </h2>
              <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
                Susunan Pengurus TP-PKK Nagari Lambah Periode 2023–2029
                berdasarkan SK Wali Nagari Lambah Nomor 46.1 Tahun 2023.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] bg-[#062f4c] shadow-xl">
              <Image
                src="/image/tp-pkk/struktur-pengurus-tp-pkk.png"
                alt="Struktur Pengurus TP-PKK Nagari Lambah Periode 2023–2029"
                width={1728}
                height={882}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* STRUKTUR TEKS / RESPONSIF */}
        <section id="pengurus" className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
                Pengurus Inti
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#0d3763] sm:text-4xl">
                Pengurus TP-PKK Nagari Lambah
              </h2>
              <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
                Daftar teks disediakan agar susunan pengurus tetap mudah dibaca
                pada perangkat seluler.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-5xl">
              <div className="mx-auto max-w-md">
                <PersonCard
                  jabatan={pengurusInti[0].jabatan}
                  nama={pengurusInti[0].nama}
                  highlight
                />
              </div>

              <div className="mx-auto h-8 w-px bg-slate-300" />

              <div className="grid gap-4 sm:grid-cols-2">
                <PersonCard
                  jabatan={pengurusInti[1].jabatan}
                  nama={pengurusInti[1].nama}
                />
                <PersonCard
                  jabatan={pengurusInti[2].jabatan}
                  nama={pengurusInti[2].nama}
                />
              </div>

              <div className="mx-auto h-8 w-px bg-slate-300" />

              <div className="grid gap-4 sm:grid-cols-2">
                <PersonCard
                  jabatan={pengurusInti[3].jabatan}
                  nama={pengurusInti[3].nama}
                />
                <PersonCard
                  jabatan={pengurusInti[4].jabatan}
                  nama={pengurusInti[4].nama}
                />
              </div>
            </div>
          </div>
        </section>

        {/* POKJA */}
        <section id="pokja" className="bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
              Pengurus dan Anggota
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#0d3763] sm:text-4xl">
              Kelompok Kerja TP-PKK Nagari Lambah
            </h2>

            <div className="mt-9 space-y-7">
              {pokja.map((kelompok) => (
                <article
                  key={kelompok.title}
                  className="overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-slate-200"
                >
                  <div className="bg-gradient-to-r from-[#0d3763] to-[#0f8292] p-6 text-white">
                    <h3 className="text-2xl font-black">{kelompok.title}</h3>
                    <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-100">
                      {kelompok.bidang}
                    </p>
                  </div>

                  <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {kelompok.pengurus.map((orang, index) => (
                      <div
                        key={`${kelompok.title}-${index}-${orang.nama}`}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <p className="text-xs font-bold uppercase tracking-wide text-[#0f8292]">
                          {orang.jabatan}
                        </p>
                        <p className="mt-2 font-black text-[#0d3763]">
                          {orang.nama}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INFO PUBLIK */}
        <section className="bg-[#0d3763] px-4 py-16 text-white sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-amber-300">
                  Informasi TP-PKK
                </p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Program, Dokumentasi, dan Informasi Publik
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-200">
                  Informasi program kerja, kegiatan Pokja, Dasawisma, UP2K,
                  arsip, laporan kegiatan, dan dokumentasi pemberdayaan keluarga.
                </p>
              </div>
              <Link
                href="/ppid"
                className="inline-flex rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-900 transition hover:bg-amber-300"
              >
                Informasi Publik
              </Link>
            </div>
          </div>
        </section>

        {/* GALERI */}
        <section id="galeri" className="bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
                  Dokumentasi
                </p>
                <h2 className="mt-3 text-3xl font-black text-[#0d3763] sm:text-4xl">
                  Galeri Kegiatan TP-PKK
                </h2>
              </div>
              <Link
                href="/galeri"
                className="font-bold text-[#0d3763] hover:text-[#0f8292]"
              >
                Lihat Galeri →
              </Link>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex aspect-video items-center justify-center rounded-[24px] bg-gradient-to-br from-emerald-50 to-cyan-50 text-center ring-1 ring-slate-200"
                >
                  <div>
                    <div className="text-5xl">📷</div>
                    <p className="mt-3 font-bold text-[#0d3763]">
                      Dokumentasi Kegiatan PKK
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
