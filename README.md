# BusinessOS

**All-in-one business operating system for Bangladesh** — products, inventory, orders, customers, POS, payments, warehouses, packaging, QR verification, courier, delivery, returns, finance, marketing, analytics and AI unified into a single business core.

`Online · Offline / POS · Omnichannel · Multi-tenant SaaS · AI-driven`

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-planned-e0234e)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-planned-4169e1?logo=postgresql&logoColor=white)

---

## About

BusinessOS connects every part of a business — no matter where a sale happens (Facebook, Messenger, WhatsApp, website, phone, physical shop) — into **one central order engine**, one inventory ledger, one customer profile and one financial truth. A multi-tenant SaaS platform where every business operates in a fully isolated workspace.

Full workflow documentation lives in [`BusinessOS-Architecture.md`](BusinessOS-Architecture.md).

## Core Modules

| Area | Modules |
|---|---|
| **Sales** | Central order engine, POS, customer lifecycle & segmentation |
| **Catalog** | Products, inventory states, multi-warehouse / branches, suppliers & purchases |
| **Operations** | QR packaging & verification, courier abstraction layer, returns & policy engine |
| **Money** | Payment workflows (online + COD settlement), finance engine |
| **Growth** | Marketing campaigns, coupons, analytics, AI business engine & assistant |
| **Platform** | Employees & roles with audit log, notifications, reporting, subscriptions, admin panel |

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4, React Router, TanStack Query, Zustand |
| Backend | Node.js, TypeScript, NestJS |
| Database | PostgreSQL + Prisma ORM |
| Cache / Queues | Redis, BullMQ |
| AI Service | Python / FastAPI |
| Integrations | Payment gateways, courier APIs, Meta APIs, SMS/Email APIs |

## Project Structure

```
BusinessOs_Project/
├── frontend/            # React SPA (active development)
│   └── src/
│       ├── api/         # HTTP client (auth header, error handling)
│       ├── components/  # layout, guards, common UI, WebGL background
│       ├── features/    # 22 domain modules (dashboard, orders, POS, ...)
│       │   ├── landing/ # marketing homepage (hero, pricing, footer)
│       │   ├── solutions/ # interactive solutions page
│       │   ├── auth/    # login / register
│       │   └── ...
│       ├── routes/      # route tree + guards wiring
│       ├── stores/      # Zustand stores (auth session, UI state)
│       └── types/       # shared domain types
├── backend/             # NestJS API (planned next)
├── ai/                  # Python FastAPI service (planned)
├── BusinessOS-Architecture.md
└── BUSINESSOS-STACK.txt
```

## Getting Started

### Prerequisites

- Node.js 20+ (developed on 22)
- npm 10+

### Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

> **Note:** Authentication and subscription activation currently run in demo mode (local session only). The backend will replace these with real JWT-based flows.

### Production build

```bash
cd frontend
npm run build
npm run preview
```

## Screenshots

![Homepage](Homepage.png)

## Roadmap

- [x] Landing page (hero, architecture visual, pricing)
- [x] Interactive solutions page
- [x] Auth + subscription-gated dashboard routing
- [x] 22 module scaffolds wired to routes
- [ ] Backend API (NestJS + Prisma + PostgreSQL)
- [ ] Real authentication (JWT) & tenant workspaces
- [ ] Orders / inventory / POS module implementations
- [ ] Courier & payment gateway integrations (BD providers)
- [ ] AI business engine (FastAPI)
- [ ] Platform admin panel

## Contributing

This project is in early active development. Module designs land incrementally — see `BusinessOS-Architecture.md` for the full system blueprint before contributing.
