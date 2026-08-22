import Link from "next/link";
import KantorNagariMap from "./KantorNagariMap";

export default function TentangNagariBeranda() {
  return (
    <section className="bg-[#f6f8fb] px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Hanya SATU foto kantor: foto yang terhubung ke Google Maps */}
          <KantorNagariMap />

          <div>
            <p className="font-black uppercase tracking-[0.28em] text-orange-600">
              Tentang Nagari
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#0d3763] sm:text-5xl">
              Mengenal Nagari Lambah
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              Nagari Lambah merupakan salah satu nagari yang berada di Kecamatan
              Ampek Angkek, Kabupaten Agam, Sumatera Barat. Website ini menjadi
              pusat informasi resmi pemerintahan nagari, pelayanan publik,
              pembangunan, kegiatan masyarakat dan keterbukaan informasi publik.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-black text-[#0d3763]">Profil</p>
                <p className="mt-1 text-slate-500">Nagari</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-black text-[#0d3763]">Layanan</p>
                <p className="mt-1 text-slate-500">Publik</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-black text-[#0d3763]">Informasi</p>
                <p className="mt-1 text-slate-500">Terbuka</p>
              </div>
            </div>

            <Link
              href="/profil"
              className="mt-8 inline-flex rounded-xl bg-[#0d3763] px-6 py-3 font-black text-white transition hover:bg-[#15588a]"
            >
              Selengkapnya tentang Nagari
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
