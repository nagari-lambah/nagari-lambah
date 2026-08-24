"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";

type Berita = {
  id: string;
  slug: string;
  judul: string;
  tanggal: string;
  kategori: string;
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

export default function HeroBeritaSlider() {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBerita() {
      const { data, error } = await supabase
        .from("berita")
        .select("id, slug, judul, tanggal, kategori, ringkasan, gambar")
        .eq("status", "terbit")
        .order("tanggal", { ascending: false })
        .limit(5);

      if (!error) setBerita((data || []) as Berita[]);
      setLoading(false);
    }
    loadBerita();
  }, []);

  useEffect(() => {
    if (berita.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % berita.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [berita.length]);

  if (loading) {
    return (
      <div className="flex min-h-[420px] items-center justify-center rounded-[28px] border border-white/20 bg-white/10 text-white shadow-2xl">
        Memuat berita...
      </div>
    );
  }

  if (berita.length === 0) {
    return (
      <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-2xl">
        <img src="/image/kantor-nagari-lambah.png" alt="Kantor Wali Nagari Lambah" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-lg font-black">Berita Nagari Lambah</p>
          <p className="mt-1 text-sm text-slate-200">Belum ada berita yang dipublikasikan.</p>
        </div>
      </div>
    );
  }

  const item = berita[index];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
      <div className="relative h-[220px] overflow-hidden bg-slate-800 sm:h-[245px]">
        <img
          key={`${item.id}-${index}`}
          src={item.gambar || "/image/kantor-nagari-lambah.png"}
          alt={item.judul}
          className="h-full w-full object-cover transition-all duration-700"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/image/kantor-nagari-lambah.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082f57] via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-900 shadow">
            {item.kategori}
          </span>
          <span className="rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {formatTanggalIndonesia(item.tanggal)}
          </span>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-[#0b3b68] via-[#0d4f79] to-[#08748a] p-6 text-white sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">Berita Terbaru Nagari</p>
        <h3 className="mt-3 line-clamp-2 text-2xl font-black leading-tight sm:text-[1.75rem]">{item.judul}</h3>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-200 sm:text-base">{item.ringkasan}</p>

        <div className="mt-6 flex items-end justify-between gap-4">
          <Link href={`/berita/${item.slug}`} className="inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-black text-[#082f57] transition hover:bg-amber-300">
            Baca Berita →
          </Link>

          <div className="flex gap-2">
            {berita.map((beritaItem, dotIndex) => (
              <button
                key={beritaItem.id}
                type="button"
                aria-label={`Tampilkan berita ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all ${
                  dotIndex === index ? "w-8 bg-amber-300" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
          Berganti otomatis setiap 3 detik
        </p>
      </div>
    </div>
  );
}
