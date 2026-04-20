import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";

const montserratHeading = Montserrat({subsets:['latin'],variable:'--font-heading'});
const poppins = Poppins({
  subsets: ['latin'], variable: '--font-poppins',
  weight: "100"
});
const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IDCODE Nigeria - Identity Verification and Access Control Solutions",
  description: "Identity Verification and Access Control Solutions for a Digital Age. IDCODE Nigeria offers cutting-edge solutions to help businesses build trust and security in the digital world. Our services include Access Code, Identity Code, and Product Code, designed to meet the evolving needs of modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0&display=optional"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${montserratHeading.variable} ${inter.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-body bg-white text-text-light transition-colors duration-300`}
      >
        <NavBar/>
        <div className="min-h-screen flex flex-col selection:bg-primary/30 bg-white">
          {/* Passing empty currentHash initially; will refactor Navbar to manage its own state */}
          <main className="grow">{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
