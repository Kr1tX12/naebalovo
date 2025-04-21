import type { Metadata } from "next";
import { Inter, Dela_Gothic_One } from "next/font/google";
import "@/shared/styles/globals.css";
import Navbar from "@/features/navbar";
import { Providers } from "@/shared/components/providers";
import { NAVBAR_HEIGHT } from "@/shared/constants/constants";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const delaGothicOne = Dela_Gothic_One({
  subsets: ["latin", "cyrillic"],
  variable: "--font-dela-gothic-one",
  weight: "400",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${delaGothicOne.variable} ${inter.className} antialiased`}
      >
        <Providers>
          <Navbar />
          <main style={{ marginTop: NAVBAR_HEIGHT }}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
