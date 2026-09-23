MIGRASI BERITA LAMA KE SUPABASE DENGAN LOGIN ADMIN

1. Salin file:
   scripts\migrasi-berita-lama.mjs
   ke:
   C:\Users\ferri\nagari-lambah\scripts\migrasi-berita-lama.mjs

2. Buka:
   C:\Users\ferri\nagari-lambah\.env.local

3. Tambahkan dua baris berikut:
   SUPABASE_ADMIN_EMAIL=email_admin_anda
   SUPABASE_ADMIN_PASSWORD=password_admin_anda

   Contoh:
   SUPABASE_ADMIN_EMAIL=admin@example.com
   SUPABASE_ADMIN_PASSWORD=PasswordAnda

4. Pastikan .env.local juga sudah punya:
   NEXT_PUBLIC_SUPABASE_URL=https://hlphkhptivkovobqysby.supabase.co
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...

5. Jalankan:
   cd C:\Users\ferri\nagari-lambah
   node scripts\migrasi-berita-lama.mjs

6. Jika berhasil:
   Login admin berhasil.
   Menyiapkan migrasi 5 berita...
   Migrasi selesai.

7. Setelah migrasi selesai, Anda boleh menghapus:
   SUPABASE_ADMIN_PASSWORD=...
   dari .env.local jika hanya dipakai sekali.

PENTING:
- Jangan commit .env.local ke GitHub.
- Jangan simpan password admin langsung di script.
- Jangan gunakan service_role key di file client.
