"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import SiteShell from "../../../components/SiteShell";
import { BeritaContent } from "../../../lib/berita";
import { supabase } from "../../../lib/supabaseClient";

type Berita = {
  id: string;
  slug: string;
  judul: string;
  tanggal: string;
  kategori: string;
  penulis: string | null;
  ringkasan: string;
  gambar: string | null;
  isi: string;
};

function formatTanggalIndonesia(value: string) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function DetailBeritaPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [berita, setBerita] = useState<Berita | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadBerita() {
      const { data, error } = await supabase
        .from("berita")
        .select("id, slug, judul, tanggal, kategori, penulis, ringkasan, gambar, isi")
        .eq("slug", slug)
        .eq("status", "terbit")
        .maybeSingle();

      if (error || !data) setNotFound(true);
      else setBerita(data as Berita);

      setLoading(false);
    }

    if (slug) loadBerita();
  }, [slug]);

  return (
    <SiteShell>
      <main className="min-h-screen bg-[#f6f8fb]">
        {loading ? (
          <div className="mx-auto max-w-5xl px-4 py-20 text-center text-slate-500 sm:px-6">
            Memuat berita...
          </div>
        ) : notFound || !berita ? (
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
            <h1 className="text-3xl font-black text-[#0d3763]">Berita tidak ditemukan</h1>
            <p className="mt-4 text-slate-500">Berita mungkin belum diterbitkan atau sudah tidak tersedia.</p>
            <Link href="/berita" className="mt-8 inline-flex rounded-xl bg-[#0d3763] px-5 py-3 font-black text-white">
              ← Kembali ke Berita
            </Link>
          </div>
        ) : (
          <>
            <section className="bg-gradient-to-br from-[#082f57] via-[#124b7c] to-[#08728a] px-4 py-14 text-white sm:px-6 lg:py-20">
              <div className="mx-auto max-w-5xl">
                <Link href="/berita" className="inline-flex rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/15">
                  ← Kembali ke Berita
                </Link>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-900">
                    {berita.kategori}
                  </span>
                  <span className="text-sm font-semibold text-slate-200">{formatTanggalIndonesia(berita.tanggal)}</span>
                </div>

                <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{berita.judul}</h1>
                <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">{berita.ringkasan}</p>

                {berita.penulis && (
                  <p className="mt-5 text-sm font-bold text-amber-300">Oleh {berita.penulis}</p>
                )}
              </div>
            </section>

            <article className="px-4 py-12 sm:px-6 lg:py-16">
              <div className="mx-auto max-w-5xl">
                {berita.gambar && (
                  <div className="mb-10 overflow-hidden rounded-[28px] bg-slate-100 shadow-xl ring-1 ring-slate-200">
                    <img
                      src={berita.gambar}
                      alt={berita.judul}
                      className="max-h-[620px] w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = "/image/kantor-nagari-lambah.png";
                      }}
                    />
                  </div>
                )}

                <div className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-9 lg:p-12">
                  <div
                    className="
                      berita-content
                      space-y-5
                      text-[17px]
                      leading-8
                      text-slate-700

                      [&_h2]:mt-10
                      [&_h2]:text-2xl
                      [&_h2]:font-black
                      [&_h2]:leading-tight
                      [&_h2]:text-[#0d3763]

                      [&_h3]:mt-8
                      [&_h3]:text-xl
                      [&_h3]:font-black
                      [&_h3]:text-[#0d3763]

                      [&_p]:my-5

                      [&_ol]:my-6
                      [&_ol]:list-decimal
                      [&_ol]:space-y-3
                      [&_ol]:pl-7

                      [&_ul]:my-6
                      [&_ul]:list-disc
                      [&_ul]:space-y-3
                      [&_ul]:pl-7

                      [&_strong]:font-black
                      [&_strong]:text-slate-800

                      [&_blockquote]:my-8
                      [&_blockquote]:rounded-2xl
                      [&_blockquote]:bg-[#0d3763]
                      [&_blockquote]:px-6
                      [&_blockquote]:py-5
                      [&_blockquote]:text-center
                      [&_blockquote]:font-bold
                      [&_blockquote]:text-white

                      [&_figure]:my-9
                      [&_figure]:text-center

                      [&_figure_img]:mx-auto
                      [&_figure_img]:h-auto
                      [&_figure_img]:max-h-[720px]
                      [&_figure_img]:w-full
                      [&_figure_img]:rounded-2xl
                      [&_figure_img]:object-contain
                      [&_figure_img]:shadow-md

                      [&_figcaption]:mt-3
                      [&_figcaption]:text-sm
                      [&_figcaption]:italic
                      [&_figcaption]:leading-6
                      [&_figcaption]:text-slate-500
                    "
                  >
                    {/<[a-z][\s\S]*>/i.test(berita.isi) ? (
                      <div dangerouslySetInnerHTML={{ __html: berita.isi }} />
                    ) : (
                      <BeritaContent isi={berita.isi} />
                    )}
                  </div>
                </div>

                <div className="mt-10">
                  <Link href="/berita" className="inline-flex rounded-xl bg-[#0d3763] px-5 py-3 font-black text-white transition hover:bg-[#15588a]">
                    ← Kembali ke Daftar Berita
                  </Link>
                </div>
              </div>
            </article>
          </>
        )}
      </main>
    </SiteShell>
  );
}
