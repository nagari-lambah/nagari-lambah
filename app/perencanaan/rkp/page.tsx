import SiteShell from "../../../components/SiteShell";
import PageHeader from "../../../components/PageHeader";
import SectionCard from "../../../components/SectionCard";

export default function Page() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10">
        <PageHeader eyebrow="Perencanaan" title="RKP Nagari" description="Dokumen Rencana Kerja Pemerintah Nagari Lambah." />
        <SectionCard>
          <div className="rounded-2xl bg-[#fff9e8] p-6">
            <p className="leading-8 text-slate-700">
              Maaf, konten halaman ini sedang dalam proses pembangunan.
            </p>
          </div>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
