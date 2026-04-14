import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Affan Surya Wardana - Full-Stack Developer",
    description:
        "Portfolio of Affan Surya Wardana, a skilled full-stack programmer specializing in modern web technologies.",
    keywords: ["programmer", "developer", "react", "next.js", "typescript", "full-stack"],
    authors: [{ name: "Affan Surya Wardana" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} relative bg-slate-950 text-slate-100`}
            >
                {children}
            </body>
        </html>
    );
}
