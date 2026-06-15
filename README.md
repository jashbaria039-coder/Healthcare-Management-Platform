# MedFlow — Healthcare Management Platform

> **Precision medicine applied to software.**

A polished, multi-page marketing website for a modern healthcare SaaS platform. Built with React, Tailwind CSS, and shadcn/ui — fully responsive, dark-mode ready, and AI chatbot-enabled.

---

## Live Preview

Deploy this project and it's immediately live at your `.replit.app` domain, or connect a custom domain.

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, key benefits, feature highlights, how-it-works, and CTA sections |
| `/about` | About | Company story, mission/values, and leadership team cards |
| `/features` | Features | Full feature grid with deep dives on dashboard and security |
| `/pricing` | Pricing | Three-tier pricing cards with monthly/annual billing toggle |
| `/contact` | Contact | Validated contact form with office details and simulated submission toast |
| `/faq` | FAQ | Accordion-based Q&A on onboarding, compliance, data privacy, and support |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 (TypeScript) |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Radix UI primitives) |
| Routing | wouter |
| Animations | Framer Motion |
| Forms | react-hook-form + Zod |
| Dark Mode | next-themes |
| Icons | lucide-react |
| Chatbot | Noupe AI (embedded script) |

---

## Features

- **6 fully-routed pages** — Home, About, Features, Pricing, Contact, FAQ
- **Dark / light mode** toggle with system preference detection
- **Sticky navbar** with frosted-glass scroll effect and mobile slide-out drawer
- **Framer Motion animations** — scroll-triggered, staggered card entrances, spring physics
- **Contact form validation** — react-hook-form + Zod with inline error messages and success toast
- **Pricing toggle** — monthly ↔ annual billing with 20% savings badge
- **AI chatbot** — Noupe-powered floating button on all pages (trained on site content)
- **Accessible** — semantic HTML, aria-labels, keyboard navigation, WCAG AA contrast
- **Fully responsive** — mobile, tablet, and desktop layouts

---

## Project Structure

```
artifacts/healthcare-platform/
├── index.html                    # Entry HTML — Noupe chatbot script injected here
├── src/
│   ├── App.tsx                   # Route definitions + ThemeProvider
│   ├── main.tsx                  # React entry point
│   ├── index.css                 # Tailwind + CSS custom properties (color tokens)
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── about.tsx
│   │   ├── features.tsx
│   │   ├── pricing.tsx
│   │   ├── contact.tsx
│   │   ├── faq.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky nav with mobile sheet drawer + theme toggle
│   │   │   └── Footer.tsx        # 4-column footer with social links
│   │   └── ui/                   # shadcn/ui component library
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   └── lib/
│       └── utils.ts              # Tailwind class merge utility (cn)
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install

```bash
pnpm install
```

### Run Development Server

```bash
pnpm --filter @workspace/healthcare-platform run dev
```

The app will be available at `http://localhost:<PORT>`.

### Build for Production

```bash
pnpm --filter @workspace/healthcare-platform run build
```

### Type Check

```bash
pnpm --filter @workspace/healthcare-platform run typecheck
```

---

## Design System

### Color Palette

| Token | Light | Usage |
|-------|-------|-------|
| `--primary` | `#1d6ae5` | CTAs, links, active states |
| `--secondary` | `#10b981` | Success, checkmarks, accents |
| `--background` | `#ffffff` | Page background |
| `--muted` | `#f1f5f9` | Card and section backgrounds |
| `--foreground` | `#0f172a` | Primary text |

Dark mode variants are defined in the `.dark` CSS class and toggle automatically via next-themes.

### Typography

Inter (Google Fonts) — weights 400, 500, 600, 700.

---

## AI Chatbot

The Noupe AI chatbot is embedded via a script tag in `index.html`. It has been trained using the `medflow-training-reference.pdf` knowledge base, which covers all page content, features, pricing, FAQ answers, and company information.

To update the chatbot knowledge base, regenerate the PDF:

```bash
node scripts/generate-pdf.cjs
```

---

## Compliance & Security Messaging

MedFlow's marketing copy highlights:

- **HIPAA** compliance with BAAs for all clients
- **SOC2 Type II** certification
- **HITRUST** requirements exceeded
- **AES-256** encryption at rest and in transit

---

## License

MIT — free to use, modify, and distribute.
