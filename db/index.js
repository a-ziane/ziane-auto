const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

const mapCar = (row) => ({
  id: row.id,
  brand: row.brand,
  model: row.model,
  year: row.year,
  price: row.price,
  description: row.description,
  available: row.available,
  rating: Number(row.rating),
  media: row.media || [],
  specs: {
    fuel: row.fuel,
    horsepower: row.horsepower,
    torque: row.torque,
    transmission: row.transmission,
    drivetrain: row.drivetrain,
    engine: row.engine,
    mileage: row.mileage,
    seats: row.seats
  }
})

async function getCars() {
  const result = await pool.query(
    `SELECT c.*, COALESCE(json_agg(m.url ORDER BY m.id) FILTER (WHERE m.url IS NOT NULL), '[]') AS media
     FROM cars c
     LEFT JOIN car_media m ON m.car_id = c.id
     GROUP BY c.id
     ORDER BY c.id`
  )
  return result.rows.map(mapCar)
}

async function getCarById(id) {
  const result = await pool.query(
    `SELECT c.*, COALESCE(json_agg(m.url ORDER BY m.id) FILTER (WHERE m.url IS NOT NULL), '[]') AS media
     FROM cars c
     LEFT JOIN car_media m ON m.car_id = c.id
     WHERE c.id = $1
     GROUP BY c.id`,
    [id]
  )
  if (!result.rows.length) return null
  return mapCar(result.rows[0])
}

async function createOrder(order) {
  const result = await pool.query(
    `INSERT INTO orders (car_id, car_name, customer_name, phone, message)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id`,
    [order.carId, order.carName, order.customerName, order.phone, order.message]
  )
  return result.rows[0]
}

module.exports = { pool, getCars, getCarById, createOrder }
