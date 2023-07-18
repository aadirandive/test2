import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  async sendContactForm(
    name: string,
    email: string,
    contact1: string,
    message: string,
  ): Promise<void> {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',

      port: 465,
      secure: true,
      auth: {
        user: `prajaktapednekar@kairavistudios.com`,
        pass: `upjkesfohqvjqhom`,
      },
    });

    const mailOptions = {
      from: `prajaktapednekar@kairavistudios.com`,

      to: 'mangeshpednekar@kairavistudios.com',
      subject: 'Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Contact: ${contact1}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
  }
}
