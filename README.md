# Ziane Auto

Premium car showroom website for Ziane Auto in Ain Touta, Batna, Algeria. Built as a clean demo with a black + gold theme, multi-language support, car listings, order flow, and Telegram notifications.

## Features
- Next.js App Router + TailwindCSS
- English, French, Arabic language toggle (RTL support for Arabic)
- Car listings with search and filters
- Car detail page with image carousel and local video
- Order form that posts to `/api/orders` and notifies Telegram
- Prisma schema for PostgreSQL (Supabase-ready)

## Tech Stack
- Frontend: Next.js, React, TailwindCSS
- Backend: Next.js API Routes
- Database: PostgreSQL (Prisma ORM)
- Media: Local `public/` folder (Cloudinary-ready)
- Messaging: Telegram Bot API

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Environment variables
Create a `.env` file:
```bash
cp .env.example .env
```
Then fill:
- `DATABASE_URL`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

### 3. Run Prisma
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Start dev server
```bash
npm run dev
```
Open `http://localhost:3000`.

## Order Flow
1. User fills order form
2. `POST /api/orders`
3. Order saved in database
4. Telegram bot sends notification to owner

## Roadmap Ideas
- Admin dashboard for inventory CRUD
- Cloudinary uploads
- Advanced filters and pagination
- SEO optimization

## License
Private demo for Ziane Auto.
