"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const NOMOR_WA_PENGRAJIN = "6281234567890";

interface LightboxData {
  src: string;
  alt: string;
  kategori?: string;
}

const produkUtamaCBB = {
  kategori: "Produk Inovasi Utama · Program Kosabangsa 2026",
  nama: "Media Communication Board Bunglin (CBB)",
  gambar: "/image/produk/cbb-bunglin.png",
  deskripsi:
    "Alat bantu komunikasi alternatif dan augmentatif (AAC) berbasis visual interaktif yang dirancang khusus untuk mendukung kemandirian komunikasi anak berkebutuhan khusus secara inklusif.",
  spesifikasi: [
    "Material bodi akrilik tebal 3 mm & papan visual ramah anak",
    "Simbol komunikasi visual kontras tinggi yang mudah dipahami",
    "Desain ergonomis, kokoh, & portabel untuk sekolah maupun rumah",
    "Hasil hilirisasi riset pendampingan UMBJ, UNP, dan Kemdiktisaintek",
  ],
  harga: "Hubungi Pengrajin / Sesuai Paket",
  katalogPdf: "/dokumen/katalog-cbb-bunglin.pdf",
  pesanWa: `https://wa.me{NOMOR_WA_PENGRAJIN}?text=${encodeURIComponent(
    "Halo Pengrajin Lambah Sakato, saya tertarik memesan/menanyakan detail produk Media Communication Board Bunglin (CBB)."
  )}`,
  pesanEmail: "mailto:nagari.lambah@gmail.com",
};

const produkMeubeler = [
  {
    id: 1,
    kategori: "Meubeler & Furnitur Rumah",
    nama: "Lemari Pakaian & Lemari Arsip Kayu",
    gambar: "/image/produk/lemari.jpeg",
    deskripsi:
      "Lemari kayu kokoh buatan tangan pengrajin Nagari Lambah dengan konstruksi kuat, pengerjaan halus, dan ukuran yang dapat disesuaikan (custom).",
    harga: "Mulai Rp 2.500.000",
    pesanWa: `https://wa.me{NOMOR_WA_PENGRAJIN}?text=${encodeURIComponent(
      "Halo Pengrajin Lambah Sakato, saya ingin menanyakan detail produk Lemari Pakaian & Lemari Arsip Kayu."
    )}`,
  },
  {
    id: 2,
    kategori: "Meubeler Kantor",
    nama: "Meja Kerja",
    gambar: "/image/produk/meja-biro.jpeg",
    deskripsi:
      "Berbagai model meja kayu fungsional untuk kebutuhan rumah tangga, perkantoran nagari, maupun ruang kelas sekolah.",
    harga: "Mulai Rp 3.850.000",
    pesanWa: `https://wa.me{NOMOR_WA_PENGRAJIN}?text=${encodeURIComponent(
      "Halo Pengrajin Lambah Sakato, saya ingin menanyakan detail produk Meja Kerja."
    )}`,
  },
  {
    id: 3,
    kategori: "Meubeler Sekolah",
    nama: "Meja Belajar",
    gambar: "/image/produk/meja-belajar.jpeg",
    deskripsi:
      "Meja dan kursi belajar kayu ergonomis untuk ruang kelas maupun rumah dengan konstruksi kokoh dan lapisan finishing tahan lama.",
    harga: "Mulai Rp 650.000 / set",
    pesanWa: `https://wa.me{NOMOR_WA_PENGRAJIN}?text=${encodeURIComponent(
      "Halo Pengrajin Lambah Sakato, saya ingin menanyakan detail produk Meja Belajar."
    )}`,
  },
];

export default function ProdukNagariPage() {
  const [selectedImage, setSelectedImage] = useState<LightboxData | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. TOP BAR LOKASI & NAVBAR */}
      <div className="bg-[#082f57] px-4 py-2 text-xs text-white sm:px-6 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span>Nagari Lambah, Kecamatan Ampek Angkek</span>
          <span>Kabupaten Agam · Sumatera Barat</span>
        </div>
      </div>
      <Navbar />

      {/* 2. BANNER ETALASE PROGRAM KOSABANGSA 2026 */}
      <section
        id="etalase-kosabangsa"
        className="relative overflow-hidden bg-gradient-to-br from-[#082f57] via-[#124b7c] to-[#08728a] px-4 py-14 text-white sm:px-6 lg:py-20"
      >
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 backdrop-blur-sm">
            Etalase Inovasi & Ekonomi Kreatif Nagari
          </span>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Etalase Produk Inovasi Masyarakat Nagari Lambah — Program Kosabangsa 2026
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Sinergi pemberdayaan masyarakat dan hilirisasi inovasi teknologi tepat guna bersama Pemerintah Nagari Lambah, Universitas Mercubaktijaya (UMBJ) Padang, dan Universitas Negeri Padang (UNP).
          </p>
        </div>
      </section>

      {/* 3. PROFIL KELOMPOK PENGRAJIN & DOKUMEN SK RESMI */}
      <section id="profil-pengrajin" className="relative z-10 -mt-8 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase text-amber-800">
                🏛️ Profil Kelompok Pengrajin
              </span>
              <h2 className="mt-3 text-2xl font-black text-[#082f57] sm:text-3xl">
                Kelompok Pengrajin Lambah Sakato
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Unit produksi berbasis masyarakat di Nagari Lambah, hasil pendampingan Program Kosabangsa 2026 bersama Universitas Mercubaktijaya (UMBJ) Padang dan Universitas Negeri Padang (UNP).
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#082f57]/15 bg-slate-50 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Legalitas Kelembagaan
              </p>
              <h3 className="mt-1 text-lg font-black text-[#082f57]">
                Keputusan Wali Nagari Lambah
              </h3>
              <p className="text-base font-extrabold text-amber-600">
                Nomor 68 Tahun 2025
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="/dokumen/sk-kelompok-pengrajin-lambah-sakato-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#082f57] px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#124b7c]"
                >
                  Lihat Dokumen SK (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KATALOG PRODUK UTAMA & MEUBELER */}
      <section id="katalog-produk" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600">
              Katalog Produk
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#082f57] sm:text-4xl">
              Produk Inovasi & Karya Pengrajin Nagari
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Produk inovasi program Kosabangsa 2026 serta berbagai produk meubeler berkualitas yang telah dihasilkan oleh Kelompok Pengrajin Lambah Sakato.
            </p>
          </div>

          {/* KARTU PRODUK UTAMA: MEDIA COMMUNICATION BOARD BUNGLIN (CBB) */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200">
            <div className="grid lg:grid-cols-2">
              <div
                onClick={() =>
                  setSelectedImage({
                    src: produkUtamaCBB.gambar,
                    alt: produkUtamaCBB.nama,
                    kategori: produkUtamaCBB.kategori,
                  })
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImage({
                      src: produkUtamaCBB.gambar,
                      alt: produkUtamaCBB.nama,
                      kategori: produkUtamaCBB.kategori,
                    });
                  }
                }}
                aria-label={`Perbesar gambar ${produkUtamaCBB.nama}`}
                className="group relative flex min-h-[360px] cursor-zoom-in items-center justify-center bg-[#082f57] p-4 sm:min-h-[460px]"
              >
                <Image
                  src={produkUtamaCBB.gambar}
                  alt={produkUtamaCBB.nama}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  priority
                />
                <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition group-hover:bg-amber-500 group-hover:text-slate-950">
                  🔍 Klik untuk perbesar
                </span>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-800">
                    {produkUtamaCBB.kategori}
                  </span>

                  <h3 className="mt-3 text-2xl font-black text-[#082f57] sm:text-3xl">
