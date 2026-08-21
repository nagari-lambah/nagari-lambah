import SiteShell from "../../../components/SiteShell";
import PageHeader from "../../../components/PageHeader";

export const metadata = {
  title:
    "Musyawarah Nagari Pertanggungjawaban Keuangan 2025 BUMNag Lambah Sakato",
  description:
    "Musyawarah Nagari Pertanggungjawaban Keuangan Tahun 2025 BUMNag Lambah Sakato di Nagari Lambah.",
};

export default function BeritaBUMNag2025Page() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Berita Nagari"
        title="Musyawarah Nagari Pertanggungjawaban Keuangan 2025 BUMNag Lambah Sakato"
        description="Evaluasi pengelolaan, penguatan tata kelola, dan pengembangan usaha BUMNag Lambah Sakato."
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
          <div className="h-[320px] w-full bg-slate-100 sm:h-[420px]">
            <img
              src="https://rangkiang.agamkab.go.id/storage/berita/C4gUw5EHuF8EwtZWrp5N2zIKRa5HE7tovjBQepVj.jpg"
              alt="Musyawarah Nagari Pertanggungjawaban Keuangan 2025 BUMNag Lambah Sakato"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8 border-b border-slate-200 pb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                BUMNag · Ekonomi Nagari
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-[#0d3763] sm:text-4xl">
                Musyawarah Nagari Pertanggungjawaban Keuangan 2025 BUMNag Lambah Sakato
              </h1>
              <p className="mt-4 text-sm text-slate-500">
                Nagari Lambah · 23 Juli 2026
              </p>
            </div>

            <div className="space-y-6 text-[17px] leading-8 text-slate-700">
              <p>
                Pemerintah Nagari Lambah bersama BUMNag Lambah Sakato
                melaksanakan <strong>Musyawarah Nagari Pertanggungjawaban
                Keuangan Tahun 2025</strong> di Aula Nagari Lambah.
              </p>
              <p>
                Musyawarah menjadi forum evaluasi bersama terhadap pengelolaan
                BUMNag sekaligus upaya memperkuat transparansi, akuntabilitas,
                dan tata kelola kelembagaan.
              </p>

              <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
                Perkembangan Keuangan Tahun 2025
              </h2>
              <p>
                BUMNag Lambah Sakato mencatat laba usaha sebesar
                <strong> Rp14.307.423</strong> pada Tahun Buku 2025. Nilai aset
                juga meningkat menjadi sekitar <strong>Rp391 juta</strong>.
              </p>

              <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
                Kesepakatan Tindak Lanjut
              </h2>
              <ol className="list-decimal space-y-3 pl-6">
                <li>Melengkapi struktur kepengurusan BUMNag.</li>
                <li>Melakukan penyesuaian AD/ART BUMNag.</li>
                <li>Meningkatkan administrasi dan pelaporan keuangan.</li>
                <li>Mengkaji peluang pengembangan unit usaha.</li>
                <li>Mengoptimalkan aset dan sumber daya BUMNag.</li>
              </ol>
            </div>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
