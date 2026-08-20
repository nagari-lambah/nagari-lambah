import Image from "next/image";
import { notFound } from "next/navigation";
import { BriefcaseBusiness, GraduationCap, MapPin, UserRound } from "lucide-react";
import SiteShell from "../../../../components/SiteShell";
import { perangkat } from "../../../../data/perangkat";

export default async function DetailPerangkatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = perangkat.find((x) => x.slug === slug);
  if (!item) notFound();

  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
          <div className="grid md:grid-cols-[300px_1fr]">
            <div className="bg-gradient-to-b from-[#1b6f9e] to-[#0f8292] p-7">
              <div className="relative mx-auto h-[360px] w-full max-w-[260px] overflow-hidden rounded-3xl border-4 border-white bg-white shadow-lg">
                {item.foto ? (
                  <Image src={item.foto} alt={item.nama} fill sizes="260px" className="object-cover object-top" />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#fff7e9] text-[#f0a000]">
                    <UserRound size={110} strokeWidth={1.4} />
                  </div>
                )}
              </div>
              <div className="mt-5 text-center">
                <span className="inline-block rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-[#d78200]">
                  {item.jabatan}
                </span>
              </div>
            </div>

            <div className="p-7 sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f0a000]">Profil Perangkat Nagari</p>
              <h1 className="mt-2 text-4xl font-black text-[#0d3763]">{item.nama}</h1>
              <p className="mt-2 text-lg font-extrabold text-[#d78200]">{item.jabatan}</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-wider text-[#f0a000]">Tempat / Tanggal Lahir</p>
                  <p className="mt-2 font-semibold leading-7">{item.tempatTanggalLahir}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-wider text-[#f0a000]">Alamat</p>
                  <p className="mt-2 flex gap-2 font-semibold leading-7">
                    <MapPin size={18} className="mt-1 shrink-0 text-[#f0a000]" />
                    {item.alamat}
                  </p>
                </div>
              </div>

              {item.pendidikan && (
                <section className="mt-10">
                  <h2 className="flex items-center gap-2 text-2xl font-black text-[#0d3763]">
                    <GraduationCap className="text-[#f0a000]" /> Riwayat Pendidikan
                  </h2>
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="min-w-full text-sm">
                      <thead className="bg-[#0d3763] text-white">
                        <tr><th className="px-4 py-3 text-left">Jenjang</th><th className="px-4 py-3 text-left">Institusi</th><th className="px-4 py-3 text-left">Masuk</th><th className="px-4 py-3 text-left">Lulus</th></tr>
                      </thead>
                      <tbody>
                        {item.pendidikan.map((p) => (
                          <tr key={`${p.jenjang}-${p.institusi}`}>
                            <td className="border-t px-4 py-3 font-bold">{p.jenjang}</td>
                            <td className="border-t px-4 py-3">{p.institusi}</td>
                            <td className="border-t px-4 py-3">{p.masuk}</td>
                            <td className="border-t px-4 py-3">{p.lulus}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {item.riwayatJabatan && (
                <section className="mt-10">
                  <h2 className="flex items-center gap-2 text-2xl font-black text-[#0d3763]">
                    <BriefcaseBusiness className="text-[#f0a000]" /> Riwayat Jabatan
                  </h2>
                  <div className="mt-4 space-y-4">
                    {item.riwayatJabatan.map((r,i) => (
                      <div key={`${r.posisi}-${i}`} className="rounded-2xl border border-[#fde7a8] bg-[#fff9e8] p-5">
                        <p className="text-xs font-black uppercase tracking-wider text-[#f0a000]">Jabatan {i+1}</p>
                        <h3 className="mt-1 text-lg font-black text-[#0d3763]">{r.posisi}</h3>
                        <p className="mt-2 text-sm font-bold text-slate-600">{r.periode}</p>
                        {r.lembaga && <p className="mt-3 text-sm leading-6"><strong>Lembaga:</strong> {r.lembaga}</p>}
                        <p className="mt-2 text-sm leading-6"><strong>Lama bekerja:</strong> {r.lama}</p>
                        <ul className="mt-3 space-y-1.5 text-sm leading-6">{r.uraian.map((u) => <li key={u}>• {u}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </article>
      </section>
    </SiteShell>
  );
}
