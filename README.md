# Elvis Bitolo Khanyanga — Portfolio & Resume

> Full-stack developer portfolio built with Next.js 14, Firebase, and Tailwind CSS. Includes a downloadable PDF resume, dark mode, SEO, and an admin panel for content.

[![Live Site](https://img.shields.io/badge/live-elvis--bitolo.vercel.app-2ea44f)](https://elvis-bitolo.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61dafb)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8)](https://tailwindcss.com)
[![Firebase](https://img.shields.io/badge/Firebase-10-ffca28)](https://firebase.google.com)

## About

Personal portfolio and resume website for **Elvis Bitolo Khanyanga** — a software developer in Nairobi, Kenya specializing in full-stack web development (Next.js, React, Firebase) and AI-assisted development. The site serves as an online CV, project showcase, and contact point for clients.

- **Demo:** https://elvis-bitolo.vercel.app
- **Repository:** https://github.com/elvisbitolo/cv

## Tech Stack

| Layer       | Technologies                                             |
| ----------- | -------------------------------------------------------- |
| Framework   | Next.js 14 (App Router), React 18                         |
| Language    | JavaScript (no TypeScript)                                |
| Styling     | Tailwind CSS 3, custom design tokens                      |
| Backend     | Firebase (Firestore, client SDK)                          |
| PDF Resume  | @react-pdf/renderer                                       |
| Icons       | lucide-react                                              |
| Deployment  | Vercel (see `vercel.json` for security headers)           |

## Featured Projects

| Project                     | Category            | Stack / Notes                                            | Live                        |
| --------------------------- | ------------------- | -------------------------------------------------------- | --------------------------- |
| Brilliant Angels Academy    | Client web project   | Next.js, Firebase, M-Pesa, WhatsApp, SEO                 | [Visit](https://brilliant-angel-cbo.vercel.app) |
| Austine Omondi MCA 2027     | Client web project   | Next.js, React, Tailwind, M-Pesa donation                | [Visit](https://austine-omondi.vercel.app) |
| Githogoro Community App     | Full-stack web app   | Next.js, Firebase, chat, job board, business directory   | [Visit](https://githogoro.vercel.app) |
| AWS VPC Terraform           | Cloud infrastructure| Terraform, AWS VPC, NAT gateway, networking              | [Repo](https://github.com/elvisbitolo/aws-vpc-project) |
| Developer Portfolio (this)  | Full-stack web app   | Next.js, React, Firebase, dark mode, PDF resume          | [Visit](https://elvis-bitolo.vercel.app) |

## Certifications

- **AWS Certified Cloud Practitioner** — Amazon Web Services, issued 28 Jul 2025 (valid to 28 Jul 2028). Verification ID `7ae1f1e5a6514b0cb188fc8f07a7d092` at https://aws.amazon.com/verification
- **Certificate of Completion — ICT: Software Development with AI** — Empower Hope, 23 Feb 2026 – 20 Jun 2026 (supported by NCCK, ELF, KUJIA, Standard Bank)

## Skills

- **Languages & Frameworks:** JavaScript, HTML5, CSS3, React, Redux, Next.js, Tailwind CSS, Node.js
- **Databases:** Firestore, MongoDB, SQLite, Prisma ORM, PostgreSQL
- **Tools & Platforms:** Git, GitHub, npm, pnpm, Bash, Linux, Vercel, Firebase Console
- **AI & Digital:** AI-assisted development, prompt engineering, SEO, Google Search Console, Google Business Profile
- **Design & UX:** UI/UX, responsive & mobile-first design, accessibility

## Getting Started

### Prerequisites

- Node.js 18.17+ and npm

### 1. Install

```bash
npm install
```

### 2. Configure Firebase (optional)

Copy the example env file and fill in your Firebase project values:

```bash
cp .env.example .env.local
```

| Variable | Description |
| -------- | ----------- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | App ID |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Measurement ID |

> Without env vars, the site runs fully with the bundled profile data in `src/lib/profile-data.js` as the fallback.

### 3. Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev      # Start the dev server
npm run build    # Production build
npm start        # Serve the production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/               # App Router: layout, pages, sitemap, robots
│   └── admin/         # Admin panel for editing profile/projects
├── components/        # Sections (hero, about, projects, resume, contact...)
│   └── resume-pdf.js  # Downloadable PDF resume generator
└── lib/               # profile-data.js, firebase.js, firestore-service.js
public/
└── images/            # Assets (avatar, etc.)
```

## Content Management

Profile and project data live in `src/lib/profile-data.js` as a fallback. When Firebase is configured, `src/lib/firestore-service.js` reads the live profile from `site/profile` and projects from `projects` (ordered by `rank`), overriding the fallback. Edit content via the `/admin` panel or directly in the data files.

## Deployment

The site is deployed on Vercel. `vercel.json` adds security headers (`X-Content-Type-Options`, `Strict-Transport-Security`, `Referrer-Policy`, etc.) and cache headers for `sitemap.xml` and `robots.txt`. SEO support includes sitemap, robots.txt, Open Graph / Twitter card metadata, and Google Search Console verification.

## License

MIT © Elvis Bitolo Khanyanga
