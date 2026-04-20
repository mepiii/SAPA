FINAL PRODUCT & DESIGN SPECIFICATION: SAPA

Project: Sentra Aspirasi Pengaduan Asa (SAPA)
Organization: BEM Fasilkom Unsri, Kabinet Arka Satyawira
Objective: A high-performance, minimalist digital complaint portal featuring modern micro-interactions and a zero-learning-curve administrative backend.
1. DEVELOPMENT ENVIRONMENT & TECH STACK

    Frontend: React.js + Vite (Single Page Application architecture).

    Styling & Animation: Tailwind CSS (utilizing native utility classes for staggered keyframes to keep the bundle size minimal).

    Backend: Laravel 11 + MySQL.

    Admin Panel: Filament PHP.

    Recommended IDE: visual-studio-code-bin configured with Tailwind IntelliSense and PHP Intelephense for optimal workflow.

2. DESIGN SYSTEM & VISUAL IDENTITY

    Theme Concept: Apple-inspired Light Minimalism combined with modern web capabilities (21st.dev style).

    Color Palette:

        Canvas: #FFFFFF (Pure white base).

        Typography: #300B55 (Primary headings), #A7A3A3 (Body, subtitles, borders).

        Accents: #7A47A6 (Primary interactive states), #FFC148 (Status warnings), #FFEDCA (Subtle hover backgrounds).

    Typography: Plus Jakarta Sans or Inter. Weights: Bold (700) with -0.02em tracking for display, Medium (500) for body text.

3. UI ARCHITECTURE & ANIMATION (FRONTEND)

All public-facing UI copy strictly utilizes Indonesian.
A. Background & Foundation

    Faint Grid: An inline SVG grid pattern (1px thickness, #A7A3A3 at 5% opacity) applied to the body to provide subtle technical structure without visual noise.

B. Navigation: Floating Pill

    Placement: Top-center, detached from the viewport edge.

    Styling: Glassmorphism (bg-white/60, backdrop-blur-md, border-white/30, rounded-full).

    Menu Items: Beranda, Tentang Kami, Lapor, BEM APPS (Dropdown: BEM OFFICIAL, ILKOM NEWS).

C. Hero Section: Centered Focus

    Animation: Staggered Fade-Up on initial load.

        0ms: Pill badge "Dari Mahasiswa Untuk Kampus" fades in.

        150ms: Headline "Sampaikan Aspirasi Bersama SAPA" translates up (translate-y-4 to 0) and fades in (opacity-0 to 100).

        300ms: Subtitle fades in.

    Visual Element: A faint #7A47A6 glowing orb (blur-3xl, 5% opacity) positioned behind the headline.

D. Category Selection: Bento Grid

    Layout: A tightly packed Bento Grid directly below the hero section replacing standard floating cards.

        Large spans for high-traffic forms: Kinerja Dosen, Kebijakan Kampus.

        Standard grid blocks for: Kerusakan Fasilitas, Aspirasi Ormawa, Pengajuan Seminar.

    Interaction: Hover triggers a soft physical scale (scale-[1.02]) and shifts the background to #FFEDCA.

E. Form Interaction: Slide-out Sheet (Drawer)

    Trigger: Clicking a Bento Grid category slides a panel from the right edge of the screen, darkening the main canvas (backdrop-blur-sm).

    Advantage: Maintains the fast SPA feel without page reloads.

4. FUNCTIONAL REQUIREMENTS
A. Dynamic Form Fields

    Kinerja Dosen: Subjek Aspirasi, Target Aspirasi, Jurusan Dosen, Mata Kuliah Dosen, Isi Aspirasi.

    Kebijakan Kampus: Judul Aspirasi, Nama Kebijakan, Isi Aspirasi, Upload Data Pendukung.

    Kerusakan Fasilitas: Fasilitas yang Rusak, Deskripsi Kerusakan, Upload Bukti Kerusakan.

    Aspirasi Ormawa: Subjek Aspirasi, Organisasi yang Dituju, Kritik dan Saran.

    Pengajuan Seminar: Jurusan, Judul Seminar, Deskripsi Seminar.

B. User Privacy & Tracking

    Anonymous Toggle: A mandatory UI switch in the slide-out sheet to submit reports without logging identifiable data.

    Tracking ID (Nomor Resi): Auto-generated alphanumeric code upon submission for users to track their Pending, Proses, or Selesai status.

C. Backend (Admin Panel)

    UI Structure: Utilitarian, Indonesian-language dashboard using Filament PHP.

    Metrics: Minimalist top-row counters (Total Laporan, Laporan Baru, Sedang Diproses, Selesai).

    Operations: Single-click dropdowns for status mutation.

    Media Viewer: Built-in modal for viewing uploaded evidence without triggering file downloads.

    Export: Batch extraction of filtered reports to PDF/Excel.