import SiteShell from "../../../components/SiteShell";
import PageHeader from "../../../components/PageHeader";

export const metadata = {
  title: "Masjid Usang Koto Marapak, Warisan Sejarah Nagari Lambah",
  description:
    "Sejarah Masjid Usang Koto Marapak, bangunan bersejarah di Nagari Lambah yang diperkirakan berdiri pada awal abad ke-20.",
};

export default function BeritaMasjidUsangKotoMarapak() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Berita Nagari"
        title="Masjid Usang Koto Marapak, Warisan Sejarah dan Syiar Islam di Nagari Lambah"
        description="Jejak sejarah, arsitektur tradisional Minangkabau, dan nilai keagamaan yang tetap hidup hingga hari ini."
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-8 border-b border-slate-200 pb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              Sejarah & Budaya
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-[#0d3763] sm:text-4xl">
              Masjid Usang Koto Marapak, Warisan Sejarah dan Syiar Islam di Nagari Lambah
            </h1>
            <p className="mt-4 text-sm text-slate-500">
              Nagari Lambah · 21 Agustus 2026
            </p>
          </div>

          <div className="space-y-6 text-[17px] leading-8 text-slate-700">
            <p>
              Masjid Usang Koto Marapak merupakan salah satu bangunan bersejarah
              yang memiliki nilai penting dalam perjalanan kehidupan keagamaan
              dan sosial masyarakat Nagari Lambah, Kecamatan Ampek Angkek.
            </p>
            <p>
              Berdasarkan inskripsi pada bagian kayu di bawah atap masjid,
              bangunan ini diperkirakan telah berdiri pada awal abad ke-20.
              Pada ukiran tersebut tercantum angka tahun 1319 Hijriah, sekitar
              tahun 1901–1902 Masehi.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
              Jejak Pembangunan dan Tokoh Ulama
            </h2>
            <p>
              Pembangunan masjid dilakukan secara bergotong royong. Inskripsi
              menyebut Majo Indo yang bergelar Tuanku Nan Sati dan Tuanku Nan
              Basa sebagai tokoh ulama yang berperan penting dalam pembangunan.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
              Pusat Syiar Islam dan Kehidupan Masyarakat
            </h2>
            <p>
              Masjid menjadi tempat salat berjamaah, belajar Al-Qur&apos;an,
              pendidikan agama, musyawarah, dan berbagai kegiatan sosial
              masyarakat.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
              Keunikan Arsitektur Tradisional Minangkabau
            </h2>
            <p>
              Bangunan utama menggunakan konstruksi kayu dengan konsep panggung
              dan atap limas bertingkat atau tumpang. Tradisi masyarakat juga
              mengenal keberadaan 20 jendela yang dikaitkan dengan 20 sifat
              wajib Allah.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
              Hidup Kembali sebagai Pusat Pendidikan
            </h2>
            <p>
              Pada masa sekarang bangunan ini dimanfaatkan untuk pondok tahfiz
              Al-Qur&apos;an, majelis taklim, pelatihan, pertemuan, serta
              pembelajaran seni dan tradisi adat.
            </p>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
