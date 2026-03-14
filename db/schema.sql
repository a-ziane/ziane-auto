CREATE TABLE IF NOT EXISTS cars (
  id TEXT PRIMARY KEY,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT NOT NULL,
  price TEXT NOT NULL,
  description TEXT NOT NULL,
  available BOOLEAN NOT NULL DEFAULT TRUE,
  rating NUMERIC NOT NULL DEFAULT 4.5,
  fuel TEXT NOT NULL,
  horsepower TEXT NOT NULL,
  torque TEXT NOT NULL,
  transmission TEXT NOT NULL,
  drivetrain TEXT NOT NULL,
  engine TEXT NOT NULL,
  mileage TEXT NOT NULL,
  seats TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS car_media (
  id SERIAL PRIMARY KEY,
  car_id TEXT NOT NULL REFERENCES cars(id) ON DELETE CASCADE,
  url TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  car_id TEXT,
  car_name TEXT,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
