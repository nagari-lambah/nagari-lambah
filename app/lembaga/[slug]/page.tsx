import Link from "next/link";
import { notFound } from "next/navigation";
import { getLembaga, lembaga } from "@/data/lembaga";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lembaga.map((item) => ({ slug: item.slug }));
}

export default async function LembagaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getLembaga(slug);

  if (!item) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link href="/lembaga" className="mb-6 inline-flex text-sm font-medium text-emerald-100 hover:text-white">
            ← Kembali ke Lembaga Nagari
          </Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Lembaga Nagari Lambah</p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{item.nama}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50 md:text-lg">{item.deskripsi}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="border-b border-slate-200 px-6 py-5 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Susunan Kepengurusan</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">Struktur Organisasi {item.singkat}</h2>
          </div>

          <div className="bg-slate-100 p-3 md:p-6">
            <a href={item.strukturImage} target="_blank" rel="noreferrer" className="block">
              <img
                src={item.strukturImage}
                alt={`Struktur Organisasi ${item.nama}`}
                className="h-auto w-full rounded-2xl object-contain"
              />
            </a>
          </div>

          <div className="px-6 py-4 text-sm text-slate-500 md:px-8">
            Klik gambar untuk membuka struktur dalam ukuran penuh.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Fungsi Utama", item.fungsi, "bg-emerald-600"],
            ["Kedudukan", item.kedudukan, "bg-amber-500"],
            ["Manfaat bagi Masyarakat", item.manfaat, "bg-sky-500"],
          ].map(([judul, items, warna]) => (
            <article key={String(judul)} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="mb-5 text-xl font-bold text-slate-900">{String(judul)}</h2>
              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                {(items as string[]).map((teks) => (
                  <li key={teks} className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${String(warna)}`} />
                    <span>{teks}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
