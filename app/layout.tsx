import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheryians Coding School | Upgrading India's Coding Mindset",
  description: "Learn coding from scratch and build real-world products. Join our community of over 1 Million learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
