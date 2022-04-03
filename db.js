import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'auto_shop',
});

export default pool;
