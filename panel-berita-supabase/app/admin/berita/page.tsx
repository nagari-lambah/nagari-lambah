"use client";

import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

type Berita = {
  id: string;
  slug: string;
  judul: string;
  tanggal: string;
  kategori: string;
  penulis: string | null;
  ringkasan: string;
  gambar: string | null;
  isi: string;
  status: "draft" | "terbit";
};

type FormBerita = {
  id?: string;
  slug: string;
  judul: string;
  tanggal: string;
  kategori: string;
  penulis: string;
  ringkasan: string;
  gambar: string;
  isi: string;
  status: "draft" | "terbit";
};

const formAwal: FormBerita = {
  slug: "",
  judul: "",
  tanggal: new Date().toISOString().slice(0, 10),
  kategori: "Kegiatan Nagari",
  penulis: "Pemerintah Nagari Lambah",
  ringkasan: "",
  gambar: "",
  isi: "",
  status: "draft",
};

function buatSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminBeritaPage() {
  const router = useRouter();
  const [berita, setBerita] = useState<Berita[]>([]);
  const [form, setForm] = useState<FormBerita>(formAwal);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const loadBerita = useCallback(async () => {
    const { data, error } = await supabase
      .from("berita")
      .select("*")
      .order("tanggal", { ascending: false });

    if (error) {
      setMessage("Gagal membaca berita: " + error.message);
    } else {
      setBerita((data || []) as Berita[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    async function init() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace("/admin/login");
        return;
      }
      await loadBerita();
    }
    init();
  }, [loadBerita, router]);

  function mulaiTambah() {
    setForm({ ...formAwal, tanggal: new Date().toISOString().slice(0, 10) });
    setMessage("");
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function mulaiEdit(item: Berita) {
    setForm({
      id: item.id,
      slug: item.slug,
      judul: item.judul,
      tanggal: item.tanggal,
      kategori: item.kategori,
      penulis: item.penulis || "",
      ringkasan: item.ringkasan,
      gambar: item.gambar || "",
      isi: item.isi,
      status: item.status,
    });
    setShowForm(true);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function uploadFoto(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("File harus berupa gambar.");
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setMessage("Ukuran foto maksimal 8 MB.");
      return;
    }

    setUploading(true);
    setMessage("");

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const name = `${Date.now()}-${buatSlug(form.judul || "berita")}.${ext}`;

    const { error } = await supabase.storage
      .from("berita")
      .upload(name, file, { cacheControl: "3600", upsert: false });

    if (error) {
      setMessage("Upload foto gagal: " + error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("berita").getPublicUrl(name);
    setForm((f) => ({ ...f, gambar: data.publicUrl }));
    setMessage("Foto berhasil diunggah.");
    setUploading(false);
  }

  async function simpan(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const payload = {
      slug: buatSlug(form.slug || form.judul),
      judul: form.judul.trim(),
      tanggal: form.tanggal,
      kategori: form.kategori.trim(),
      penulis: form.penulis.trim() || null,
      ringkasan: form.ringkasan.trim(),
      gambar: form.gambar.trim() || null,
      isi: form.isi.trim(),
      status: form.status,
    };

    let error;
    if (form.id) {
      ({ error } = await supabase.from("berita").update(payload).eq("id", form.id));
    } else {
      ({ error } = await supabase.from("berita").insert(payload));
    }

    if (error) {
      setMessage("Gagal menyimpan berita: " + error.message);
      setSaving(false);
      return;
    }

    setMessage(form.status === "terbit" ? "Berita berhasil dipublikasikan." : "Draft berhasil disimpan.");
    setForm(formAwal);
    setShowForm(false);
    setSaving(false);
    await loadBerita();
  }

  async function hapus(item: Berita) {
    if (!window.confirm(`Hapus berita "${item.judul}"?`)) return;
    const { error } = await supabase.from("berita").delete().eq("id", item.id);
    if (error) {
      setMessage("Gagal menghapus berita: " + error.message);
      return;
    }
    setMessage("Berita berhasil dihapus.");
    await loadBerita();
  }

  async function ubahStatus(item: Berita) {
    const status = item.status === "terbit" ? "draft" : "terbit";
    const { error } = await supabase.from("berita").update({ status }).eq("id", item.id);
    if (error) {
      setMessage("Gagal mengubah status: " + error.message);
      return;
    }
    await loadBerita();
  }

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[24px] bg-[#0d3763] p-6 text-white shadow-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-amber-300">Pemerintah Nagari Lambah</p>
            <h1 className="mt-2 text-3xl font-black">Panel Admin Berita</h1>
            <p className="mt-2 text-sm text-slate-200">Tambah, edit, upload foto, draft, dan publikasikan berita.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/" className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-bold">Lihat Website</a>
            <button onClick={logout} className="rounded-xl bg-red-500 px-4 py-2.5 text-sm font-bold">Keluar</button>
          </div>
        </div>

        {message && (
          <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 font-semibold text-slate-700 shadow-sm">
            {message}
          </div>
        )}

        <button onClick={mulaiTambah} className="mb-6 rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-900">
          + Tambah Berita
        </button>

        {showForm && (
          <form onSubmit={simpan} className="mb-10 rounded-[28px] bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-8">
            <div className="mb-7 flex items-start justify-between gap-4">
              <h2 className="text-2xl font-black text-[#0d3763]">{form.id ? "Edit Berita" : "Tambah Berita Baru"}</h2>
              <button type="button" onClick={() => setShowForm(false)} className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold">Batal</button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold">Judul Berita</label>
                <input required value={form.judul} onChange={(e) => setForm((f) => ({ ...f, judul: e.target.value, slug: f.id ? f.slug : buatSlug(e.target.value) }))} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Slug URL</label>
                <input required value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: buatSlug(e.target.value) }))} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Tanggal</label>
                <input type="date" required value={form.tanggal} onChange={(e) => setForm((f) => ({ ...f, tanggal: e.target.value }))} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Kategori</label>
                <input required value={form.kategori} onChange={(e) => setForm((f) => ({ ...f, kategori: e.target.value }))} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Penulis</label>
                <input value={form.penulis} onChange={(e) => setForm((f) => ({ ...f, penulis: e.target.value }))} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold">Ringkasan</label>
                <textarea required rows={3} value={form.ringkasan} onChange={(e) => setForm((f) => ({ ...f, ringkasan: e.target.value }))} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Upload Foto</label>
                <input type="file" accept="image/*" onChange={uploadFoto} className="block w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm" />
                {uploading && <p className="mt-2 text-sm font-bold text-[#0f8292]">Mengunggah foto...</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">URL Foto</label>
                <input value={form.gambar} onChange={(e) => setForm((f) => ({ ...f, gambar: e.target.value }))} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
              </div>

              {form.gambar && (
                <div className="md:col-span-2">
                  <img src={form.gambar} alt="Preview" className="max-h-[360px] w-full rounded-2xl bg-slate-100 object-cover" />
                </div>
              )}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold">Isi Berita</label>
                <textarea required rows={16} value={form.isi} onChange={(e) => setForm((f) => ({ ...f, isi: e.target.value }))} className="w-full rounded-xl border border-slate-300 px-4 py-3 font-mono text-sm leading-6" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">Status</label>
                <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as "draft" | "terbit" }))} className="w-full rounded-xl border border-slate-300 px-4 py-3">
                  <option value="draft">Draft</option>
                  <option value="terbit">Terbitkan</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button type="submit" disabled={saving || uploading} className="rounded-xl bg-[#0d3763] px-6 py-3 font-black text-white disabled:opacity-60">
                {saving ? "Menyimpan..." : form.status === "terbit" ? "Publikasikan Berita" : "Simpan Draft"}
              </button>
            </div>
          </form>
        )}

        <section className="rounded-[28px] bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-8">
          <h2 className="mb-6 text-2xl font-black text-[#0d3763]">Daftar Berita</h2>

          {loading ? (
            <p>Memuat berita...</p>
          ) : berita.length === 0 ? (
            <p className="rounded-2xl bg-slate-50 p-8 text-center text-slate-500">Belum ada berita di Supabase.</p>
          ) : (
            <div className="space-y-4">
              {berita.map((item) => (
                <article key={item.id} className="grid gap-5 rounded-2xl border border-slate-200 p-4 md:grid-cols-[150px_1fr_auto] md:items-center">
                  <div className="aspect-video overflow-hidden rounded-xl bg-slate-100">
                    {item.gambar ? <img src={item.gambar} alt={item.judul} className="h-full w-full object-cover" /> : null}
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold">
                      <span>{item.status.toUpperCase()}</span>
                      <span>{item.tanggal}</span>
                      <span>{item.kategori}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-black text-[#0d3763]">{item.judul}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-slate-500">{item.ringkasan}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:flex-col">
                    <button onClick={() => mulaiEdit(item)} className="rounded-lg bg-[#0d3763] px-4 py-2 text-sm font-bold text-white">Edit</button>
                    <button onClick={() => ubahStatus(item)} className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900">
                      {item.status === "terbit" ? "Jadikan Draft" : "Terbitkan"}
                    </button>
                    <button onClick={() => hapus(item)} className="rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white">Hapus</button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
