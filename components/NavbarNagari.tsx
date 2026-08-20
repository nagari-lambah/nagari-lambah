"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MenuItem = { label: string; href: string };
type DropdownName = "profil" | "perencanaan" | "informasi" | null;

const profilMenu: MenuItem[] = [
  { label: "Profil Nagari", href: "/profil" },
  { label: "Profil Wali Nagari", href: "/profil/walinagari" },
  { label: "Sejarah Nagari", href: "/sejarah" },
  { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
  { label: "Visi Misi", href: "/visi-misi" },
  { label: "Perangkat Nagari", href: "/profil/perangkat-nagari" },
  { label: "Lembaga Nagari", href: "/lembaga" },
  { label: "Peta Nagari", href: "/profil/peta-nagari" },
];

const perencanaanMenu: MenuItem[] = [
  { label: "RPJM Nagari", href: "/perencanaan/rpjm" },
  { label: "RKP Nagari", href: "/perencanaan/rkp" },
  { label: "APB Nagari", href: "/perencanaan/apb" },
];

const informasiMenu: MenuItem[] = [
  { label: "Berita", href: "/berita" },
  { label: "Pengumuman", href: "/informasi/pengumuman" },
  { label: "Galeri", href: "/galeri" },
];

function DropdownButton({
  name,
  title,
  items,
  active,
  setActive,
}: {
  name: Exclude<DropdownName, null>;
  title: string;
  items: MenuItem[];
  active: DropdownName;
  setActive: (value: DropdownName) => void;
}) {
  const open = active === name;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setActive(open ? null : name)}
        className="flex items-center gap-1.5 whitespace-nowrap py-7 text-sm font-extrabold transition"
        style={{ color: "#16375f" }}
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          size={15}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-1/2 top-[66px] z-[100] w-[320px] -translate-x-1/2 rounded-2xl bg-white p-3 shadow-[0_18px_55px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActive(null)}
              className="block rounded-xl px-4 py-3 text-[15px] font-bold transition hover:bg-slate-50"
              style={{ color: "#18365f" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavbarNagari() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownName>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 shadow-sm">
      <div style={{ backgroundColor: "#0d3763", color: "#ffffff" }}>
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-2 text-xs font-semibold sm:px-7 lg:px-10">
          <span>Nagari Lambah, Kecamatan Ampek Angkek</span>
          <span className="hidden sm:block">Kabupaten Agam · Sumatera Barat</span>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex min-h-[92px] max-w-[1500px] items-center justify-between gap-6 px-5 sm:px-7 lg:px-10">
          <Link href="/" className="flex min-w-fit items-center gap-4">
            <Image
              src="/image/logo-agam.png"
              alt="Logo Kabupaten Agam"
              width={54}
              height={70}
              priority
              style={{ width: "auto", height: "70px" }}
              className="object-contain"
            />
            <div>
              <h1 className="text-[22px] font-black tracking-tight sm:text-[27px]" style={{ color: "#0d3763" }}>
                NAGARI LAMBAH
              </h1>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                Kecamatan Ampek Angkek · Kabupaten Agam
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-end gap-6 xl:flex">
            <Link href="/" className="whitespace-nowrap text-sm font-extrabold" style={{ color: "#16375f" }}>Beranda</Link>
            <DropdownButton name="profil" title="Profil Nagari" items={profilMenu} active={activeDropdown} setActive={setActiveDropdown} />
            <Link href="/produk-hukum" className="whitespace-nowrap text-sm font-extrabold" style={{ color: "#16375f" }}>Produk Hukum</Link>
            <DropdownButton name="perencanaan" title="Perencanaan" items={perencanaanMenu} active={activeDropdown} setActive={setActiveDropdown} />
            <DropdownButton name="informasi" title="Informasi" items={informasiMenu} active={activeDropdown} setActive={setActiveDropdown} />
            <Link href="/tp-pkk" className="whitespace-nowrap text-sm font-extrabold" style={{ color: "#16375f" }}>TP-PKK</Link>
            <Link href="/ppid" className="whitespace-nowrap text-sm font-extrabold" style={{ color: "#16375f" }}>PPID</Link>
            <Link href="/kontak" className="whitespace-nowrap text-sm font-extrabold" style={{ color: "#16375f" }}>Kontak</Link>
          </nav>

          <button
            type="button"
            onClick={() => {
              setMobileOpen((v) => !v);
              setActiveDropdown(null);
            }}
            className="rounded-xl p-2.5 text-white xl:hidden"
            style={{ backgroundColor: "#0d3763" }}
            aria-label="Buka menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 xl:hidden">
          <div className="mx-auto max-w-[1500px] space-y-2">
            <Link href="/" className="block rounded-xl px-4 py-3 font-bold" style={{ color: "#18365f" }}>Beranda</Link>
            <details className="rounded-xl bg-slate-50">
              <summary className="cursor-pointer px-4 py-3 font-bold" style={{ color: "#18365f" }}>Profil Nagari</summary>
              {profilMenu.map((item) => <Link key={item.href} href={item.href} className="block px-6 py-2.5 text-sm font-semibold text-slate-700">{item.label}</Link>)}
            </details>
            <Link href="/produk-hukum" className="block rounded-xl px-4 py-3 font-bold" style={{ color: "#18365f" }}>Produk Hukum</Link>
            <details className="rounded-xl bg-slate-50">
              <summary className="cursor-pointer px-4 py-3 font-bold" style={{ color: "#18365f" }}>Perencanaan</summary>
              {perencanaanMenu.map((item) => <Link key={item.href} href={item.href} className="block px-6 py-2.5 text-sm font-semibold text-slate-700">{item.label}</Link>)}
            </details>
            <details className="rounded-xl bg-slate-50">
              <summary className="cursor-pointer px-4 py-3 font-bold" style={{ color: "#18365f" }}>Informasi</summary>
              {informasiMenu.map((item) => <Link key={item.href} href={item.href} className="block px-6 py-2.5 text-sm font-semibold text-slate-700">{item.label}</Link>)}
            </details>
            <Link href="/tp-pkk" className="block rounded-xl px-4 py-3 font-bold" style={{ color: "#18365f" }}>TP-PKK</Link>
            <Link href="/ppid" className="block rounded-xl px-4 py-3 font-bold" style={{ color: "#18365f" }}>PPID</Link>
            <Link href="/kontak" className="block rounded-xl px-4 py-3 font-bold" style={{ color: "#18365f" }}>Kontak</Link>
          </div>
        </div>
      )}
    </header>
  );
}
