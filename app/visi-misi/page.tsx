import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";
import SectionCard from "../../components/SectionCard";

export default function VisiMisiPage() {
  const misi = [
    "Meningkatkan sumber daya manusia yang berkualitas, beriman, sehat dan cerdas.",
    "Mewujudkan tata pemerintahan yang baik, bersih, transparan dan profesional.",
    "Melaksanakan pembangunan strategis nagari terintegrasi pariwisata.",
    "Meningkatkan ekonomi masyarakat dengan mengoptimalkan sumber daya alam dan industri rumah tangga.",
    "Menumbuhkembangkan kerja sama dengan berbagai pihak dalam meningkatkan kualitas dan prestasi masyarakat nagari.",
  ];
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10">
        <PageHeader eyebrow="Arah Pembangunan" title="Visi dan Misi Nagari Lambah" description="Arah pembangunan Pemerintah Nagari Lambah periode 2023–2031." />
        <div className="space-y-7">
          <SectionCard>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f0a000]">Visi</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0d3763]">
              “TERWUJUDNYA NAGARI LAMBAH SEJAHTERA, ADIL, TERAMPIL DAN UNGGUL MENUJU MASYARAKAT MADANI”
            </h2>
            <p className="mt-5 font-bold text-[#d78200]">Lambah Ber S.A.T.U untuk Madani</p>
            <p className="mt-2 italic text-slate-600">“Ka Hilia Sarangkuah Dayuang, Ka Mudiak Sa Antak Galah”</p>
          </SectionCard>
          <SectionCard>
            <h2 className="text-2xl font-black text-[#0d3763]">Misi</h2>
            <ol className="mt-5 space-y-4">
              {misi.map((x,i) => (
                <li key={x} className="flex gap-4 rounded-2xl bg-[#fff9e8] p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0a000] font-black text-white">{i+1}</span>
                  <span className="leading-7 text-slate-700">{x}</span>
                </li>
              ))}
            </ol>
          </SectionCard>
        </div>
      </section>
    </SiteShell>
  );
}
