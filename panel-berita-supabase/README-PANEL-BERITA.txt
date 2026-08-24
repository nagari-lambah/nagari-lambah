PANEL BERITA SUPABASE - NAGARI LAMBAH

COPY:
1. lib/supabaseClient.ts
2. app/admin/login/page.tsx
3. app/admin/berita/page.tsx

BUAT AKUN ADMIN:
Supabase > Authentication > Users > Add user
Buat email dan password admin.

JALANKAN:
npm run dev

LOGIN:
http://localhost:3000/admin/login

PANEL:
http://localhost:3000/admin/berita

PENTING:
- Bucket Storage bernama "berita" harus sudah ada.
- Tabel public.berita dan RLS harus sudah dibuat dari SQL setup sebelumnya.
- Jangan gunakan service_role key pada NEXT_PUBLIC_*.
