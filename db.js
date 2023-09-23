import pkg from 'pg';
const { Pool } = pkg;

const poolConfig = process.env.POSTGRES_URL
  ? {
      connectionString: process.env.POSTGRES_URL + '?sslmode=require',
    }
  : {
      user: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'auto_shop',
    };

const pool = new Pool(poolConfig);

export default pool;
