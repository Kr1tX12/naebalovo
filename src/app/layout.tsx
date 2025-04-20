import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  variable: "--rubik",
});

export const metadata: Metadata = {
  title: "Наебалово",
  description: "Это лучший сайт для поиска достоверной информации обо всём",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
