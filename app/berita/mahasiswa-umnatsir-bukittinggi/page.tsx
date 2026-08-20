import SiteShell from "../../../components/SiteShell";

const img1 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIlRiRE6q7bQTQCFW0_1DKVUOPXewCJzQNqEN1TSym2DpPfdlz9peYw1KeTBrFjrU4No26Ur2oKE9hCBqC5pg96O3gXnu3PK4V5Rl1nAmgx1gI3tX-kEl3srJ-PsJRcV6JmqcSNb7F0X3zUnpInLsMjKARvTH3-U5L9RybNHSi9HlK9pxq8n-PBUCvQmk/s1600/WhatsApp%20Image%202026-08-15%20at%2014.44.28.jpeg";
const img2 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmlCYC9oe8oj601psZGL9Gzflm6TOGhF8umMD6imMGVm9bdY53q16TPPIYQnQhLA6N1IYWAu3QSqVgFhzXlaHrwFLD9rjQJ7uxBThnoerUfruM1dfdBFzO9rJdrbAIc0f5JzlN1t0D75aHSn5PgFEmqY6TTrhGJNWpl2rqYECXxsR3OFkgpPoC7nNqlb0/s320/WhatsApp%20Image%202026-08-15%20at%2014.44.29.jpeg";

export default function BeritaDetailPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f0a000]">Berita Nagari</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-[#0d3763] sm:text-5xl">
            Mahasiswa UMNatsir Bukittinggi Laksanakan KKN di Nagari Lambah, Mengusung Semangat “Berkarya, Mengabdi dan Berdampak”
          </h1>
          <p className="mt-5 border-b border-slate-200 pb-6 text-sm font-bold text-slate-500">Nagari Lambah · 15 Agustus 2026</p>
          <img src={img1} alt="KKN UMNatsir di Nagari Lambah" className="mt-8 w-full rounded-3xl object-cover" />
          <div className="mt-8 space-y-6 text-[17px] leading-8 text-slate-700">
            <p>Pelaksanaan Kuliah Kerja Nyata (KKN) mahasiswa <strong>Universitas Mohammad Natsir (UMNatsir) Bukittinggi</strong> di Nagari Lambah diarahkan pada kegiatan yang mendukung <strong>digitalisasi pemerintahan dan penguatan keterbukaan informasi publik</strong>.</p>
            <p>Dalam kegiatan yang berlangsung <strong>20 Juli sampai dengan 20 Agustus 2026</strong>, mahasiswa terlibat dalam pembuatan website resmi Nagari Lambah serta membantu melengkapi dokumen-dokumen PPID Nagari Lambah.</p>
            <h2 className="text-2xl font-black text-[#0d3763]">Membangun Website Resmi Nagari Lambah</h2>
            <p>Website dirancang sebagai media informasi dan komunikasi antara Pemerintah Nagari Lambah dengan masyarakat serta menjadi langkah awal transformasi pelayanan publik berbasis teknologi informasi.</p>
            <h2 className="text-2xl font-black text-[#0d3763]">Melengkapi Dokumen PPID Nagari Lambah</h2>
            <p>Mahasiswa juga membantu penyiapan dan kelengkapan dokumen Pejabat Pengelola Informasi dan Dokumentasi (PPID) sehingga pengelolaan informasi publik dapat dipersiapkan secara lebih sistematis.</p>
            <h2 className="text-2xl font-black text-[#0d3763]">Mendukung Keterbukaan Informasi Publik</h2>
            <p>Penguatan PPID Nagari Lambah sejalan dengan Bimbingan Teknis Penerapan Keterbukaan Informasi Publik Berbasis Elektronik (KIPER) melalui Coaching Clinic PPID tingkat nagari yang diselenggarakan Dinas Komunikasi dan Informatika Kabupaten Agam.</p>
            <img src={img2} alt="Kegiatan mahasiswa KKN UMNatsir" className="mx-auto max-h-[600px] w-full rounded-3xl object-contain" />
            <h2 className="text-2xl font-black text-[#0d3763]">KKN yang Menghasilkan Karya dan Manfaat</h2>
            <p>Kegiatan mahasiswa KKN UMNatsir Bukittinggi di Nagari Lambah menjadi bentuk nyata semangat <strong>“Berkarya, Mengabdi dan Berdampak.”</strong></p>
            <blockquote className="rounded-2xl border-l-4 border-[#f0a000] bg-[#fff9e8] p-6 font-bold text-[#0d3763]">
              Berkarya melalui digitalisasi, mengabdi melalui pelayanan, dan berdampak melalui keterbukaan informasi untuk Nagari Lambah.
            </blockquote>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
