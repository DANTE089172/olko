import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OLKO — Strategic Sourcing. Intelligent Supply.",
    template: "%s — OLKO",
  },
  description:
    "OLKO is a modern procurement, sourcing and supply-chain intelligence company specialising in polymers, packaging, pharmaceutical and industrial materials.",
  metadataBase: new URL("https://www.olko.com.au"),
  openGraph: {
    title: "OLKO — Strategic Sourcing. Intelligent Supply.",
    description:
      "Procurement, sourcing and supply intelligence for polymers, pharmaceutical and industrial materials.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
