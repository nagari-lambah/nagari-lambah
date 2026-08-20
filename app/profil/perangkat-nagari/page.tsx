import Image from "next/image";
import Link from "next/link";
import { MapPin, UserRound } from "lucide-react";
import SiteShell from "../../../components/SiteShell";
import PageHeader from "../../../components/PageHeader";
import { perangkat } from "../../../data/perangkat";

export default function PerangkatNagariPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:px-10">
        <PageHeader eyebrow="Pemerintahan Nagari" title="Perangkat Nagari Lambah" description="Klik salah satu kartu untuk membuka profil perangkat pada tab baru." />
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {perangkat.map((item) => (
            <Link
              key={item.slug}
              href={`/profil/perangkat-nagari/${item.slug}`}
              target="_blank"
              className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-gradient-to-b from-[#1b6f9e] to-[#0f8292] px-5 pb-5 pt-7">
                <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                  {item.foto ? (
                    <Image src={item.foto} alt={item.nama} fill sizes="144px" className="object-cover object-top" />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#fff7e9] text-[#f0a000]">
                      <UserRound size={64} strokeWidth={1.8} />
                    </div>
                  )}
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="rounded-full bg-white px-4 py-2 text-center text-xs font-black uppercase tracking-wide text-[#d78200] shadow-sm">
                    {item.jabatan}
                  </span>
                </div>
              </div>
              <div className="flex min-h-[270px] flex-col p-6">
                <h2 className="text-center text-xl font-black text-[#0d3763]">{item.nama}</h2>
                <p className="mt-4 text-center text-sm font-semibold leading-6 text-slate-600">🎂 {item.tempatTanggalLahir}</p>
                <p className="mt-5 text-center font-bold text-[#f0a000]">Lihat Profil →</p>
                <div className="mt-auto border-t border-slate-200 pt-5">
                  <p className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                    <MapPin size={18} className="mt-1 shrink-0 text-[#f0a000]" />
                    <span>{item.alamat}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
