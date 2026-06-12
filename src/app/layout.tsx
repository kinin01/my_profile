import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiningu Stephen — Software Engineer & SaaS Architect",
  description:
    "Software Engineer, SaaS Architect, and Founder of HippoTech Edge. Creator of KIKO PMS — advancing digital transformation across Africa.",
  keywords: [
    "Kiningu Stephen",
    "Software Engineer",
    "SaaS Architect",
    "HippoTech Edge",
    "KIKO PMS",
    "Digital Transformation",
    "Kenya",
    "PropTech",
  ],
  authors: [{ name: "Kiningu Stephen", url: "https://www.kiko-pms.com" }],
  openGraph: {
    title: "Kiningu Stephen — Software Engineer & SaaS Architect",
    description:
      "Founder of HippoTech Edge. Creator of KIKO PMS. Building scalable cloud-native platforms across Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable}`}
    >
      <body
        className="antialiased bg-white font-body"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
