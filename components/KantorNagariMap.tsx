import Image from "next/image";

export default function KantorNagariMap() {
  return (
    <a
      href="https://www.google.com/maps/search/?api=1&query=Kantor+Wali+Nagari+Lambah+Ampek+Angkek+Agam"
      target="_blank"
      rel="noopener noreferrer"
      title="Buka lokasi Kantor Wali Nagari Lambah di Google Maps"
      className="group relative block overflow-hidden rounded-[30px] bg-slate-200 shadow-lg"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src="/image/kantor-nagari-lambah.png"
          alt="Kantor Wali Nagari Lambah"
          fill
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl bg-white/95 px-4 py-3 text-sm font-black text-[#0d3763] shadow-lg transition group-hover:bg-amber-300 sm:text-base">
        <span aria-hidden="true">📍</span>
        <span>Buka di Google Maps</span>
      </div>
    </a>
  );
}
