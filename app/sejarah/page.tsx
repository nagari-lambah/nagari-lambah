import SiteShell from "../../components/SiteShell";
import PageHeader from "../../components/PageHeader";
import SectionCard from "../../components/SectionCard";

export default function SejarahPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10">
        <PageHeader eyebrow="Profil Nagari" title="Sejarah Nagari Lambah" description="Jejak awal pembentukan Nagari Lambah dan kaitannya dengan perkembangan Luhak Agam." />
        <SectionCard>
          <div className="overflow-hidden rounded-3xl bg-slate-100">
            <img src="/image/sejarah-nagari-lambah.png" alt="Sejarah Nagari Lambah" className="h-auto w-full object-cover" />
          </div>
          <div className="mt-8 space-y-5 text-[17px] leading-8 text-slate-700">
            <p>Sejarah Nagari Lambah berawal dari Nagari Lamo Pariangan di Tanah Datar. Datuk Suri Dirajo memanggil empat orang pemuka masyarakat, yaitu Si Agam, Si Basa, Si Api dan Si Endah untuk membuka daerah baru sebagai tempat persawahan dan perkebunan.</p>
            <p>Keempat tokoh tersebut kemudian dikenal sebagai Rajo Agam, Rajo Basa, Rajo Api dan Rajo Endah. Mereka mendaki Gunung Marapi dan melihat pantulan cahaya pada permukaan air yang kemudian dikenal sebagai Camin Kapanehan.</p>
            <p>Rajo Agam tetap berada di sekitar Camin Kapanehan dan membuka kawasan lembah yang kemudian berkembang menjadi Lambah. Sementara itu Rajo Api menuju Biaro, Rajo Endah menuju Balai Gurah, dan Rajo Basa menuju kawasan Gantiang yang kemudian dikenal sebagai Panampuang.</p>
            <p>Dalam perkembangan adat Ampek Angkek dikenal Basa Ampek, yakni Pamuncak di Balai Gurah, Sulueh Bendang di Biaro, Alung Bunian di Lambah, dan Amban Puruek di Panampuang.</p>
          </div>
        </SectionCard>
      </section>
    </SiteShell>
  );
}
