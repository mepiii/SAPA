# CLAUDE.md

# SAPA Local Rules
- Always run `npm` and `git` commands through `rtk` proxy.
- Example: Use `rtk npm run build` instead of `npm run build`.

# Scope
- Project: SAPA (BEM Fasilkom complaint platform).
- Inherits workflow from `~/.claude/CLAUDE.md`.

# Architecture & State
- Stack: Vite, React 18, Tailwind, Framer Motion.
- Routes: `/`, `/tentang-kami`, `/lapor`.
- State: `SheetContext` (`src/context/SheetContext.jsx`). Manages form sheet and tracking modal.
- Tracking IDs: Client-side generated (`SAPA-XXXX`).
- Categories: kinerja-dosen, kebijakan-kampus, kerusakan-fasilitas, aspirasi-ormawa, pengajuan-seminar.

# Design System
- Font: Plus Jakarta Sans.
- Colors: `sapa.primary` (#300B55), `sapa.accent` (#7A47A6).
- Animations: `fade-up`, `fade-in`, `slide-in-right`, `slide-out-right`, `nav-enter`, `gradient-shift`.
- Shadows: `glow`, `glow-lg`.

# Key Components
- `SlideOutSheet`: Global form panel.
- `TrackingModal`: Status lookup modal.
- `BentoGrid`: Category selection grid (`/lapor`).
- `FloatingPillNav`: Global navigation.
