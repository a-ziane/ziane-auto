# Ziane Auto (Express)

Ziane Auto is a premium car showroom website for Ain Touta, Batna, Algeria. This version uses Express + EJS for fast local development and simple deployment.

## Features
- Express server with EJS templates
- English, French, Arabic language toggle (RTL support)
- Car listings with search and filters
- Car detail page with specs and order form
- Telegram order notifications (optional)

## Tech Stack
- Backend: Express
- Templates: EJS
- Styling: Custom CSS
- Media: Local `public/` folder

## Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Environment variables
Create a `.env` file and set:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

### 3) Start the server
```bash
npm run dev
```
Open `http://localhost:3000`.

## Media
Put your images here:
```
public/cars
```

## Notes
This demo stores car data in `data/cars.js`. If you want a database later, we can add PostgreSQL and Prisma.
