import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundParticles from "@/components/BackgroundParticles";
import SocialSidebar from "@/components/SocialSidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Abdullah Tauqeer | Full-Stack Software Engineer",
  description: "Portfolio of Muhammad Abdullah Tauqeer, a software engineer focused on building scalable web systems, intelligent applications, and modern digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased bg-black text-white selection:bg-neon-green/30 font-sans`}
      >
        <SmoothScroll>
          <BackgroundParticles />
          <Navbar />
          <main className="relative z-10 w-full min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
