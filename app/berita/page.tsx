"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";
import { supabase } from "../../lib/supabaseClient";

type Berita = {
  id: string;
  slug: string;
  judul: string;
  tanggal: string;
  kategori: string;
  penulis: string | null;
  ringkasan: string;
  gambar: string | null;
};

function formatTanggalIndonesia(value: string) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function BeritaPage() {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadBerita() {
      const { data, error } = await supabase
        .from("berita")
        .select("id, slug, judul, tanggal, kategori, penulis, ringkasan, gambar")
        .eq("status", "terbit")
        .order("tanggal", { ascending: false });

      if (error) setMessage("Berita belum dapat dimuat.");
      else setBerita((data || []) as Berita[]);

      setLoading(false);
    }
    loadBerita();
  }, []);

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Informasi Nagari"
        title="Berita Nagari Lambah"
        description="Informasi terbaru mengenai pemerintahan, pembangunan, pelayanan, dan kegiatan masyarakat Nagari Lambah."
      />

      <main className="bg-[#f6f8fb] px-4 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow-sm ring-1 ring-slate-200">
              Memuat berita...
            </div>
          ) : message ? (
            <div className="rounded-3xl bg-white p-10 text-center text-red-600 shadow-sm ring-1 ring-slate-200">
              {message}
            </div>
          ) : berita.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 text-center text-slate-500 shadow-sm ring-1 ring-slate-200">
              Belum ada berita yang dipublikasikan.
            </div>
          ) : (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {berita.map((item) => (
                <article key={item.id} className="group overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <Link href={`/berita/${item.slug}`} className="block">
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={item.gambar || "/image/kantor-nagari-lambah.png"}
                        alt={item.judul}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = "/image/kantor-nagari-lambah.png";
                        }}
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">{item.kategori}</span>
                        <span className="text-slate-400">{formatTanggalIndonesia(item.tanggal)}</span>
                      </div>

                      <h2 className="mt-4 line-clamp-2 text-xl font-black leading-snug text-[#0d3763]">{item.judul}</h2>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">{item.ringkasan}</p>

                      {item.penulis && (
                        <p className="mt-4 text-xs font-semibold text-slate-400">Oleh {item.penulis}</p>
                      )}

                      <span className="mt-5 inline-flex font-black text-[#0f8292]">Baca selengkapnya →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </SiteShell>
  );
}
