import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, phone, name, message, category } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAILFROM,
        pass: process.env.PASSWORDMAIL,
      },
    });

    const mailOptions = {
      from: process.env.EMAILFROM,
      to: 'contact@laboiteautomatique.com',
      subject: 'Nouveau message de la boîte automatique',
      text: `Un utilisateur à rempli le formulaire de contact sur le site https://laboiteautomatique.com :\n\nEmail: ${email}\n\nTéléphone: ${phone}\n\nNom et prénom: ${name}\n\nCatégorie: ${category}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
  }
}
