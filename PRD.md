# COMPLETE PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Product Name:** SAPA (Sentra Aspirasi Pengaduan Asa)
**Entity:** BEM Fasilkom (Kabinet Arka Satyawira)
**Objective:** A centralized, transparent, and high-performance digital complaint/aspiration management system.

---

## 1. TECHNOLOGY STACK
* **Frontend:** React.js powered by Vite (for high-speed rendering / SPA architecture).
* **Styling:** Tailwind CSS (for rapid custom UI development and animation utility classes).
* **Backend & API:** Laravel 11.
* **Database:** MySQL.
* **Admin Interface:** Filament PHP (Inbox-style, minimal-learning-curve dashboard).

## 2. DESIGN SYSTEM & VISUAL IDENTITY
* **Theme:** Minimalist Light Theme (Apple-inspired structural simplicity, generous whitespace, and focus on content), utilizing the official BEM brand color palette. 
* **Color Palette:**
    * **Base Background / Surface:** `#FFFFFF` (Pure white for clean, elevated layouts).
    * **Primary Text / Deep Accents:** `#300B55` (Dark purple for maximum readability and stark contrast).
    * **Secondary Text / Muted Elements:** `#A7A3A3` (Gray for subtitles, borders, and placeholders).
    * **Brand/Action Accents:** `#7A47A6` (Medium purple for primary buttons and active states) and `#FFC148` (Gold for warnings/status highlights).
    * **Soft Highlights:** `#FFEDCA` (Cream/Light yellow for subtle card backgrounds or hover tints).
* **Animations (Frontend Home & Elements):**
    * **Load State:** Smooth fade-in (`opacity-0` to `opacity-100`) and slight upward translation (`translate-y-4` to `translate-y-0`) on initial mount.
    * **Hover States:** Soft, physical-feeling scaling on cards and buttons (`hover:scale-[1.02]`) with smooth easing (`transition-all duration-300 ease-in-out`).
    * **Scroll Reveals:** Staggered intersection observer animations revealing form categories as the user scrolls down.

## 3. FRONTEND REQUIREMENTS (STUDENT FACING)
*All UI copy and user-facing text must strictly be in Indonesian.*

### A. Navigation & Routing
* **Main Menu:** `Beranda` (Home), `Tentang Kami` (About Us), `Lapor` (Report).
* **Dropdown Menu:** `BEM APPS` containing `BEM OFFICIAL` and `ILKOM NEWS`.

### B. Submission Modules (`Menu Lapor`)
Forms must be presented on clean, shadowless or soft-shadowed white cards (`bg-white` or `bg-[#FFEDCA]` for slight emphasis, utilizing `#A7A3A3` for subtle borders).

1. **Kinerja Dosen (Lecturer Performance)**
    * Fields: Subjek Aspirasi (Text), Target Aspirasi (Text), Jurusan Dosen (Text), Mata Kuliah Dosen (Text), Isi Aspirasi (Textarea).
2. **Kebijakan Kampus (Campus Policy)**
    * Fields: Judul Aspirasi (Text), Nama Kebijakan (Text), Isi Aspirasi (Textarea), Upload Data Pendukung (File/Image).
3. **Kerusakan Fasilitas (Facility Damage)**
    * Fields: Fasilitas yang Rusak (Text), Deskripsi Kerusakan (Textarea), Upload Bukti Kerusakan (File/Image).
4. **Aspirasi Organisasi Mahasiswa (Student Organization)**
    * Fields: Subjek Aspirasi (Text), Organisasi yang Dituju (Text), Kritik dan Saran (Textarea).
5. **Pengajuan Seminar (Seminar Request)**
    * Fields: Jurusan (Text), Judul Seminar (Text), Deskripsi Seminar (Textarea).

### C. Core User Mechanisms
* **Anonymous Toggle:** A strict requirement allowing students to submit sensitive reports without logging user data.
* **Tracking System:** Upon successful form submission, the system generates a unique `Nomor Resi` (Tracking ID) so users can check the status of their report later without needing an account.

## 4. BACKEND REQUIREMENTS (ADMIN FACING)
*All UI copy for the dashboard must strictly be in Indonesian. The interface must remain strictly utilitarian and simple, prioritizing data readability over complex UI.*

### A. Filament Dashboard
* **Metrics Overview:** Clean, borderless statistic cards for `Total Laporan`, `Laporan Baru` (New), `Sedang Diproses` (Processing), and `Selesai` (Resolved).
* **Inbox-Style Table:** A minimalist, tabular view of incoming reports with ample row spacing and quick filters based on category and status.

### B. Admin Operations
* **Status Mutation:** 1-click dropdown to change report status (`Pending` $\rightarrow$ `Proses` $\rightarrow$ `Selesai`).
* **Evidence Viewer:** Built-in modal to view uploaded images (for facility/policy reports) without downloading.
* **Export Module:** Batch export feature allowing admins to download filtered reports into `.xlsx` or `.pdf` formats.

## 5. DATA ARCHITECTURE (LOGICAL SCHEMA)
* **Table `users`:** Manages BEM admin authentication (`id`, `name`, `email`, `password`, `role`).
* **Table `reports`:**
    * `id` (Primary Key)
    * `tracking_code` (String, Unique)
    * `category` (Enum: Dosen, Kebijakan, Fasilitas, Ormawa, Seminar)
    * `is_anonymous` (Boolean)
    * `status` (Enum: Pending, Proses, Selesai)
    * `payload` (JSON) $\rightarrow$ *Stores the dynamic form fields.*
    * `attachment_path` (String, Nullable)
    * `created_at` & `updated_at` (Timestamps)