import SiteShell from "../../../components/SiteShell";
import PageHeader from "../../../components/PageHeader";

export const metadata = {
  title:
    "Verifikasi RKP Nagari Lambah: Menajamkan Rencana Sebelum Menjadi Kegiatan",
  description:
    "Berita verifikasi dokumen RKP Nagari Lambah oleh Tim RKP, Tim Verifikasi, dan TPP Ampek Angkek.",
};

export default function VerifikasiRKPNagariLambahPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Berita Nagari"
        title="Verifikasi RKP Nagari Lambah: Menajamkan Rencana Sebelum Menjadi Kegiatan"
        description="Fasilitasi dan verifikasi dokumen RKP Nagari Lambah untuk memperkuat kualitas perencanaan sebelum masuk ke tahapan pelaksanaan."
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
          <div className="h-[320px] w-full bg-slate-100 sm:h-[420px]">
            <img
              src="https://rangkiang.agamkab.go.id/storage/berita/WrRGLjnNxYHELNmXcVuBDRZW27aZL8Mo81Of5xzz.png"
              alt="Verifikasi RKP Nagari Lambah"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8 border-b border-slate-200 pb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                Perencanaan Nagari
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-[#0d3763] sm:text-4xl">
                Verifikasi RKP Nagari Lambah: Menajamkan Rencana Sebelum Menjadi Kegiatan
              </h1>
              <p className="mt-4 text-sm text-slate-500">
                Nagari Lambah · 14 Agustus 2026
              </p>
            </div>

            <div className="space-y-6 text-[17px] leading-8 text-slate-700">
              <p>
                Tim RKP Nagari Lambah bersama Tim Verifikasi dan TPP Ampek Angkek
                melaksanakan fasilitasi dan verifikasi dokumen Rencana Kerja
                Pemerintah (RKP) Nagari di Aula Nagari Lambah, Jumat,
                14 Agustus 2026.
              </p>

              <p>
                Ketua Tim Penyusun RKP Nagari Lambah, <strong>Ferri Dharma</strong>,
                menyampaikan bahwa tahapan penyusunan RKP oleh Tim 11 telah
                selesai dan selanjutnya memasuki tahap verifikasi dokumen.
              </p>

              <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
                Memastikan Dokumen dan Rencana Lebih Siap
              </h2>
              <p>
                Verifikasi dilakukan untuk memastikan dokumen RKP dan kelengkapan
                pendukung telah memenuhi kebutuhan sebelum memasuki tahapan
                selanjutnya.
              </p>

              <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
                Menuju Musrenbang Nagari
              </h2>
              <p>
                Wali Nagari Lambah, <strong>Fiqri Farid</strong>, berharap
                seluruh tahapan berjalan sesuai rencana sehingga Musrenbang
                Nagari dapat dilaksanakan pada 20 Agustus 2026.
              </p>
            </div>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
