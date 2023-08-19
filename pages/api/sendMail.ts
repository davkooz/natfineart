// pages/api/sendMail.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ReqBody {
  name: string;
  email: string;
  message: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body as ReqBody;

    // Create a transporter using your email configurations
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          type: 'OAuth2',
          user: 'klientnatalliafineart@gmail.com',
          clientId: '750766576923-gsjiem73fpjgm4q189fvg5i0va5l3ka1.apps.googleusercontent.com',
          clientSecret: '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',
          refreshToken: '1//04nqyvgCgog5ECgYIARAAGAQSNwF-L9IrUDKaalQjpIfXcQKcEucEbD5SFapKi69pRhJt3fZHdTD4-qck4Eh1lTYHgbgtvu72j8g'

      }
  });
    
  

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'natalliafineart@gmail.com', // Your email where you want to get the emails
      subject: `New Message from ${name} - ${email}`,
      text: message,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error while sending mail:", error); // Add this to see detailed error
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end();
  }
};
