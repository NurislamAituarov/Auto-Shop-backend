import pkg from 'pg';
const { Pool } = pkg;

const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
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
