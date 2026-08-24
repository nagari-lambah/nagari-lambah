BERITA PUBLIK SUPABASE - NAGARI LAMBAH

Ganti file:
1. components/HeroBeritaSlider.tsx
2. app/berita/page.tsx
3. app/berita/[slug]/page.tsx

Ketiganya membaca berita berstatus "terbit" langsung dari Supabase.

Setelah mengganti:
Ctrl+C
rmdir /s /q .next
npm run dev

Tes:
http://localhost:3000/
http://localhost:3000/berita

Jika berita di panel masih DRAFT, klik TERBITKAN terlebih dahulu.
