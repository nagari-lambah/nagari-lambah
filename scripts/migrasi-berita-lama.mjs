/**
 * Migrasi berita lama dari data/berita.json ke Supabase.
 * Login admin dibaca dari .env.local agar password tidak ditulis di script.
 *
 * Jalankan dari root project:
 *   node scripts/migrasi-berita-lama.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

function bacaEnvLocal() {
  const envPath = path.join(process.cwd(), ".env.local");

  if (!fs.existsSync(envPath)) {
    throw new Error(".env.local tidak ditemukan di root project.");
  }

  const raw = fs.readFileSync(envPath, "utf8");
  const env = {};

  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) continue;

    const index = trimmed.indexOf("=");
    if (index === -1) continue;

    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    env[key] = value;
  }

  return env;
}

const env = bacaEnvLocal();

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const adminEmail = env.SUPABASE_ADMIN_EMAIL;
const adminPassword = env.SUPABASE_ADMIN_PASSWORD;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL atau key Supabase tidak ditemukan di .env.local"
  );
}

if (!adminEmail || !adminPassword) {
  throw new Error(
    "SUPABASE_ADMIN_EMAIL atau SUPABASE_ADMIN_PASSWORD belum diisi di .env.local"
  );
}

const beritaPath = path.join(process.cwd(), "data", "berita.json");

if (!fs.existsSync(beritaPath)) {
  throw new Error("data/berita.json tidak ditemukan.");
}

const berita = JSON.parse(fs.readFileSync(beritaPath, "utf8"));

const payload = berita.map((item) => ({
  slug: item.slug,
  judul: item.judul,
  tanggal: item.tanggal,
  kategori: item.kategori,
  penulis: item.penulis || null,
  ringkasan: item.ringkasan,
  gambar: item.gambar || null,
  isi: item.isi,
  status: "terbit",
}));

const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Login admin ke Supabase...");

const { error: loginError } = await supabase.auth.signInWithPassword({
  email: adminEmail,
  password: adminPassword,
});

if (loginError) {
  console.error("Login admin gagal:");
  console.error(loginError);
  process.exit(1);
}

console.log("Login admin berhasil.");
console.log(`Menyiapkan migrasi ${payload.length} berita...`);

const { data, error } = await supabase
  .from("berita")
  .upsert(payload, { onConflict: "slug" })
  .select("slug, judul, status");

if (error) {
  console.error("Migrasi gagal:");
  console.error(error);
  process.exit(1);
}

console.log("");
console.log("Migrasi selesai.");
console.table(data);

await supabase.auth.signOut();
