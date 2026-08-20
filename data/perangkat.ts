export type Pendidikan = {
  jenjang: string;
  institusi: string;
  masuk: string;
  lulus: string;
};

export type Jabatan = {
  lembaga?: string;
  posisi: string;
  lama: string;
  periode: string;
  uraian: string[];
};

export type Perangkat = {
  slug: string;
  nama: string;
  jabatan: string;
  tempatTanggalLahir: string;
  alamat: string;
  foto?: string;
  pendidikan?: Pendidikan[];
  riwayatJabatan?: Jabatan[];
};

export const perangkat: Perangkat[] = [
  {
    slug: "ferri-dharma",
    nama: "Ferri Dharma",
    jabatan: "Sekretaris Nagari",
    tempatTanggalLahir: "Bukittinggi, 19 Februari 1978",
    alamat:
      "Jorong Kotomarapak, Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/ferri-dharma.png",
    pendidikan: [
      {
        jenjang: "SMA / sederajat",
        institusi: "SMU Al-Kautsar Bandar Lampung",
        masuk: "1994",
        lulus: "1997",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "SMPN 3 Tanjung Alam",
        masuk: "1991",
        lulus: "1994",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Dasar Negeri 20 Bukittinggi",
        masuk: "1985",
        lulus: "1991",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "Wali Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
        posisi: "Kepala Urusan Pembangunan",
        lama: "6 tahun",
        periode: "Juni 2008 – Mei 2014",
        uraian: [
          "Mengkoordinasikan urusan pembangunan yang ada di Nagari Lambah, termasuk memfasilitasi pelaksanaan pembangunan.",
        ],
      },
      {
        posisi: "Kepala Jorong Kotomarapak",
        lama: "2 tahun",
        periode: "Juni 2014 – April 2016",
        uraian: [
          "Koordinator wilayah jorong sebagai perpanjangan tangan Wali Nagari Lambah.",
        ],
      },
      {
        lembaga:
          "Program Pembangunan Pemberdayaan Masyarakat Desa Provinsi Sumatera Barat",
        posisi: "Pendamping Lokal Desa",
        lama: "21 bulan",
        periode: "1 November 2015 – 31 Desember 2017",
        uraian: [
          "Melakukan fasilitasi perencanaan pembangunan dan keuangan Nagari/Desa.",
          "Melakukan fasilitasi pelaksanaan pembangunan Nagari/Desa.",
          "Melakukan fasilitasi pengelolaan keuangan nagari/desa dalam rangka pembangunan dan pemberdayaan masyarakat nagari/desa.",
          "Membuat laporan pelaksanaan tugas dan kegiatan pendampingan.",
        ],
      },
      {
        lembaga: "Wali Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
        posisi: "Sekretaris Nagari",
        lama: "Sejak Desember 2017",
        periode: "Desember 2017 – sekarang",
        uraian: [
          "Kepala Sekretariat Nagari Lambah.",
          "Mengoordinasikan urusan perencanaan.",
          "Mengoordinasikan tata usaha dan umum.",
          "Mengoordinasikan keuangan Nagari Lambah.",
        ],
      },
    ],
  },

  {
    slug: "lola-otrimira",
    nama: "Lola Otrimira",
    jabatan: "Kepala Urusan Perencanaan",
    tempatTanggalLahir: "Lambah, 17 Juli 1983",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/lola-otrimira.jpg",
    pendidikan: [
      {
        jenjang: "SMA / sederajat",
        institusi: "SMUN 1 Ampek Angkek",
        masuk: "1999",
        lulus: "2002",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "SLTPN 03 Ampek Angkek",
        masuk: "1996",
        lulus: "1999",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Dasar Negeri 05 Biaro",
        masuk: "1990",
        lulus: "1996",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Bendahara Penerimaan dan Pengeluaran",
        lama: "1 tahun",
        periode: "2004 – 2005",
        uraian: ["Mencatat dan membukukan penerimaan dan pengeluaran."],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Urusan Keuangan",
        lama: "12 tahun",
        periode: "2007 – 2019",
        uraian: [
          "Membantu sekretaris nagari dalam urusan pencatatan, pembukuan, pelaporan, dan penatausahaan keuangan di tingkat nagari.",
        ],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Urusan Perencanaan",
        lama: "2 tahun",
        periode: "2019 – 2021",
        uraian: [
          "Membantu sekretaris untuk mengkoordinasikan urusan perencanaan, menginventarisir data-data dalam rangka pembangunan, melakukan pemantauan dan evaluasi program, serta menyusun laporan di tingkat nagari.",
        ],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Seksi Pemerintahan",
        lama: "-",
        periode: "2021 – sekarang",
        uraian: [
          "Membantu wali nagari untuk melaksanakan tata praja pemerintahan, menyusun rencana regulasi, pembinaan masalah pertanahan, pembinaan ketentraman dan ketertiban, kependudukan, penataan dan pengelolaan wilayah, serta penataan dan pengelolaan profil nagari.",
        ],
      },
    ],
  },

  {
    slug: "fitrinaldi",
    nama: "Fitrinaldi",
    jabatan: "Kepala Seksi Kesejahteraan",
    tempatTanggalLahir: "Bukittinggi, 20 Juni 1985",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/fitrinaldi.png",
    pendidikan: [
      {
        jenjang: "SMA / sederajat",
        institusi: "SMAN 1 Ampek Angkek",
        masuk: "2000",
        lulus: "2003",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "SLTPN 3 Ampek Angkek",
        masuk: "1997",
        lulus: "2000",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Dasar Negeri 05 Biaro",
        masuk: "1991",
        lulus: "1997",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Pelayanan Staf",
        lama: "1 tahun",
        periode: "2018 – 2019",
        uraian: [
          "Melaksanakan pelayanan administrasi kepada masyarakat termasuk pengurusan surat menyurat dan kebutuhan administrasi di tingkat nagari.",
        ],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Seksi Kesejahteraan",
        lama: "-",
        periode: "2019 – sekarang",
        uraian: [
          "Membantu wali nagari melaksanakan pembangunan sarana dan prasarana, pembangunan bidang pendidikan, kesehatan, tugas sosialisasi serta motivasi masyarakat di bidang budaya, ekonomi, politik, kehidupan, dan karang taruna.",
        ],
      },
    ],
  },

  {
    slug: "nanda-wulan-sari",
    nama: "Nanda Wulan Sari",
    jabatan: "Kepala Urusan Keuangan",
    tempatTanggalLahir: "Bukittinggi, 18 Januari 1992",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/nanda-wulan-sari.jpg",
    pendidikan: [
      {
        jenjang: "Perguruan Tinggi",
        institusi: "STIE Haji Agus Salim Bukittinggi",
        masuk: "2009",
        lulus: "2012",
      },
      {
        jenjang: "SMA / sederajat",
        institusi: "SMAN 1 Ampek Angkek",
        masuk: "2006",
        lulus: "2009",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "SMP 1 Ampek Angkek",
        masuk: "2003",
        lulus: "2006",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Dasar Negeri 03 Koto Marapak",
        masuk: "1997",
        lulus: "2003",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "SDN 36 Payakumbuh",
        posisi: "Karyawan Tata Usaha",
        lama: "1 tahun",
        periode: "2012 – 2013",
        uraian: [],
      },
      {
        lembaga: "Koperasi Semangat Bung Hatta Bukittinggi",
        posisi: "Administrasi",
        lama: "1 tahun",
        periode: "2013 – 2014",
        uraian: [],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Urusan Pembangunan",
        lama: "6 tahun",
        periode: "2014 – 2020",
        uraian: [],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Urusan Keuangan",
        lama: "-",
        periode: "2020 – sekarang",
        uraian: [],
      },
    ],
  },

  {
    slug: "mega-lamoranedi",
    nama: "Mega Lamoranedi",
    jabatan: "Kepala Urusan Tata Usaha dan Umum",
    tempatTanggalLahir: "Bukittinggi, 2 September 1986",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/mega-lamoranedi.jpg",
  },

  {
    slug: "reni-yulia",
    nama: "Reni Yulia",
    jabatan: "Kepala Seksi Pemerintahan",
    tempatTanggalLahir: "Lambah, 17 Juli 1983",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/reni-yulia.jpg",
    pendidikan: [
      {
        jenjang: "SMA / sederajat",
        institusi: "SMUN 1 Ampek Angkek",
        masuk: "1999",
        lulus: "2002",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "SLTPN 03 Ampek Angkek",
        masuk: "1996",
        lulus: "1999",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Dasar Negeri 05 Biaro",
        masuk: "1990",
        lulus: "1996",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Bendahara Penerimaan dan Pengeluaran",
        lama: "1 tahun",
        periode: "2004 – 2005",
        uraian: ["Mencatat dan membukukan penerimaan dan pengeluaran."],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Urusan Keuangan",
        lama: "12 tahun",
        periode: "2007 – 2019",
        uraian: [
          "Membantu sekretaris nagari dalam urusan pencatatan, pembukuan, pelaporan, dan penatausahaan keuangan di tingkat nagari.",
        ],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Urusan Perencanaan",
        lama: "2 tahun",
        periode: "2019 – 2021",
        uraian: [
          "Membantu sekretaris untuk mengkoordinasikan urusan perencanaan, menginventarisir data-data dalam rangka pembangunan, melakukan pemantauan dan evaluasi program, serta menyusun laporan di tingkat nagari.",
        ],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Seksi Pemerintahan",
        lama: "-",
        periode: "2021 – sekarang",
        uraian: [
          "Membantu wali nagari untuk melaksanakan tata praja pemerintahan, menyusun rencana regulasi, pembinaan masalah pertanahan, pembinaan ketentraman dan ketertiban, kependudukan, penataan dan pengelolaan wilayah, serta penataan dan pengelolaan profil nagari.",
        ],
      },
    ],
  },

  {
    slug: "silvi-ermi-yusti",
    nama: "Silvi Ermi Yusti",
    jabatan: "Kepala Seksi Pelayanan",
    tempatTanggalLahir: "Koto Marapak, 24 September 1980",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/silvi-ermi-yusti.jpg",
    pendidikan: [
      {
        jenjang: "SMA / sederajat",
        institusi: "SMK 2 Kosgoro Bukittinggi",
        masuk: "1996",
        lulus: "1999",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "SLTP 3 Bukittinggi",
        masuk: "1993",
        lulus: "1996",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Dasar Negeri 03 Koto Hilalang",
        masuk: "1987",
        lulus: "1993",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Seksi Pelayanan",
        lama: "-",
        periode: "2021 – sekarang",
        uraian: [
          "Membantu wali nagari untuk melaksanakan penyuluhan dan motivasi terhadap hak dan kewajiban masyarakat, meningkatkan partisipasi masyarakat, pelestarian nilai-nilai sosial budaya masyarakat, keagamaan, dan ketenagakerjaan.",
        ],
      },
    ],
  },

  {
    slug: "adinda-fuji-ramayani",
    nama: "Adinda Fuji Ramayani",
    jabatan: "Pelayanan Staf",
    tempatTanggalLahir: "Bukittinggi, 10 Agustus 2002",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/adinda-fuji-ramayani.png",
    pendidikan: [
      {
        jenjang: "Perguruan Tinggi",
        institusi: "Universitas Negeri Padang",
        masuk: "2021",
        lulus: "2026",
      },
      {
        jenjang: "SMA / sederajat",
        institusi: "SMA Negeri 1 Ampek Angkek",
        masuk: "2018",
        lulus: "2021",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "MTsN 7 Agam",
        masuk: "2015",
        lulus: "2018",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Dasar Negeri 12 Koto Hilalang",
        masuk: "2009",
        lulus: "2015",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Pelayanan Staf",
        lama: "-",
        periode: "2026 – sekarang",
        uraian: [
          "Melaksanakan pelayanan administrasi kepada masyarakat termasuk membantu surat-menyurat di tingkat nagari.",
        ],
      },
    ],
  },

  {
    slug: "andri-august",
    nama: "Andri August",
    jabatan: "Kepala Kewilayahan",
    tempatTanggalLahir: "Koto Marapak, 17 Agustus 1977",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/andri-august.png",
    pendidikan: [
      {
        jenjang: "Perguruan Tinggi",
        institusi: "Universitas Nasional Jakarta",
        masuk: "2001",
        lulus: "2003",
      },
      {
        jenjang: "Perguruan Tinggi",
        institusi: "Akademi Pimpinan Perusahaan Jakarta",
        masuk: "1996",
        lulus: "1999",
      },
      {
        jenjang: "SMA / sederajat",
        institusi: "SMA Negeri 1 Bukittinggi",
        masuk: "1993",
        lulus: "1996",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "SMP 3 Bukittinggi",
        masuk: "1990",
        lulus: "1993",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Inpres Koto Marapak",
        masuk: "1984",
        lulus: "1990",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Kewilayahan",
        lama: "-",
        periode: "2016 – sekarang",
        uraian: [
          "Membantu wali nagari melaksanakan sistem pemerintahan di tingkat wilayah jorong.",
        ],
      },
    ],
  },

  {
    slug: "nofi-yuriki",
    nama: "Nofi Yuriki",
    jabatan: "Kepala Kewilayahan",
    tempatTanggalLahir: "Bukittinggi, 25 November 1980",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/nofi-yuriki.png",
  },

  {
    slug: "wisda-yenti",
    nama: "Wisda Yenti",
    jabatan: "Staf Penjaga dan K3 Kantor",
    tempatTanggalLahir: "Lambah Tangah, 23 Januari 1969",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/wisda-yenti.jpg",
    riwayatJabatan: [
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Staf Penjaga dan K3 Kantor",
        lama: "-",
        periode: "2017 – sekarang",
        uraian: ["Menjaga kebersihan kantor."],
      },
    ],
  },

  {
    slug: "fira-zulfiantika",
    nama: "Fira Zulfiantika",
    jabatan: "Sekretariat Staf Bamus",
    tempatTanggalLahir: "Pekan Kamis, 17 Juli 1999",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/fira-zulfiantika.jpg",
    pendidikan: [
      {
        jenjang: "SMA / sederajat",
        institusi: "SMKN 2 Bukittinggi",
        masuk: "2014",
        lulus: "2017",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "MTSN Panampuang",
        masuk: "2011",
        lulus: "2014",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Dasar Negeri 03 Koto Marapak",
        masuk: "2005",
        lulus: "2011",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "PT. Indo Lampung Perkasa",
        posisi: "Administrasi",
        lama: "1 tahun",
        periode: "2017 – 2018",
        uraian: ["Penghimpunan data operasional."],
      },
      {
        lembaga: "Yamaha Rizki Motor",
        posisi: "Kasir",
        lama: "1 tahun",
        periode: "2019 – 2020",
        uraian: ["Penjualan dan laporan."],
      },
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Staf Sekretariat Badan Permusyawaratan Nagari",
        lama: "-",
        periode: "2020 – sekarang",
        uraian: [
          "Membantu urusan administrasi Badan Permusyawaratan Nagari.",
        ],
      },
    ],
  },

  {
    slug: "refnaldi",
    nama: "Refnaldi",
    jabatan: "Kepala Kewilayahan",
    tempatTanggalLahir: "Lambah, 11 Juli 1975",
    alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/refnaldi.png",
    pendidikan: [
      {
        jenjang: "Perguruan Tinggi",
        institusi: "Politani Universitas Andalas Padang",
        masuk: "1994",
        lulus: "1997",
      },
      {
        jenjang: "SMA / sederajat",
        institusi: "SMA Negeri Ampek Angkek",
        masuk: "1991",
        lulus: "1994",
      },
      {
        jenjang: "SMP / sederajat",
        institusi: "SMPN Ampek Angkek",
        masuk: "1988",
        lulus: "1991",
      },
      {
        jenjang: "SD",
        institusi: "Sekolah Dasar Negeri Biaro",
        masuk: "1982",
        lulus: "1988",
      },
    ],
    riwayatJabatan: [
      {
        lembaga: "Pemerintah Nagari Lambah",
        posisi: "Kepala Kewilayahan",
        lama: "-",
        periode: "2011 – sekarang",
        uraian: [
          "Membantu wali nagari melaksanakan sistem pemerintahan di tingkat wilayah jorong.",
        ],
      },
    ],
  },
];
