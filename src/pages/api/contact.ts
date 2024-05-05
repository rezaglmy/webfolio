import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import { AppConfig } from '@/utils/AppConfig';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  res.setHeader('Content-Type', 'application/json');

  const { name, email, message } = req.body;

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    transporter
      .sendMail({
        from: process.env.SMTP_SENDER_EMAIL,
        to: AppConfig.contact.email,
        subject: `Contact Message from ${name} - ${email}`,
        text: message,
        html: `<div>${message}</div>`,
      })
      .then((response) => {
        res
          .status(200)
          .json({ error: false, emailSent: true, errors: [], response });
        resolve(response);
      })
      .catch((error) => {
        res
          .status(500)
          .json({ error: true, emailSent: false, errors: [error] });
        reject(new Error(error));
      });
  });
}
