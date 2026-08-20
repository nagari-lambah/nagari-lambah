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
    alamat: "Jorong Kotomarapak, Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
    foto: "/image/perangkat/ferri-dharma.png",
    pendidikan: [
      { jenjang: "SMA / sederajat", institusi: "SMU Al-Kautsar Bandar Lampung", masuk: "1994", lulus: "1997" },
      { jenjang: "SMP / sederajat", institusi: "SMPN 3 Tanjung Alam", masuk: "1991", lulus: "1994" },
      { jenjang: "SD", institusi: "Sekolah Dasar Negeri 20 Bukittinggi", masuk: "1985", lulus: "1991" },
    ],
    riwayatJabatan: [
      {
        lembaga: "Wali Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam",
        posisi: "Kepala Urusan Pembangunan",
        lama: "6 tahun",
        periode: "Juni 2008 – Mei 2014",
        uraian: ["Mengkoordinasikan urusan pembangunan di Nagari Lambah termasuk memfasilitasi pembangunan."],
      },
      {
        posisi: "Kepala Jorong Kotomarapak",
        lama: "2 tahun",
        periode: "Juni 2014 – April 2016",
        uraian: ["Koordinator wilayah jorong sebagai perpanjangan tangan Wali Nagari Lambah."],
      },
      {
        lembaga: "Program Pembangunan Pemberdayaan Masyarakat Desa Provinsi Sumatera Barat",
        posisi: "Pendamping Lokal Desa",
        lama: "21 bulan",
        periode: "1 November 2015 – 31 Desember 2017",
        uraian: [
          "Melakukan fasilitasi perencanaan pembangunan dan keuangan nagari/desa.",
          "Melakukan fasilitasi pelaksanaan pembangunan nagari/desa.",
          "Melakukan fasilitasi pengelolaan keuangan nagari/desa dalam rangka pembangunan dan pemberdayaan masyarakat.",
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
  { slug: "lola-otrimira", nama: "Lola Otrimira", jabatan: "Kepala Urusan Perencanaan", tempatTanggalLahir: "Lambah, 17 Juli 1983", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "nanda-wulan-sari", nama: "Nanda Wulan Sari", jabatan: "Kepala Urusan Keuangan", tempatTanggalLahir: "Bukittinggi, 18 Januari 1992", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "mega-lamoranedi", nama: "Mega Lamoranedi", jabatan: "Kepala Urusan Tata Usaha dan Umum", tempatTanggalLahir: "Bukittinggi, 2 September 1986", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "reni-yulia", nama: "Reni Yulia", jabatan: "Kepala Seksi Pemerintahan", tempatTanggalLahir: "Lambah, 17 Juli 1983", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "silvi-ermi-yusti", nama: "Silvi Ermi Yusti", jabatan: "Kepala Seksi Pelayanan", tempatTanggalLahir: "Koto Marapak, 24 September 1980", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "fitrinaldi", nama: "Fitrinaldi", jabatan: "Kepala Seksi Kesejahteraan", tempatTanggalLahir: "Bukittinggi, 20 Juni 1985", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "adinda-fuji-ramayani", nama: "Adinda Fuji Ramayani", jabatan: "Pelayanan Staf", tempatTanggalLahir: "Bukittinggi, 10 Agustus 2002", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "ndri-august", nama: "Ndri August", jabatan: "Kepala Kewilayahan", tempatTanggalLahir: "Koto Marapak, 17 Agustus 1977", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "nofi-yuriki", nama: "Nofi Yuriki", jabatan: "Kepala Kewilayahan", tempatTanggalLahir: "Bukittinggi, 25 November 1980", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "refnaldi", nama: "Refnaldi", jabatan: "Kepala Kewilayahan", tempatTanggalLahir: "Lambah, 11 Juli 1975", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "fira-zulfiantika", nama: "Fira Zulfiantika", jabatan: "Sekretariat Staf Bamus", tempatTanggalLahir: "Pekan Kamis, 17 Juli 1999", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
  { slug: "wisda-yenti", nama: "Wisda Yenti", jabatan: "Staf Penjaga dan K3 Kantor", tempatTanggalLahir: "Lambah Tangah, 23 Januari 1969", alamat: "Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam" },
];
