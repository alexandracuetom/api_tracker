import { config } from 'dotenv';

//config({path: '.env'}); old version
config( { path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { PORT, NODE_ENV, DB_URI } = process.env; //ACCESS FROM ENVIRONMENT VARIABLE
