import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shahi Solutions | Premium End-to-End Digital Solutions",
  description: "Accelerate your digital transformation with Shahi Solutions. We deliver custom software development, high-end web & mobile apps, UI/UX design, cloud services, ERP & CRM solutions, and digital marketing to empower your business.",
  keywords: [
    "Shahi Solutions",
    "Digital Transformation",
    "Website Development",
    "Custom Software Development",
    "Mobile App Development",
    "UI/UX Design",
    "ERP and CRM Solutions",
    "Business Automation",
    "Cloud Services",
    "Digital Marketing",
    "SaaS Development"
  ],
  authors: [{ name: "Shahi Solutions Team" }],
  openGraph: {
    title: "Shahi Solutions | Premium End-to-End Digital Solutions",
    description: "Empowering businesses with custom software, mobile apps, web development, cloud solutions, and business automation.",
    type: "website",
    locale: "en_US",
    siteName: "Shahi Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahi Solutions | Premium End-to-End Digital Solutions",
    description: "Empowering businesses with custom software, mobile apps, web development, cloud solutions, and business automation.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
