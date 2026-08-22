import Image from "next/image";
import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";
import { galeriItems } from "../../components/galeriData";

export const metadata = {
  title: "Galeri Nagari Lambah",
  description: "Dokumentasi kegiatan, budaya, dan potensi Nagari Lambah.",
};

export default function GaleriPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Dokumentasi Nagari"
        title="Galeri Nagari Lambah"
        description="Dokumentasi kegiatan, budaya, dan potensi yang ada di Nagari Lambah."
      />

      <main className="bg-[#f6f8fb] px-4 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {galeriItems.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-slate-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <figcaption className="p-5">
                  <h2 className="text-lg font-black text-[#082f57]">
                    {item.title}
                  </h2>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
