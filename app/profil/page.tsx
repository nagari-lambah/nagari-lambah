import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";

export default function ProfilPage() {
  const menu = [
    ["Sejarah Nagari","/sejarah","Sejarah terbentuknya Nagari Lambah dan perkembangan pemerintahan nagari."],
    ["Visi dan Misi","/visi-misi","Arah pembangunan dan sasaran Pemerintah Nagari Lambah."],
    ["Perangkat Nagari","/profil/perangkat-nagari","Profil perangkat dan aparatur Pemerintah Nagari Lambah."],
    ["Struktur Organisasi","/profil/struktur-organisasi","Susunan organisasi pemerintahan Nagari Lambah."],
    ["Lembaga Nagari","/lembaga","Informasi kelembagaan yang ada di Nagari Lambah."],
    ["Peta Nagari","/profil/peta-nagari","Informasi wilayah dan peta Nagari Lambah."],
  ];
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:px-10">
        <PageHeader eyebrow="Profil Nagari" title="Nagari Lambah" description="Informasi umum mengenai Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {menu.map(([title,href,desc]) => (
            <Link key={title} href={href} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h2 className="text-xl font-black text-[#0d3763]">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{desc}</p>
              <p className="mt-5 font-bold text-[#f0a000]">Buka halaman →</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
