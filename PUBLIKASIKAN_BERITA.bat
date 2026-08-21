@echo off
cd /d C:\Users\ferri\nagari-lambah
echo.
echo Memeriksa build...
call npm run build
if errorlevel 1 (
  echo.
  echo BUILD GAGAL. Jangan push dulu.
  pause
  exit /b 1
)
echo.
echo Build berhasil.
git add .
git commit -m "Tambah berita melalui Admin Berita"
git push
echo.
echo Selesai. Vercel akan deploy otomatis.
pause
