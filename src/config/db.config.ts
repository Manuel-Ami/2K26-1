import dotnenv from 'dotenv';
dotnenv.config();

export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',} 