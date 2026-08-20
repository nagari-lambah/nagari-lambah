import Link from "next/link";
import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";

const berita = [
  {
    slug: "mahasiswa-umnatsir-bukittinggi",
    judul: "Mahasiswa UMNatsir Bukittinggi Laksanakan KKN di Nagari Lambah, Mengusung Semangat “Berkarya, Mengabdi dan Berdampak”",
    tanggal: "15 Agustus 2026",
    ringkasan: "Mahasiswa KKN UMNatsir Bukittinggi membantu pembangunan website resmi Nagari Lambah dan penataan dokumen PPID.",
    gambar: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIlRiRE6q7bQTQCFW0_1DKVUOPXewCJzQNqEN1TSym2DpPfdlz9peYw1KeTBrFjrU4No26Ur2oKE9hCBqC5pg96O3gXnu3PK4V5Rl1nAmgx1gI3tX-kEl3srJ-PsJRcV6JmqcSNb7F0X3zUnpInLsMjKARvTH3-U5L9RybNHSi9HlK9pxq8n-PBUCvQmk/s1600/WhatsApp%20Image%202026-08-15%20at%2014.44.28.jpeg",
  },
];

export default function BeritaPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1450px] px-4 py-14 sm:px-6 lg:px-10">
        <PageHeader eyebrow="Informasi Nagari" title="Berita Nagari Lambah" description="Informasi kegiatan, pemerintahan, pembangunan dan pelayanan publik Nagari Lambah." />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {berita.map((item) => (
            <article key={item.slug} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100"><img src={item.gambar} alt={item.judul} className="h-full w-full object-cover" /></div>
              <div className="p-6">
                <p className="text-sm font-bold text-[#f0a000]">{item.tanggal}</p>
                <h2 className="mt-3 text-xl font-black leading-7 text-[#0d3763]">{item.judul}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.ringkasan}</p>
                <Link href={`/berita/${item.slug}`} className="mt-6 inline-flex rounded-xl bg-[#f0a000] px-5 py-3 text-sm font-extrabold text-white">Baca Selengkapnya</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
