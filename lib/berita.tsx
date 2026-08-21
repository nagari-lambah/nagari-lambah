import React from "react";

export type Berita = {
  slug: string;
  judul: string;
  tanggal: string;
  kategori: string;
  penulis?: string;
  ringkasan: string;
  gambar?: string;
  isi: string;
};

export function formatTanggalIndonesia(value: string) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function renderInline(text: string) {
  const tokenRegex =
    /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={index}
          href={link[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#08728a] underline underline-offset-2"
        >
          {link[1]}
        </a>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function BeritaContent({ isi }: { isi: string }) {
  const lines = isi.replace(/\r/g, "").split("\n");
  const output: React.ReactNode[] = [];

  let numberedList: string[] = [];
  let bulletList: string[] = [];

  const flushLists = () => {
    if (numberedList.length) {
      output.push(
        <ol
          key={`numbered-${output.length}`}
          className="list-decimal space-y-2 pl-6"
        >
          {numberedList.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      numberedList = [];
    }

    if (bulletList.length) {
      output.push(
        <ul
          key={`bullet-${output.length}`}
          className="list-disc space-y-2 pl-6"
        >
          {bulletList.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      bulletList = [];
    }
  };

  lines.forEach((raw, index) => {
    const line = raw.trim();

    if (!line) {
      flushLists();
      return;
    }

    const numbered = line.match(/^\d+\.\s+(.*)$/);
    if (numbered) {
      if (bulletList.length) flushLists();
      numberedList.push(numbered[1]);
      return;
    }

    const bullet = line.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      if (numberedList.length) flushLists();
      bulletList.push(bullet[1]);
      return;
    }

    flushLists();

    if (line === "---") {
      output.push(
        <hr key={index} className="my-8 border-slate-200" />
      );
      return;
    }

    if (line.startsWith("### ")) {
      output.push(
        <h3 key={index} className="pt-3 text-xl font-bold text-[#0d3763]">
          {renderInline(line.slice(4))}
        </h3>
      );
      return;
    }

    if (line.startsWith("## ")) {
      output.push(
        <h2 key={index} className="pt-4 text-2xl font-bold text-[#0d3763]">
          {renderInline(line.slice(3))}
        </h2>
      );
      return;
    }

    if (line.startsWith("# ")) {
      output.push(
        <h2 key={index} className="pt-4 text-2xl font-bold text-[#0d3763]">
          {renderInline(line.slice(2))}
        </h2>
      );
      return;
    }

    if (line.startsWith("> ")) {
      output.push(
        <blockquote
          key={index}
          className="rounded-r-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4 italic text-slate-700"
        >
          {renderInline(line.slice(2))}
        </blockquote>
      );
      return;
    }

    output.push(<p key={index}>{renderInline(line)}</p>);
  });

  flushLists();

  return <>{output}</>;
}
