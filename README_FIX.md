# FIX IMPORT PATH

Paket ini memperbaiki semua relative import ke folder root `components` dan `data`.

Contoh yang sebelumnya salah:
`app/profil/struktur-organisasi/page.tsx` memakai `../../components/...`

Yang benar:
`../../../components/...`

Salin folder `app`, `components`, dan `data` ke:
`C:\\Users\\ferri\\nagari-lambah`

Jangan timpa `components/NavbarNagari.tsx` jika navbar aktif Anda ingin dipertahankan.
