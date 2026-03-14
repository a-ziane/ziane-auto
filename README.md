# Ziane Auto (Express + Supabase)

Ziane Auto is a premium car showroom website for Ain Touta, Batna, Algeria. This version uses Express + EJS with a Supabase PostgreSQL database.

## Features
- Express server with EJS templates
- English, French, Arabic language toggle (RTL support)
- Car listings with search and filters
- Car detail page with image slider and specs
- Order confirmation page
- Telegram order notifications (optional)
- Supabase PostgreSQL storage for cars and media

## Tech Stack
- Backend: Express
- Templates: EJS
- Database: Supabase (PostgreSQL)
- Styling: Custom CSS

## Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Environment variables
Create a `.env.local` file and set:
- `DATABASE_URL`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

### 3) Create tables + seed data
```bash
npm run seed
```

### 4) Start the server
```bash
npm run dev
```
Open `http://localhost:3000`.

## Media
Put your images in:
```
public/cars
```
The seed script stores those URLs in the database as `/cars/...`.

## Notes
All car data comes from `data/cars.js` and is seeded into Supabase.
