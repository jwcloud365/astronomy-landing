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
  title: "StarGaze - Explore the Cosmos | Astronomy App",
  description: "Discover the wonders of the night sky with StarGaze. Real-time star maps, AR guidance, celestial event notifications, and expert astronomy tools for stargazers worldwide.",
  keywords: "astronomy, stargazing, night sky, planets, constellations, meteor showers, star maps, AR astronomy, celestial events",
  authors: [{ name: "StarGaze Team" }],
  openGraph: {
    title: "StarGaze - Explore the Cosmos",
    description: "Discover the wonders of the night sky with real-time star maps, AR guidance, and celestial event notifications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "StarGaze - Explore the Cosmos",
    description: "Discover the wonders of the night sky with real-time star maps and AR guidance.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
