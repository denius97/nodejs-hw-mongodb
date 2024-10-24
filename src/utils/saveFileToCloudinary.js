import { v2 as cloudinary } from 'cloudinary';
import { env } from './env.js';
import { CLOUDINARY } from '../constants.js';
import createHttpError from 'http-errors';
import fs from 'node:fs/promises';

cloudinary.config({
  secure: true,
  cloud_name: env(CLOUDINARY.CLOUD_NAME),
  api_key: env(CLOUDINARY.API_KEY),
  api_secret: env(CLOUDINARY.API_SECRET),
});

export const saveFileToCloudinary = async (file) => {
  const uploadResult = await cloudinary.uploader
    .upload(file.path)
    .catch((err) => {
      throw createHttpError(500, err);
    });

  await fs.unlink(file.path);
  return uploadResult.secure_url;
};
