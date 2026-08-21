"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { BeritaContent } from "../../../lib/berita";

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

const kategoriOptions = [
  "Kegiatan Nagari",
  "Pemerintahan",
  "Perencanaan Nagari",
  "PPID",
  "BUMNag",
  "Sejarah & Budaya",
  "PKK",
  "Pengumuman",
  "Pembangunan",
];

const kosong = {
  slugOriginal: "",
  judul: "",
  tanggal: "",
  kategori: "Kegiatan Nagari",
  penulis: "",
  ringkasan: "",
  gambarUrl: "",
  isi: "",
  hapusGambar: false,
};

export default function AdminBeritaPage() {
  const [items, setItems] = useState<Berita[]>([]);
  const [form, setForm] = useState(kosong);
  const [mode, setMode] = useState<"tambah" | "edit">("tambah");
  const [cari, setCari] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState("Memuat data berita...");
  const [error, setError] = useState("");
  const [pesan, setPesan] = useState("");
  const [preview, setPreview] = useState(true);

  const formRef = useRef<HTMLFormElement>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  async function muatBerita() {
    setError("");
    setApiStatus("Memuat data berita...");
    try {
      const response = await fetch("/api/admin/berita", { cache: "no-store" });
      const text = await response.text();
      let result: any;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(`API bukan JSON. Respons: ${text.slice(0, 120)}`);
      }

      if (!response.ok) {
        throw new Error(result.error || `API error ${response.status}`);
      }

      setItems(Array.isArray(result.items) ? result.items : []);
      setApiStatus(
        `Terhubung ke data/berita.json · ${result.count ?? result.items?.length ?? 0} berita`
      );
    } catch (err) {
      setItems([]);
      const msg = err instanceof Error ? err.message : "Gagal membaca berita.";
      setError(msg);
      setApiStatus("API berita bermasalah");
    }
  }

  useEffect(() => {
    void muatBerita();
  }, []);

  const hasil = useMemo(() => {
    const q = cari.toLowerCase().trim();
    if (!q) return items;
    return items.filter((x) =>
      `${x.judul} ${x.kategori} ${x.penulis || ""}`.toLowerCase().includes(q)
    );
  }, [items, cari]);

  function resetForm() {
    setForm(kosong);
    setMode("tambah");
    setPesan("");
    setError("");
    formRef.current?.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function edit(item: Berita) {
    setMode("edit");
    setForm({
      slugOriginal: item.slug,
      judul: item.judul,
      tanggal: item.tanggal,
      kategori: item.kategori,
      penulis: item.penulis || "",
      ringkasan: item.ringkasan,
      gambarUrl: "",
      isi: item.isi,
      hapusGambar: false,
    });
    setPesan("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function wrap(before: string, after = before, placeholder = "teks") {
    const el = editorRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = form.isi.slice(start, end) || placeholder;
    const next =
      form.isi.slice(0, start) + before + selected + after + form.isi.slice(end);
    setForm((p) => ({ ...p, isi: next }));
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + before.length, start + before.length + selected.length);
    });
  }

  function prefix(prefixText: string, fallback: string) {
    const el = editorRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = form.isi.slice(start, end) || fallback;
    const transformed = selected
      .split("\n")
      .map((line) => `${prefixText}${line}`)
      .join("\n");
    const next = form.isi.slice(0, start) + transformed + form.isi.slice(end);
    setForm((p) => ({ ...p, isi: next }));
  }

  async function simpan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setPesan("");

    try {
      const data = new FormData(event.currentTarget);
      data.set("slugOriginal", form.slugOriginal);
      data.set("hapusGambar", String(form.hapusGambar));
      data.set("isi", form.isi);

      const response = await fetch("/api/admin/berita", {
        method: mode === "edit" ? "PUT" : "POST",
        body: data,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Gagal menyimpan.");

      setPesan(result.message || "Berita berhasil disimpan.");
      resetForm();
      setPesan(result.message || "Berita berhasil disimpan.");
      await muatBerita();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan berita.");
    } finally {
      setLoading(false);
    }
  }

  async function hapus(item: Berita) {
    if (!confirm(`Hapus berita:\n${item.judul}?`)) return;
    setLoading(true);
    try {
      const response = await fetch("/api/admin/berita", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: item.slug }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Gagal menghapus.");
      setPesan("Berita berhasil dihapus.");
      await muatBerita();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menghapus berita.");
    } finally {
      setLoading(false);
    }
  }

  const Tool = ({
    children,
    onClick,
    title,
  }: {
    children: React.ReactNode;
    onClick: () => void;
    title: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50"
    >
      {children}
    </button>
  );

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[28px] bg-gradient-to-br from-[#082f57] to-[#08728a] p-7 text-white shadow-xl sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
            Admin Berita V3.1
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            Kelola Berita Nagari Lambah
          </h1>
          <p className="mt-3 text-slate-200">{apiStatus}</p>
        </div>

        {error ? (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
            <p className="font-black">Ada masalah:</p>
            <p className="mt-1">{error}</p>
            <button
              type="button"
              onClick={() => void muatBerita()}
              className="mt-3 rounded-lg bg-red-700 px-4 py-2 font-bold text-white"
            >
              Coba Muat Ulang
            </button>
          </div>
        ) : null}

        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <form
            ref={formRef}
            onSubmit={simpan}
            className="space-y-6 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-amber-600">
                  {mode === "edit" ? "Mode Edit" : "Berita Baru"}
                </p>
                <h2 className="text-2xl font-black text-[#082f57]">
                  {mode === "edit" ? "Edit Berita" : "Tambah Berita"}
                </h2>
              </div>
              {mode === "edit" ? (
                <button type="button" onClick={resetForm} className="rounded-lg border px-3 py-2 font-bold">
                  Batal Edit
                </button>
              ) : null}
            </div>

            <input type="hidden" name="slugOriginal" value={form.slugOriginal} readOnly />

            <div>
              <label className="mb-2 block font-bold text-[#082f57]">Judul Berita *</label>
              <input
                name="judul"
                required
                value={form.judul}
                onChange={(e) => setForm((p) => ({ ...p, judul: e.target.value }))}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-bold text-[#082f57]">Tanggal *</label>
                <input
                  name="tanggal"
                  type="date"
                  required
                  value={form.tanggal}
                  onChange={(e) => setForm((p) => ({ ...p, tanggal: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>
              <div>
                <label className="mb-2 block font-bold text-[#082f57]">Kategori *</label>
                <select
                  name="kategori"
                  value={form.kategori}
                  onChange={(e) => setForm((p) => ({ ...p, kategori: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
                >
                  {kategoriOptions.map((x) => <option key={x}>{x}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block font-bold text-[#082f57]">Penulis</label>
              <input
                name="penulis"
                value={form.penulis}
                onChange={(e) => setForm((p) => ({ ...p, penulis: e.target.value }))}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold text-[#082f57]">Ringkasan *</label>
              <textarea
                name="ringkasan"
                required
                rows={4}
                value={form.ringkasan}
                onChange={(e) => setForm((p) => ({ ...p, ringkasan: e.target.value }))}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-bold text-[#082f57]">Upload Gambar</label>
                <input name="gambar" type="file" accept="image/png,image/jpeg,image/webp" />
              </div>
              <div>
                <label className="mb-2 block font-bold text-[#082f57]">URL Gambar</label>
                <input
                  name="gambarUrl"
                  type="url"
                  value={form.gambarUrl}
                  onChange={(e) => setForm((p) => ({ ...p, gambarUrl: e.target.value }))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="font-bold text-[#082f57]">Isi Berita *</label>
                <button type="button" onClick={() => setPreview(!preview)} className="rounded-lg border px-3 py-2 text-xs font-bold">
                  {preview ? "Tutup Preview" : "Preview"}
                </button>
              </div>

              <div className="flex flex-wrap gap-2 rounded-t-xl border border-b-0 bg-slate-50 p-2">
                <Tool title="Tebal" onClick={() => wrap("**", "**", "teks tebal")}>B</Tool>
                <Tool title="Miring" onClick={() => wrap("*", "*", "teks miring")}>I</Tool>
                <Tool title="Subjudul" onClick={() => prefix("## ", "Subjudul")}>H2</Tool>
                <Tool title="Subjudul kecil" onClick={() => prefix("### ", "Subjudul kecil")}>H3</Tool>
                <Tool title="Kutipan" onClick={() => prefix("> ", "Kutipan")}>❝</Tool>
                <Tool title="Bullet" onClick={() => prefix("- ", "Daftar")}>• List</Tool>
              </div>

              <textarea
                ref={editorRef}
                name="isi"
                required
                rows={22}
                value={form.isi}
                onChange={(e) => setForm((p) => ({ ...p, isi: e.target.value }))}
                className="w-full rounded-b-xl border border-slate-300 px-4 py-4 leading-7"
              />
            </div>

            {preview ? (
              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="mb-4 font-black text-[#08728a]">PREVIEW</p>
                <div className="space-y-5 leading-8 text-slate-700">
                  <BeritaContent isi={form.isi} />
                </div>
              </div>
            ) : null}

            {pesan ? (
              <div className="rounded-xl bg-emerald-50 p-4 font-bold text-emerald-800">
                ✓ {pesan}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#082f57] px-6 py-4 text-lg font-black text-white"
            >
              {loading ? "Memproses..." : mode === "edit" ? "Simpan Perubahan" : "Simpan Berita Baru"}
            </button>
          </form>

          <section className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-amber-600">Data Berita</p>
                <h2 className="text-2xl font-black text-[#082f57]">Daftar Berita</h2>
              </div>
              <button
                type="button"
                onClick={() => void muatBerita()}
                className="rounded-xl border border-slate-300 px-4 py-2 font-bold"
              >
                Muat Ulang
              </button>
            </div>

            <input
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3"
              placeholder="Cari berita..."
            />

            <p className="mt-3 text-sm text-slate-500">{hasil.length} berita ditemukan</p>

            <div className="mt-5 space-y-4">
              {hasil.map((item) => (
                <article key={item.slug} className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="flex gap-4 p-4">
                    <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      {item.gambar ? (
                        <img src={item.gambar} alt="" className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center text-3xl">📰</div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase text-amber-600">
                        {item.kategori} · {item.tanggal}
                      </p>
                      <h3 className="mt-1 line-clamp-2 font-black text-[#082f57]">
                        {item.judul}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-t border-slate-200">
                    <a
                      href={`/berita/${item.slug}`}
                      target="_blank"
                      className="px-3 py-3 text-center text-sm font-bold text-[#08728a] hover:bg-slate-50"
                    >
                      Lihat
                    </a>
                    <button
                      type="button"
                      onClick={() => edit(item)}
                      className="border-x border-slate-200 px-3 py-3 text-sm font-bold text-[#082f57] hover:bg-slate-50"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => void hapus(item)}
                      className="px-3 py-3 text-sm font-bold text-red-600 hover:bg-red-50"
                    >
                      Hapus
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
