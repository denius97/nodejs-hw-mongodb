import { model, Schema } from 'mongoose';
import { UsersCollection } from './user.js';

const sessionsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: UsersCollection,
      required: true,
    },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
    accessTokenValidUntil: { type: Date, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const SessionsCollection = model('sessions', sessionsSchema);
