export type Lembaga = {
  slug: string;
  nama: string;
  singkat: string;
  deskripsi: string;
  strukturImage: string;
  fungsi: string[];
  kedudukan: string[];
  manfaat: string[];
};

export const lembaga: Lembaga[] = [
  {
    "slug": "bamus",
    "nama": "Badan Permusyawaratan (BAMUS) Nagari Lambah",
    "singkat": "BAMUS",
    "deskripsi": "Badan Permusyawaratan Nagari adalah lembaga perwakilan masyarakat di tingkat nagari yang berfungsi sebagai mitra Pemerintah Nagari dalam penyelenggaraan pemerintahan.",
    "fungsi": [
      "Membahas dan menyepakati peraturan nagari bersama Wali Nagari.",
      "Mengawasi penyelenggaraan pemerintahan nagari, program, dan penggunaan anggaran.",
      "Menampung dan menyampaikan aspirasi masyarakat.",
      "Menjadi forum musyawarah dan konsensus.",
      "Memberikan masukan dan rekomendasi terhadap kinerja Pemerintah Nagari."
    ],
    "kedudukan": [
      "Berdiri sejajar dengan Pemerintah Nagari sesuai fungsi kelembagaan.",
      "Anggota berasal dari unsur masyarakat melalui mekanisme yang berlaku.",
      "Bekerja sama dengan KAN dan lembaga adat.",
      "Menjadi penghubung aspirasi masyarakat dengan Pemerintah Nagari."
    ],
    "manfaat": [
      "Memperkuat demokrasi lokal.",
      "Mendorong transparansi dan akuntabilitas.",
      "Meningkatkan partisipasi masyarakat.",
      "Mendorong kebijakan sesuai kebutuhan warga."
    ],
    "strukturImage": "/image/lembaga/bamus/struktur-bamus.png"
  },
  {
    "slug": "lpmn",
    "nama": "Lembaga Pemberdayaan Masyarakat Nagari Lambah",
    "singkat": "LPMN",
    "deskripsi": "Lembaga Pemberdayaan Masyarakat Nagari Lambah merupakan lembaga kemasyarakatan yang menjadi mitra Pemerintah Nagari dalam mendorong partisipasi masyarakat dalam pembangunan dan pemberdayaan.",
    "fungsi": [
      "Mendorong partisipasi masyarakat dalam pembangunan nagari.",
      "Menampung dan menyampaikan aspirasi masyarakat.",
      "Mengidentifikasi kebutuhan dan permasalahan masyarakat.",
      "Mengembangkan potensi nagari.",
      "Membantu perencanaan pembangunan partisipatif.",
      "Membangun kerja sama dengan Pemerintah Nagari dan unsur masyarakat."
    ],
    "kedudukan": [
      "Menjadi wadah partisipasi masyarakat dalam pembangunan.",
      "Menjadi mitra Pemerintah Nagari dalam pemberdayaan masyarakat.",
      "Mendorong prakarsa dan swadaya masyarakat."
    ],
    "manfaat": [
      "Meningkatkan kemandirian masyarakat.",
      "Menguatkan gotong royong.",
      "Mendorong pembangunan berbasis kebutuhan dan potensi lokal."
    ],
    "strukturImage": "/image/lembaga/lpmn/struktur-lpmn.jpg"
  },
  {
    "slug": "bundo-kanduang",
    "nama": "Bundo Kanduang Nagari Lambah",
    "singkat": "Bundo Kanduang",
    "deskripsi": "Lembaga Bundo Kanduang Nagari merupakan wadah perempuan Minangkabau yang berperan sebagai penjaga adat, pengayom keluarga, dan mitra strategis niniak mamak dalam pembangunan nagari.",
    "fungsi": [
      "Menjaga kelestarian adat dan budaya Minangkabau.",
      "Memperkuat ketahanan keluarga dan pembinaan generasi muda.",
      "Mendukung pembangunan nagari di bidang sosial, budaya, pendidikan, dan pemberdayaan.",
      "Menjadi teladan moral dalam kehidupan bermasyarakat."
    ],
    "kedudukan": [
      "Bermitra dengan niniak mamak, KAN, Pemerintah Nagari, dan organisasi perempuan.",
      "Menjadi unsur penting dalam pelestarian nilai adat Minangkabau."
    ],
    "manfaat": [
      "Menguatkan peran perempuan dalam kehidupan sosial dan adat.",
      "Mendukung pendidikan moral generasi muda.",
      "Menjaga kesinambungan nilai adat."
    ],
    "strukturImage": "/image/lembaga/bundo-kanduang/struktur-bundo-kanduang.png"
  },
  {
    "slug": "posbakum",
    "nama": "Pos Bantuan Hukum Nagari Lambah",
    "singkat": "POSBAKUM",
    "deskripsi": "Pos Bantuan Hukum Nagari merupakan unit layanan yang membantu masyarakat memperoleh informasi, konsultasi, dan akses bantuan hukum.",
    "fungsi": [
      "Memberikan informasi hak, kewajiban, dan prosedur hukum.",
      "Menyediakan konsultasi hukum.",
      "Membantu penyusunan dokumen, pendampingan, atau mediasi sesuai kewenangan.",
      "Melaksanakan pendidikan dan penyuluhan hukum."
    ],
    "kedudukan": [
      "Berkoordinasi dengan Pemerintah Nagari dan unsur masyarakat.",
      "Dapat bekerja sama dengan lembaga bantuan hukum, perguruan tinggi, dan profesi hukum.",
      "Menjadi jembatan masyarakat dengan layanan hukum formal."
    ],
    "manfaat": [
      "Mendekatkan akses keadilan.",
      "Membantu masyarakat yang membutuhkan pendampingan.",
      "Mendorong penyelesaian masalah secara damai dan sesuai hukum.",
      "Meningkatkan kesadaran hukum."
    ],
    "strukturImage": "/image/lembaga/posbakum/struktur-posbakum.jpg"
  },
  {
    "slug": "ppid",
    "nama": "Pejabat Pengelola Informasi dan Dokumentasi Nagari Lambah",
    "singkat": "PPID",
    "deskripsi": "PPID Nagari bertugas mengelola, menyimpan, mendokumentasikan, dan memberikan pelayanan informasi publik kepada masyarakat.",
    "fungsi": [
      "Menyediakan akses informasi kebijakan, program, kegiatan, dan anggaran nagari.",
      "Mengelola dokumentasi dan arsip informasi publik.",
      "Melakukan klasifikasi informasi sesuai ketentuan.",
      "Memberikan edukasi mengenai hak memperoleh informasi publik.",
      "Menangani permohonan informasi dan keberatan sesuai prosedur."
    ],
    "kedudukan": [
      "Berada dalam lingkungan Pemerintah Nagari dan berkoordinasi dengan perangkat nagari.",
      "Terhubung dengan sistem PPID pada tingkat pemerintahan yang lebih tinggi.",
      "Mendukung keterbukaan informasi dan akuntabilitas Pemerintah Nagari."
    ],
    "manfaat": [
      "Meningkatkan transparansi.",
      "Memperkuat akuntabilitas.",
      "Memudahkan partisipasi masyarakat.",
      "Meningkatkan kepercayaan publik."
    ],
    "strukturImage": "/image/lembaga/ppid/struktur-organisasi.png"
  },
  {
    "slug": "kadarkum",
    "nama": "Kelompok Keluarga Sadar Hukum Nagari Lambah",
    "singkat": "KADARKUM",
    "deskripsi": "Kelompok Keluarga Sadar Hukum merupakan wadah masyarakat untuk meningkatkan pengetahuan, pemahaman, dan kesadaran hukum keluarga serta warga nagari.",
    "fungsi": [
      "Memberikan penyuluhan mengenai hak, kewajiban, dan aturan hukum.",
      "Mendorong keluarga menjadi teladan dalam menaati hukum dan norma sosial.",
      "Mengedukasi masyarakat untuk mencegah pelanggaran hukum.",
      "Membantu warga memahami prosedur penyelesaian masalah secara sah.",
      "Menguatkan keseimbangan antara adat Minangkabau dan hukum nasional."
    ],
    "kedudukan": [
      "Dibina melalui Pemerintah Nagari dan program penyuluhan hukum.",
      "Berkoordinasi dengan BAMUS, KAN, lembaga pendidikan, dan organisasi masyarakat."
    ],
    "manfaat": [
      "Meningkatkan kesadaran hukum keluarga.",
      "Mengurangi konflik sosial.",
      "Mendorong partisipasi masyarakat.",
      "Membangun budaya hukum yang tertib dan harmonis."
    ],
    "strukturImage": "/image/lembaga/kadarkum/struktur-kadarkum.jpg"
  },
  {
    "slug": "karang-taruna",
    "nama": "Karang Taruna Nagari Lambah",
    "singkat": "Karang Taruna",
    "deskripsi": "Karang Taruna Nagari adalah organisasi kepemudaan yang menjadi wadah pembinaan, pengembangan, dan pemberdayaan generasi muda.",
    "fungsi": [
      "Membina generasi muda yang berkarakter dan peduli sosial.",
      "Mengembangkan kegiatan sosial-ekonomi dan kewirausahaan pemuda.",
      "Melaksanakan kegiatan sosial dan kemasyarakatan.",
      "Mengembangkan seni, budaya, dan olahraga.",
      "Mendukung program pembangunan Pemerintah Nagari."
    ],
    "kedudukan": [
      "Berkoordinasi dengan Pemerintah Nagari.",
      "Beranggotakan pemuda-pemudi nagari sesuai ketentuan organisasi.",
      "Dapat bekerja sama dengan BAMUS, KAN, PKK, dan lembaga lainnya."
    ],
    "manfaat": [
      "Meningkatkan partisipasi pemuda.",
      "Mengurangi permasalahan sosial melalui kegiatan positif.",
      "Menghidupkan budaya lokal.",
      "Mendorong inovasi dan kreativitas pemuda."
    ],
    "strukturImage": "/image/lembaga/karang-taruna/struktur-karang-taruna.jpg"
  },
  {
    "slug": "permata",
    "nama": "Persatuan Majelis Taklim Nagari Lambah",
    "singkat": "PERMATA",
    "deskripsi": "Persatuan Majelis Taklim Nagari merupakan wadah koordinasi dan kebersamaan majelis taklim untuk memperkuat dakwah, pembinaan keagamaan, dan ukhuwah Islamiyah.",
    "fungsi": [
      "Mengoordinasikan kegiatan dakwah dan pengajian.",
      "Menguatkan pembinaan keagamaan masyarakat.",
      "Memberikan ruang bagi perempuan dan generasi muda dalam kegiatan keagamaan.",
      "Memperkuat ukhuwah Islamiyah.",
      "Mendukung program Pemerintah Nagari di bidang keagamaan, sosial, dan pendidikan."
    ],
    "kedudukan": [
      "Berkoordinasi dengan Pemerintah Nagari, KAN, dan lembaga keagamaan.",
      "Dapat bekerja sama dengan MUI, KUA, dan organisasi Islam."
    ],
    "manfaat": [
      "Meningkatkan kualitas keimanan dan ketakwaan.",
      "Mendorong kehidupan sosial yang harmonis.",
      "Mendukung pencegahan masalah sosial melalui pembinaan agama.",
      "Memperkuat peran perempuan dalam kegiatan keagamaan dan sosial."
    ],
    "strukturImage": "/image/lembaga/permata/struktur-permata.jpg"
  },
  {
    "slug": "kan",
    "nama": "Kerapatan Adat Nagari Lambah",
    "singkat": "KAN",
    "deskripsi": "Kerapatan Adat Nagari merupakan lembaga adat di tingkat nagari yang berfungsi menjaga, melestarikan, dan mengawal nilai-nilai adat Minangkabau.",
    "fungsi": [
      "Menjaga dan melestarikan aturan serta nilai adat Minangkabau.",
      "Menjadi forum musyawarah dan penyelesaian sengketa adat.",
      "Menjadi mitra Pemerintah Nagari agar kebijakan selaras dengan nilai adat.",
      "Membina generasi muda mengenai adat dan sopan santun.",
      "Menguatkan identitas Nagari Lambah."
    ],
    "kedudukan": [
      "Menjalankan fungsi pada ranah adat dan berkoordinasi dengan Pemerintah Nagari.",
      "Beranggotakan unsur ninik mamak, alim ulama, cadiak pandai, dan tokoh masyarakat sesuai ketentuan adat.",
      "Berkoordinasi dengan BAMUS dan lembaga sosial lainnya."
    ],
    "manfaat": [
      "Menjaga keharmonisan sosial.",
      "Melestarikan budaya Minangkabau.",
      "Menguatkan identitas nagari.",
      "Mendukung penyelenggaraan pemerintahan yang selaras dengan nilai adat."
    ],
    "strukturImage": "/image/lembaga/kan/struktur-kan.png"
  }
];

export function getLembaga(slug: string) {
  return lembaga.find((item) => item.slug === slug);
}
