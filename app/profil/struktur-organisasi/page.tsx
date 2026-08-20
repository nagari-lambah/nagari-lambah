import Link from "next/link";
import SiteShell from "../../../components/SiteShell";
import PageHeader from "../../../components/PageHeader";
import SectionCard from "../../../components/SectionCard";

export default function StrukturOrganisasiPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10">
        <PageHeader
          eyebrow="Pemerintahan Nagari"
          title="Struktur Organisasi Nagari Lambah"
          description="Susunan perangkat Pemerintah Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam."
        />

        <div className="mt-8">
          <SectionCard>
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
              <img
                src="/image/struktur/struktur-perangkat-nagari-lambah.jpeg"
                alt="Struktur Perangkat Nagari Lambah"
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#fff9e8] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#f0a000]">
                  Profil Aparatur
                </p>
                <h2 className="mt-2 text-2xl font-black text-[#0d3763]">
                  Lihat Profil Perangkat Nagari
                </h2>
                <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                  Buka halaman perangkat untuk melihat biodata, jabatan, riwayat pendidikan,
                  dan riwayat jabatan masing-masing aparatur Nagari Lambah.
                </p>
              </div>

              <Link
                href="/profil/perangkat-nagari"
                className="inline-flex shrink-0 items-center justify-center rounded-2xl px-6 py-3 font-extrabold text-white shadow-sm transition hover:-translate-y-0.5"
                style={{ backgroundColor: "#0d3763" }}
              >
                Lihat Profil Perangkat →
              </Link>
            </div>
          </SectionCard>
        </div>
      </section>
    </SiteShell>
  );
}
