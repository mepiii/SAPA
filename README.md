# **SAPA – Sentra Aspirasi Pengaduan Asa**

A platform for student aspirations and complaints by BEM Fasilkom Unsri. Submit feedback, criticism, and suggestions with transparent tracking.

## **Quick Start**

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## **Routes**

| Path        | Page     | Description                       |
| ----------- | -------- | --------------------------------- |
| `/`         | Home     | Homepage with reporting flow      |
| `/about-us` | About Us | Platform information              |
| `/report`   | Report   | Choose category & submit a report |

## **Tech Stack**

* **Framework**: Vite + React 18
* **Styling**: Tailwind CSS + Framer Motion
* **Icons**: Lucide React
* **State Management**: React Context
* **SEO**: react-helmet-async

## **Categories (6)**

1. Lecturer Performance
2. Campus Policy
3. Facility Damage
4. Student Organization Aspirations
5. Seminar Submission
6. General Services

## **Features**

* Category-based reporting forms
* Tracking ID (`SAPA-XXXX`) to monitor report status
* Optional anonymous submission
* Responsive design (mobile-first)
* Accessibility: keyboard navigation, focus trap, ARIA, skip link
* SEO: meta tags, Open Graph, Twitter Cards, JSON-LD schema

## **Project Structure**

```
src/
├── components/
│   ├── forms/           # Form modals & inputs
│   │   └── forms/       # Category-specific forms
│   ├── layout/          # Navbar, footer
│   ├── sections/        # Hero, etc
│   └── ui/              # Buttons, inputs, etc
├── context/             # SheetContext
├── hooks/               # useFocusTrap, useEscapeKey
├── pages/               # Home, About Us, Report
└── index.css            # Tailwind + reduced-motion
```

## **Commands**

```bash
npm run dev      # Run development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## **Recent Changes**

* Accessibility: ARIA dialogs, focus trap, keyboard navigation, proper form label associations
* SEO: per-page title/description, Open Graph tags, JSON-LD schema, skip link
* Performance: manual chunks, prefers-reduced-motion, accessible Suspense fallback

## **Design System**

| Token            | Value   |
| ---------------- | ------- |
| `sapa.primary`   | #300B55 |
| `sapa.accent`    | #7A47A6 |
| `sapa.secondary` | #736F6F |
| `sapa.canvas`    | #F5F5F7 |

**Font:**

1. Request
2. Campton
