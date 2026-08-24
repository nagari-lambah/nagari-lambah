"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function cekLogin() {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        window.location.replace("/admin/berita");
      }
    }

    cekLogin();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      // LOGIN
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setMessage("Login gagal: " + error.message);
        setLoading(false);
        return;
      }

      if (!data.session) {
        setMessage("Login berhasil, tetapi session tidak ditemukan.");
        setLoading(false);
        return;
      }

      // PASTIKAN SESSION TERSIMPAN
      const { error: sessionError } = await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });

      if (sessionError) {
        setMessage("Gagal menyimpan session: " + sessionError.message);
        setLoading(false);
        return;
      }

      // VERIFIKASI SESSION
      const { data: cekSession, error: cekError } =
        await supabase.auth.getSession();

      if (cekError) {
        setMessage("Gagal memeriksa session: " + cekError.message);
        setLoading(false);
        return;
      }

      if (!cekSession.session) {
        setMessage("Session belum tersimpan di browser.");
        setLoading(false);
        return;
      }

      // BERHASIL
      window.location.replace("/admin/berita");
    } catch (err) {
      console.error(err);

      setMessage(
        err instanceof Error
          ? "Terjadi kesalahan: " + err.message
          : "Terjadi kesalahan saat login."
      );

      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-md">
        <a
          href="/"
          className="mb-6 inline-flex font-bold text-[#0d3763] hover:underline"
        >
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
              <label className="mb-2 block text-sm font-bold text-slate-700">
                E-mail
              </label>

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
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Kata sandi
              </label>

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
              className="w-full rounded-xl bg-[#0d3763] px-5 py-3 font-black text-white transition hover:bg-[#15588a] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Memproses..." : "Masuk ke Panel Berita"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}