import Link from "next/link";
import berita from "../data/berita.json";
import { formatTanggalIndonesia, type Berita } from "../lib/berita";

export default function BeritaBeranda() {
  const terbaru = [...(berita as Berita[])]
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal))
    .slice(0, 4);

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
          {terbaru.map((item) => (
            <article
              key={item.slug}
              className="overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/berita/${item.slug}`} className="block h-full">
                <div className="h-56 overflow-hidden bg-slate-100">
                  {item.gambar ? (
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl">
                      📰
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f0a000]">
                    {item.kategori}
                  </p>
                  <h3 className="mt-4 text-xl font-extrabold leading-snug text-[#0d3763]">
                    {item.judul}
                  </h3>
                  <p className="mt-5 text-sm font-medium text-slate-500">
                    {formatTanggalIndonesia(item.tanggal)}
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
