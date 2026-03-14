require('dotenv').config({ path: '.env.local' })

const fs = require('fs')
const path = require('path')
const { Pool } = require('pg')
const { cars } = require('../data/cars')

const schemaPath = path.join(__dirname, '../db/schema.sql')
const schema = fs.readFileSync(schemaPath, 'utf8')

async function seed() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is missing in .env')
  }

  const connectionString = process.env.DATABASE_URL
  const needsSsl =
    connectionString.includes('supabase.com') ||
    connectionString.includes('pooler.supabase.com')

  const pool = new Pool({
    connectionString,
    ssl: needsSsl ? { rejectUnauthorized: false } : undefined
  })

  await pool.query(schema)
  await pool.query('DELETE FROM car_media')
  await pool.query('DELETE FROM cars')

  for (const car of cars) {
    await pool.query(
      `INSERT INTO cars (id, brand, model, year, price, description, available, rating, fuel, horsepower, torque, transmission, drivetrain, engine, mileage, seats)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,
      [
        car.id,
        car.brand,
        car.model,
        car.year,
        car.price,
        car.description,
        car.available,
        car.rating,
        car.specs.fuel,
        car.specs.horsepower,
        car.specs.torque,
        car.specs.transmission,
        car.specs.drivetrain,
        car.specs.engine,
        car.specs.mileage,
        car.specs.seats
      ]
    )

    for (const url of car.media) {
      await pool.query(
        'INSERT INTO car_media (car_id, url) VALUES ($1, $2)',
        [car.id, url]
      )
    }
  }

  await pool.end()
  console.log('Seed complete')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
