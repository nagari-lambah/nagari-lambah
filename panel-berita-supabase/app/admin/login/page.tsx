"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace("/admin/berita");
    });
  }, [router]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage("Login gagal: " + error.message);
      setLoading(false);
      return;
    }

    router.replace("/admin/berita");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-md">
        <a href="/" className="mb-6 inline-flex font-bold text-[#0d3763] hover:underline">
          ← Kembali ke Beranda
        </a>

        <div className="rounded-[28px] bg-white p-7 shadow-xl ring-1 ring-slate-200 sm:p-9">
          <p className="font-bold uppercase tracking-[0.2em] text-amber-600">
            Nagari Lambah
          </p>
          <h1 className="mt-3 text-3xl font-black text-[#0d3763]">
            Login Admin Berita
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Masuk menggunakan akun admin yang dibuat di Supabase Authentication.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0f8292]"
                placeholder="admin@nagari-lambah.id"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0f8292]"
                placeholder="••••••••"
              />
            </div>

            {message && (
              <div className="rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#0d3763] px-5 py-3 font-black text-white hover:bg-[#15588a] disabled:opacity-60"
            >
              {loading ? "Memproses..." : "Masuk ke Panel Berita"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
