import { notFound } from "next/navigation";
import SiteShell from "../../../components/SiteShell";
import PageHeader from "../../../components/PageHeader";
import berita from "../../../data/berita.json";
import {
  BeritaContent,
  formatTanggalIndonesia,
  type Berita,
} from "../../../lib/berita";

export function generateStaticParams() {
  return (berita as Berita[]).map((item) => ({
    slug: item.slug,
  }));
}

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = (berita as Berita[]).find((berita) => berita.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Berita Nagari"
        title={item.judul}
        description={item.ringkasan}
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
          {item.gambar ? (
            <div className="h-[320px] w-full bg-slate-100 sm:h-[440px]">
              <img
                src={item.gambar}
                alt={item.judul}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8 border-b border-slate-200 pb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                {item.kategori}
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-[#0d3763] sm:text-4xl">
                {item.judul}
              </h1>
              <p className="mt-4 text-sm text-slate-500">
                Nagari Lambah · {formatTanggalIndonesia(item.tanggal)}
                {item.penulis ? ` · ${item.penulis}` : ""}
              </p>
            </div>

            <div className="space-y-6 text-[17px] leading-8 text-slate-700">
              <BeritaContent isi={item.isi} />
            </div>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
