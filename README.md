# SAPA (Sentra Aspirasi Pengaduan Asa)

SAPA adalah sistem informasi pengaduan yang dikembangkan khusus untuk mahasiswa Fakultas Ilmu Komputer (Fasilkom) Universitas Sriwijaya.

## Fungsi
Platform ini diinisiasi oleh BEM Fasilkom (Kabinet Arka Satyawira) sebagai wadah resmi bagi mahasiswa untuk menyampaikan keluhan, saran, maupun aspirasi terkait lingkungan kampus. Mahasiswa dapat mengirimkan laporan secara anonim untuk menjaga privasi, serta memantau status laporan (Menunggu, Diproses, Selesai) menggunakan Nomor Resi tanpa perlu membuat akun pengguna.

## Tech Stack
Proyek ini dibangun menggunakan teknologi berikut:

**Frontend (Antarmuka Pengguna):**
- **React.js & Vite**: Untuk membangun antarmuka web dengan performa yang cepat.
- **Tailwind CSS**: Framework untuk merancang tata letak dan desain visual yang efisien.
- **Framer Motion**: Untuk memberikan transisi dan animasi antarmuka yang halus.
- **Lucide React**: Untuk penyediaan ikon vektor pada sistem.

## Fitur Utama
- **Kategori Laporan Spesifik**: Menyediakan formulir khusus untuk Kinerja Dosen, Kebijakan Kampus, Kerusakan Fasilitas, Aspirasi Ormawa, dan Pengajuan Seminar.
- **Pelaporan Anonim**: Opsi untuk menyembunyikan identitas pelapor guna menjamin keamanan dan privasi.
- **Pelacakan Status Laporan**: Fasilitas untuk mengecek perkembangan laporan secara langsung menggunakan Nomor Resi.
- **Antarmuka Modern**: Desain minimalis yang mudah digunakan, dilengkapi dengan interaksi komponen yang mulus.

## Struktur
Berikut adalah struktur folder utama pada proyek ini:

- `src/` : Direktori kode sumber utama aplikasi.
  - `src/components/ui/` : Kumpulan komponen antarmuka (tombol, formulir) yang dapat digunakan kembali.
- `public/` : Direktori untuk aset statis seperti logo BEM dan ikon.
- `dist/` : Direktori hasil *build* yang siap untuk dipublikasikan (*deployment*).
- `index.html` : Berkas utama untuk memuat aplikasi web.
- `vite.config.js` : Berkas konfigurasi untuk lingkungan Vite.
- `tailwind.config.js` : Berkas konfigurasi untuk penyesuaian desain Tailwind CSS.
- `package.json` : Daftar pustaka (*library*) dan perintah pendukung proyek.

## Cara Menjalankan Secara Lokal
1. Salin (*clone*) repositori ini ke komputer Anda.
2. Buka terminal pada direktori proyek, lalu jalankan perintah `npm install` untuk mengunduh semua dependensi yang dibutuhkan.
3. Jalankan perintah `npm run dev` untuk memulai server pengembangan lokal.
4. Buka tautan `http://localhost:5173` pada peramban (*browser*) Anda untuk melihat aplikasi.