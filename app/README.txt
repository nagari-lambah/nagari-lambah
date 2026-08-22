FIX ERROR PARSING app/page.tsx

Penyebab:
Blok GALERI lama tidak terhapus utuh, sehingga ada </section> sisa.
Akibatnya JSX mengira <main> ditutup dengan </section>.

File ini sudah diperbaiki:
- Import GaleriBeranda ditambahkan.
- Blok galeri lama diganti UTUH dengan <GaleriBeranda />.
- Struktur JSX kembali seimbang.
- Bagian Mengenal Nagari tetap hanya memakai satu foto KantorNagariMap.

Hasil otomatis:
Profil block replaced: 1
Gallery block replaced: 1

CARA PASANG:
1. Ekstrak ZIP.
2. Replace:
   C:\Users\ferri\nagari-lambah\app\page.tsx
3. Pastikan file ini sudah ada:
   components\GaleriBeranda.tsx
   components\galeriData.ts
   components\KantorNagariMap.tsx

4. Jalankan:
   npm run dev

5. Jika sudah normal:
   Ctrl + C
   npm run build

6. Publikasikan:
   git add app/page.tsx
   git add components/GaleriBeranda.tsx
   git add components/galeriData.ts
   git add public/image/galeri
   git commit -m "Perbaiki galeri dan struktur beranda"
   git push
