const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection configuration
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_NAME || 'webapp',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
});

// Middleware to check DB connection
app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'OK', database: 'Connected', time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: 'ERROR', database: 'Disconnected', error: err.message });
  }
});

app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from the Backend!',
    timestamp: new Date().toISOString(),
    features: ['CI/CD', 'Docker', 'Nginx Proxy', 'Multi-tier']
  });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
