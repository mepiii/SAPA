# SAPA - Sentra Aspirasi Pengaduan Asa

Platform aspirasi dan pengaduan mahasiswa BEM Fasilkom Unsri. Laporkan aspirasi, kritik, dan saran dengan pelacakan transparan.

## Quick Start

```bash
# Install deps
npm install

# Dev server
npm run dev

# Build production
npm run build
```

## Routes

| Path | Page | Description |
|------|------|------------|
| `/` | Beranda | Home dengan alur pelaporan |
| `/tentang-kami` | Tentang Kami | Info platform |
| `/lapor` | Lapor | Pilih kategori & kirim laporan |

## Tech Stack

- **Framework**: Vite + React 18
- **Styling**: Tailwind CSS + Framer Motion
- **Icons**: Lucide React
- **State**: React Context
- **SEO**: react-helmet-async

## Categories (6)

1. Kinerja Dosen
2. Kebijakan Kampus
3. Kerusakan Fasilitas
4. Aspirasi Ormawa
5. Pengajuan Seminar
6. Pelayanan Umum

## Features

- Form pelaporan per kategori
- Tracking ID (`SAPA-XXXX`) untuk pantau status
- Toggle anonim opsional
- Responsive design (mobile-first)
- Aksesibilitas: keyboard nav, focus trap, ARIA, skip link
- SEO: meta tags, OG, Twitter Cards, JSON-LD schema

## Project Structure

```
src/
├── components/
│   ├── forms/           # Form modals & inputs
│   │   └── forms/       # Category forms
│   ├── layout/         # Nav, footer
│   ├── sections/        # Hero, etc
│   └── ui/             # Button, Input, etc
├── context/            # SheetContext
├── hooks/             # useFocusTrap, useEscapeKey
├── pages/             # Beranda, TentangKami, Lapor
└── index.css         # Tailwind + reduced-motion
```

## Commands

```bash
npm run dev      # Dev server
npm run build   # Production build
npm run preview # Preview production
```

## Recent Changes

- Aksesibilitas: dialog ARIA, focus trap, keyboard nav, form label association
- SEO: per-page title/description, OG tags, JSON-LD schema, skip link
- Performa: manual chunks, prefer-reduced-motion, accessible Suspense fallback

## Design System

| Token | Value |
|-------|-------|
| `sapa.primary` | #300B55 |
| `sapa.accent` | #7A47A6 |
| `sapa.secondary` | #736F6F |
| `sapa.canvas` | #F5F5F7 |

Font: Plus Jakarta Sans
