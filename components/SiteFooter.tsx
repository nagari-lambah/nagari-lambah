export default function SiteFooter() {
  return (
    <footer
      className="mt-16 text-white"
      style={{ backgroundColor: "#0d3763", color: "#ffffff" }}
    >
      <div className="mx-auto max-w-[1500px] px-6 py-10 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-black text-white">Nagari Lambah</h3>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Kecamatan Ampek Angkek · Kabupaten Agam
            </p>
          </div>

          <div>
            <h4
              className="font-extrabold"
              style={{ color: "#ffd12f" }}
            >
              Informasi
            </h4>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Informasi pemerintahan, pelayanan publik, pembangunan,
              kelembagaan, berita dan kegiatan Nagari Lambah.
            </p>
          </div>

          <div>
            <h4
              className="font-extrabold"
              style={{ color: "#ffd12f" }}
            >
              Pemerintah Nagari
            </h4>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Website resmi Pemerintah Nagari Lambah.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          © 2026 Pemerintah Nagari Lambah · Kecamatan Ampek Angkek · Kabupaten Agam
        </div>
      </div>
    </footer>
  );
}
