import nodemailer from 'nodemailer';
import { env } from './env.js';
import { ENV } from '../constants.js';

export const transporter = nodemailer.createTransport({
  host: env(ENV.SMTP_HOST),
  port: env(ENV.SMTP_PORT),
  secure: false,
  auth: {
    user: env(ENV.SMTP_USER),
    pass: env(ENV.SMTP_PASSWORD),
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};
