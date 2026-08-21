ADMIN BERITA V3 - EDITOR BLOG
================================

Paket ini merupakan peningkatan dari Admin Berita V2.

FITUR EDITOR BARU
- B = teks tebal
- I = teks miring
- H2 = subjudul besar
- H3 = subjudul kecil
- Kutipan
- Bullet list
- Numbered list
- Tautan/link
- Garis pemisah
- Preview langsung

CARA MENGGUNAKAN TOOLBAR
1. Ketik atau tempel isi berita.
2. Blok teks yang ingin diformat.
3. Klik tombol pada toolbar.
Contoh:
  B      -> **teks**
  I      -> *teks*
  H2     -> ## Subjudul
  H3     -> ### Subjudul
  ❝      -> > Kutipan
  • List -> - Item
  1.List -> 1. Item
  🔗     -> [teks](https://alamat.com)
  —      -> garis pemisah

CARA PASANG
1. Pastikan Admin Berita V2 sudah terpasang.
2. Ekstrak ZIP ke:
   C:\Users\ferri\nagari-lambah
3. Pilih Replace.

FILE YANG DIGANTI
- app/admin/berita/page.tsx
- lib/berita.tsx

Data berita TIDAK diganti.

JALANKAN
JALANKAN_ADMIN_BERITA.bat

Lalu buka:
http://localhost:3000/admin/berita

Setelah selesai mengedit/menambah berita:
Ctrl+C
lalu jalankan:
PUBLIKASIKAN_BERITA.bat
