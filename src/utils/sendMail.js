import nodemailer from 'nodemailer';
import { SMTP } from '../constants/index.js';
import { env } from '../utils/env.js';

const transporter = nodemailer.createTransport({
  host: env(SMTP.SMTP_HOST),
  port: Number(env(SMTP.SMTP_PORT)),
  auth: {
    secure: true,
    user: env(SMTP.SMTP_USER),
    pass: env(SMTP.SMTP_PASSWORD),
  },
});

export const sendEmail = async (options) => {
  try {
    const info = await transporter.sendMail(options);
    console.log('Email sent:', info);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
