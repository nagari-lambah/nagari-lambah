import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";
import berita from "../../data/berita.json";
import { formatTanggalIndonesia, type Berita } from "../../lib/berita";

export const metadata = {
  title: "Berita Nagari Lambah",
  description:
    "Berita, kegiatan, sejarah, pembangunan, dan informasi Pemerintah Nagari Lambah.",
};

export default function BeritaPage() {
  const daftar = [...(berita as Berita[])].sort((a, b) =>
    b.tanggal.localeCompare(a.tanggal)
  );

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Informasi Nagari"
        title="Berita Nagari Lambah"
        description="Informasi kegiatan, pembangunan, pelayanan publik, sejarah, dan perkembangan Nagari Lambah."
      />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {daftar.map((item) => (
            <article
              key={item.slug}
              className="overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/berita/${item.slug}`} className="block h-full">
                <div className="h-64 w-full overflow-hidden bg-slate-100">
                  {item.gambar ? (
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-6xl">
                      📰
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-semibold">
                    <span className="text-[#f0a000]">
                      {formatTanggalIndonesia(item.tanggal)}
                    </span>
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
                    Baca Selengkapnya <span aria-hidden="true">→</span>
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
