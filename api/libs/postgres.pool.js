const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5433,
  user: 'rey',
  password: 'admin123',
  database: 'my_store',
});

module.exports = pool;