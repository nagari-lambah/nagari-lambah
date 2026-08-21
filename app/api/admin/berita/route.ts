import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

type Berita = {
  slug: string;
  judul: string;
  tanggal: string;
  kategori: string;
  penulis?: string;
  ringkasan: string;
  gambar?: string;
  isi: string;
};

const getDataPath = () => path.join(process.cwd(), "data", "berita.json");

async function ensureDataFile() {
  const file = getDataPath();
  const dir = path.dirname(file);
  await fs.mkdir(dir, { recursive: true });
  try {
    await fs.access(file);
  } catch {
    await fs.writeFile(file, "[]", "utf8");
  }
}

async function readItems(): Promise<Berita[]> {
  await ensureDataFile();
  const raw = await fs.readFile(getDataPath(), "utf8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error("data/berita.json harus berisi array JSON.");
  }
  return parsed as Berita[];
}

async function writeItems(items: Berita[]) {
  items.sort((a, b) => b.tanggal.localeCompare(a.tanggal));
  await fs.writeFile(getDataPath(), JSON.stringify(items, null, 2), "utf8");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function localOnly() {
  if (process.env.VERCEL) {
    return NextResponse.json(
      { error: "Admin lokal tidak dapat menyimpan perubahan di Vercel." },
      { status: 403 }
    );
  }
  return null;
}

async function saveImage(
  file: FormDataEntryValue | null,
  slug: string
): Promise<string | null> {
  if (!(file instanceof File) || file.size === 0) return null;

  const allowed = ["image/jpeg", "image/png", "image/webp"];
  if (!allowed.includes(file.type)) {
    throw new Error("Format gambar harus JPG, PNG, atau WEBP.");
  }
  if (file.size > 8 * 1024 * 1024) {
    throw new Error("Ukuran gambar maksimal 8 MB.");
  }

  const ext =
    file.type === "image/png" ? "png" :
    file.type === "image/webp" ? "webp" : "jpg";

  const dir = path.join(process.cwd(), "public", "image", "berita");
  await fs.mkdir(dir, { recursive: true });
  const name = `${slug}-${Date.now()}.${ext}`;
  const full = path.join(dir, name);
  await fs.writeFile(full, Buffer.from(await file.arrayBuffer()));
  return `/image/berita/${name}`;
}

export async function GET() {
  try {
    const items = await readItems();
    items.sort((a, b) => b.tanggal.localeCompare(a.tanggal));
    return NextResponse.json({
      ok: true,
      count: items.length,
      items,
      dataFile: "data/berita.json",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Gagal membaca data berita.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const blocked = localOnly();
  if (blocked) return blocked;

  try {
    const form = await request.formData();
    const judul = String(form.get("judul") || "").trim();
    const tanggal = String(form.get("tanggal") || "").trim();
    const kategori = String(form.get("kategori") || "").trim();
    const penulis = String(form.get("penulis") || "").trim();
    const ringkasan = String(form.get("ringkasan") || "").trim();
    const isi = String(form.get("isi") || "").trim();
    const gambarUrl = String(form.get("gambarUrl") || "").trim();

    if (!judul || !tanggal || !kategori || !ringkasan || !isi) {
      return NextResponse.json(
        { error: "Judul, tanggal, kategori, ringkasan, dan isi wajib diisi." },
        { status: 400 }
      );
    }

    const items = await readItems();
    let slug = slugify(judul);
    const original = slug;
    let n = 2;
    while (items.some((x) => x.slug === slug)) {
      slug = `${original}-${n++}`;
    }

    const uploaded = await saveImage(form.get("gambar"), slug);

    items.push({
      slug,
      judul,
      tanggal,
      kategori,
      penulis,
      ringkasan,
      gambar: uploaded || gambarUrl,
      isi,
    });

    await writeItems(items);

    return NextResponse.json({
      success: true,
      message: "Berita berhasil ditambahkan.",
      url: `/berita/${slug}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Gagal menyimpan berita." },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const blocked = localOnly();
  if (blocked) return blocked;

  try {
    const form = await request.formData();
    const slugOriginal = String(form.get("slugOriginal") || "").trim();
    const judul = String(form.get("judul") || "").trim();
    const tanggal = String(form.get("tanggal") || "").trim();
    const kategori = String(form.get("kategori") || "").trim();
    const penulis = String(form.get("penulis") || "").trim();
    const ringkasan = String(form.get("ringkasan") || "").trim();
    const isi = String(form.get("isi") || "").trim();
    const gambarUrl = String(form.get("gambarUrl") || "").trim();
    const hapusGambar = String(form.get("hapusGambar") || "") === "true";

    const items = await readItems();
    const index = items.findIndex((x) => x.slug === slugOriginal);
    if (index < 0) {
      return NextResponse.json({ error: "Berita tidak ditemukan." }, { status: 404 });
    }

    const uploaded = await saveImage(form.get("gambar"), slugOriginal);
    let gambar = items[index].gambar || "";
    if (hapusGambar) gambar = "";
    if (gambarUrl) gambar = gambarUrl;
    if (uploaded) gambar = uploaded;

    items[index] = {
      ...items[index],
      judul,
      tanggal,
      kategori,
      penulis,
      ringkasan,
      gambar,
      isi,
    };

    await writeItems(items);

    return NextResponse.json({
      success: true,
      message: "Perubahan berita berhasil disimpan.",
      url: `/berita/${slugOriginal}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Gagal mengedit berita." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const blocked = localOnly();
  if (blocked) return blocked;

  try {
    const { slug } = await request.json();
    const items = await readItems();
    const exists = items.some((x) => x.slug === slug);
    if (!exists) {
      return NextResponse.json({ error: "Berita tidak ditemukan." }, { status: 404 });
    }

    await writeItems(items.filter((x) => x.slug !== slug));
    return NextResponse.json({
      success: true,
      message: "Berita berhasil dihapus.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Gagal menghapus berita." },
      { status: 500 }
    );
  }
}
