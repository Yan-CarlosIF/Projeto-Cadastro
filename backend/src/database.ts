import "dotenv/config";
import { Pool } from "pg";

const client = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export const query = (text: string, params?: any) => client.query(text, params);
