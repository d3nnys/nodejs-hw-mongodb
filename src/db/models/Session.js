import { Schema, model } from 'mongoose';
import { handleSaveError } from './hooks.js';

const sessionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  accessTokenValidUntil: {
    type: Date,
    required: true,
  },
  refreshTokenValidUntil: {
    type: Date,
    required: true,
  },
});

sessionSchema.post('save', handleSaveError);

const SessionCollection = model('session', sessionSchema);

export default SessionCollection;
