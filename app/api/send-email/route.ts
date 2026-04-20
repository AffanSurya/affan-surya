import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Konfigurasi email transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function POST(request: NextRequest) {
    try {
        const { email, subject, message } = await request.json();

        // Validasi input
        if (!email || !subject || !message) {
            return NextResponse.json({ error: "Email, subject, dan message diperlukan" }, { status: 400 });
        }

        // Validasi email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Format email tidak valid" }, { status: 400 });
        }

        // Kirim email ke penerima (Affan)
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: process.env.EMAIL_TO_RECEIVE, // Email Affan
            subject: `New Contact: ${subject}`,
            html: `
                <h2>New Message from Website Portofolio</h2>
                <p><strong>From:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
            replyTo: email,
        });

        // Opsional: Kirim confirmation email ke pengirim
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: email,
            subject: "Message Received - Affan Surya",
            html: `
                <h2>Thank you for reaching out!</h2>
                <p>Hi,</p>
                <p>We received your message and will get back to you as soon as possible.</p>
                <p><strong>Your message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
                <p>Best regards,<br>Affan Surya Wardana</p>
            `,
        });

        return NextResponse.json({ success: true, message: "Email berhasil dikirim" }, { status: 200 });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json({ error: "Gagal mengirim email. Coba lagi nanti." }, { status: 500 });
    }
}
