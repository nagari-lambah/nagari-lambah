import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";
import SectionCard from "../../components/SectionCard";

export default function KontakPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10">
        <PageHeader eyebrow="Hubungi Kami" title="Kontak Pemerintah Nagari Lambah" description="Informasi alamat dan layanan komunikasi Pemerintah Nagari Lambah." />
        <SectionCard>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#fff9e8] p-6">
              <p className="text-xs font-black uppercase tracking-wider text-[#f0a000]">Alamat</p>
              <p className="mt-2 leading-7 text-slate-700">Jorong Lambah Tangah, Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-xs font-black uppercase tracking-wider text-[#f0a000]">Email</p>
              <p className="mt-2 font-semibold">nagari.lambah@gmail.com</p>
              <p className="mt-5 text-xs font-black uppercase tracking-wider text-[#f0a000]">Telepon</p>
              <p className="mt-2 font-semibold">0895618462853</p>
            </div>
          </div>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
