APLIKASI ADMIN BERITA NAGARI LAMBAH V1
========================================

TUJUAN
Anda tidak perlu lagi membuat file page.tsx untuk setiap berita.
Cukup:
1. Jalankan Admin Berita di komputer.
2. Tempel judul, ringkasan, isi berita.
3. Pilih/upload gambar atau tempel URL gambar.
4. Klik "Simpan Berita".
5. Jalankan PUBLIKASIKAN_BERITA.bat.

CARA PASANG
1. Ekstrak seluruh isi ZIP ke:
   C:\Users\ferri\nagari-lambah

2. Jika Windows bertanya Replace files, pilih Replace.

3. Pastikan app/page.tsx Anda tetap memiliki:
   import BeritaBeranda from "../components/BeritaBeranda";
   dan section:
   <BeritaBeranda />

4. Jalankan:
   JALANKAN_ADMIN_BERITA.bat

5. Buka browser:
   http://localhost:3000/admin/berita

6. Isi berita dan klik SIMPAN BERITA.

7. Setelah selesai input, tutup server dengan Ctrl+C.

8. Klik dua kali:
   PUBLIKASIKAN_BERITA.bat

APA YANG OTOMATIS
- slug berita dibuat otomatis
- data masuk ke data/berita.json
- gambar upload disimpan ke public/image/berita/
- berita muncul di /berita
- 4 berita terbaru muncul di beranda
- detail berita memakai /berita/[slug]
- format ##, ###, >, daftar bernomor dan **tebal** dirender otomatis

PENTING
Admin V1 hanya bekerja di komputer lokal.
Jangan gunakan /admin/berita pada situs Vercel untuk menyimpan berita,
karena filesystem Vercel tidak permanen.

BERITA LAMA
Empat berita yang sudah ada sudah dimasukkan ke data/berita.json.
Folder berita lama yang spesifik boleh tetap ada untuk sementara.
Berita BARU akan otomatis menggunakan route /berita/[slug].

SETELAH SISTEM STABIL
Tahap berikutnya dapat dibuat:
- Edit berita
- Hapus berita
- Draft / Terbit
- Login admin online
- Database online agar tidak perlu Git/CMD
