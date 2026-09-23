import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://nagari-lambah.vercel.app"),
  title: {
    default: "Website Resmi Nagari Lambah",
    template: "%s | Nagari Lambah",
  },
  description:
    "Website resmi Pemerintah Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam, Sumatera Barat. Informasi pemerintahan, pelayanan publik, PPID, berita, kegiatan dan galeri nagari.",
  keywords: [
    "Nagari Lambah",
    "Pemerintah Nagari Lambah",
    "Ampek Angkek",
    "Kabupaten Agam",
    "Sumatera Barat",
    "PPID Nagari Lambah",
    "pelayanan publik Nagari Lambah",
  ],
  authors: [{ name: "Pemerintah Nagari Lambah" }],
  creator: "Pemerintah Nagari Lambah",
  publisher: "Pemerintah Nagari Lambah",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Nagari Lambah",
    title: "Website Resmi Nagari Lambah",
    description:
      "Portal informasi, pelayanan publik dan keterbukaan informasi Pemerintah Nagari Lambah, Kecamatan Ampek Angkek, Kabupaten Agam.",
    images: [
      {
        url: "/image/kantor-nagari-lambah.png",
        width: 1200,
        height: 630,
        alt: "Pemerintah Nagari Lambah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Resmi Nagari Lambah",
    description:
      "Portal informasi dan pelayanan publik Pemerintah Nagari Lambah.",
    images: ["/image/kantor-nagari-lambah.png"],
  },
  icons: {
    icon: "/image/logo-agam.png",
    apple: "/image/logo-agam.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#082f57",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
