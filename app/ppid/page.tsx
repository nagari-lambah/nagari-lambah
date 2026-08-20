import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";
import SectionCard from "../../components/SectionCard";

export default function PPIDPage() {
  const misi = [
    "Meningkatkan kualitas pelayanan informasi publik.",
    "Menyediakan informasi yang mudah diakses oleh masyarakat.",
    "Mendorong partisipasi masyarakat dalam penyelenggaraan pemerintahan nagari.",
    "Mewujudkan tata kelola pemerintahan yang transparan dan akuntabel.",
    "Mengembangkan sistem dokumentasi dan informasi berbasis teknologi informasi.",
  ];
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10">
        <PageHeader eyebrow="Keterbukaan Informasi" title="PPID Nagari Lambah" description="Pelayanan informasi publik Pemerintah Nagari Lambah." />
        <div className="space-y-7">
          <SectionCard>
            <h2 className="text-2xl font-black text-[#0d3763]">Visi</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Terwujudnya pelayanan informasi publik yang terbuka, cepat, akurat, transparan, dan akuntabel guna mendukung tata kelola pemerintahan nagari yang baik.
            </p>
          </SectionCard>
          <SectionCard>
            <h2 className="text-2xl font-black text-[#0d3763]">Misi / Sasaran</h2>
            <ol className="mt-5 space-y-3">
              {misi.map((x,i) => <li key={x} className="flex gap-3"><span className="font-black text-[#f0a000]">{i+1}.</span><span className="leading-7">{x}</span></li>)}
            </ol>
          </SectionCard>
        </div>
      </section>
    </SiteShell>
  );
}
