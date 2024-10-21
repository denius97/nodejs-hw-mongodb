import path from 'node:path';

export const TIME = {
  FIFTEEN_MINUTES: 15 * 60 * 1000,
  THIRTY_DAYS: 24 * 60 * 60 * 1000 * 30,
};

export const ENV = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
  APP_DOMAIN: 'APP_DOMAIN',
  JWT_SECRET: 'JWT_SECRET',
  LOCAL_DOMAIN: 'LOCAL_DOMAIN',
};

export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
  USE_CLOUDINARY: 'USE_CLOUDINARY',
};

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'src', 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'src', 'uploads');
