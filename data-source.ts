import 'dotenv/config';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +(process.env.POSTGRES_PORT || 5432),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'lumo',
  entities: ['libs/core/src/entities/*.entity.{ts,js}'],
  migrations: ['libs/core/src/migrations/*.{ts,js}'],
  synchronize: false,
  logging: true,
});