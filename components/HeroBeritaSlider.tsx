"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import beritaData from "../data/berita.json";

type Berita = {
  slug: string;
  judul: string;
  tanggal: string;
  kategori: string;
  penulis?: string;
  ringkasan: string;
  gambar?: string;
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

export default function HeroBeritaSlider() {
  const beritaHero = useMemo(() => {
    return [...(beritaData as Berita[])]
      .sort(
        (a, b) =>
          new Date(`${b.tanggal}T00:00:00`).getTime() -
          new Date(`${a.tanggal}T00:00:00`).getTime()
      )
      .slice(0, 5);
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (beritaHero.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % beritaHero.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [beritaHero.length]);

  if (beritaHero.length === 0) {
    return null;
  }

  const berita = beritaHero[index];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
      {/* FOTO BERITA */}
      <div className="relative h-[220px] overflow-hidden bg-slate-800 sm:h-[245px]">
        <img
          key={`${berita.slug}-${index}`}
          src={berita.gambar || "/image/kantor-nagari-lambah.png"}
          alt={berita.judul}
          className="h-full w-full object-cover transition-all duration-700"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/image/kantor-nagari-lambah.png";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#082f57] via-black/10 to-transparent" />

        <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-900 shadow">
            {berita.kategori}
          </span>

          <span className="rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {formatTanggalIndonesia(berita.tanggal)}
          </span>
        </div>
      </div>

      {/* ISI KARTU */}
      <div className="relative bg-gradient-to-br from-[#0b3b68] via-[#0d4f79] to-[#08748a] p-6 text-white sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
          Berita Terbaru Nagari
        </p>

        <h3 className="mt-3 line-clamp-2 text-2xl font-black leading-tight sm:text-[1.75rem]">
          {berita.judul}
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-200 sm:text-base">
          {berita.ringkasan}
        </p>

        <div className="mt-6 flex items-end justify-between gap-4">
          <Link
            href={`/berita/${berita.slug}`}
            className="inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-black text-[#082f57] transition hover:bg-amber-300"
          >
            Baca Berita →
          </Link>

          <div className="flex gap-2">
            {beritaHero.map((item, dotIndex) => (
              <button
                key={item.slug}
                type="button"
                aria-label={`Tampilkan berita ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all ${
                  dotIndex === index
                    ? "w-8 bg-amber-300"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
          5 berita terbaru • berganti setiap 3 detik
        </p>
      </div>
    </div>
  );
}
