import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { email, phone, name, message, vehicle, year, fuel, service, region } = await request.json();

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
            text: `Un utilisateur à rempli le formulaire d'installation sur le site https://laboiteautomatique.com:
            \n\n Email: ${email}
            \n\n Téléphone: ${phone}
            \n\n Nom et prénom: ${name}
            \n\n Véhicule: ${vehicle}
            \n\n Année: ${year}
            \n\n Carburant: ${fuel}
            \n\n Service: ${service}
            \n\n Région: ${region}
            \n\n Message: ${message}`
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}
