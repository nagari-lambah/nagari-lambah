import Link from "next/link";
import { lembaga } from "@/data/lembaga";

export default function LembagaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
            Pemerintahan Nagari Lambah
          </p>
          <h1 className="text-3xl font-bold md:text-5xl">Lembaga Nagari Lambah</h1>
          <p className="mt-5 max-w-3xl leading-8 text-emerald-50">
            Profil lembaga, fungsi, kedudukan, manfaat, dan struktur organisasi lembaga di Nagari Lambah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lembaga.map((item) => (
            <Link
              href={`/lembaga/${item.slug}`}
              key={item.slug}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={item.strukturImage}
                  alt={`Struktur ${item.singkat}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  {item.singkat}
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700">{item.nama}</h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.deskripsi}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-emerald-700">Lihat profil & struktur →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
