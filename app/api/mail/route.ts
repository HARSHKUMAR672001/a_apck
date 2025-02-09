import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Read the request body only once

    const { name, phone, date, destination, message } = body;

    // Check if all required fields are present
    if (!name || !phone || !date || !destination || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.MAIL_HOST,
      to: process.env.MAIL_FOR || 'harshkumar672001@gmail.com',
      subject: 'New Form Submission',
      text: `Hello A Pack Packers and Movers,

A new form has been submitted on Apack Movers. Here are the details:

Name: ${name}
Phone: ${phone}
Moving Date: ${date}
Destination: ${destination}
Message: ${message}

Regards,
A Pack Packers and Movers.`,
    };
    await transporter.sendMail(mailOptions);




    return NextResponse.json(
      { message: 'Email sent successfully!', data: body },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Failed to process request.', error: error.message },
      { status: 500 }
    );
  }
}
