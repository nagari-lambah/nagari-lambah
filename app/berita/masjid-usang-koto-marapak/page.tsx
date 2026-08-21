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
        eyebrow=<BeritaBeranda />
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
              Keberadaannya menjadi saksi perkembangan syiar Islam sekaligus
              menggambarkan kuatnya hubungan antara agama, adat, dan semangat
              gotong royong masyarakat Minangkabau.
            </p>

            <p>
              Berdasarkan inskripsi yang masih terdapat pada bagian kayu di bawah
              atap masjid, bangunan ini diperkirakan telah berdiri pada awal
              abad ke-20. Pada ukiran tersebut tercantum angka tahun 1319
              Hijriah, yang bertepatan sekitar tahun 1901–1902 Masehi.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
              Jejak Pembangunan dan Tokoh Ulama
            </h2>
            <p>
              Pembangunan Masjid Usang Koto Marapak dilakukan secara bersama-sama
              oleh masyarakat dengan semangat gotong royong. Inskripsi pada kayu
              bangunan menyebut dua tokoh ulama yang mempunyai peran penting,
              yaitu Majo Indo yang bergelar Tuanku Nan Sati dan Tuanku Nan Basa.
              Nama Faqih Palimo Sutan juga tercatat sebagai orang yang menulis
              atau mengukir catatan sejarah tersebut.
            </p>

            <blockquote className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4 italic text-slate-700">
              “Nan minta Majo Indo, Gala Tuanku nan Sati sarato Tuanku nan Basa. 1319.”
            </blockquote>

            <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
              Pusat Syiar Islam dan Kehidupan Masyarakat
            </h2>
            <p>
              Pada masa kejayaannya, masjid menjadi tempat salat berjamaah,
              belajar membaca Al-Qur&apos;an, mendalami ilmu agama, serta mendidik
              generasi muda. Masjid juga menjadi ruang musyawarah dan pertemuan
              masyarakat, sehingga fungsinya tidak hanya sebagai pusat ibadah,
              tetapi juga pusat pendidikan, sosial, dan kemasyarakatan.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
              Keunikan Arsitektur Tradisional Minangkabau
            </h2>
            <p>
              Bangunan utama menggunakan konstruksi kayu dengan konsep bangunan
              panggung. Bagian atap berbentuk limas bertingkat atau tumpang,
              salah satu ciri yang banyak ditemukan pada masjid tradisional
              Nusantara. Tradisi masyarakat juga mengenal keberadaan 20 jendela
              yang dikaitkan dengan 20 sifat wajib Allah.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
              Hidup Kembali sebagai Pusat Pendidikan
            </h2>
            <p>
              Pada masa sekarang, Masjid Usang Koto Marapak kembali dimanfaatkan
              untuk berbagai kegiatan pendidikan dan keagamaan, termasuk pondok
              tahfiz Al-Qur&apos;an, majelis taklim, pelatihan, pertemuan, serta
              pembelajaran seni dan tradisi adat.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-[#0d3763]">
              Warisan Agama, Adat, dan Gotong Royong
            </h2>
            <p>
              Masjid Usang Koto Marapak merupakan contoh pertemuan antara Islam,
              adat Minangkabau, keterampilan arsitektur tradisional, dan semangat
              gotong royong masyarakat. Inskripsi 1319 Hijriah menjadi salah
              satu bagian paling bernilai karena memberikan petunjuk mengenai
              tokoh, peran ulama, dan perkiraan masa pembangunan masjid.
            </p>

            <div className="mt-10 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
              <strong>Catatan sejarah:</strong> Penanggalan pembangunan terutama
              merujuk pada inskripsi angka 1319 Hijriah pada bagian kayu bangunan.
              Pemaknaan jumlah jendela dan tingkat atap merupakan tradisi serta
              interpretasi yang berkembang di tengah masyarakat dan masih dapat
              diperkaya melalui penelitian lanjutan.
            </div>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
