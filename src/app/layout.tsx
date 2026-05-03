import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAVARDT Elite | High-Performance Boilerplate",
  description: "Next.js 15 boilerplate focused on 100/100 Core Web Vitals and Elite Glassmorphism design. Built by Leonardo Tavares.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased bg-tavardt-dark text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
