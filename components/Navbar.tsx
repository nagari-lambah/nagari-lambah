"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Pemerintahan", href: "/#pemerintahan" },
  { label: "TP-PKK", href: "/tp-pkk" },
  { label: "Lembaga", href: "/#lembaga" },
  {
    label: "Produk Nagari",
    subMenu: [
      {
        label: "Etalase Produk Inovasi Masyarakat Nagari Lambah",
        desc: "Program Kosabangsa 2026 (Pendanaan Kemdiktisaintek)",
        href: "/produk-nagari#etalase-kosabangsa",
      },
      {
        label: "Profil Kelompok Pengrajin Lambah Sakato",
        desc: "Legalitas SK Wali Nagari No. 68 Tahun 2025",
        href: "/produk-nagari#profil-pengrajin",
      },
      {
        label: "Katalog Produk",
        desc: "Produk Kriya Sebelumnya & Media CBB Bunglin",
        href: "/produk-nagari#katalog-produk",
      },
    ],
  },
  { label: "PPID", href: "/ppid" },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/image/logo-agam.png"
            alt="Logo Kabupaten Agam"
            width={46}
            height={54}
            priority
            className="h-[52px] w-auto object-contain"
          />
          <div>
            <h1 className="text-lg font-black tracking-wide text-[#082f57] sm:text-xl">
              NAGARI LAMBAH
            </h1>
            <p className="text-[11px] text-slate-500 sm:text-xs">
              Kecamatan Ampek Angkek · Kabupaten Agam
            </p>
          </div>
        </Link>

        {/* Menu Desktop (Muncul jika layar >= 1024px) */}
        <nav className="hidden items-center gap-3.5 text-[13px] font-semibold text-slate-700 lg:flex">
          {menu.map((item) =>
            item.subMenu ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setOpenDropdown((prev) => !prev)}
                  className="inline-flex items-center gap-1 whitespace-nowrap py-2 font-bold text-[#082f57] transition hover:text-amber-600"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px]">{openDropdown ? "▲" : "▼"}</span>
                </button>

                {openDropdown && (
                  <div className="absolute left-0 top-full mt-1.5 w-80 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                    {item.subMenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setOpenDropdown(false)}
                        className="block rounded-xl px-3.5 py-2.5 transition hover:bg-amber-50"
                      >
                        <p className="text-xs font-bold leading-snug text-[#082f57]">
                          {sub.label}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-500">
                          {sub.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="whitespace-nowrap py-2 transition hover:text-amber-600"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/ppid"
            className="hidden rounded-xl bg-[#082f57] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0b467d] md:inline-flex"
          >
            Layanan PPID
          </Link>

          <button
            type="button"
            onClick={() => setOpenMobileMenu((prev) => !prev)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-[#082f57] lg:hidden"
          >
            {openMobileMenu ? "Tutup" : "Menu"}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {openMobileMenu && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 shadow-xl lg:hidden">
          {menu.map((item) =>
            item.subMenu ? (
              <div key={item.label} className="border-b border-slate-100 py-1">
                <button
                  type="button"
                  onClick={() => setOpenMobileSub((prev) => !prev)}
                  className="flex w-full items-center justify-between py-2.5 text-left text-sm font-bold text-[#082f57]"
                >
                  <span>{item.label}</span>
                  <span>{openMobileSub ? "▲" : "▼"}</span>
                </button>
                {openMobileSub && (
                  <div className="mb-2 space-y-1 rounded-xl bg-slate-50 p-2">
                    {item.subMenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => {
                          setOpenMobileSub(false);
                          setOpenMobileMenu(false);
                        }}
                        className="block rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                      >
                        ↳ {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setOpenMobileMenu(false)}
                className="block border-b border-slate-100 py-2.5 text-sm font-semibold text-slate-700 hover:text-amber-600"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
