import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWraper from "@/components/SessionWraper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai",
  description: "This website is for chai lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white "
      >
        <SessionWraper>
          <Navbar />
          <div className="pb-8">
            {children}
          </div>
          <Footer />
        </SessionWraper>
      </body>
    </html>
  );
}
