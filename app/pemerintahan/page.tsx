
import Image from "next/image";
import Link from "next/link";


export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="bg-[#082f57] px-4 py-2 text-xs text-white sm:px-6 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span>Nagari Lambah, Kecamatan Ampek Angkek</span>
          <span>Kabupaten Agam · Sumatera Barat</span>
        </div>
      </div>

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/image/logo-agam.png"
              alt="Logo Kabupaten Agam"
              width={46}
              height={54}
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

          <Link
            href="/"
            className="rounded-xl bg-[#082f57] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#0b467d]"
          >
            Beranda
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#082f57] via-[#124b7c] to-[#08728a] px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-amber-300">
            Pemerintahan
          </p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Pemerintahan Nagari Lambah
          </h2>
        </div>
      </section>

      
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Wali Nagari", "Fiqri Farid"],
              ["Sekretaris Nagari", "Ferri Dharma"],
              ["Perangkat Nagari", "Struktur dan profil perangkat Nagari Lambah"],
            ].map(([jabatan, nama]) => (
              <div key={jabatan} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-bold uppercase tracking-wider text-amber-600">{jabatan}</p>
                <h3 className="mt-3 text-xl font-black text-[#082f57]">{nama}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-black text-[#082f57]">Pelayanan Pemerintahan</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Halaman ini dapat dikembangkan untuk menampilkan struktur organisasi, tugas dan fungsi,
              program kerja, perangkat nagari, serta informasi pelayanan Pemerintah Nagari Lambah.
            </p>
          </div>
        </div>
      </section>


      <footer className="bg-[#061f38] px-4 py-8 text-center text-sm text-slate-400 sm:px-6">
        © 2026 Pemerintah Nagari Lambah · Kecamatan Ampek Angkek · Kabupaten Agam
      </footer>
    </main>
  );
}
