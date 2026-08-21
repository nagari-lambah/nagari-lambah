FIX ADMIN BERITA V3.1
====================

Masalah yang diperbaiki:
- Daftar berita 0 karena API admin versi lama / tidak lengkap.
- Tombol Edit/Hapus tidak muncul karena daftar berita tidak termuat.
- Sekarang halaman menampilkan status koneksi API dengan jelas.

CARA PASANG
1. Hentikan server lama dengan Ctrl+C.
2. Ekstrak ZIP ini ke:
   C:\Users\ferri\nagari-lambah
3. Pilih Replace untuk kedua file:
   app/admin/berita/page.tsx
   app/api/admin/berita/route.ts
4. Jalankan lagi:
   JALANKAN_ADMIN_BERITA.bat
5. Buka:
   http://localhost:3000/admin/berita

CEK LANGSUNG API
Buka juga:
http://localhost:3000/api/admin/berita

Jika benar, browser menampilkan JSON dengan:
"ok": true
"count": ...
"items": [...]

CATATAN
Jika data/berita.json belum ada, API akan membuat file kosong otomatis.
Jika daftar tetap 0 tetapi berita lama ada di website, berarti berita lama belum dimigrasikan ke data/berita.json.
