import Image from "next/image";
import Link from "next/link";
import { galeriItems } from "./galeriData";

export default function GaleriBeranda() {
  return (
    <section id="galeri" className="bg-white px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-amber-600">
              Dokumentasi
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#082f57] sm:text-4xl">
              Galeri Nagari
            </h2>
          </div>

          <Link
            href="/galeri"
            className="font-bold text-[#082f57] transition hover:text-amber-600"
          >
            Lihat Galeri →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galeriItems.map((item) => (
            <Link
              key={item.src}
              href="/galeri"
              className="group overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-[#082f57]">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
